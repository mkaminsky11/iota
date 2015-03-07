## message.httpVersion

## 

In case of server request, the HTTP version sent by the client. In the case of
client response, the HTTP version of the connected-to server.
Probably either `'1.1'` or `'1.0'`.

Also `response.httpVersionMajor` is the first integer and
`response.httpVersionMinor` is the second.