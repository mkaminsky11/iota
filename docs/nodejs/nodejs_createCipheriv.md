## crypto.createCipheriv(algorithm, key, iv)

## 

Creates and returns a cipher object, with the given algorithm, key and
iv.

`algorithm` is the same as the argument to `createCipher()`. `key` is
the raw key used by the algorithm. `iv` is an [initialization
vector][0].

`key` and `iv` must be `'binary'` encoded strings or
[buffers][1].


[0]: http://en.wikipedia.org/wiki/Initialization_vector
[1]: buffer.html