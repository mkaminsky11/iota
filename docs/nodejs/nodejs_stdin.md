## process.stdin

## 

A `Readable Stream` for stdin (on fd `0`).

Example of opening standard input and listening for both events:

    process.stdin.setEncoding('utf8');
    
    process.stdin.on('readable', function() {
      var chunk = process.stdin.read();
      if (chunk !== null) {
        process.stdout.write('data: ' + chunk);
      }
    });
    
    process.stdin.on('end', function() {
      process.stdout.write('end');
    });

As a Stream, `process.stdin` can also be used in "old" mode that is compatible
with scripts written for node prior v0.10\.
For more information see
[Stream compatibility][0].

In "old" Streams mode the stdin stream is paused by default, so one
must call `process.stdin.resume()` to read from it. Note also that calling
`process.stdin.resume()` itself would switch stream to "old" mode.

If you are starting a new project you should prefer a more recent "new" Streams
mode over "old" one.


[0]: stream.html#stream_compatibility_with_older_node_versions