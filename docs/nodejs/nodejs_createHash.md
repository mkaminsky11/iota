## crypto.createHash(algorithm)

## 

Creates and returns a hash object, a cryptographic hash with the given
algorithm which can be used to generate hash digests.

`algorithm` is dependent on the available algorithms supported by the
version of OpenSSL on the platform. Examples are `'sha1'`, `'md5'`,
`'sha256'`, `'sha512'`, etc. On recent releases, `openssl
list-message-digest-algorithms` will display the available digest
algorithms.

Example: this program that takes the sha1 sum of a file

    var filename = process.argv[2];
    var crypto = require('crypto');
    var fs = require('fs');
    
    var shasum = crypto.createHash('sha1');
    
    var s = fs.ReadStream(filename);
    s.on('data', function(d) {
      shasum.update(d);
    });
    
    s.on('end', function() {
      var d = shasum.digest('hex');
      console.log(d + '  ' + filename);
    });