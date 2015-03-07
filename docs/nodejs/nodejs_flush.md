## zlib.flush(\[kind\], callback)

## 

`kind` defaults to `zlib.Z_FULL_FLUSH`.

Flush pending data. Don't call this frivolously, premature flushes negatively
impact the effectiveness of the compression algorithm.