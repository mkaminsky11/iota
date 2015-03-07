## Event: 'newSession'

## 

`function (sessionId, sessionData, callback) { }`

Emitted on creation of TLS session. May be used to store sessions in external
storage. `callback` must be invoked eventually, otherwise no data will be
sent or received from secure connection.

NOTE: adding this event listener will have an effect only on connections
established after addition of event listener.