## Event: 'resumeSession'

## 

`function (sessionId, callback) { }`

Emitted when client wants to resume previous TLS session. Event listener may
perform lookup in external storage using given `sessionId`, and invoke
`callback(null, sessionData)` once finished. If session can't be resumed
(i.e. doesn't exist in storage) one may call `callback(null, null)`. Calling
`callback(err)` will terminate incoming connection and destroy socket.

NOTE: adding this event listener will have an effect only on connections
established after addition of event listener.