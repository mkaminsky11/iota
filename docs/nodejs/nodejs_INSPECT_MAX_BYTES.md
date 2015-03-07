## INSPECT\_MAX\_BYTES Number, Default: 50 

## 

How many bytes will be returned when `buffer.inspect()` is called. This can
be overridden by user modules.

Note that this is a property on the buffer module returned by
`require('buffer')`, not on the Buffer global, or a buffer instance.