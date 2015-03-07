## vm.runInDebugContext(code)

## 

`vm.runInDebugContext` compiles and executes `code` inside the V8 debug context.
The primary use case is to get access to the V8 debug object:

    var Debug = vm.runInDebugContext('Debug');
    Debug.scripts().forEach(function(script) { console.log(script.name); });

Note that the debug context and object are intrinsically tied to V8's debugger
implementation and may change (or even get removed) without prior warning.

The debug object can also be exposed with the `--expose_debug_as=` switch.