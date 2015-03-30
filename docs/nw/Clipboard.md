## Clipboard

__Clipboard API requires node-webkit >= v0.3.0__

`Clipboard` is an abstraction of clipboard(Windows and GTK) and pasteboard(Mac), currently it only supports reading and writing plain text in the system clipboard.

## Synopsis

```javascript
// Load native UI library
var gui = require('nw.gui');

// We can not create a clipboard, we have to receive the system clipboard
var clipboard = gui.Clipboard.get();

// Read from clipboard
var text = clipboard.get('text');
console.log(text);

// Or write something
clipboard.set('I love node-webkit :)', 'text');

// And clear it!
clipboard.clear();
```

## Reference

### get()

Returns the system clipboard.

It's not possible to create a new clipboard, you can only get it from OS. And also note that the Selection Clipboard in X11 is not supported.

### Clipboard.set(data, [type])

Write `data` to the clipboard. `type` specifies the mime type of the data, only `text` (plain text data) is supported now.

### Clipboard.get([type])

Returns the data of `type` from clipboard. Only `text` (plain text data) is supported now.

### Clipboard.clear()

Clear the clipboard.
