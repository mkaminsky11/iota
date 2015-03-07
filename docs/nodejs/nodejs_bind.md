## socket.bind(options\[, callback\])

## 

The `port` and `address` properties of `options`, as well as the optional
callback function, behave as they do on a call to
[socket.bind(port, \[address\], \[callback\])
][0].

If `exclusive` is `false` (default), then cluster workers will use the same
underlying handle, allowing connection handling duties to be shared. When
`exclusive` is `true`, the handle is not shared, and attempted port sharing
results in an error. An example which listens on an exclusive port is
shown below.

    socket.bind({
      address: 'localhost',
      port: 8000,
      exclusive: true
    });



[0]: #dgram_socket_bind_port_address_callback