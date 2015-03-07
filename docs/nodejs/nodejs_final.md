## decipher.final(\[output\_encoding\])

## 

Returns any remaining plaintext which is deciphered, with
`output_encoding` being one of: `'binary'`, `'ascii'` or `'utf8'`. If
no encoding is provided, then a buffer is returned.

Note: `decipher` object can not be used after `final()` method has been
called.