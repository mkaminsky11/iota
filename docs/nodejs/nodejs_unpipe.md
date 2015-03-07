## Event: 'unpipe'

## 

This is emitted whenever the \[`unpipe()`\]\[\] method is called on a
readable stream, removing this writable from its set of destinations.

    var writer = getWritableStreamSomehow();
    var reader = getReadableStreamSomehow();
    writer.on('unpipe', function(src) {
      console.error('something has stopped piping into the writer');
      assert.equal(src, reader);
    });
    reader.pipe(writer);
    reader.unpipe(writer);