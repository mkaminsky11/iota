## Wrapping C++ objects

## 

Here we will create a wrapper for a C++ object/class `MyObject` that can be
instantiated in JavaScript through the `new` operator. First prepare the main
module `addon.cc`:

    // addon.cc
    #include <node.h>
    #include "myobject.h"
    
    using namespace v8;
    
    void InitAll(Handle<Object> exports) {
      MyObject::Init(exports);
    }
    
    NODE_MODULE(addon, InitAll)

Then in `myobject.h` make your wrapper inherit from `node::ObjectWrap`:

    // myobject.h
    #ifndef MYOBJECT_H
    #define MYOBJECT_H
    
    #include <node.h>
    #include <node_object_wrap.h>
    
    class MyObject : public node::ObjectWrap {
     public:
      static void Init(v8::Handle<v8::Object> exports);
    
     private:
      explicit MyObject(double value = 0);
      ~MyObject();
    
      static void New(const v8::FunctionCallbackInfo<v8::Value>& args);
      static void PlusOne(const v8::FunctionCallbackInfo<v8::Value>& args);
      static v8::Persistent<v8::Function> constructor;
      double value_;
    };
    
    #endif

And in `myobject.cc` implement the various methods that you want to expose.
Here we expose the method `plusOne` by adding it to the constructor's
prototype:

    // myobject.cc
    #include "myobject.h"
    
    using namespace v8;
    
    Persistent<Function> MyObject::constructor;
    
    MyObject::MyObject(double value) : value_(value) {
    }
    
    MyObject::~MyObject() {
    }
    
    void MyObject::Init(Handle<Object> exports) {
      Isolate* isolate = Isolate::GetCurrent();
    
      // Prepare constructor template
      Local<FunctionTemplate> tpl = FunctionTemplate::New(isolate, New);
      tpl->SetClassName(String::NewFromUtf8(isolate, "MyObject"));
      tpl->InstanceTemplate()->SetInternalFieldCount(1);
    
      // Prototype
      NODE_SET_PROTOTYPE_METHOD(tpl, "plusOne", PlusOne);
    
      constructor.Reset(isolate, tpl->GetFunction());
      exports->Set(String::NewFromUtf8(isolate, "MyObject"),
                   tpl->GetFunction());
    }
    
    void MyObject::New(const FunctionCallbackInfo<Value>& args) {
      Isolate* isolate = Isolate::GetCurrent();
      HandleScope scope(isolate);
    
      if (args.IsConstructCall()) {
        // Invoked as constructor: `new MyObject(...)`
        double value = args[0]->IsUndefined() ? 0 : args[0]->NumberValue();
        MyObject* obj = new MyObject(value);
        obj->Wrap(args.This());
        args.GetReturnValue().Set(args.This());
      } else {
        // Invoked as plain function `MyObject(...)`, turn into construct call.
        const int argc = 1;
        Local<Value> argv[argc] = { args[0] };
        Local<Function> cons = Local<Function>::New(isolate, constructor);
        args.GetReturnValue().Set(cons->NewInstance(argc, argv));
      }
    }
    
    void MyObject::PlusOne(const FunctionCallbackInfo<Value>& args) {
      Isolate* isolate = Isolate::GetCurrent();
      HandleScope scope(isolate);
    
      MyObject* obj = ObjectWrap::Unwrap<MyObject>(args.Holder());
      obj->value_ += 1;
    
      args.GetReturnValue().Set(Number::New(isolate, obj->value_));
    }

Test it with:

    // test.js
    var addon = require('./build/Release/addon');
    
    var obj = new addon.MyObject(10);
    console.log( obj.plusOne() ); // 11
    console.log( obj.plusOne() ); // 12
    console.log( obj.plusOne() ); // 13