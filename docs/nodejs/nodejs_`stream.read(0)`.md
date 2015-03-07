## stream.read(0)

## 

There are some cases where you want to trigger a refresh of the
underlying readable stream mechanisms, without actually consuming any
data. In that case, you can call `stream.read(0)`, which will always
return null.

If the internal read buffer is below the `highWaterMark`, and the
stream is not currently reading, then calling `read(0)` will trigger
a low-level `_read` call.

There is almost never a need to do this. However, you will see some
cases in Node's internals where this is done, particularly in the
Readable stream class internals.