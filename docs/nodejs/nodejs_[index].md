## buf\[index\]

## 

Get and set the octet at `index`. The values refer to individual bytes,
so the legal range is between `0x00` and `0xFF` hex or `0` and `255`.

Example: copy an ASCII string into a buffer, one byte at a time:

    str = "node.js";
    buf = new Buffer(str.length);
    
    for (var i = 0; i < str.length ; i++) {
      buf[i] = str.charCodeAt(i);
    }
    
    console.log(buf);
    
    // node.js