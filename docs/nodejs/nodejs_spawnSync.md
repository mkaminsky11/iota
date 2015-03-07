## child\_process.spawnSync(command\[, args\]\[, options\])

## 

`spawnSync` will not return until the child process has fully closed. When a
timeout has been encountered and `killSignal` is sent, the method won't return
until the process has completely exited. That is to say, if the process handles
the `SIGTERM` signal and doesn't exit, your process will wait until the child
process has exited.