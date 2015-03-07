## domain.run(fn)

## 

Run the supplied function in the context of the domain, implicitly
binding all event emitters, timers, and lowlevel requests that are
created in that context.

This is the most basic way to use a domain.

Example:

    var d = domain.create();
    d.on('error', function(er) {
      console.error('Caught error!', er);
    });
    d.run(function() {
      process.nextTick(function() {
        setTimeout(function() { // simulating some various async stuff
          fs.open('non-existent file', 'r', function(er, fd) {
            if (er) throw er;
            // proceed...
          });
        }, 100);
      });
    });

In this example, the `d.on('error')` handler will be triggered, rather
than crashing the program.