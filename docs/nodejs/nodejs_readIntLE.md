## buf.readIntLE(offset, byteLength\[, noAssert\])

## 

A generalized version of all numeric read methods. Supports up to 48 bits of
accuracy. For example:

    var b = new Buffer(6);
    b.writeUint16LE(0x90ab, 0);
    b.writeUInt32LE(0x12345678, 2);
    b.readUIntLE(0, 6).toString(16);  // Specify 6 bytes (48 bits)
    // output: '1234567890ab'

Set `noAssert` to true to skip validation of `offset`. This means that `offset`
may be beyond the end of the buffer. Defaults to `false`.