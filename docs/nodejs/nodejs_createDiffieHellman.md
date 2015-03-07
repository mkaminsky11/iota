## crypto.createDiffieHellman(prime\[, prime\_encoding\]\[, generator\]\[, generator\_encoding\])

## 

Creates a Diffie-Hellman key exchange object using the supplied `prime` and an
optional specific `generator`.
`generator` can be a number, string, or Buffer.
If no `generator` is specified, then `2` is used.
`prime_encoding` and `generator_encoding` can be `'binary'`, `'hex'`, or `'base64'`.
If no `prime_encoding` is specified, then a Buffer is expected for `prime`.
If no `generator_encoding` is specified, then a Buffer is expected for `generator`.