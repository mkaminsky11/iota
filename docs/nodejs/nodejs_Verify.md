## verifier.verify(object, signature\[, signature\_format\])

## 

Verifies the signed data by using the `object` and `signature`.
`object` is a string containing a PEM encoded object, which can be
one of RSA public key, DSA public key, or X.509 certificate.
`signature` is the previously calculated signature for the data, in
the `signature_format` which can be `'binary'`, `'hex'` or `'base64'`.
If no encoding is specified, then a buffer is expected.

Returns true or false depending on the validity of the signature for
the data and public key.

Note: `verifier` object can not be used after `verify()` method has been
called.