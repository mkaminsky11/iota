## Event: 'secureConnection'

## 

`function (tlsSocket) {}`

This event is emitted after a new connection has been successfully
handshaked. The argument is an instance of \[tls.TLSSocket\]\[\]. It has all the
common stream methods and events.

`socket.authorized` is a boolean value which indicates if the
client has verified by one of the supplied certificate authorities for the
server. If `socket.authorized` is false, then
`socket.authorizationError` is set to describe how authorization
failed. Implied but worth mentioning: depending on the settings of the TLS
server, you unauthorized connections may be accepted.
`socket.npnProtocol` is a string containing selected NPN protocol.
`socket.servername` is a string containing servername requested with
SNI.