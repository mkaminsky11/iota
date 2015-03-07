## socket.ref()

## 

Opposite of `unref`, calling `ref` on a previously `unref`d socket will _not_
let the program exit if it's the only socket left (the default behavior). If
the socket is `ref`d calling `ref` again will have no effect.