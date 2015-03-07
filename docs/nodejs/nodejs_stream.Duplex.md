## Class: stream.Duplex

## 

A "duplex" stream is one that is both Readable and Writable, such as a
TCP socket connection.

Note that `stream.Duplex` is an abstract class designed to be extended
with an underlying implementation of the `_read(size)` and
\[`_write(chunk, encoding, callback)`\]\[\] methods as you would with a
Readable or Writable stream class.

Since JavaScript doesn't have multiple prototypal inheritance, this
class prototypally inherits from Readable, and then parasitically from
Writable. It is thus up to the user to implement both the lowlevel
`_read(n)` method as well as the lowlevel
\[`_write(chunk, encoding, callback)`\]\[\] method on extension duplex classes.