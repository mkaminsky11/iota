## readable.wrap(stream)

## 

Versions of Node prior to v0.10 had streams that did not implement the
entire Streams API as it is today. (See "Compatibility" below for
more information.)

If you are using an older Node library that emits `'data'` events and
has a \[`pause()`\]\[\] method that is advisory only, then you can use the
`wrap()` method to create a \[Readable\]\[\] stream that uses the old stream
as its data source.

You will very rarely ever need to call this function, but it exists
as a convenience for interacting with old Node programs and libraries.

For example:

    var OldReader = require('./old-api-module.js').OldReader;
    var oreader = new OldReader;
    var Readable = require('stream').Readable;
    var myReader = new Readable().wrap(oreader);
    
    myReader.on('readable', function() {
      myReader.read(); // etc.
    });