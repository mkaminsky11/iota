## crypto.setEngine(engine\[, flags\])

## 

Load and set engine for some/all OpenSSL functions (selected by flags).

`engine` could be either an id or a path to the to the engine's shared library.

`flags` is optional and has `ENGINE_METHOD_ALL` value by default. It could take
one of or mix of following flags (defined in `constants` module):

* `ENGINE_METHOD_RSA`
* `ENGINE_METHOD_DSA`
* `ENGINE_METHOD_DH`
* `ENGINE_METHOD_RAND`
* `ENGINE_METHOD_ECDH`
* `ENGINE_METHOD_ECDSA`
* `ENGINE_METHOD_CIPHERS`
* `ENGINE_METHOD_DIGESTS`
* `ENGINE_METHOD_STORE`
* `ENGINE_METHOD_PKEY_METH`
* `ENGINE_METHOD_PKEY_ASN1_METH`
* `ENGINE_METHOD_ALL`
* `ENGINE_METHOD_NONE`