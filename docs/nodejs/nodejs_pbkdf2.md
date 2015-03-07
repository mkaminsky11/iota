## crypto.pbkdf2(password, salt, iterations, keylen\[, digest\], callback)

## 

Asynchronous PBKDF2 function. Applies the selected HMAC digest function
(default: SHA1) to derive a key of the requested length from the password,
salt and number of iterations. The callback gets two arguments:
`(err, derivedKey)`.

Example:

    crypto.pbkdf2('secret', 'salt', 4096, 512, 'sha256', function(err, key) {
      if (err)
        throw err;
      console.log(key.toString('hex'));  // 'c5e478d...1469e50'
    });

You can get a list of supported digest functions with
[crypto.getHashes()][0].


[0]: #crypto_crypto_gethashes