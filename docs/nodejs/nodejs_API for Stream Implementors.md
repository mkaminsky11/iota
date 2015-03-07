## API for Stream Implementors

## 

To implement any sort of stream, the pattern is the same:

1. Extend the appropriate parent class in your own subclass. (The
\[`util.inherits`\]\[\] method is particularly helpful for this.)
2. Call the appropriate parent class constructor in your constructor,
to be sure that the internal mechanisms are set up properly.
3. Implement one or more specific methods, as detailed below.

The class to extend and the method(s) to implement depend on the sort
of stream class you are writing:

Use-case

Class

Method(s) to implement

Reading only

[Readable][0]

`[_read][]`

Writing only

[Writable][1]

`[_write][]`

Reading and writing

[Duplex][2]

`[_read][]`, `[_write][]`

Operate on written data, then read the result

[Transform][3]

`_transform`, `_flush`

In your implementation code, it is very important to never call the
methods described in \[API for Stream Consumers\]\[\] above. Otherwise, you
can potentially cause adverse side effects in programs that consume
your streaming interfaces.


[0]: #stream_class_stream_readable_1
[1]: #stream_class_stream_writable_1
[2]: #stream_class_stream_duplex_1
[3]: #stream_class_stream_transform_1