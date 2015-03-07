## request.flushHeaders()

## 

Flush the request headers.

For efficiency reasons, node.js normally buffers the request headers until you
call `request.end()` or write the first chunk of request data. It then tries
hard to pack the request headers and data into a single TCP packet.

That's usually what you want (it saves a TCP round-trip) but not when the first
data isn't sent until possibly much later. `request.flush()` lets you bypass
the optimization and kickstart the request.