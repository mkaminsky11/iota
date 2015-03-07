## Callbacks

## 

You can pass JavaScript functions to a C++ function and execute them from
there. Here's `addon.cc`:

    // addon.cc
    #include <node.h>
    
    using namespace v8;
    
    void RunCallback(const FunctionCallbackInfo<Value>& args) {
      Isolate* isolate = Isolate::GetCurrent();
      HandleScope scope(isolate);
    
      Local<Function> cb = Local<Function>::Cast(args[0]);
      const unsigned argc = 1;
      Local<Value> argv[argc] = { String::NewFromUtf8(isolate, "hello world") };
      cb->Call(isolate->GetCurrentContext()->Global(), argc, argv);
    }
    
    void Init(Handle<Object> exports, Handle<Object> module) {
      NODE_SET_METHOD(module, "exports", RunCallback);
    }
    
    NODE_MODULE(addon, Init)

Note that this example uses a two-argument form of `Init()` that receives
the full `module` object as the second argument. This allows the addon
to completely overwrite `exports` with a single function instead of
adding the function as a property of `exports`.

To test it run the following JavaScript snippet:

    // test.js
    var addon = require('./build/Release/addon');
    
    addon(function(msg){
      console.log(msg); // 'hello world'
    });