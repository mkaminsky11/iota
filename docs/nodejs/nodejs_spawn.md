## child\_process.spawn(command\[, args\]\[, options\])

## 

Launches a new process with the given `command`, with command line arguments in `args`.
If omitted, `args` defaults to an empty Array.

The third argument is used to specify additional options, with these defaults:

    { cwd: undefined,
      env: process.env
    }

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory.

Use `env` to specify environment variables that will be visible to the new
process, the default is `process.env`.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the exit code:

    var spawn = require('child_process').spawn,
        ls    = spawn('ls', ['-lh', '/usr']);
    
    ls.stdout.on('data', function (data) {
      console.log('stdout: ' + data);
    });
    
    ls.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });
    
    ls.on('close', function (code) {
      console.log('child process exited with code ' + code);
    });

Example: A very elaborate way to run 'ps ax | grep ssh'

    var spawn = require('child_process').spawn,
        ps    = spawn('ps', ['ax']),
        grep  = spawn('grep', ['ssh']);
    
    ps.stdout.on('data', function (data) {
      grep.stdin.write(data);
    });
    
    ps.stderr.on('data', function (data) {
      console.log('ps stderr: ' + data);
    });
    
    ps.on('close', function (code) {
      if (code !== 0) {
        console.log('ps process exited with code ' + code);
      }
      grep.stdin.end();
    });
    
    grep.stdout.on('data', function (data) {
      console.log('' + data);
    });
    
    grep.stderr.on('data', function (data) {
      console.log('grep stderr: ' + data);
    });
    
    grep.on('close', function (code) {
      if (code !== 0) {
        console.log('grep process exited with code ' + code);
      }
    });