## EventEmitter.defaultMaxListeners

## 

`emitter.setMaxListeners(n)` sets the maximum on a per-instance basis.
This class property lets you set it for _all_ `EventEmitter` instances,
current and future, effective immediately. Use with care.

Note that `emitter.setMaxListeners(n)` still has precedence over
`EventEmitter.defaultMaxListeners`.