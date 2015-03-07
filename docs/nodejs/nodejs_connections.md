## server.connections

## 

This function is **deprecated**; please use \[server.getConnections()\]\[\] instead.
The number of concurrent connections on the server.

This becomes `null` when sending a socket to a child with
`child_process.fork()`. To poll forks and get current number of active
connections use asynchronous `server.getConnections` instead.