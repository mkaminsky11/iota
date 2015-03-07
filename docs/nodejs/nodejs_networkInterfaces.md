## os.networkInterfaces()

## 

Get a list of network interfaces:

    { lo:
       [ { address: '127.0.0.1',
           netmask: '255.0.0.0',
           family: 'IPv4',
           mac: '00:00:00:00:00:00',
           internal: true },
         { address: '::1',
           netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
           family: 'IPv6',
           mac: '00:00:00:00:00:00',
           internal: true } ],
      eth0:
       [ { address: '192.168.1.108',
           netmask: '255.255.255.0',
           family: 'IPv4',
           mac: '01:02:03:0a:0b:0c',
           internal: false },
         { address: 'fe80::a00:27ff:fe4e:66a1',
           netmask: 'ffff:ffff:ffff:ffff::',
           family: 'IPv6',
           mac: '01:02:03:0a:0b:0c',
           internal: false } ] }