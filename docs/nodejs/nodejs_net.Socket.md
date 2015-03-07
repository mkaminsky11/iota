## Class: net.Socket

## 

This object is an abstraction of a TCP or local socket. `net.Socket`
instances implement a duplex Stream interface. They can be created by the
user and used as a client (with `connect()`) or they can be created by Node
and passed to the user through the `'connection'` event of a server.