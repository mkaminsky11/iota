## crypto.createHmac(algorithm, key)

## 

Creates and returns a hmac object, a cryptographic hmac with the given
algorithm and key.

It is a [stream][0] that is both readable and writable. The
written data is used to compute the hmac. Once the writable side of
the stream is ended, use the `read()` method to get the computed
digest. The legacy `update` and `digest` methods are also supported.

`algorithm` is dependent on the available algorithms supported by
OpenSSL - see createHash above. `key` is the hmac key to be used.


[0]: stream.html