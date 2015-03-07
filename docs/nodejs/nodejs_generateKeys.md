## ECDH.generateKeys(\[encoding\[, format\]\])

## 

Generates private and public EC Diffie-Hellman key values, and returns
the public key in the specified format and encoding. This key should be
transferred to the other party.

Format specifies point encoding and can be `'compressed'`, `'uncompressed'`, or
`'hybrid'`. If no format is provided - the point will be returned in
`'uncompressed'` format.

Encoding can be `'binary'`, `'hex'`, or `'base64'`. If no encoding is provided,
then a buffer is returned.