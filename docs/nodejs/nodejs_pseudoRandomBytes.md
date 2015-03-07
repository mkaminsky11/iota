## crypto.pseudoRandomBytes(size\[, callback\])

## 

Generates _non_-cryptographically strong pseudo-random data. The data
returned will be unique if it is sufficiently long, but is not
necessarily unpredictable. For this reason, the output of this
function should never be used where unpredictability is important,
such as in the generation of encryption keys.

Usage is otherwise identical to `crypto.randomBytes`.