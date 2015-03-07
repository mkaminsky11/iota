## writable.\\\_write(chunk, encoding, callback)

## 

All Writable stream implementations must provide a \[`_write()`\]\[\]
method to send data to the underlying resource.

Note: **This function MUST NOT be called directly.** It should be
implemented by child classes, and called by the internal Writable
class methods only.

Call the callback using the standard `callback(error)` pattern to
signal that the write completed successfully or with an error.

If the `decodeStrings` flag is set in the constructor options, then
`chunk` may be a string rather than a Buffer, and `encoding` will
indicate the sort of string that it is. This is to support
implementations that have an optimized handling for certain string
data encodings. If you do not explicitly set the `decodeStrings`
option to `false`, then you can safely ignore the `encoding` argument,
and assume that `chunk` will always be a Buffer.

This method is prefixed with an underscore because it is internal to
the class that defines it, and should not be called directly by user
programs. However, you **are** expected to override this method in
your own extension classes.