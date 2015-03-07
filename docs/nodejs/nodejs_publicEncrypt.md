## crypto.publicEncrypt(public\_key, buffer)

## 

Encrypts `buffer` with `public_key`. Only RSA is currently supported.

`public_key` can be an object or a string. If `public_key` is a string, it is
treated as the key with no passphrase and will use `RSA_PKCS1_OAEP_PADDING`.

`public_key`:

* `key` : A string holding the PEM encoded private key
* `padding` : An optional padding value, one of the following:
  * `constants.RSA_NO_PADDING`
  * `constants.RSA_PKCS1_PADDING`
  * `constants.RSA_PKCS1_OAEP_PADDING`

NOTE: All paddings are defined in `constants` module.