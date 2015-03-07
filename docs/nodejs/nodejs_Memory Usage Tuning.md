## Memory Usage Tuning

## 

From `zlib/zconf.h`, modified to node's usage:

The memory requirements for deflate are (in bytes):

    (1 << (windowBits+2)) +  (1 << (memLevel+9))

that is: 128K for windowBits=15 + 128K for memLevel = 8
(default values) plus a few kilobytes for small objects.

For example, if you want to reduce
the default memory requirements from 256K to 128K, set the options to:

    { windowBits: 14, memLevel: 7 }

Of course this will generally degrade compression (there's no free lunch).

The memory requirements for inflate are (in bytes)

    1 << windowBits

that is, 32K for windowBits=15 (default value) plus a few kilobytes
for small objects.

This is in addition to a single internal output slab buffer of size
`chunkSize`, which defaults to 16K.

The speed of zlib compression is affected most dramatically by the
`level` setting. A higher level will result in better compression, but
will take longer to complete. A lower level will result in less
compression, but will be much faster.

In general, greater memory usage options will mean that node has to make
fewer calls to zlib, since it'll be able to process more data in a
single `write` operation. So, this is another factor that affects the
speed, at the cost of memory usage.