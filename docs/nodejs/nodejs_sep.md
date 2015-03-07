## path.sep

## 

The platform-specific file separator. `'\\'` or `'/'`.

An example on \*nix:

    'foo/bar/baz'.split(path.sep)
    // returns
    ['foo', 'bar', 'baz']

An example on Windows:

    'foo\\bar\\baz'.split(path.sep)
    // returns
    ['foo', 'bar', 'baz']