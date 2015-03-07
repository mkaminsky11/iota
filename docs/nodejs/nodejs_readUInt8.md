## buf.readUInt8(offset\[, noAssert\])

## 

Reads an unsigned 8 bit integer from the buffer at the specified offset.

Set `noAssert` to true to skip validation of `offset`. This means that `offset`
may be beyond the end of the buffer. Defaults to `false`.

Example:

    var buf = new Buffer(4);
    
    buf[0] = 0x3;
    buf[1] = 0x4;
    buf[2] = 0x23;
    buf[3] = 0x42;
    
    for (ii = 0; ii < buf.length; ii++) {
      console.log(buf.readUInt8(ii));
    }
    
    // 0x3
    // 0x4
    // 0x23
    // 0x42