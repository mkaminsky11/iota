## dns.resolveTxt(hostname, callback)

## 

The same as `dns.resolve()`, but only for text queries (`TXT` records).
`addresses` is an 2-d array of the text records available for `hostname` (e.g.,
`[ ['v=spf1 ip4:0.0.0.0 ', '~all' ] ]`). Each sub-array contains TXT chunks of
one record. Depending on the use case, the could be either joined together or
treated separately.