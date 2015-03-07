## util.debuglog(section)

## 

This is used to create a function which conditionally writes to stderr
based on the existence of a `NODE_DEBUG` environment variable. If the
`section` name appears in that environment variable, then the returned
function will be similar to `console.error()`. If not, then the
returned function is a no-op.

For example:

    var debuglog = util.debuglog('foo');
    
    var bar = 123;
    debuglog('hello from foo [%d]', bar);

If this program is run with `NODE_DEBUG=foo` in the environment, then
it will output something like:

    FOO 3245: hello from foo [123]

where `3245` is the process id. If it is not run with that
environment variable set, then it will not print anything.

You may separate multiple `NODE_DEBUG` environment variables with a
comma. For example, `NODE_DEBUG=fs,net,tls`.