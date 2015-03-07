## Class: stream.Writable

## 

`stream.Writable` is an abstract class designed to be extended with an
underlying implementation of the \[`_write(chunk, encoding, callback)`\]\[\] method.

Please see above under \[API for Stream Consumers\]\[\] for how to consume
writable streams in your programs. What follows is an explanation of
how to implement Writable streams in your programs.