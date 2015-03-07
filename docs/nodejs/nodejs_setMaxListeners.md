## emitter.setMaxListeners(n)

## 

By default EventEmitters will print a warning if more than 10 listeners are
added for a particular event. This is a useful default which helps finding
memory leaks. Obviously not all Emitters should be limited to 10\. This function
allows that to be increased. Set to zero for unlimited.

Returns emitter, so calls can be chained.