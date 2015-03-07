## Event: 'OCSPResponse'

## 

`function (response) { }`

This event will be emitted if `requestOCSP` option was set. `response` is a
buffer object, containing server's OCSP response.

Traditionally, the `response` is a signed object from the server's CA that
contains information about server's certificate revocation status.