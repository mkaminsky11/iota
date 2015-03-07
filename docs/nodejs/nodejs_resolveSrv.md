## dns.resolveSrv(hostname, callback)

## 

The same as `dns.resolve()`, but only for service records (`SRV` records).
`addresses` is an array of the SRV records available for `hostname`. Properties
of SRV records are priority, weight, port, and name (e.g.,
`[{'priority': 10, 'weight': 5, 'port': 21223, 'name': 'service.example.com'}, ...]`).