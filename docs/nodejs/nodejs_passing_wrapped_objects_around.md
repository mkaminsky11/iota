## Passing wrapped objects around

## 

In addition to wrapping and returning C++ objects, you can pass them around
by unwrapping them with Node's `node::ObjectWrap::Unwrap` helper function.
In the following `addon.cc` we introduce a function `add()` that can take on two
`MyObject` objects:

    // addon.cc
    #include <node.h>
    #include <node_object_wrap.h>
    #include "myobject.h"
    
    using namespace v8;
    
    void CreateObject(const FunctionCallbackInfo<Value>& args) {
      Isolate* isolate = Isolate::GetCurrent();
      HandleScope scope(isolate);
      MyObject::NewInstance(args);
    }
    
    void Add(const FunctionCallbackInfo<Value>& args) {
      Isolate* isolate = Isolate::GetCurrent();
      HandleScope scope(isolate);
    
      MyObject* obj1 = node::ObjectWrap::Unwrap<MyObject>(
          args[0]->ToObject());
      MyObject* obj2 = node::ObjectWrap::Unwrap<MyObject>(
          args[1]->ToObject());
    
      double sum = obj1->value() + obj2->value();
      args.GetReturnValue().Set(Number::New(isolate, sum));
    }
    
    void InitAll(Handle<Object> exports) {
      MyObject::Init();
    
      NODE_SET_METHOD(exports, "createObject", CreateObject);
      NODE_SET_METHOD(exports, "add", Add);
    }
    
    NODE_MODULE(addon, InitAll)

To make things interesting we introduce a public method in `myobject.h` so we
can probe private values after unwrapping the object:

    // myobject.h
    #ifndef MYOBJECT_H
    #define MYOBJECT_H
    
    #include <node.h>
    #include <node_object_wrap.h>
    
    class MyObject : public node::ObjectWrap {
     public:
      static void Init();
      static void NewInstance(const v8::FunctionCallbackInfo<v8::Value>& args);
      inline double value() const { return value_; }
    
     private:
      explicit MyObject(double value = 0);
      ~MyObject();
    
      static void New(const v8::FunctionCallbackInfo<v8::Value>& args);
      static v8::Persistent<v8::Function> constructor;
      double value_;
    };
    
    #endif

The implementation of `myobject.cc` is similar as before:

    // myobject.cc
    #include <node.h>
    #include "myobject.h"
    
    using namespace v8;
    
    Persistent<Function> MyObject::constructor;
    
    MyObject::MyObject(double value) : value_(value) {
    }
    
    MyObject::~MyObject() {
    }
    
    void MyObject::Init() {
      Isolate* isolate = Isolate::GetCurrent();
    
      // Prepare constructor template
      Local<FunctionTemplate> tpl = FunctionTemplate::New(isolate, New);
      tpl->SetClassName(String::NewFromUtf8(isolate, "MyObject"));
      tpl->InstanceTemplate()->SetInternalFieldCount(1);
    
      constructor.Reset(isolate, tpl->GetFunction());
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
    
    void MyObject::NewInstance(const FunctionCallbackInfo<Value>& args) {
      Isolate* isolate = Isolate::GetCurrent();
      HandleScope scope(isolate);
    
      const unsigned argc = 1;
      Handle<Value> argv[argc] = { args[0] };
      Local<Function> cons = Local<Function>::New(isolate, constructor);
      Local<Object> instance = cons->NewInstance(argc, argv);
    
      args.GetReturnValue().Set(instance);
    }

Test it with:

    // test.js
    var addon = require('./build/Release/addon');
    
    var obj1 = addon.createObject(10);
    var obj2 = addon.createObject(20);
    var result = addon.add(obj1, obj2);
    
    console.log(result); // 30