## Supported getaddrinfo flags

## 

The following flags can be passed as hints to `dns.lookup`.

* `dns.ADDRCONFIG`: Returned address types are determined by the types
of addresses supported by the current system. For example, IPv4 addresses
are only returned if the current system has at least one IPv4 address
configured. Loopback addresses are not considered.
* `dns.V4MAPPED`: If the IPv6 family was specified, but no IPv6 addresses
were found, then return IPv4 mapped IPv6 addresses.