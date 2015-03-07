## Hello world

## 

To get started let's make a small Addon which is the C++ equivalent of
the following JavaScript code:

    module.exports.hello = function() { return 'world'; };

First we create a file `hello.cc`:

    // hello.cc
    #include <node.h>
    
    using namespace v8;
    
    void Method(const FunctionCallbackInfo<Value>& args) {
      Isolate* isolate = Isolate::GetCurrent();
      HandleScope scope(isolate);
      args.GetReturnValue().Set(String::NewFromUtf8(isolate, "world"));
    }
    
    void init(Handle<Object> exports) {
      NODE_SET_METHOD(exports, "hello", Method);
    }
    
    NODE_MODULE(addon, init)

Note that all Node addons must export an initialization function:

    void Initialize (Handle<Object> exports);
    NODE_MODULE(module_name, Initialize)

There is no semi-colon after `NODE_MODULE` as it's not a function (see
`node.h`).

The `module_name` needs to match the filename of the final binary (minus the
.node suffix).

The source code needs to be built into `addon.node`, the binary Addon. To
do this we create a file called `binding.gyp` which describes the configuration
to build your module in a JSON-like format. This file gets compiled by
[node-gyp][0].

    {
      "targets": [
        {
          "target_name": "addon",
          "sources": [ "hello.cc" ]
        }
      ]
    }

The next step is to generate the appropriate project build files for the
current platform. Use `node-gyp configure` for that.

Now you will have either a `Makefile` (on Unix platforms) or a `vcxproj` file
(on Windows) in the `build/` directory. Next invoke the `node-gyp build`
command.

Now you have your compiled `.node` bindings file! The compiled bindings end up
in `build/Release/`.

You can now use the binary addon in a Node project `hello.js` by pointing
`require` to the recently built `hello.node` module:

    // hello.js
    var addon = require('./build/Release/addon');
    
    console.log(addon.hello()); // 'world'

Please see patterns below for further information or

[https://github.com/arturadib/node-qt][1] for an example in production.


[0]: https://github.com/TooTallNate/node-gyp
[1]: https://github.com/arturadib/node-qt