## crypto.createCipher(algorithm, password)

## 

Creates and returns a cipher object, with the given algorithm and
password.

`algorithm` is dependent on OpenSSL, examples are `'aes192'`, etc. On
recent releases, `openssl list-cipher-algorithms` will display the
available cipher algorithms. `password` is used to derive key and IV,
which must be a `'binary'` encoded string or a [buffer][0].

It is a [stream][1] that is both readable and writable. The
written data is used to compute the hash. Once the writable side of
the stream is ended, use the `read()` method to get the enciphered
contents. The legacy `update` and `final` methods are also supported.

Note: `createCipher` derives keys with the OpenSSL function \[EVP\_BytesToKey\]\[\]
with the digest algorithm set to MD5, one iteration, and no salt. The lack of
salt allows dictionary attacks as the same password always creates the same key.
The low iteration count and non-cryptographically secure hash algorithm allow
passwords to be tested very rapidly.

In line with OpenSSL's recommendation to use pbkdf2 instead of EVP\_BytesToKey it
is recommended you derive a key and iv yourself with \[crypto.pbkdf2\]\[\] and to
then use \[createCipheriv()\]\[\] to create the cipher stream.


[0]: buffer.html
[1]: stream.html