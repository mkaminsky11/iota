## new tls.TLSSocket(socket, options)

## 

Construct a new TLSSocket object from existing TCP socket.

`socket` is an instance of \[net.Socket\]\[\]

`options` is an object that might contain following properties:

* `secureContext`: An optional TLS context object from
`tls.createSecureContext( ... )`
* 
`isServer`: If true - TLS socket will be instantiated in server-mode
* 
`server`: An optional \[net.Server\]\[\] instance
* 
`requestCert`: Optional, see \[tls.createSecurePair\]\[\]
* 
`rejectUnauthorized`: Optional, see \[tls.createSecurePair\]\[\]
* 
`NPNProtocols`: Optional, see \[tls.createServer\]\[\]
* 
`SNICallback`: Optional, see \[tls.createServer\]\[\]
* 
`session`: Optional, a `Buffer` instance, containing TLS session
* 
`requestOCSP`: Optional, if `true` - OCSP status request extension would
be added to client hello, and `OCSPResponse` event will be emitted on socket
before establishing secure communication