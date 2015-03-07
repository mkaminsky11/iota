## Compatibility with Older Node Versions

## 

In versions of Node prior to v0.10, the Readable stream interface was
simpler, but also less powerful and less useful.

* Rather than waiting for you to call the `read()` method, `'data'`
events would start emitting immediately. If you needed to do some
I/O to decide how to handle data, then you had to store the chunks
in some kind of buffer so that they would not be lost.
* The \[`pause()`\]\[\] method was advisory, rather than guaranteed. This
meant that you still had to be prepared to receive `'data'` events
even when the stream was in a paused state.

In Node v0.10, the Readable class described below was added. For
backwards compatibility with older Node programs, Readable streams
switch into "flowing mode" when a `'data'` event handler is added, or
when the \[`resume()`\]\[\] method is called. The effect is that, even if
you are not using the new `read()` method and `'readable'` event, you
no longer have to worry about losing `'data'` chunks.

Most programs will continue to function normally. However, this
introduces an edge case in the following conditions:

* No \[`'data'` event\]\[\] handler is added.
* The \[`resume()`\]\[\] method is never called.
* The stream is not piped to any writable destination.

For example, consider the following code:

    // WARNING!  BROKEN!
    net.createServer(function(socket) {
    
      // we add an 'end' method, but never consume the data
      socket.on('end', function() {
        // It will never get here.
        socket.end('I got your message (but didnt read it)\n');
      });
    
    }).listen(1337);

In versions of node prior to v0.10, the incoming message data would be
simply discarded. However, in Node v0.10 and beyond, the socket will
remain paused forever.

The workaround in this situation is to call the `resume()` method to
start the flow of data:

    // Workaround
    net.createServer(function(socket) {
    
      socket.on('end', function() {
        socket.end('I got your message (but didnt read it)\n');
      });
    
      // start the flow of data, discarding it.
      socket.resume();
    
    }).listen(1337);

In addition to new Readable streams switching into flowing mode,
pre-v0.10 style streams can be wrapped in a Readable class using the
`wrap()` method.