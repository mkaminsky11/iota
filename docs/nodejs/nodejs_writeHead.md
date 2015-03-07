## response.writeHead(statusCode\[, statusMessage\]\[, headers\])

## 

Sends a response header to the request. The status code is a 3-digit HTTP
status code, like `404`. The last argument, `headers`, are the response headers.
Optionally one can give a human-readable `statusMessage` as the second
argument.

Example:

    var body = 'hello world';
    response.writeHead(200, {
      'Content-Length': body.length,
      'Content-Type': 'text/plain' });

This method must only be called once on a message and it must
be called before \[response.end()\]\[\] is called.

If you call \[response.write()\]\[\] or \[response.end()\]\[\] before calling this, the
implicit/mutable headers will be calculated and call this function for you.

Note that Content-Length is given in bytes not characters. The above example
works because the string `'hello world'` contains only single byte characters.
If the body contains higher coded characters then `Buffer.byteLength()`
should be used to determine the number of bytes in a given encoding.
And Node does not check whether Content-Length and the length of the body
which has been transmitted are equal or not.