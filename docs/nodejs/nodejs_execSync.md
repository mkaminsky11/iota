## child\_process.execSync(command\[, options\])

## 

`execSync` will not return until the child process has fully closed. When a
timeout has been encountered and `killSignal` is sent, the method won't return
until the process has completely exited. That is to say, if the process handles
the `SIGTERM` signal and doesn't exit, your process will wait until the child
process has exited.

If the process times out, or has a non-zero exit code, this method **_will_**
throw. The `Error` object will contain the entire result from
[`child_process.spawnSync`][0]


[0]: #child_process_child_process_spawnsync_command_args_options