## Warning: Don't Ignore Errors!

## 

Domain error handlers are not a substitute for closing down your
process when an error occurs.

By the very nature of how `throw` works in JavaScript, there is almost
never any way to safely "pick up where you left off", without leaking
references, or creating some other sort of undefined brittle state.

The safest way to respond to a thrown error is to shut down the
process. Of course, in a normal web server, you might have many
connections open, and it is not reasonable to abruptly shut those down
because an error was triggered by someone else.

The better approach is send an error response to the request that
triggered the error, while letting the others finish in their normal
time, and stop listening for new requests in that worker.

In this way, `domain` usage goes hand-in-hand with the cluster module,
since the master process can fork a new worker when a worker
encounters an error. For node programs that scale to multiple
machines, the terminating proxy or service registry can take note of
the failure, and react accordingly.

For example, this is not a good idea:

    // XXX WARNING!  BAD IDEA!
    
    var d = require('domain').create();
    d.on('error', function(er) {
      // The error won't crash the process, but what it does is worse!
      // Though we've prevented abrupt process restarting, we are leaking
      // resources like crazy if this ever happens.
      // This is no better than process.on('uncaughtException')!
      console.log('error, but oh well', er.message);
    });
    d.run(function() {
      require('http').createServer(function(req, res) {
        handleRequest(req, res);
      }).listen(PORT);
    });

By using the context of a domain, and the resilience of separating our
program into multiple worker processes, we can react more
appropriately, and handle errors with much greater safety.

    // Much better!
    
    var cluster = require('cluster');
    var PORT = +process.env.PORT || 1337;
    
    if (cluster.isMaster) {
      // In real life, you'd probably use more than just 2 workers,
      // and perhaps not put the master and worker in the same file.
      //
      // You can also of course get a bit fancier about logging, and
      // implement whatever custom logic you need to prevent DoS
      // attacks and other bad behavior.
      //
      // See the options in the cluster documentation.
      //
      // The important thing is that the master does very little,
      // increasing our resilience to unexpected errors.
    
      cluster.fork();
      cluster.fork();
    
      cluster.on('disconnect', function(worker) {
        console.error('disconnect!');
        cluster.fork();
      });
    
    } else {
      // the worker
      //
      // This is where we put our bugs!
    
      var domain = require('domain');
    
      // See the cluster documentation for more details about using
      // worker processes to serve requests.  How it works, caveats, etc.
    
      var server = require('http').createServer(function(req, res) {
        var d = domain.create();
        d.on('error', function(er) {
          console.error('error', er.stack);
    
          // Note: we're in dangerous territory!
          // By definition, something unexpected occurred,
          // which we probably didn't want.
          // Anything can happen now!  Be very careful!
    
          try {
            // make sure we close down within 30 seconds
            var killtimer = setTimeout(function() {
              process.exit(1);
            }, 30000);
            // But don't keep the process open just for that!
            killtimer.unref();
    
            // stop taking new requests.
            server.close();
    
            // Let the master know we're dead.  This will trigger a
            // 'disconnect' in the cluster master, and then it will fork
            // a new worker.
            cluster.worker.disconnect();
    
            // try to send an error to the request that triggered the problem
            res.statusCode = 500;
            res.setHeader('content-type', 'text/plain');
            res.end('Oops, there was a problem!\n');
          } catch (er2) {
            // oh well, not much we can do at this point.
            console.error('Error sending 500!', er2.stack);
          }
        });
    
        // Because req and res were created before this domain existed,
        // we need to explicitly add them.
        // See the explanation of implicit vs explicit binding below.
        d.add(req);
        d.add(res);
    
        // Now run the handler function in the domain.
        d.run(function() {
          handleRequest(req, res);
        });
      });
      server.listen(PORT);
    }
    
    // This part isn't important.  Just an example routing thing.
    // You'd put your fancy application logic here.
    function handleRequest(req, res) {
      switch(req.url) {
        case '/error':
          // We do some async stuff, and then...
          setTimeout(function() {
            // Whoops!
            flerb.bark();
          });
          break;
        default:
          res.end('ok');
      }
    }