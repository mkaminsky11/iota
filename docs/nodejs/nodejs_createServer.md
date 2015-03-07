## https.createServer(options\[, requestListener\])

## 

Returns a new HTTPS web server object. The `options` is similar to
\[tls.createServer()\]\[\]. The `requestListener` is a function which is
automatically added to the `'request'` event.

Example:

    // curl -k https://localhost:8000/
    var https = require('https');
    var fs = require('fs');
    
    var options = {
      key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
      cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
    };
    
    https.createServer(options, function (req, res) {
      res.writeHead(200);
      res.end("hello world\n");
    }).listen(8000);

Or

    var https = require('https');
    var fs = require('fs');
    
    var options = {
      pfx: fs.readFileSync('server.pfx')
    };
    
    https.createServer(options, function (req, res) {
      res.writeHead(200);
      res.end("hello world\n");
    }).listen(8000);