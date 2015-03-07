## Event: 'exit'

## 

Emitted when the process is about to exit. There is no way to prevent the
exiting of the event loop at this point, and once all `exit` listeners have
finished running the process will exit. Therefore you **must** only perform
**synchronous** operations in this handler. This is a good hook to perform
checks on the module's state (like for unit tests). The callback takes one
argument, the code the process is exiting with.

Example of listening for `exit`:

    process.on('exit', function(code) {
      // do *NOT* do this
      setTimeout(function() {
        console.log('This will not run');
      }, 0);
      console.log('About to exit with code:', code);
    });