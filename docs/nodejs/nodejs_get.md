## https.get(options, callback)

## 

Like `http.get()` but for HTTPS.

`options` can be an object or a string. If `options` is a string, it is
automatically parsed with [url.parse()][0].

Example:

    var https = require('https');
    
    https.get('https://encrypted.google.com/', function(res) {
      console.log("statusCode: ", res.statusCode);
      console.log("headers: ", res.headers);
    
      res.on('data', function(d) {
        process.stdout.write(d);
      });
    
    }).on('error', function(e) {
      console.error(e);
    });



[0]: url.html#url.parse