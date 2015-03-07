## fs.symlink(srcpath, dstpath\[, type\], callback)

## 

Asynchronous symlink(2). No arguments other than a possible exception are given
to the completion callback.
The `type` argument can be set to `'dir'`, `'file'`, or `'junction'` (default
is `'file'`) and is only available on Windows (ignored on other platforms).
Note that Windows junction points require the destination path to be absolute. When using
`'junction'`, the `destination` argument will automatically be normalized to absolute path.