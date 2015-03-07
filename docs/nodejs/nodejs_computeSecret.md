## ECDH.computeSecret(other\_public\_key\[, input\_encoding\]\[, output\_encoding\])

## 

Computes the shared secret using `other_public_key` as the other
party's public key and returns the computed shared secret. Supplied
key is interpreted using specified `input_encoding`, and secret is
encoded using specified `output_encoding`. Encodings can be
`'binary'`, `'hex'`, or `'base64'`. If the input encoding is not
provided, then a buffer is expected.

If no output encoding is given, then a buffer is returned.