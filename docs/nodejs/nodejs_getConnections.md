## server.getConnections(callback)

## 

Asynchronously get the number of concurrent connections on the server. Works
when sockets were sent to forks.

Callback should take two arguments `err` and `count`.

`net.Server` is an \[EventEmitter\]\[\] with the following events: