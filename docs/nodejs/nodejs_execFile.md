## child\_process.execFile(file\[, args\]\[, options\]\[, callback\])

## 

This is similar to `child_process.exec()` except it does not execute a
subshell but rather the specified file directly. This makes it slightly
leaner than `child_process.exec`. It has the same options.