## tlsSocket.setMaxSendFragment(size)

## 

Set maximum TLS fragment size (default and maximum value is: `16384`, minimum
is: `512`). Returns `true` on success, `false` otherwise.

Smaller fragment size decreases buffering latency on the client: large
fragments are buffered by the TLS layer until the entire fragment is received
and its integrity is verified; large fragments can span multiple roundtrips,
and their processing can be delayed due to packet loss or reordering. However,
smaller fragments add extra TLS framing bytes and CPU overhead, which may
decrease overall server throughput.