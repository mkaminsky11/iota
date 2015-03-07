## Function arguments

## 

The following pattern illustrates how to read arguments from JavaScript
function calls and return a result. This is the main and only needed source
`addon.cc`:

    // addon.cc
    #include <node.h>
    
    using namespace v8;
    
    void Add(const FunctionCallbackInfo<Value>& args) {
      Isolate* isolate = Isolate::GetCurrent();
      HandleScope scope(isolate);
    
      if (args.Length() < 2) {
        isolate->ThrowException(Exception::TypeError(
            String::NewFromUtf8(isolate, "Wrong number of arguments")));
        return;
      }
    
      if (!args[0]->IsNumber() || !args[1]->IsNumber()) {
        isolate->ThrowException(Exception::TypeError(
            String::NewFromUtf8(isolate, "Wrong arguments")));
        return;
      }
    
      double value = args[0]->NumberValue() + args[1]->NumberValue();
      Local<Number> num = Number::New(isolate, value);
    
      args.GetReturnValue().Set(num);
    }
    
    void Init(Handle<Object> exports) {
      NODE_SET_METHOD(exports, "add", Add);
    }
    
    NODE_MODULE(addon, Init)

You can test it with the following JavaScript snippet:

    // test.js
    var addon = require('./build/Release/addon');
    
    console.log( 'This should be eight:', addon.add(3,5) );