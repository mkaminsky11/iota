## module.require(id)

## 

The `module.require` method provides a way to load a module as if
`require()` was called from the original module.

Note that in order to do this, you must get a reference to the `module`
object. Since `require()` returns the `module.exports`, and the `module` is
typically _only_ available within a specific module's code, it must be
explicitly exported in order to be used.