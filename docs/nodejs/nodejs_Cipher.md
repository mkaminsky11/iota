## Class: Cipher

## 

Class for encrypting data.

Returned by `crypto.createCipher` and `crypto.createCipheriv`.

Cipher objects are [streams][0] that are both readable and
writable. The written plain text data is used to produce the
encrypted data on the readable side. The legacy `update` and `final`
methods are also supported.


[0]: stream.html