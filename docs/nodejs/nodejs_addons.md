## Addons

## 

Addons are dynamically linked shared objects. They can provide glue to C and
C++ libraries. The API (at the moment) is rather complex, involving
knowledge of several libraries:

* V8 JavaScript, a C++ library. Used for interfacing with JavaScript:
creating objects, calling functions, etc. Documented mostly in the
`v8.h` header file (`deps/v8/include/v8.h` in the Node source
tree), which is also available
[online][0].
* 
[libuv][1], C event loop library.
Anytime one needs to wait for a file descriptor to become readable,
wait for a timer, or wait for a signal to be received one will need
to interface with libuv. That is, if you perform any I/O, libuv will
need to be used.
* 
Internal Node libraries. Most importantly is the `node::ObjectWrap`
class which you will likely want to derive from.
* 
Others. Look in `deps/` for what else is available.

Node statically compiles all its dependencies into the executable.
When compiling your module, you don't need to worry about linking to
any of these libraries.

All of the following examples are available for
[download][2] and may be
used as a starting-point for your own Addon.


[0]: http://izs.me/v8-docs/main.html
[1]: https://github.com/joyent/libuv
[2]: https://github.com/rvagg/node-addon-examples