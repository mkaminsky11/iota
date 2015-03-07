## tlsSocket.renegotiate(options, callback)

## 

Initiate TLS renegotiation process. The `options` may contain the following
fields: `rejectUnauthorized`, `requestCert` (See \[tls.createServer\]\[\]
for details). `callback(err)` will be executed with `null` as `err`,
once the renegotiation is successfully completed.

NOTE: Can be used to request peer's certificate after the secure connection
has been established.

ANOTHER NOTE: When running as the server, socket will be destroyed
with an error after `handshakeTimeout` timeout.