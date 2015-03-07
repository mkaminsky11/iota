## dgram.createSocket(options\[, callback\])

## 

The `options` object should contain a `type` field of either `udp4` or `udp6`
and an optional boolean `reuseAddr` field.

When `reuseAddr` is true `socket.bind()` will reuse the address, even if
another process has already bound a socket on it. `reuseAddr` defaults to
`false`.

Takes an optional callback which is added as a listener for `message` events.

Call `socket.bind()` if you want to receive datagrams. `socket.bind()` will
bind to the "all interfaces" address on a random port (it does the right thing
for both `udp4` and `udp6` sockets). You can then retrieve the address and port
with `socket.address().address` and `socket.address().port`.