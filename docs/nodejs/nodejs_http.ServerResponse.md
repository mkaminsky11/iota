## Class: http.ServerResponse

## 

This object is created internally by a HTTP server--not by the user. It is
passed as the second parameter to the `'request'` event.

The response implements the \[Writable Stream\]\[\] interface. This is an
\[EventEmitter\]\[\] with the following events: