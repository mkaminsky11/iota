## fs.createReadStream(path\[, options\])

## 

Returns a new ReadStream object (See `Readable Stream`).

`options` is an object with the following defaults:

    { flags: 'r',
      encoding: null,
      fd: null,
      mode: 0666,
      autoClose: true
    }

`options` can include `start` and `end` values to read a range of bytes from
the file instead of the entire file. Both `start` and `end` are inclusive and
start at 0\. The `encoding` can be `'utf8'`, `'ascii'`, or `'base64'`.

If `fd` is specified, `ReadStream` will ignore the `path` argument and will use
the specified file descriptor. This means that no `open` event will be emitted.

If `autoClose` is false, then the file descriptor won't be closed, even if
there's an error. It is your responsibility to close it and make sure
there's no file descriptor leak. If `autoClose` is set to true (default
behavior), on `error` or `end` the file descriptor will be closed
automatically.

An example to read the last 10 bytes of a file which is 100 bytes long:

    fs.createReadStream('sample.txt', {start: 90, end: 99});