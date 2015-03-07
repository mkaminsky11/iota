## agent.getName(options)

## 

Get a unique name for a set of request options, to determine whether a
connection can be reused. In the http agent, this returns
`host:port:localAddress`. In the https agent, the name includes the
CA, cert, ciphers, and other HTTPS/TLS-specific options that determine
socket reusability.