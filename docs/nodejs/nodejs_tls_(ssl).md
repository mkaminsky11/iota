## TLS (SSL)

## 

Use `require('tls')` to access this module.

The `tls` module uses OpenSSL to provide Transport Layer Security and/or
Secure Socket Layer: encrypted stream communication.

TLS/SSL is a public/private key infrastructure. Each client and each
server must have a private key. A private key is created like this:

    openssl genrsa -out ryans-key.pem 2048

All servers and some clients need to have a certificate. Certificates are public
keys signed by a Certificate Authority or self-signed. The first step to
getting a certificate is to create a "Certificate Signing Request" (CSR)
file. This is done with:

    openssl req -new -sha256 -key ryans-key.pem -out ryans-csr.pem

To create a self-signed certificate with the CSR, do this:

    openssl x509 -req -in ryans-csr.pem -signkey ryans-key.pem -out ryans-cert.pem

Alternatively you can send the CSR to a Certificate Authority for signing.

(TODO: docs on creating a CA, for now interested users should just look at
`test/fixtures/keys/Makefile` in the Node source code)

To create .pfx or .p12, do this:

    openssl pkcs12 -export -in agent5-cert.pem -inkey agent5-key.pem \
        -certfile ca-cert.pem -out agent5.pfx

* `in`: certificate
* `inkey`: private key
* `certfile`: all CA certs concatenated in one file like
`cat ca1-cert.pem ca2-cert.pem > ca-cert.pem`