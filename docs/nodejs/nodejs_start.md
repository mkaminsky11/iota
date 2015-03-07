## repl.start(options)

## 

Returns and starts a `REPLServer` instance, that inherits from 
\[Readline Interface\]\[\]. Accepts an "options" Object that takes 
the following values:

* `prompt` - the prompt and `stream` for all I/O. Defaults to `> `.
* 
`input` - the readable stream to listen to. Defaults to `process.stdin`.
* 
`output` - the writable stream to write readline data to. Defaults to
`process.stdout`.
* 
`terminal` - pass `true` if the `stream` should be treated like a TTY, and
have ANSI/VT100 escape codes written to it. Defaults to checking `isTTY`
on the `output` stream upon instantiation.
* 
`eval` - function that will be used to eval each given line. Defaults to
an async wrapper for `eval()`. See below for an example of a custom `eval`.
* 
`useColors` - a boolean which specifies whether or not the `writer` function
should output colors. If a different `writer` function is set then this does
nothing. Defaults to the repl's `terminal` value.
* 
`useGlobal` - if set to `true`, then the repl will use the `global` object,
instead of running scripts in a separate context. Defaults to `false`.
* 
`ignoreUndefined` - if set to `true`, then the repl will not output the
return value of command if it's `undefined`. Defaults to `false`.
* 
`writer` - the function to invoke for each command that gets evaluated which
returns the formatting (including coloring) to display. Defaults to
`util.inspect`.

You can use your own `eval` function if it has following signature:

    function eval(cmd, context, filename, callback) {
      callback(null, result);
    }

Multiple REPLs may be started against the same running instance of node. Each
will share the same global object but will have unique I/O.

Here is an example that starts a REPL on stdin, a Unix socket, and a TCP socket:

    var net = require("net"),
        repl = require("repl");
    
    connections = 0;
    
    repl.start({
      prompt: "node via stdin> ",
      input: process.stdin,
      output: process.stdout
    });
    
    net.createServer(function (socket) {
      connections += 1;
      repl.start({
        prompt: "node via Unix socket> ",
        input: socket,
        output: socket
      }).on('exit', function() {
        socket.end();
      })
    }).listen("/tmp/node-repl-sock");
    
    net.createServer(function (socket) {
      connections += 1;
      repl.start({
        prompt: "node via TCP socket> ",
        input: socket,
        output: socket
      }).on('exit', function() {
        socket.end();
      });
    }).listen(5001);

Running this program from the command line will start a REPL on stdin. Other
REPL clients may connect through the Unix socket or TCP socket. `telnet` is useful
for connecting to TCP sockets, and `socat` can be used to connect to both Unix and
TCP sockets.

By starting a REPL from a Unix socket-based server instead of stdin, you can
connect to a long-running node process without restarting it.

For an example of running a "full-featured" (`terminal`) REPL over
a `net.Server` and `net.Socket` instance, see: [https://gist.github.com/2209310][0]

For an example of running a REPL instance over `curl(1)`,
see: [https://gist.github.com/2053342][1]


[0]: https://gist.github.com/2209310
[1]: https://gist.github.com/2053342