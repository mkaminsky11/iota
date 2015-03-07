## Class: SlowBuffer

## 

Returns an un-pooled `Buffer`.

In order to avoid the garbage collection overhead of creating many individually
allocated Buffers, by default allocations under 4KB are sliced from a single
larger allocated object. This approach improves both performance and memory
usage since v8 does not need to track and cleanup as many `Persistent` objects.

In the case where a developer may need to retain a small chunk of memory from a
pool for an indeterminate amount of time it may be appropriate to create an
un-pooled Buffer instance using SlowBuffer and copy out the relevant bits.

    // need to keep around a few small chunks of memory
    var store = [];
    
    socket.on('readable', function() {
      var data = socket.read();
      // allocate for retained data
      var sb = new SlowBuffer(10);
      // copy the data into the new allocation
      data.copy(sb, 0, 0, 10);
      store.push(sb);
    });

Though this should used sparingly and only be a last resort _after_ a developer
has actively observed undue memory retention in their applications.