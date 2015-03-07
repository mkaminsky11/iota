## dns.resolveCname(hostname, callback)

## 

The same as `dns.resolve()`, but only for canonical name records (`CNAME`
records). `addresses` is an array of the canonical name records available for
`hostname` (e.g., `['bar.example.com']`).