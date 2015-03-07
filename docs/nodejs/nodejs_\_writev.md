## writable.\\\_writev(chunks, callback)

## 

Note: **This function MUST NOT be called directly.** It may be
implemented by child classes, and called by the internal Writable
class methods only.

This function is completely optional to implement. In most cases it is
unnecessary. If implemented, it will be called with all the chunks
that are buffered in the write queue.