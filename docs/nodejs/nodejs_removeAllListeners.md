## emitter.removeAllListeners(\[event\])

## 

Removes all listeners, or those of the specified event. It's not a good idea to
remove listeners that were added elsewhere in the code, especially when it's on
an emitter that you didn't create (e.g. sockets or file streams).

Returns emitter, so calls can be chained.