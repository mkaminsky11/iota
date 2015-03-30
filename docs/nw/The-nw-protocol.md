## The-nw-protocol

_Following content requires node-webkit >= v0.2.5_

In order to expose some internal information about node-webkit in a easy way, we provide `nw:` protocol which is roughly the same with `about:` protocol in chrome. Currently we have the following internal pages available:

### nw:blank

A blank page showing `node-webkit` logo; instead of showing `about:blank`, we display this page when no app is loaded.

### nw:version

Displays the node-webkit and node.js version strings.