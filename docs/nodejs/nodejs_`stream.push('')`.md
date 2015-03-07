## stream.push('')

## 

Pushing a zero-byte string or Buffer (when not in \[Object mode\]\[\]) has an
interesting side effect. Because it _is_ a call to
\[`stream.push()`\]\[\], it will end the `reading` process. However, it
does _not_ add any data to the readable buffer, so there's nothing for
a user to consume.

Very rarely, there are cases where you have no data to provide now,
but the consumer of your stream (or, perhaps, another bit of your own
code) will know when to check again, by calling `stream.read(0)`. In
those cases, you _may_ call `stream.push('')`.

So far, the only use case for this functionality is in the
\[tls.CryptoStream\]\[\] class, which is deprecated in Node v0.12\. If you
find that you have to use `stream.push('')`, please consider another
approach, because it almost certainly indicates that something is
horribly wrong.