## Signal Events

## 

Emitted when the processes receives a signal. See sigaction(2) for a list of
standard POSIX signal names such as SIGINT, SIGHUP, etc.

Example of listening for `SIGINT`:

    // Start reading from stdin so we don't exit.
    process.stdin.resume();
    
    process.on('SIGINT', function() {
      console.log('Got SIGINT.  Press Control-D to exit.');
    });

An easy way to send the `SIGINT` signal is with `Control-C` in most terminal
programs.

Note:

* `SIGUSR1` is reserved by node.js to start the debugger. It's possible to
install a listener but that won't stop the debugger from starting.
* `SIGTERM` and `SIGINT` have default handlers on non-Windows platforms that resets
the terminal mode before exiting with code `128 + signal number`. If one of
these signals has a listener installed, its default behaviour will be removed
(node will no longer exit).
* `SIGPIPE` is ignored by default, it can have a listener installed.
* `SIGHUP` is generated on Windows when the console window is closed, and on other
platforms under various similar conditions, see signal(7). It can have a
listener installed, however node will be unconditionally terminated by Windows
about 10 seconds later. On non-Windows platforms, the default behaviour of
`SIGHUP` is to terminate node, but once a listener has been installed its
default behaviour will be removed.
* `SIGTERM` is not supported on Windows, it can be listened on.
* `SIGINT` from the terminal is supported on all platforms, and can usually be
generated with `CTRL+C` (though this may be configurable). It is not generated
when terminal raw mode is enabled.
* `SIGBREAK` is delivered on Windows when `CTRL+BREAK` is pressed, on non-Windows
platforms it can be listened on, but there is no way to send or generate it.
* `SIGWINCH` is delivered when the console has been resized. On Windows, this will
only happen on write to the console when the cursor is being moved, or when a
readable tty is used in raw mode.
* `SIGKILL` cannot have a listener installed, it will unconditionally terminate
node on all platforms.
* `SIGSTOP` cannot have a listener installed.

Note that Windows does not support sending Signals, but node offers some
emulation with `process.kill()`, and `child_process.kill()`:
- Sending signal `0` can be used to search for the existence of a process
- Sending `SIGINT`, `SIGTERM`, and `SIGKILL` cause the unconditional exit of the
target process.