## API for Stream Consumers

## 

Streams can be either \[Readable\]\[\], \[Writable\]\[\], or both (\[Duplex\]\[\]).

All streams are EventEmitters, but they also have other custom methods
and properties depending on whether they are Readable, Writable, or
Duplex.

If a stream is both Readable and Writable, then it implements all of
the methods and events below. So, a \[Duplex\]\[\] or \[Transform\]\[\] stream is
fully described by this API, though their implementation may be
somewhat different.

It is not necessary to implement Stream interfaces in order to consume
streams in your programs. If you **are** implementing streaming
interfaces in your own program, please also refer to
\[API for Stream Implementors\]\[\] below.

Almost all Node programs, no matter how simple, use Streams in some
way. Here is an example of using Streams in a Node program:

    var http = require('http');
    
    var server = http.createServer(function (req, res) {
      // req is an http.IncomingMessage, which is a Readable Stream
      // res is an http.ServerResponse, which is a Writable Stream
    
      var body = '';
      // we want to get the data as utf8 strings
      // If you don't set an encoding, then you'll get Buffer objects
      req.setEncoding('utf8');
    
      // Readable streams emit 'data' events once a listener is added
      req.on('data', function (chunk) {
        body += chunk;
      });
    
      // the end event tells you that you have entire body
      req.on('end', function () {
        try {
          var data = JSON.parse(body);
        } catch (er) {
          // uh oh!  bad json!
          res.statusCode = 400;
          return res.end('error: ' + er.message);
        }
    
        // write back something interesting to the user:
        res.write(typeof data);
        res.end();
      });
    });
    
    server.listen(1337);
    
    // $ curl localhost:1337 -d '{}'
    // object
    // $ curl localhost:1337 -d '"foo"'
    // string
    // $ curl localhost:1337 -d 'not json'
    // error: Unexpected token o