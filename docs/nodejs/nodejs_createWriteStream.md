## fs.createWriteStream(path\[, options\])

## 

Returns a new WriteStream object (See `Writable Stream`).

`options` is an object with the following defaults:

    { flags: 'w',
      encoding: null,
      fd: null,
      mode: 0666 }

`options` may also include a `start` option to allow writing data at
some position past the beginning of the file. Modifying a file rather
than replacing it may require a `flags` mode of `r+` rather than the
default mode `w`.

Like `ReadStream` above, if `fd` is specified, `WriteStream` will ignore the
`path` argument and will use the specified file descriptor. This means that no
`open` event will be emitted.