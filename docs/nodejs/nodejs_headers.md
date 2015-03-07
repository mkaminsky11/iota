## message.headers

## 

The request/response headers object.

Read only map of header names and values. Header names are lower-cased.
Example:

    // Prints something like:
    //
    // { 'user-agent': 'curl/7.22.0',
    //   host: '127.0.0.1:8000',
    //   accept: '*/*' }
    console.log(request.headers);