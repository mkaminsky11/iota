## buf.slice(\[start\]\[, end\])

## 

Returns a new buffer which references the same memory as the old, but offset
and cropped by the `start` (defaults to `0`) and `end` (defaults to
`buffer.length`) indexes. Negative indexes start from the end of the buffer.

**Modifying the new buffer slice will modify memory in the original buffer!**

Example: build a Buffer with the ASCII alphabet, take a slice, then modify one
byte from the original Buffer.

    var buf1 = new Buffer(26);
    
    for (var i = 0 ; i < 26 ; i++) {
      buf1[i] = i + 97; // 97 is ASCII a
    }
    
    var buf2 = buf1.slice(0, 3);
    console.log(buf2.toString('ascii', 0, buf2.length));
    buf1[0] = 33;
    console.log(buf2.toString('ascii', 0, buf2.length));
    
    // abc
    // !bc