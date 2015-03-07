## options.stdio

## 

As a shorthand, the `stdio` argument may also be one of the following
strings:

* `'pipe'` - `['pipe', 'pipe', 'pipe']`, this is the default value
* `'ignore'` - `['ignore', 'ignore', 'ignore']`
* `'inherit'` - `[process.stdin, process.stdout, process.stderr]` or `[0,1,2]`

Otherwise, the 'stdio' option to `child_process.spawn()` is an array where each
index corresponds to a fd in the child. The value is one of the following:

1. `'pipe'` - Create a pipe between the child process and the parent process.
The parent end of the pipe is exposed to the parent as a property on the
`child_process` object as `ChildProcess.stdio[fd]`. Pipes created for
fds 0 - 2 are also available as ChildProcess.stdin, ChildProcess.stdout
and ChildProcess.stderr, respectively.
2. `'ipc'` - Create an IPC channel for passing messages/file descriptors
between parent and child. A ChildProcess may have at most _one_ IPC stdio
file descriptor. Setting this option enables the ChildProcess.send() method.
If the child writes JSON messages to this file descriptor, then this will
trigger ChildProcess.on('message'). If the child is a Node.js program, then
the presence of an IPC channel will enable process.send() and
process.on('message').
3. `'ignore'` - Do not set this file descriptor in the child. Note that Node
will always open fd 0 - 2 for the processes it spawns. When any of these is
ignored node will open `/dev/null` and attach it to the child's fd.
4. `Stream` object - Share a readable or writable stream that refers to a tty,
file, socket, or a pipe with the child process. The stream's underlying
file descriptor is duplicated in the child process to the fd that 
corresponds to the index in the `stdio` array. Note that the stream must
have an underlying descriptor (file streams do not until the `'open'`
event has occurred).
5. Positive integer - The integer value is interpreted as a file descriptor 
that is is currently open in the parent process. It is shared with the child
process, similar to how `Stream` objects can be shared.
6. `null`, `undefined` - Use default value. For stdio fds 0, 1 and 2 (in other
words, stdin, stdout, and stderr) a pipe is created. For fd 3 and up, the
default is `'ignore'`.

Example:

    var spawn = require('child_process').spawn;
    
    // Child will use parent's stdios
    spawn('prg', [], { stdio: 'inherit' });
    
    // Spawn child sharing only stderr
    spawn('prg', [], { stdio: ['pipe', 'pipe', process.stderr] });
    
    // Open an extra fd=4, to interact with programs present a
    // startd-style interface.
    spawn('prg', [], { stdio: ['pipe', null, null, null, 'pipe'] });