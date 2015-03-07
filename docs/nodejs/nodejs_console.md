## console

## 

For printing to stdout and stderr. Similar to the console object functions
provided by most web browsers, here the output is sent to stdout or stderr.

The console functions are synchronous when the destination is a terminal or
a file (to avoid lost messages in case of premature exit) and asynchronous
when it's a pipe (to avoid blocking for long periods of time).

That is, in the following example, stdout is non-blocking while stderr
is blocking:

    $ node script.js 2> error.log | tee info.log

In daily use, the blocking/non-blocking dichotomy is not something you
should worry about unless you log huge amounts of data.