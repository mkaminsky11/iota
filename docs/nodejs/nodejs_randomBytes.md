## crypto.randomBytes(size\[, callback\])

## 

Generates cryptographically strong pseudo-random data. Usage:

    // async
    crypto.randomBytes(256, function(ex, buf) {
      if (ex) throw ex;
      console.log('Have %d bytes of random data: %s', buf.length, buf);
    });
    
    // sync
    try {
      var buf = crypto.randomBytes(256);
      console.log('Have %d bytes of random data: %s', buf.length, buf);
    } catch (ex) {
      // handle error
      // most likely, entropy sources are drained
    }

NOTE: Will throw error or invoke callback with error, if there is not enough
accumulated entropy to generate cryptographically strong data. In other words,
`crypto.randomBytes` without callback will not block even if all entropy sources
are drained.