## UDP / Datagram Sockets

## 

Datagram sockets are available through `require('dgram')`.

Important note: the behavior of `dgram.Socket#bind()` has changed in v0.10
and is always asynchronous now. If you have code that looks like this:

    var s = dgram.createSocket('udp4');
    s.bind(1234);
    s.addMembership('224.0.0.114');

You have to change it to this:

    var s = dgram.createSocket('udp4');
    s.bind(1234, function() {
      s.addMembership('224.0.0.114');
    });