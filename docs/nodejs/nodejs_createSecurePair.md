## tls.createSecurePair(\[context\]\[, isServer\]\[, requestCert\]\[, rejectUnauthorized\])

## 

Creates a new secure pair object with two streams, one of which reads/writes
encrypted data, and one reads/writes cleartext data.
Generally the encrypted one is piped to/from an incoming encrypted data stream,
and the cleartext one is used as a replacement for the initial encrypted stream.

* `credentials`: A secure context object from tls.createSecureContext( ... )
* 
`isServer`: A boolean indicating whether this tls connection should be
opened as a server or a client.
* 
`requestCert`: A boolean indicating whether a server should request a
certificate from a connecting client. Only applies to server connections.
* 
`rejectUnauthorized`: A boolean indicating whether a server should
automatically reject clients with invalid certificates. Only applies to
servers with `requestCert` enabled.

`tls.createSecurePair()` returns a SecurePair object with `cleartext` and
`encrypted` stream properties.

NOTE: `cleartext` has the same APIs as \[tls.TLSSocket\]\[\]