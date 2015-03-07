## Class: stream.Transform

## 

A "transform" stream is a duplex stream where the output is causally
connected in some way to the input, such as a \[zlib\]\[\] stream or a
\[crypto\]\[\] stream.

There is no requirement that the output be the same size as the input,
the same number of chunks, or arrive at the same time. For example, a
Hash stream will only ever have a single chunk of output which is
provided when the input is ended. A zlib stream will produce output
that is either much smaller or much larger than its input.

Rather than implement the \[`_read()`\]\[\] and \[`_write()`\]\[\] methods, Transform
classes must implement the `_transform()` method, and may optionally
also implement the `_flush()` method. (See below.)