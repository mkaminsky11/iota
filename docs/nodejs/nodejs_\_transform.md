## transform.\\\_transform(chunk, encoding, callback)

## 

Note: **This function MUST NOT be called directly.** It should be
implemented by child classes, and called by the internal Transform
class methods only.

All Transform stream implementations must provide a `_transform`
method to accept input and produce output.

`_transform` should do whatever has to be done in this specific
Transform class, to handle the bytes being written, and pass them off
to the readable portion of the interface. Do asynchronous I/O,
process things, and so on.

Call `transform.push(outputChunk)` 0 or more times to generate output
from this input chunk, depending on how much data you want to output
as a result of this chunk.

Call the callback function only when the current chunk is completely
consumed. Note that there may or may not be output as a result of any
particular input chunk. If you supply as the second argument to the
it will be passed to push method, in other words the following are
equivalent:

    transform.prototype._transform = function (data, encoding, callback) {
      this.push(data);
      callback();
    }
    
    transform.prototype._transform = function (data, encoding, callback) {
      callback(null, data);
    }

This method is prefixed with an underscore because it is internal to
the class that defines it, and should not be called directly by user
programs. However, you **are** expected to override this method in
your own extension classes.