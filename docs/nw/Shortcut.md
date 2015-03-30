## Shortcut

_Shortcut API requires node-webkit >= 0.10.0_

`Shortcut` represents a global keyboard shortcut, also known as system-wide hotkey. If registered successfully, it works even if your app does *not* have focus. Every time the user presses the registered shortcut, your app will receive an "active" event of the shortcut object.

## Synopsis

```js
// Load native UI library.
var gui = require('nw.gui');

var option = {
  key : "Ctrl+Shift+A",
  active : function() {
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    // :(, fail to register the |key| or couldn't parse the |key|.
    console.log(msg);
  }
};

// Create a shortcut with |option|.
var shortcut = new gui.Shortcut(option);

// Register global desktop shortcut, which can work without focus.
gui.App.registerGlobalHotKey(shortcut);

// If register |shortcut| successfully and user struck "Ctrl+Shift+A", |shortcut|
// will get an "active" event.

// You can also add listener to shortcut's active and failed event.
shortcut.on('active', function() {
  console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
});

shortcut.on('failed', function(msg) {
  console.log(msg);
});

// Unregister the global desktop shortcut.
gui.App.unregisterGlobalHotKey(shortcut);
```

## Reference

### new Shortcut(option)

Create new `Shortcut`, `option` is an object contains initial settings for the `Shortcut`. `option` can have following fields: `key`, `active`, `failed`.

Every field has its own property in the `Shortcut`, see documentation of each property for details.

### Shortcut.key

**Get** or **Set** the `key` of a `Shortcut`. It is a string to specify the shortcut key, like "Ctrl+Alt+A".

Supported keys: A-Z, 0-9, Comma, Period, Home, End, PageUp, PageDown, Insert, Delete, Arrow keys (Up, Down, Left, Right) and the Media Keys (MediaNextTrack, MediaPlayPause, MediaPrevTrack, MediaStop). Note that `Shortcut.key` can have exactly one keycode.

Modifiers: Ctrl (On Mac OS X, "Ctrl" correspond to the Command keys on the Macintosh keyboard), Alt, Shift. Note that `Shortcut.key` takes zero or more modifiers. 

Please use zero modifier only when you are knowing what your are doing. The API `App.registerGlobalHotKey` can support applications intercepting a single key (like `{ key: "A"}`), but please don't do this since users will not be able to use "A" normally any more until the app unregisters it. However, the API doesn't limit this usage, and it would be useful if the applications wants to listen Media Keys.

### Shortcut.active

**Get** or **Set** the `active` callback of a `Shortcut`, the `active` must be a valid function, it will be called when user presses the shortcut.

### Shortcut.failed

**Get** or **Set** the `failed` callback of a `Shortcut`, the `failed` must be a valid function, it will be called when application passes an invalid `Shortcut.key`, or when the shortcut registration (`App.registerGlobalHotKey`) has failed.

## Events
Following events can be listened to by using `Shortcut.on()` method, for more information on how to receive events, you can visit [EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter).

### active

Emitted when the users pressed the registered shortcut.

### failed

Emitted when the application passed an invalid `Shortcut.key`, or when the shortcut registration (`App.registerGlobalHotKey`) has failed.

## See Also

* [App.registerGlobalHotKey](App#registerglobalhotkeyshortcut)
* [App.unregisterGlobalHotKey](App#unregisterglobalhotkeyshortcut)