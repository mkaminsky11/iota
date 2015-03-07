## script.runInContext(contextifiedSandbox\[, options\])

## 

Similar to `vm.runInContext` but a method of a precompiled `Script` object.
`script.runInContext` runs `script`'s compiled code in `contextifiedSandbox`
and returns the result. Running code does not have access to local scope.

`script.runInContext` takes the same options as `script.runInThisContext`.

Example: compile code that increments a global variable and sets one, then
execute the code multiple times. These globals are contained in the sandbox.

    var util = require('util');
    var vm = require('vm');
    
    var sandbox = {
      animal: 'cat',
      count: 2
    };
    
    var script = new vm.Script('count += 1; name = "kitty"');
    
    for (var i = 0; i < 10; ++i) {
      script.runInContext(sandbox);
    }
    
    console.log(util.inspect(sandbox));
    
    // { animal: 'cat', count: 12, name: 'kitty' }

Note that running untrusted code is a tricky business requiring great care.
`script.runInContext` is quite useful, but safely running untrusted code
requires a separate process.