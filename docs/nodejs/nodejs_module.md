## The module Object

## 

In each module, the `module` free variable is a reference to the object
representing the current module. For convenience, `module.exports` is
also accessible via the `exports` module-global. `module` isn't actually
a global but rather local to each module.