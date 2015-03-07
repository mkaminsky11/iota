## crypto.privateDecrypt(private\_key, buffer)

## 

Decrypts `buffer` with `private_key`.

`private_key` can be an object or a string. If `private_key` is a string, it is
treated as the key with no passphrase and will use `RSA_PKCS1_OAEP_PADDING`.

`private_key`:

* `key` : A string holding the PEM encoded private key
* `passphrase` : An optional string of passphrase for the private key
* `padding` : An optional padding value, one of the following:
  * `constants.RSA_NO_PADDING`
  * `constants.RSA_PKCS1_PADDING`
  * `constants.RSA_PKCS1_OAEP_PADDING`

NOTE: All paddings are defined in `constants` module.