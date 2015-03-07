## process.stdout

## 

A `Writable Stream` to `stdout` (on fd `1`).

Example: the definition of `console.log`

    console.log = function(d) {
      process.stdout.write(d + '\n');
    };

`process.stderr` and `process.stdout` are unlike other streams in Node in
that they cannot be closed (`end()` will throw), they never emit the `finish`
event and that writes are usually blocking.

* They are blocking in the case that they refer to regular files or TTY file
descriptors.
* In the case they refer to pipes:
  * They are blocking in Linux/Unix.
  * They are non-blocking like other streams in Windows.

To check if Node is being run in a TTY context, read the `isTTY` property
on `process.stderr`, `process.stdout`, or `process.stdin`:

    $ node -p "Boolean(process.stdin.isTTY)"
    true
    $ echo "foo" | node -p "Boolean(process.stdin.isTTY)"
    false
    
    $ node -p "Boolean(process.stdout.isTTY)"
    true
    $ node -p "Boolean(process.stdout.isTTY)" | cat
    false

See [the tty docs][0] for more information.


[0]: tty.html#tty_tty