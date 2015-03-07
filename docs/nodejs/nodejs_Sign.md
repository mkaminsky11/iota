## sign.sign(private\_key\[, output\_format\])

## 

Calculates the signature on all the updated data passed through the
sign.

`private_key` can be an object or a string. If `private_key` is a string, it is
treated as the key with no passphrase.

`private_key`:

* `key` : A string holding the PEM encoded private key
* `passphrase` : A string of passphrase for the private key

Returns the signature in `output_format` which can be `'binary'`,
`'hex'` or `'base64'`. If no encoding is provided, then a buffer is
returned.

Note: `sign` object can not be used after `sign()` method has been
called.