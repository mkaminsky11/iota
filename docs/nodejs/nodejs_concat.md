## Class Method: Buffer.concat(list\[, totalLength\])

## 

Returns a buffer which is the result of concatenating all the buffers in
the list together.

If the list has no items, or if the totalLength is 0, then it returns a
zero-length buffer.

If the list has exactly one item, then the first item of the list is
returned.

If the list has more than one item, then a new Buffer is created.

If totalLength is not provided, it is read from the buffers in the list.
However, this adds an additional loop to the function, so it is faster
to provide the length explicitly.