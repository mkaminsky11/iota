## server.addContext(hostname, context)

## 

Add secure context that will be used if client request's SNI hostname is
matching passed `hostname` (wildcards can be used). `context` can contain
`key`, `cert`, `ca` and/or any other properties from `tls.createSecureContext`
`options` argument.