## script.runInThisContext(\[options\])

## 

Similar to `vm.runInThisContext` but a method of a precompiled `Script` object.
`script.runInThisContext` runs `script`'s compiled code and returns the result.
Running code does not have access to local scope, but does have access to the
current `global` object.

Example of using `script.runInThisContext` to compile code once and run it
multiple times:

    var vm = require('vm');
    
    global.globalVar = 0;
    
    var script = new vm.Script('globalVar += 1', { filename: 'myfile.vm' });
    
    for (var i = 0; i < 1000; ++i) {
      script.runInThisContext();
    }
    
    console.log(globalVar);
    
    // 1000

The options for running a script are:

* `displayErrors`: whether or not to print any runtime errors to stderr, with
the line of code that caused them highlighted, before throwing an exception.
Applies only to runtime errors executing the code; it is impossible to create
a `Script` instance with syntax errors, as the constructor will throw.
* `timeout`: a number of milliseconds to execute the script before terminating
execution. If execution is terminated, an `Error` will be thrown.