## buf.writeIntBE(value, offset, byteLength\[, noAssert\])

## 

Writes `value` to the buffer at the specified `offset` and `byteLength`.
Supports up to 48 bits of accuracy. For example:

    var b = new Buffer(6);
    b.writeUIntBE(0x1234567890ab, 0, 6);
    // <Buffer 12 34 56 78 90 ab>

Set `noAssert` to `true` to skip validation of `value` and `offset`. Defaults
to `false`.