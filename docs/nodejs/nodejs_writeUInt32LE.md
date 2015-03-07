## buf.writeUInt32LE(value, offset\[, noAssert\])

## 

Writes `value` to the buffer at the specified offset with specified endian
format. Note, `value` must be a valid unsigned 32 bit integer.

Set `noAssert` to true to skip validation of `value` and `offset`. This means
that `value` may be too large for the specific function and `offset` may be
beyond the end of the buffer leading to the values being silently dropped. This
should not be used unless you are certain of correctness. Defaults to `false`.

Example:

    var buf = new Buffer(4);
    buf.writeUInt32BE(0xfeedface, 0);
    
    console.log(buf);
    
    buf.writeUInt32LE(0xfeedface, 0);
    
    console.log(buf);
    
    // <Buffer fe ed fa ce>
    // <Buffer ce fa ed fe>