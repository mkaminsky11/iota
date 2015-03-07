## buf.copy(targetBuffer\[, targetStart\]\[, sourceStart\]\[, sourceEnd\])

## 

Copies data from a region of this buffer to a region in the target buffer even
if the target memory region overlaps with the source. If `undefined` the
`targetStart` and `sourceStart` parameters default to `0` while `sourceEnd`
defaults to `buffer.length`.

Example: build two Buffers, then copy `buf1` from byte 16 through byte 19
into `buf2`, starting at the 8th byte in `buf2`.

    buf1 = new Buffer(26);
    buf2 = new Buffer(26);
    
    for (var i = 0 ; i < 26 ; i++) {
      buf1[i] = i + 97; // 97 is ASCII a
      buf2[i] = 33; // ASCII !
    }
    
    buf1.copy(buf2, 8, 16, 20);
    console.log(buf2.toString('ascii', 0, 25));
    
    // !!!!!!!!qrst!!!!!!!!!!!!!

Example: Build a single buffer, then copy data from one region to an overlapping
region in the same buffer

    buf = new Buffer(26);
    
    for (var i = 0 ; i < 26 ; i++) {
      buf[i] = i + 97; // 97 is ASCII a
    }
    
    buf.copy(buf, 0, 4, 10);
    console.log(buf.toString());
    
    // efghijghijklmnopqrstuvwxyz