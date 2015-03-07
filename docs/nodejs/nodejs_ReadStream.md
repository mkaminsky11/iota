## Class: ReadStream

## 

A `net.Socket` subclass that represents the readable portion of a tty. In normal
circumstances, `process.stdin` will be the only `tty.ReadStream` instance in any
node program (only when `isatty(0)` is true).