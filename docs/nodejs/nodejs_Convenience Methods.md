## Convenience Methods

## 

All of these take a string or buffer as the first argument, an optional second
argument to supply options to the zlib classes and will call the supplied
callback with `callback(error, result)`.

Every method has a `*Sync` counterpart, which accept the same arguments, but
without a callback.