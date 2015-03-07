## path.join(\[path1\]\[, path2\]\[, ...\])

## 

Join all arguments together and normalize the resulting path.

Arguments must be strings. In v0.8, non-string arguments were
silently ignored. In v0.10 and up, an exception is thrown.

Example:

    path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
    // returns
    '/foo/bar/baz/asdf'
    
    path.join('foo', {}, 'bar')
    // throws exception
    TypeError: Arguments to path.join must be strings