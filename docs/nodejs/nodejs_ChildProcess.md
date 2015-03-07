## Class: ChildProcess

## 

`ChildProcess` is an \[EventEmitter\]\[\].

Child processes always have three streams associated with them. `child.stdin`,
`child.stdout`, and `child.stderr`. These may be shared with the stdio
streams of the parent process, or they may be separate stream objects
which can be piped to and from.

The ChildProcess class is not intended to be used directly. Use the
`spawn()`, `exec()`, `execFile()`, or `fork()` methods to create a Child
Process instance.