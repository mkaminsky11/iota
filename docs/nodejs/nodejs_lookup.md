## dns.lookup(hostname\[, options\], callback)

## 

Resolves a hostname (e.g. `'google.com'`) into the first found A (IPv4) or
AAAA (IPv6) record. `options` can be an object or integer. If `options` is
not provided, then IP v4 and v6 addresses are both valid. If `options` is
an integer, then it must be `4` or `6`.

Alternatively, `options` can be an object containing two properties,
`family` and `hints`. Both properties are optional. If `family` is provided,
it must be the integer `4` or `6`. If `family` is not provided then IP v4
and v6 addresses are accepted. The `hints` field, if present, should be one
or more of the supported `getaddrinfo` flags. If `hints` is not provided,
then no flags are passed to `getaddrinfo`. Multiple flags can be passed
through `hints` by logically `OR`ing their values. An example usage of
`options` is shown below.

    {
      family: 4,
      hints: dns.ADDRCONFIG | dns.V4MAPPED
    }

See [supported `getaddrinfo` flags][0] below for
more information on supported flags.

The callback has arguments `(err, address, family)`. The `address` argument
is a string representation of a IP v4 or v6 address. The `family` argument
is either the integer 4 or 6 and denotes the family of `address` (not
necessarily the value initially passed to `lookup`).

On error, `err` is an `Error` object, where `err.code` is the error code.
Keep in mind that `err.code` will be set to `'ENOENT'` not only when
the hostname does not exist but also when the lookup fails in other ways
such as no available file descriptors.

`dns.lookup` doesn't necessarily have anything to do with the DNS protocol.
It's only an operating system facility that can associate name with addresses,
and vice versa.

Its implementation can have subtle but important consequences on the behavior
of any Node.js program. Please take some time to consult the [Implementation
considerations section][1] before using it.


[0]: #dns_supported_getaddrinfo_flags
[1]: #dns_implementation_considerations