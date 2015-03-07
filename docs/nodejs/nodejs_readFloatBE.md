## buf.readFloatBE(offset\[, noAssert\])

## 

Reads a 32 bit float from the buffer at the specified offset with specified
endian format.

Set `noAssert` to true to skip validation of `offset`. This means that `offset`
may be beyond the end of the buffer. Defaults to `false`.

Example:

    var buf = new Buffer(4);
    
    buf[0] = 0x00;
    buf[1] = 0x00;
    buf[2] = 0x80;
    buf[3] = 0x3f;
    
    console.log(buf.readFloatLE(0));
    
    // 0x01