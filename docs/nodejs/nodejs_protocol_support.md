## Protocol support

## 

Node.js is compiled with SSLv2 and SSLv3 protocol support by default, but these
protocols are **disabled**. They are considered insecure and could be easily
compromised as was shown by \[CVE-2014-3566\]\[\]. However, in some situations, it
may cause problems with legacy clients/servers (such as Internet Explorer 6).
If you wish to enable SSLv2 or SSLv3, run node with the `--enable-ssl2` or
`--enable-ssl3` flag respectively. In future versions of Node.js SSLv2 and
SSLv3 will not be compiled in by default.

There is a way to force node into using SSLv3 or SSLv2 only mode by explicitly
specifying `secureProtocol` to `'SSLv3_method'` or `'SSLv2_method'`.

The default protocol method Node.js uses is `SSLv23_method` which would be more
accurately named `AutoNegotiate_method`. This method will try and negotiate
from the highest level down to whatever the client supports. To provide a
secure default, Node.js (since v0.10.33) explicitly disables the use of SSLv3
and SSLv2 by setting the `secureOptions` to be
`SSL_OP_NO_SSLv3|SSL_OP_NO_SSLv2` (again, unless you have passed
`--enable-ssl3`, or `--enable-ssl2`, or `SSLv3_method` as `secureProtocol`).

If you have set `secureOptions` to anything, we will not override your
options.

The ramifications of this behavior change:

* If your application is behaving as a secure server, clients who are `SSLv3`
only will now not be able to appropriately negotiate a connection and will be
refused. In this case your server will emit a `clientError` event. The error
message will include `'wrong version number'`.
* If your application is behaving as a secure client and communicating with a
server that doesn't support methods more secure than SSLv3 then your connection
won't be able to negotiate and will fail. In this case your client will emit a
an `error` event. The error message will include `'wrong version number'`.