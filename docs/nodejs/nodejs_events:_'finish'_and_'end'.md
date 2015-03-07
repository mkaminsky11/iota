## Events: 'finish' and 'end'

## 

The \[`finish`\]\[\] and \[`end`\]\[\] events are from the parent Writable
and Readable classes respectively. The `finish` event is fired after
`.end()` is called and all chunks have been processed by `_transform`,
`end` is fired after all data has been output which is after the callback
in `_flush` has been called.

#### Example: `SimpleProtocol` parser v2

The example above of a simple protocol parser can be implemented
simply by using the higher level \[Transform\]\[\] stream class, similar to
the `parseHeader` and `SimpleProtocol v1` examples above.

In this example, rather than providing the input as an argument, it
would be piped into the parser, which is a more idiomatic Node stream
approach.

    var util = require('util');
    var Transform = require('stream').Transform;
    util.inherits(SimpleProtocol, Transform);
    
    function SimpleProtocol(options) {
      if (!(this instanceof SimpleProtocol))
        return new SimpleProtocol(options);
    
      Transform.call(this, options);
      this._inBody = false;
      this._sawFirstCr = false;
      this._rawHeader = [];
      this.header = null;
    }
    
    SimpleProtocol.prototype._transform = function(chunk, encoding, done) {
      if (!this._inBody) {
        // check if the chunk has a \n\n
        var split = -1;
        for (var i = 0; i < chunk.length; i++) {
          if (chunk[i] === 10) { // '\n'
            if (this._sawFirstCr) {
              split = i;
              break;
            } else {
              this._sawFirstCr = true;
            }
          } else {
            this._sawFirstCr = false;
          }
        }
    
        if (split === -1) {
          // still waiting for the \n\n
          // stash the chunk, and try again.
          this._rawHeader.push(chunk);
        } else {
          this._inBody = true;
          var h = chunk.slice(0, split);
          this._rawHeader.push(h);
          var header = Buffer.concat(this._rawHeader).toString();
          try {
            this.header = JSON.parse(header);
          } catch (er) {
            this.emit('error', new Error('invalid simple protocol data'));
            return;
          }
          // and let them know that we are done parsing the header.
          this.emit('header', this.header);
    
          // now, because we got some extra data, emit this first.
          this.push(chunk.slice(split));
        }
      } else {
        // from there on, just provide the data to our consumer as-is.
        this.push(chunk);
      }
      done();
    };
    
    // Usage:
    // var parser = new SimpleProtocol();
    // source.pipe(parser)
    // Now parser is a readable stream that will emit 'header'
    // with the parsed header data.