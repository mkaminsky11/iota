## buf.writeDoubleLE(value, offset\[, noAssert\])

## 

Writes `value` to the buffer at the specified offset with specified endian
format. Note, `value` must be a valid 64 bit double.

Set `noAssert` to true to skip validation of `value` and `offset`. This means
that `value` may be too large for the specific function and `offset` may be
beyond the end of the buffer leading to the values being silently dropped. This
should not be used unless you are certain of correctness. Defaults to `false`.

Example:

    var buf = new Buffer(8);
    buf.writeDoubleBE(0xdeadbeefcafebabe, 0);
    
    console.log(buf);
    
    buf.writeDoubleLE(0xdeadbeefcafebabe, 0);
    
    console.log(buf);
    
    // <Buffer 43 eb d5 b7 dd f9 5f d7>
    // <Buffer d7 5f f9 dd b7 d5 eb 43>