## Changes-to-DOM

The following changes to DOM is made to support native applications better:

Features marked with `node only` means that only `Node frames` can do this. `Normal frames` still follow the W3C standard. For definition of `Node frames` and `Normal frames`, see [Security](Security)

### setting value of file input element (node only)
```javascript
var f = new File('/path/to/file', 'name');
var files = new FileList();
files.append(f);
document.getElementById('input0').files = files;
```
### script can emulate user gestures
JavaScripts can emulate user gestures while in browsers they can't. e.g. Triggering `click` event on file input. See [[File-dialogs]]

### nwUserAgent
_since v0.9.0-rc1_

A new attribute `nwUserAgent` is added to the `iframe` element. The value is used as the `User-Agent` header from HTTP requests from that iframe, or its descendants.

### nwdisable
_since v0.5.0_  
See [[Mini-browser-in-iframe]]

### nwfaketop
_since v0.5.1_  
See [[Mini-browser-in-iframe]]
