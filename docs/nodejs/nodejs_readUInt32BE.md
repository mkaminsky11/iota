## buf.readUInt32BE(offset\[, noAssert\])

## 

Reads an unsigned 32 bit integer from the buffer at the specified offset with
specified endian format.

Set `noAssert` to true to skip validation of `offset`. This means that `offset`
may be beyond the end of the buffer. Defaults to `false`.

Example:

    var buf = new Buffer(4);
    
    buf[0] = 0x3;
    buf[1] = 0x4;
    buf[2] = 0x23;
    buf[3] = 0x42;
    
    console.log(buf.readUInt32BE(0));
    console.log(buf.readUInt32LE(0));
    
    // 0x03042342
    // 0x42230403