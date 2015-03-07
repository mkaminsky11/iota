## request.end(\[data\]\[, encoding\]\[, callback\])

## 

Finishes sending the request. If any parts of the body are
unsent, it will flush them to the stream. If the request is
chunked, this will send the terminating `'0\r\n\r\n'`.

If `data` is specified, it is equivalent to calling
`request.write(data, encoding)` followed by `request.end(callback)`.

If `callback` is specified, it will be called when the request stream
is finished.