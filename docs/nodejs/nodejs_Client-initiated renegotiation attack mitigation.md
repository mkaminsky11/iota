## Client-initiated renegotiation attack mitigation

## 

The TLS protocol lets the client renegotiate certain aspects of the TLS session.
Unfortunately, session renegotiation requires a disproportional amount of
server-side resources, which makes it a potential vector for denial-of-service
attacks.

To mitigate this, renegotiations are limited to three times every 10 minutes. An
error is emitted on the \[tls.TLSSocket\]\[\] instance when the threshold is
exceeded. The limits are configurable:

* `tls.CLIENT_RENEG_LIMIT`: renegotiation limit, default is 3\.
* 
`tls.CLIENT_RENEG_WINDOW`: renegotiation window in seconds, default is
10 minutes.

Don't change the defaults unless you know what you are doing.

To test your server, connect to it with `openssl s_client -connect address:port`
and tap `R<CR>` (that's the letter `R` followed by a carriage return) a few
times.