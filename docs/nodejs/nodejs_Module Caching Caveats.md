## Module Caching Caveats

## 

Modules are cached based on their resolved filename. Since modules may
resolve to a different filename based on the location of the calling
module (loading from `node_modules` folders), it is not a _guarantee_
that `require('foo')` will always return the exact same object, if it
would resolve to different files.