## Mini-browser-in-iframe

node-webkit has special support to let you load external websites in an iframe in your application. 3 attributes `nwdisable`, `nwfaketop` and `nwUserAgent` of the iframe element are introduced to do this:

* `nwdisable` (since 0.5.0) is used to disable Node support in the iframe and make it a `Normal frame` (see [[Security]])
* `nwfaketop` (since 0.5.1) is used to trap the navigation and the access (such as window.top, window.parent) in this iframe.
* `nwUserAgent` (since 0.9.0-rc1) is used to specify the `User-Agent` header of HTTP requests. See [[Changes-to-DOM]]

For more discussion, see https://github.com/rogerwang/node-webkit/issues/534

More features which would help on this topic:  
* `Window.eval()`, `inject-js-start`, `inject-js-end`, `document-start` and `document-end` in [[Window]]
* Ignoring `X-Frame-Options` HTTP header. See [[Security]].