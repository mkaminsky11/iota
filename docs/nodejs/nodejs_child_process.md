## Child Process

## 

Node provides a tri-directional `popen(3)` facility through the
`child_process` module.

It is possible to stream data through a child's `stdin`, `stdout`, and
`stderr` in a fully non-blocking way. (Note that some programs use
line-buffered I/O internally. That doesn't affect node.js but it means
data you send to the child process may not be immediately consumed.)

To create a child process use `require('child_process').spawn()` or
`require('child_process').fork()`. The semantics of each are slightly
different, and explained [below][0].

For scripting purposes you may find the
[synchronous counterparts][1] more
convenient.


[0]: #child_process_asynchronous_process_creation
[1]: #child_process_synchronous_process_creation