## DNS

## 

Use `require('dns')` to access this module.

This module contains functions that belong to two different categories:

1) Functions that use the underlying operating system facilities to perform
name resolution, and that do not necessarily do any network communication.
This category contains only one function: `dns.lookup`. **Developers looking
to perform name resolution in the same way that other applications on the same
operating system behave should use `dns.lookup`.**

Here is an example that does a lookup of `www.google.com`.

    var dns = require('dns');
    
    dns.lookup('www.google.com', function onLookup(err, addresses, family) {
      console.log('addresses:', addresses);
    });

2) Functions that connect to an actual DNS server to perform name resolution,
and that _always_ use the network to perform DNS queries. This category
contains all functions in the `dns` module but `dns.lookup`. These functions
do not use the same set of configuration files than what `dns.lookup` uses.
For instance, _they do not use the configuration from `/etc/hosts`_. These
functions should be used by developers who do not want to use the underlying
operating system's facilities for name resolution, and instead want to
_always_ perform DNS queries.

Here is an example which resolves `'www.google.com'` then reverse
resolves the IP addresses which are returned.

    var dns = require('dns');
    
    dns.resolve4('www.google.com', function (err, addresses) {
      if (err) throw err;
    
      console.log('addresses: ' + JSON.stringify(addresses));
    
      addresses.forEach(function (a) {
        dns.reverse(a, function (err, hostnames) {
          if (err) {
            throw err;
          }
    
          console.log('reverse for ' + a + ': ' + JSON.stringify(hostnames));
        });
      });
    });

There are subtle consequences in choosing one or another, please consult the
[Implementation considerations section][0]
for more information.


[0]: #dns_implementation_considerations