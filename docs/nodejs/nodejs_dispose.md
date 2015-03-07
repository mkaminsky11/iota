## smalloc.dispose(obj)

## 

Free memory that has been allocated to an object via `smalloc.alloc`.

    var a = {};
    smalloc.alloc(3, a);
    
    // { '0': 0, '1': 0, '2': 0 }
    
    smalloc.dispose(a);
    
    // {}

This is useful to reduce strain on the garbage collector, but developers must be
careful. Cryptic errors may arise in applications that are difficult to trace.

    var a = smalloc.alloc(4);
    var b = smalloc.alloc(4);
    
    // perform this somewhere along the line
    smalloc.dispose(b);
    
    // now trying to copy some data out
    smalloc.copyOnto(b, 2, a, 0, 2);
    
    // now results in:
    // RangeError: copy_length > source_length

After `dispose()` is called object still behaves as one with external data, for
example `smalloc.hasExternalData()` returns `true`.
`dispose()` does not support Buffers, and will throw if passed.