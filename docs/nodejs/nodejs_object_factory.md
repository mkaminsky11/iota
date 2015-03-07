## Object factory

## 

You can create and return new objects from within a C++ function with this
`addon.cc` pattern, which returns an object with property `msg` that echoes
the string passed to `createObject()`:

    // addon.cc
    #include <node.h>
    
    using namespace v8;
    
    void CreateObject(const FunctionCallbackInfo<Value>& args) {
      Isolate* isolate = Isolate::GetCurrent();
      HandleScope scope(isolate);
    
      Local<Object> obj = Object::New(isolate);
      obj->Set(String::NewFromUtf8(isolate, "msg"), args[0]->ToString());
    
      args.GetReturnValue().Set(obj);
    }
    
    void Init(Handle<Object> exports, Handle<Object> module) {
      NODE_SET_METHOD(module, "exports", CreateObject);
    }
    
    NODE_MODULE(addon, Init)

To test it in JavaScript:

    // test.js
    var addon = require('./build/Release/addon');
    
    var obj1 = addon('hello');
    var obj2 = addon('world');
    console.log(obj1.msg+' '+obj2.msg); // 'hello world'