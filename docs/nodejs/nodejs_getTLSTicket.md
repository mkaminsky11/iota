## tlsSocket.getTLSTicket()

## 

NOTE: Works only with client TLS sockets. Useful only for debugging, for
session reuse provide `session` option to `tls.connect`.

Return TLS session ticket or `undefined` if none was negotiated.