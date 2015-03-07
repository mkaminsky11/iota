## pid {Integer} 

## 

The PID of the child process.

Example:

    var spawn = require('child_process').spawn,
        grep  = spawn('grep', ['ssh']);
    
    console.log('Spawned child pid: ' + grep.pid);
    grep.stdin.end();