## script.runInNewContext(\[sandbox\]\[, options\])

## 

Similar to `vm.runInNewContext` but a method of a precompiled `Script` object.
`script.runInNewContext` contextifies `sandbox` if passed or creates a new
contextified sandbox if it's omitted, and then runs `script`'s compiled code
with the sandbox as the global object and returns the result. Running code does
not have access to local scope.

`script.runInNewContext` takes the same options as `script.runInThisContext`.

Example: compile code that sets a global variable, then execute the code
multiple times in different contexts. These globals are set on and contained in
the sandboxes.

    var util = require('util');
    var vm = require('vm');
    
    var sandboxes = [{}, {}, {}];
    
    var script = new vm.Script('globalVar = "set"');
    
    sandboxes.forEach(function (sandbox) {
      script.runInNewContext(sandbox);
    });
    
    console.log(util.inspect(sandboxes));
    
    // [{ globalVar: 'set' }, { globalVar: 'set' }, { globalVar: 'set' }]

Note that running untrusted code is a tricky business requiring great care.
`script.runInNewContext` is quite useful, but safely running untrusted code
requires a separate process.