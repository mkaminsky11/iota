## Event: 'secureConnect'

## 

This event is emitted after a new connection has been successfully handshaked.
The listener will be called no matter if the server's certificate was
authorized or not. It is up to the user to test `tlsSocket.authorized`
to see if the server certificate was signed by one of the specified CAs.
If `tlsSocket.authorized === false` then the error can be found in
`tlsSocket.authorizationError`. Also if NPN was used - you can check
`tlsSocket.npnProtocol` for negotiated protocol.