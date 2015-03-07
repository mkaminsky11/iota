## process.stderr

## 

A writable stream to stderr (on fd `2`).

`process.stderr` and `process.stdout` are unlike other streams in Node in
that they cannot be closed (`end()` will throw), they never emit the `finish`
event and that writes are usually blocking.

* They are blocking in the case that they refer to regular files or TTY file
descriptors.
* In the case they refer to pipes:
  * They are blocking in Linux/Unix.
  * They are non-blocking like other streams in Windows.