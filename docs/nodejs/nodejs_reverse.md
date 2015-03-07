## dns.reverse(ip, callback)

## 

Reverse resolves an ip address to an array of hostnames.

The callback has arguments `(err, hostnames)`.

On error, `err` is an `Error` object, where `err.code` is
one of the error codes listed below.