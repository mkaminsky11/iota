## fs.unwatchFile(filename\[, listener\])

## 

Stop watching for changes on `filename`. If `listener` is specified, only that
particular listener is removed. Otherwise, _all_ listeners are removed and you
have effectively stopped watching `filename`.

Calling `fs.unwatchFile()` with a filename that is not being watched is a
no-op, not an error.