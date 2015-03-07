## buf.writeFloatLE(value, offset\[, noAssert\])

## 

Writes `value` to the buffer at the specified offset with specified endian
format. Note, behavior is unspecified if `value` is not a 32 bit float.

Set `noAssert` to true to skip validation of `value` and `offset`. This means
that `value` may be too large for the specific function and `offset` may be
beyond the end of the buffer leading to the values being silently dropped. This
should not be used unless you are certain of correctness. Defaults to `false`.

Example:

    var buf = new Buffer(4);
    buf.writeFloatBE(0xcafebabe, 0);
    
    console.log(buf);
    
    buf.writeFloatLE(0xcafebabe, 0);
    
    console.log(buf);
    
    // <Buffer 4f 4a fe bb>
    // <Buffer bb fe 4a 4f>