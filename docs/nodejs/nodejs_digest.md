## hmac.digest(\[encoding\])

## 

Calculates the digest of all of the passed data to the hmac. The
`encoding` can be `'hex'`, `'binary'` or `'base64'`. If no encoding
is provided, then a buffer is returned.

Note: `hmac` object can not be used after `digest()` method has been
called.