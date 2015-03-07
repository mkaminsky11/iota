## Class: Hash

## 

The class for creating hash digests of data.

It is a [stream][0] that is both readable and writable. The
written data is used to compute the hash. Once the writable side of
the stream is ended, use the `read()` method to get the computed hash
digest. The legacy `update` and `digest` methods are also supported.

Returned by `crypto.createHash`.


[0]: stream.html