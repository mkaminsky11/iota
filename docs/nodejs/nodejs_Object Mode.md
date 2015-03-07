## Object Mode

## 

Normally, Streams operate on Strings and Buffers exclusively.

Streams that are in **object mode** can emit generic JavaScript values
other than Buffers and Strings.

A Readable stream in object mode will always return a single item from
a call to `stream.read(size)`, regardless of what the size argument
is.

A Writable stream in object mode will always ignore the `encoding`
argument to `stream.write(data, encoding)`.

The special value `null` still retains its special value for object
mode streams. That is, for object mode readable streams, `null` as a
return value from `stream.read()` indicates that there is no more
data, and \[`stream.push(null)`\]\[\] will signal the end of stream data
(`EOF`).

No streams in Node core are object mode streams. This pattern is only
used by userland streaming libraries.

You should set `objectMode` in your stream child class constructor on
the options object. Setting `objectMode` mid-stream is not safe.

For Duplex streams `objectMode` can be set exclusively for readable or
writable side with `readableObjectMode` and `writableObjectMode`
respectively. These options can be used to implement parsers and
serializers with Transform streams.

    var util = require('util');
    var StringDecoder = require('string_decoder').StringDecoder;
    var Transform = require('stream').Transform;
    util.inherits(JSONParseStream, Transform);
    
    // Gets \n-delimited JSON string data, and emits the parsed objects
    function JSONParseStream() {
      if (!(this instanceof JSONParseStream))
        return new JSONParseStream();
    
      Transform.call(this, { readableObjectMode : true });
    
      this._buffer = '';
      this._decoder = new StringDecoder('utf8');
    }
    
    JSONParseStream.prototype._transform = function(chunk, encoding, cb) {
      this._buffer += this._decoder.write(chunk);
      // split on newlines
      var lines = this._buffer.split(/\r?\n/);
      // keep the last partial line buffered
      this._buffer = lines.pop();
      for (var l = 0; l < lines.length; l++) {
        var line = lines[l];
        try {
          var obj = JSON.parse(line);
        } catch (er) {
          this.emit('error', er);
          return;
        }
        // push the parsed object out to the readable consumer
        this.push(obj);
      }
      cb();
    };
    
    JSONParseStream.prototype._flush = function(cb) {
      // Just handle any leftover
      var rem = this._buffer.trim();
      if (rem) {
        try {
          var obj = JSON.parse(rem);
        } catch (er) {
          this.emit('error', er);
          return;
        }
        // push the parsed object out to the readable consumer
        this.push(obj);
      }
      cb();
    };