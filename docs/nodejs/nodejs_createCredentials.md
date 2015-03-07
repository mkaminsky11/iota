## crypto.createCredentials(details)

## 

Creates a credentials object, with the optional details being a
dictionary with keys:

* `pfx` : A string or buffer holding the PFX or PKCS12 encoded private
key, certificate and CA certificates
* `key` : A string holding the PEM encoded private key
* `passphrase` : A string of passphrase for the private key or pfx
* `cert` : A string holding the PEM encoded certificate
* `ca` : Either a string or list of strings of PEM encoded CA
certificates to trust.
* `crl` : Either a string or list of strings of PEM encoded CRLs
(Certificate Revocation List)
* `ciphers`: A string describing the ciphers to use or exclude.
Consult
[http://www.openssl.org/docs/apps/ciphers.html\#CIPHER\_LIST\_FORMAT][0]
for details on the format.

If no 'ca' details are given, then node.js will use the default
publicly trusted list of CAs as given in

[http://mxr.mozilla.org/mozilla/source/security/nss/lib/ckfw/builtins/certdata.txt][1].


[0]: http://www.openssl.org/docs/apps/ciphers.html#CIPHER_LIST_FORMAT
[1]: http://mxr.mozilla.org/mozilla/source/security/nss/lib/ckfw/builtins/certdata.txt