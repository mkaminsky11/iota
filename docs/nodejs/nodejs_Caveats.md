## Caveats

## 

The `fs.watch` API is not 100% consistent across platforms, and is
unavailable in some situations.

The recursive option is currently supported on OS X. Only FSEvents supports this
type of file watching so it is unlikely any additional platforms will be added
soon.