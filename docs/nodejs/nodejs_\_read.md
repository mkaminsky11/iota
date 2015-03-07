## readable.\\\_read(size)

## 

Note: **Implement this function, but do NOT call it directly.**

This function should NOT be called directly. It should be implemented
by child classes, and only called by the internal Readable class
methods.

All Readable stream implementations must provide a `_read` method to
fetch data from the underlying resource.

This method is prefixed with an underscore because it is internal to
the class that defines it, and should not be called directly by user
programs. However, you **are** expected to override this method in
your own extension classes.

When data is available, put it into the read queue by calling
`readable.push(chunk)`. If `push` returns false, then you should stop
reading. When `_read` is called again, you should start pushing more
data.

The `size` argument is advisory. Implementations where a "read" is a
single call that returns data can use this to know how much data to
fetch. Implementations where that is not relevant, such as TCP or
TLS, may ignore this argument, and simply provide data whenever it
becomes available. There is no need, for example to "wait" until
`size` bytes are available before calling \[`stream.push(chunk)`\]\[\].