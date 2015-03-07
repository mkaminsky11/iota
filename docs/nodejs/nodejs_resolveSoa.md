## dns.resolveSoa(hostname, callback)

## 

The same as `dns.resolve()`, but only for start of authority record queries
(`SOA` record).

`addresses` is an object with the following structure:

    {
      nsname: 'ns.example.com',
      hostmaster: 'root.example.com',
      serial: 2013101809,
      refresh: 10000,
      retry: 2400,
      expire: 604800,
      minttl: 3600
    }