## Recent API Changes

## 

The Crypto module was added to Node before there was the concept of a
unified Stream API, and before there were Buffer objects for handling
binary data.

As such, the streaming classes don't have the typical methods found on
other Node classes, and many methods accepted and returned
Binary-encoded strings by default rather than Buffers. This was
changed to use Buffers by default instead.

This is a breaking change for some use cases, but not all.

For example, if you currently use the default arguments to the Sign
class, and then pass the results to the Verify class, without ever
inspecting the data, then it will continue to work as before. Where
you once got a binary string and then presented the binary string to
the Verify object, you'll now get a Buffer, and present the Buffer to
the Verify object.

However, if you were doing things with the string data that will not
work properly on Buffers (such as, concatenating them, storing in
databases, etc.), or you are passing binary strings to the crypto
functions without an encoding argument, then you will need to start
providing encoding arguments to specify which encoding you'd like to
use. To switch to the previous style of using binary strings by
default, set the `crypto.DEFAULT_ENCODING` field to 'binary'. Note
that new programs will probably expect buffers, so only use this as a
temporary measure.