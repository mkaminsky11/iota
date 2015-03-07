## Exit Codes

## 

Node will normally exit with a `0` status code when no more async
operations are pending. The following status codes are used in other
cases:

* `1` **Uncaught Fatal Exception** - There was an uncaught exception,
and it was not handled by a domain or an `uncaughtException` event
handler.
* `2` - Unused (reserved by Bash for builtin misuse)
* `3` **Internal JavaScript Parse Error** - The JavaScript source code
internal in Node's bootstrapping process caused a parse error. This
is extremely rare, and generally can only happen during development
of Node itself.
* `4` **Internal JavaScript Evaluation Failure** - The JavaScript
source code internal in Node's bootstrapping process failed to
return a function value when evaluated. This is extremely rare, and
generally can only happen during development of Node itself.
* `5` **Fatal Error** - There was a fatal unrecoverable error in V8\.
Typically a message will be printed to stderr with the prefix `FATAL
ERROR`.
* `6` **Non-function Internal Exception Handler** - There was an
uncaught exception, but the internal fatal exception handler
function was somehow set to a non-function, and could not be called.
* `7` **Internal Exception Handler Run-Time Failure** - There was an
uncaught exception, and the internal fatal exception handler
function itself threw an error while attempting to handle it. This
can happen, for example, if a `process.on('uncaughtException')` or
`domain.on('error')` handler throws an error.
* `8` - Unused. In previous versions of Node, exit code 8 sometimes
indicated an uncaught exception.
* `9` - **Invalid Argument** - Either an unknown option was specified,
or an option requiring a value was provided without a value.
* `10` **Internal JavaScript Run-Time Failure** - The JavaScript
source code internal in Node's bootstrapping process threw an error
when the bootstrapping function was called. This is extremely rare,
and generally can only happen during development of Node itself.
* `12` **Invalid Debug Argument** - The `--debug` and/or `--debug-brk`
options were set, but an invalid port number was chosen.
* `>128` **Signal Exits** - If Node receives a fatal signal such as
`SIGKILL` or `SIGHUP`, then its exit code will be `128` plus the
value of the signal code. This is a standard Unix practice, since
exit codes are defined to be 7-bit integers, and signal exits set
the high-order bit, and then contain the value of the signal code.