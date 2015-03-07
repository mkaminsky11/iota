## dns.resolveNs(hostname, callback)

## 

The same as `dns.resolve()`, but only for name server records (`NS` records).
`addresses` is an array of the name server records available for `hostname`
(e.g., `['ns1.example.com', 'ns2.example.com']`).