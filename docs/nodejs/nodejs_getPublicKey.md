## ECDH.getPublicKey(\[encoding\[, format\]\])

## 

Returns the EC Diffie-Hellman public key in the specified encoding and format.

Format specifies point encoding and can be `'compressed'`, `'uncompressed'`, or
`'hybrid'`. If no format is provided - the point will be returned in
`'uncompressed'` format.

Encoding can be `'binary'`, `'hex'`, or `'base64'`. If no encoding is provided,
then a buffer is returned.