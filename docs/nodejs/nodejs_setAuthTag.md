## decipher.setAuthTag(buffer)

## 

For authenticated encryption modes (currently supported: GCM), this
method must be used to pass in the received _authentication tag_.
If no tag is provided or if the ciphertext has been tampered with,
`final` will throw, thus indicating that the ciphertext should
be discarded due to failed authentication.