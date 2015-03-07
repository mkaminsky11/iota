## readable.push(chunk\[, encoding\])

## 

Note: **This function should be called by Readable implementors, NOT
by consumers of Readable streams.**

The `_read()` function will not be called again until at least one
`push(chunk)` call is made.

The `Readable` class works by putting data into a read queue to be
pulled out later by calling the `read()` method when the `'readable'`
event fires.

The `push()` method will explicitly insert some data into the read
queue. If it is called with `null` then it will signal the end of the
data (EOF).

This API is designed to be as flexible as possible. For example,
you may be wrapping a lower-level source which has some sort of
pause/resume mechanism, and a data callback. In those cases, you
could wrap the low-level source object by doing something like this:

    // source is an object with readStop() and readStart() methods,
    // and an `ondata` member that gets called when it has data, and
    // an `onend` member that gets called when the data is over.
    
    util.inherits(SourceWrapper, Readable);
    
    function SourceWrapper(options) {
      Readable.call(this, options);
    
      this._source = getLowlevelSourceObject();
      var self = this;
    
      // Every time there's data, we push it into the internal buffer.
      this._source.ondata = function(chunk) {
        // if push() returns false, then we need to stop reading from source
        if (!self.push(chunk))
          self._source.readStop();
      };
    
      // When the source ends, we push the EOF-signaling `null` chunk
      this._source.onend = function() {
        self.push(null);
      };
    }
    
    // _read will be called when the stream wants to pull more data in
    // the advisory size argument is ignored in this case.
    SourceWrapper.prototype._read = function(size) {
      this._source.readStart();
    };