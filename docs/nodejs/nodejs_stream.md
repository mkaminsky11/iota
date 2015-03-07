## Stream

## 

A stream is an abstract interface implemented by various objects in
Node. For example a [request to an HTTP
server][0] is a stream, as is
\[stdout\]\[\]. Streams are readable, writable, or both. All streams are
instances of \[EventEmitter\]\[\]

You can load the Stream base classes by doing `require('stream')`.
There are base classes provided for \[Readable\]\[\] streams, \[Writable\]\[\]
streams, \[Duplex\]\[\] streams, and \[Transform\]\[\] streams.

This document is split up into 3 sections. The first explains the
parts of the API that you need to be aware of to use streams in your
programs. If you never implement a streaming API yourself, you can
stop there.

The second section explains the parts of the API that you need to use
if you implement your own custom streams yourself. The API is
designed to make this easy for you to do.

The third section goes into more depth about how streams work,
including some of the internal mechanisms and functions that you
should probably not modify unless you definitely know what you are
doing.


[0]: http.html#http_http_incomingmessage