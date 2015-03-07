## buf.writeInt8(value, offset\[, noAssert\])

## 

Writes `value` to the buffer at the specified offset. Note, `value` must be a
valid signed 8 bit integer.

Set `noAssert` to true to skip validation of `value` and `offset`. This means
that `value` may be too large for the specific function and `offset` may be
beyond the end of the buffer leading to the values being silently dropped. This
should not be used unless you are certain of correctness. Defaults to `false`.

Works as `buffer.writeUInt8`, except value is written out as a two's complement
signed integer into `buffer`.