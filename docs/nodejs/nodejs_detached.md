## options.detached

## 

If the `detached` option is set, the child process will be made the leader of a
new process group. This makes it possible for the child to continue running 
after the parent exits.

By default, the parent will wait for the detached child to exit. To prevent
the parent from waiting for a given `child`, use the `child.unref()` method,
and the parent's event loop will not include the child in its reference count.

Example of detaching a long-running process and redirecting its output to a
file:

     var fs = require('fs'),
         spawn = require('child_process').spawn,
         out = fs.openSync('./out.log', 'a'),
         err = fs.openSync('./out.log', 'a');
    
     var child = spawn('prg', [], {
       detached: true,
       stdio: [ 'ignore', out, err ]
     });
    
     child.unref();

When using the `detached` option to start a long-running process, the process
will not stay running in the background unless it is provided with a `stdio`
configuration that is not connected to the parent. If the parent's `stdio` is
inherited, the child will remain attached to the controlling terminal.