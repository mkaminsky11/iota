## util.inspect(object\[, options\])

## 

Return a string representation of `object`, which is useful for debugging.

An optional _options_ object may be passed that alters certain aspects of the
formatted string:

* `showHidden` - if `true` then the object's non-enumerable properties will be
shown too. Defaults to `false`.
* 
`depth` - tells `inspect` how many times to recurse while formatting the
object. This is useful for inspecting large complicated objects. Defaults to
`2`. To make it recurse indefinitely pass `null`.
* 
`colors` - if `true`, then the output will be styled with ANSI color codes.
Defaults to `false`. Colors are customizable, see below.
* 
`customInspect` - if `false`, then custom `inspect(depth, opts)` functions
defined on the objects being inspected won't be called. Defaults to `true`.

Example of inspecting all properties of the `util` object:

    var util = require('util');
    
    console.log(util.inspect(util, { showHidden: true, depth: null }));

Values may supply their own custom `inspect(depth, opts)` functions, when
called they receive the current depth in the recursive inspection, as well as
the options object passed to `util.inspect()`.