## Class: Decipher

## 

Class for decrypting data.

Returned by `crypto.createDecipher` and `crypto.createDecipheriv`.

Decipher objects are [streams][0] that are both readable and
writable. The written enciphered data is used to produce the
plain-text data on the the readable side. The legacy `update` and
`final` methods are also supported.


[0]: stream.html