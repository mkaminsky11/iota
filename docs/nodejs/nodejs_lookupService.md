## dns.lookupService(address, port, callback)

## 

Resolves the given address and port into a hostname and service using
`getnameinfo`.

The callback has arguments `(err, hostname, service)`. The `hostname` and
`service` arguments are strings (e.g. `'localhost'` and `'http'` respectively).

On error, `err` is an `Error` object, where `err.code` is the error code.