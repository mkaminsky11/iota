## readable.unshift(chunk)

## 

This is useful in certain cases where a stream is being consumed by a
parser, which needs to "un-consume" some data that it has
optimistically pulled out of the source, so that the stream can be
passed on to some other party.

If you find that you must often call `stream.unshift(chunk)` in your
programs, consider implementing a \[Transform\]\[\] stream instead. (See API
for Stream Implementors, below.)

    // Pull off a header delimited by \n\n
    // use unshift() if we get too much
    // Call the callback with (error, header, stream)
    var StringDecoder = require('string_decoder').StringDecoder;
    function parseHeader(stream, callback) {
      stream.on('error', callback);
      stream.on('readable', onReadable);
      var decoder = new StringDecoder('utf8');
      var header = '';
      function onReadable() {
        var chunk;
        while (null !== (chunk = stream.read())) {
          var str = decoder.write(chunk);
          if (str.match(/\n\n/)) {
            // found the header boundary
            var split = str.split(/\n\n/);
            header += split.shift();
            var remaining = split.join('\n\n');
            var buf = new Buffer(remaining, 'utf8');
            if (buf.length)
              stream.unshift(buf);
            stream.removeListener('error', callback);
            stream.removeListener('readable', onReadable);
            // now the body of the message can be read from the stream.
            callback(null, header, stream);
          } else {
            // still reading the header.
            header += str;
          }
        }
      }
    }