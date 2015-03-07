## response.getHeader(name)

## 

Reads out a header that's already been queued but not sent to the client. Note
that the name is case insensitive. This can only be called before headers get
implicitly flushed.

Example:

    var contentType = response.getHeader('content-type');