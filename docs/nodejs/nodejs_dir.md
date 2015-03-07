## console.dir(obj\[, options\])

## 

Uses `util.inspect` on `obj` and prints resulting string to stdout. This function
bypasses any custom `inspect()` function on `obj`. An optional _options_ object
may be passed that alters certain aspects of the formatted string:

* `showHidden` - if `true` then the object's non-enumerable properties will be
shown too. Defaults to `false`.
* 
`depth` - tells `inspect` how many times to recurse while formatting the
object. This is useful for inspecting large complicated objects. Defaults to
`2`. To make it recurse indefinitely pass `null`.
* 
`colors` - if `true`, then the output will be styled with ANSI color codes.
Defaults to `false`. Colors are customizable, see below.