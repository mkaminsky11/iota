## Function factory

## 

This pattern illustrates how to create and return a JavaScript function that
wraps a C++ function:

    // addon.cc
    #include <node.h>
    
    using namespace v8;
    
    void MyFunction(const FunctionCallbackInfo<Value>& args) {
      Isolate* isolate = Isolate::GetCurrent();
      HandleScope scope(isolate);
      args.GetReturnValue().Set(String::NewFromUtf8(isolate, "hello world"));
    }
    
    void CreateFunction(const FunctionCallbackInfo<Value>& args) {
      Isolate* isolate = Isolate::GetCurrent();
      HandleScope scope(isolate);
    
      Local<FunctionTemplate> tpl = FunctionTemplate::New(isolate, MyFunction);
      Local<Function> fn = tpl->GetFunction();
    
      // omit this to make it anonymous
      fn->SetName(String::NewFromUtf8(isolate, "theFunction"));
    
      args.GetReturnValue().Set(fn);
    }
    
    void Init(Handle<Object> exports, Handle<Object> module) {
      NODE_SET_METHOD(module, "exports", CreateFunction);
    }
    
    NODE_MODULE(addon, Init)

To test:

    // test.js
    var addon = require('./build/Release/addon');
    
    var fn = addon();
    console.log(fn()); // 'hello world'