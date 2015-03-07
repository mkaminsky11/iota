## server.maxConnections

## 

Set this property to reject connections when the server's connection count gets
high.

It is not recommended to use this option once a socket has been sent to a child
with `child_process.fork()`.