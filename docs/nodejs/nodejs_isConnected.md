## worker.isConnected()

## 

This function returns `true` if the worker is connected to its master via its IPC
channel, `false` otherwise. A worker is connected to its master after it's been
created. It is disconnected after the `disconnect` event is emitted.