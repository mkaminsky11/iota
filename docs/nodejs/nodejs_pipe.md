## Event: 'pipe'

## 

This is emitted whenever the `pipe()` method is called on a readable
stream, adding this writable to its set of destinations.

    var writer = getWritableStreamSomehow();
    var reader = getReadableStreamSomehow();
    writer.on('pipe', function(src) {
      console.error('something is piping into the writer');
      assert.equal(src, reader);
    });
    reader.pipe(writer);