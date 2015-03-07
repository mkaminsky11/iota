## Event: 'setup'

## 

Emitted every time `.setupMaster()` is called.

The `settings` object is the `cluster.settings` object at the time
`.setupMaster()` was called and is advisory only, since multiple calls to
`.setupMaster()` can be made in a single tick.

If accuracy is important, use `cluster.settings`.