## Event: 'finish'

## 

`function () { }`

Emitted when the response has been sent. More specifically, this event is
emitted when the last segment of the response headers and body have been
handed off to the operating system for transmission over the network. It
does not imply that the client has received anything yet.

After this event, no more events will be emitted on the response object.