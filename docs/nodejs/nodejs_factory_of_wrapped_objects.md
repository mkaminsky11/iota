## Factory of wrapped objects

## 

This is useful when you want to be able to create native objects without
explicitly instantiating them with the `new` operator in JavaScript, e.g.

    var obj = addon.createObject();
    // instead of:
    // var obj = new addon.Object();

Let's register our `createObject` method in `addon.cc`:

    // addon.cc
    #include <node.h>
    #include "myobject.h"
    
    using namespace v8;
    
    void CreateObject(const FunctionCallbackInfo<Value>& args) {
      Isolate* isolate = Isolate::GetCurrent();
      HandleScope scope(isolate);
      MyObject::NewInstance(args);
    }
    
    void InitAll(Handle<Object> exports, Handle<Object> module) {
      MyObject::Init();
    
      NODE_SET_METHOD(module, "exports", CreateObject);
    }
    
    NODE_MODULE(addon, InitAll)

In `myobject.h` we now introduce the static method `NewInstance` that takes
care of instantiating the object (i.e. it does the job of `new` in JavaScript):

    // myobject.h
    #ifndef MYOBJECT_H
    #define MYOBJECT_H
    
    #include <node.h>
    #include <node_object_wrap.h>
    
    class MyObject : public node::ObjectWrap {
     public:
      static void Init();
      static void NewInstance(const v8::FunctionCallbackInfo<v8::Value>& args);
    
     private:
      explicit MyObject(double value = 0);
      ~MyObject();
    
      static void New(const v8::FunctionCallbackInfo<v8::Value>& args);
      static void PlusOne(const v8::FunctionCallbackInfo<v8::Value>& args);
      static v8::Persistent<v8::Function> constructor;
      double value_;
    };
    
    #endif

The implementation is similar to the above in `myobject.cc`:

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
    
      // Prototype
      NODE_SET_PROTOTYPE_METHOD(tpl, "plusOne", PlusOne);
    
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
    
    void MyObject::PlusOne(const FunctionCallbackInfo<Value>& args) {
      Isolate* isolate = Isolate::GetCurrent();
      HandleScope scope(isolate);
    
      MyObject* obj = ObjectWrap::Unwrap<MyObject>(args.Holder());
      obj->value_ += 1;
    
      args.GetReturnValue().Set(Number::New(isolate, obj->value_));
    }

Test it with:

    // test.js
    var createObject = require('./build/Release/addon');
    
    var obj = createObject(10);
    console.log( obj.plusOne() ); // 11
    console.log( obj.plusOne() ); // 12
    console.log( obj.plusOne() ); // 13
    
    var obj2 = createObject(20);
    console.log( obj2.plusOne() ); // 21
    console.log( obj2.plusOne() ); // 22
    console.log( obj2.plusOne() ); // 23