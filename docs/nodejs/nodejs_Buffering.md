## Buffering

## 

Both Writable and Readable streams will buffer data on an internal
object called `_writableState.buffer` or `_readableState.buffer`,
respectively.

The amount of data that will potentially be buffered depends on the
`highWaterMark` option which is passed into the constructor.

Buffering in Readable streams happens when the implementation calls
\[`stream.push(chunk)`\]\[\]. If the consumer of the Stream does not call
`stream.read()`, then the data will sit in the internal queue until it
is consumed.

Buffering in Writable streams happens when the user calls
\[`stream.write(chunk)`\]\[\] repeatedly, even when `write()` returns `false`.

The purpose of streams, especially with the `pipe()` method, is to
limit the buffering of data to acceptable levels, so that sources and
destinations of varying speed will not overwhelm the available memory.