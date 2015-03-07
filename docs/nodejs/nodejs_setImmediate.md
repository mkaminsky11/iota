## setImmediate(callback\[, arg\]\[, ...\])

## 

To schedule the "immediate" execution of `callback` after I/O events
callbacks and before `setTimeout` and `setInterval` . Returns an
`immediateObject` for possible use with `clearImmediate()`. Optionally you
can also pass arguments to the callback.

Callbacks for immediates are queued in the order in which they were created.
The entire callback queue is processed every event loop iteration. If you queue
an immediate from inside an executing callback, that immediate won't fire
until the next event loop iteration.