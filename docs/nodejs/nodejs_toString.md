## buf.toString(\[encoding\]\[, start\]\[, end\])

## 

Decodes and returns a string from buffer data encoded using the specified
character set encoding. If `encoding` is `undefined` or `null`, then `encoding`
defaults to `'utf8'. The `start` and `end` parameters default to `0` and
`buffer.length` when `undefined\`.

    buf = new Buffer(26);
    for (var i = 0 ; i < 26 ; i++) {
      buf[i] = i + 97; // 97 is ASCII a
    }
    buf.toString('ascii'); // outputs: abcdefghijklmnopqrstuvwxyz
    buf.toString('ascii',0,5); // outputs: abcde
    buf.toString('utf8',0,5); // outputs: abcde
    buf.toString(undefined,0,5); // encoding defaults to 'utf8', outputs abcde

See `buffer.write()` example, above.