## process.nextTick(callback)

## 

Once the current event loop turn runs to completion, call the callback
function.

This is _not_ a simple alias to `setTimeout(fn, 0)`, it's much more
efficient. It runs before any additional I/O events (including
timers) fire in subsequent ticks of the event loop.

    console.log('start');
    process.nextTick(function() {
      console.log('nextTick callback');
    });
    console.log('scheduled');
    // Output:
    // start
    // scheduled
    // nextTick callback

This is important in developing APIs where you want to give the user the
chance to assign event handlers after an object has been constructed,
but before any I/O has occurred.

    function MyThing(options) {
      this.setupOptions(options);
    
      process.nextTick(function() {
        this.startDoingStuff();
      }.bind(this));
    }
    
    var thing = new MyThing();
    thing.getReadyForStuff();
    
    // thing.startDoingStuff() gets called now, not before.

It is very important for APIs to be either 100% synchronous or 100%
asynchronous. Consider this example:

    // WARNING!  DO NOT USE!  BAD UNSAFE HAZARD!
    function maybeSync(arg, cb) {
      if (arg) {
        cb();
        return;
      }
    
      fs.stat('file', cb);
    }

This API is hazardous. If you do this:

    maybeSync(true, function() {
      foo();
    });
    bar();

then it's not clear whether `foo()` or `bar()` will be called first.

This approach is much better:

    function definitelyAsync(arg, cb) {
      if (arg) {
        process.nextTick(cb);
        return;
      }
    
      fs.stat('file', cb);
    }

Note: the nextTick queue is completely drained on each pass of the
event loop **before** additional I/O is processed. As a result,
recursively setting nextTick callbacks will block any I/O from
happening, just like a `while(true);` loop.