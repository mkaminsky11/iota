## Event: 'OCSPRequest'

## 

`function (certificate, issuer, callback) { }`

Emitted when the client sends a certificate status request. You could parse
server's current certificate to obtain OCSP url and certificate id, and after
obtaining OCSP response invoke `callback(null, resp)`, where `resp` is a
`Buffer` instance. Both `certificate` and `issuer` are a `Buffer`
DER-representations of the primary and issuer's certificates. They could be used
to obtain OCSP certificate id and OCSP endpoint url.

Alternatively, `callback(null, null)` could be called, meaning that there is no
OCSP response.

Calling `callback(err)` will result in a `socket.destroy(err)` call.

Typical flow:

1. Client connects to server and sends `OCSPRequest` to it (via status info
extension in ClientHello.)
2. Server receives request and invokes `OCSPRequest` event listener if present
3. Server grabs OCSP url from either `certificate` or `issuer` and performs an
\[OCSP request\] to the CA
4. Server receives `OCSPResponse` from CA and sends it back to client via
`callback` argument
5. Client validates the response and either destroys socket or performs a
handshake.

NOTE: `issuer` could be null, if the certificate is self-signed or if the issuer
is not in the root certificates list. (You could provide an issuer via `ca`
option.)

NOTE: adding this event listener will have an effect only on connections
established after addition of event listener.

NOTE: you may want to use some npm module like \[asn1.js\] to parse the
certificates.