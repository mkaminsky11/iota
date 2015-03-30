## Window

_Window API requires node-webkit >= v0.3.0_

`Window` is a wrapper of DOM's `window` object, it has extended operations and can receive various window events.

Every `Window` is an instance of [EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter) object, and you're able to use `Window.on(...)` to respond to native window's events.

## Synopsis

```javascript
// Load native UI library
var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui() (see https://github.com/rogerwang/node-webkit/issues/707)

// Get the current window
var win = gui.Window.get();

// Listen to the minimize event
win.on('minimize', function() {
  console.log('Window is minimized');
});

// Minimize the window
win.minimize();

// Unlisten the minimize event
win.removeAllListeners('minimize');

// Create a new window and get it
var new_win = gui.Window.open('https://github.com');

// And listen to new window's focus event
new_win.on('focus', function() {
  console.log('New window is focused');
});

```

## Reference

### get([window_object])

If `window_object` is not specifed, then return current window's `Window` object, otherwise return `window_object`'s `Window` object.

```javascript
// Get the current window
var win = gui.Window.get();

// Create a new window and get it
var new_win = gui.Window.open('https://github.com');
```

### open(url[, options])

Open a new window and load `url` in it, you can specify extra `options` with the window. All window subfields in [[Manifest format]] can be used. Since v0.4.0, a boolean field `new-instance` can be used to start a new Node instance (webkit process). Since v0.9.0 and 0.8.5, `inject-js-start` and `inject-js-end` field can be used to inject a javascript file, see [[Manifest format]] .

Since v0.7.3 the opened window is not focused by default. It's a result of unifying behavior across platforms. If you want it to be focused by default, you can set `focus` to `true` in `options`.

```javascript
var win = gui.Window.open('https://github.com', {
  position: 'center',
  width: 901,
  height: 127
});
```

### Window.window

**Get** DOM's `window` object in the native window.

### Window.x/Window.y

**Get** or **Set** left/top offset from window to screen.

### Window.width/Window.height

**Get** or **Set** window's size.

### Window.title

**Get** or **Set** window's title.

### Window.menu
**Get** or **Set** window's menubar. Set with a Menu with type `menubar`. See [[Menu]].

### Window.isFullscreen

_since v0.3.5_

**Get** or **Set** whether we're in fullscreen mode.

### Window.isTransparent  
_since v0.11.2_  
**Get** whether transparency is turned on

### Window.isKioskMode

_since v0.3.5_

**Get** or **Set** whether we're in kiosk mode.

### Window.zoomLevel
_since v0.4.1_

**Get** or **Set** the page zoom. `0` for normal size; positive value for zooming in; negative value for zooming out.

### Window.moveTo(x, y)

Moves a window's left and top edge to the specified coordinates.

### Window.moveBy(x, y)

Moves a window a specified number of pixels relative to its current coordinates.

### Window.resizeTo(width, height)

Resizes a window to the specified `width` and `height`.

### Window.resizeBy(width, height)

Resizes a window by the specified amount.

### Window.focus()

Focus on the window.

### Window.blur()

Move focus away. Usually it will move focus to other windows of your app, since on some platforms there is no concept of blur.

### Window.show()

Show the window if it's not shown, `show` will not focus on the window on some platforms, so you need to call `focus` if you want to.

`show(false)` has the same effect with `hide()`.

### Window.hide()

Hide the window. Users will not be able to find the window if it's hidden.

### Window.close([force])

Close current window, you can catch the `close` event to prevent the closing. If `force` is specified and equals to `true`, then the `close` event will be ignored.

Usually you would like to listen to the `close` event and do some shutdown work and then do a `close(true)` to really close the window.

```javascript
win.on('close', function() {
  this.hide(); // Pretend to be closed already
  console.log("We're closing...");
  this.close(true);
});

win.close();
```

### Window.reload()

_Requires node-webkit >= v0.3.5_

Reloads the current window.

### Window.reloadDev()
_since version 0.4.0_  
Reloads the current page by starting a new renderer process from scratch. This is the same as pressing the "reload" button in the right side of the toolbar.

### Window.reloadIgnoringCache()

_Requires node-webkit >= v0.3.5_

Like reload(), but don't use caches (aka "shift-reload").

### Window.maximize()

Maximize the window on GTK and Windows, zoom the window on Mac OS X.

### Window.unmaximize()

Unmaximize the window, e.g. the reverse of `maximize()`.

### Window.minimize()

Minimize the window to task bar on Windows, iconify the window on GTK, and miniaturize the window on Mac OS X.

### Window.restore()

Restore window to previous state after the window is minimized, e.g. the reverse of `minimize()`. It's not named `unminimize` since `restore` is already used commonly on Window.

### Window.enterFullscreen()

Make the window fullscreen. This function is different with HTML5 FullScreen API, which can make part of the page fullscreen, `Window.enterFullscreen()` will only fullscreen the whole window.

### Window.leaveFullscreen()

Leave the fullscreen mode.

### Window.toggleFullscreen()

_Requires node-webkit >= v0.3.5_

Toggle the fullscreen mode.

### Window.enterKioskMode()

_Requires node-webkit >= v0.3.1_

Enter the Kiosk mode. In Kiosk mode, the app will be fullscreen and try to prevent users from leaving the app, so you should remember to provide a way in app to leave Kiosk mode. This mode is mainly used for presentation on public displays.

### Window.leaveKioskMode()

_Requires node-webkit >= v0.3.1_

Leave the Kiosk mode.

### Window.toggleKioskMode()

_Requires node-webkit >= v0.3.5_

Toggle the kiosk mode.

### Window.setTransparent(transparent)  
_since v0.11.2_  
turn on/off the transparency support, more info https://github.com/rogerwang/node-webkit/wiki/Transparency

### Window.showDevTools([id | iframe, headless])

Open the devtools to inspect the window.

The optional `id` argument is supported since v0.6.0. It should be the value of `id` attribute of any `iframe` element in the window. It can be used to limit the devtools window to inspect only the iframe. If `id` is empty string, this feature is not effective.

The optional `headless` argument is supported since v0.6.0. When it is `true`, the Devtools window will not be opened. Instead, a `devtools-opened` will be sent to the `Window` object after Devtools is ready.

The optional `iframe` argument is supported since v0.7.2. It should be the iframe object. And it serves the same purpose with the `id` argument.

For more information, please read [[Devtools Jail Feature]].

Since v0.8.1, this function returns a `Window` object when `headless` is `false`, so the devtools Window can be manipulated. Note that the events on this object is not working yet.

### Window.closeDevTools()

_since v0.7.3_

Close the devtools window.

### Window.isDevToolsOpen()

_since v0.8.0_

Query the status of devtools window. *Note: This will always return false if the `headless` option was  `true` when calling `showDevTools()`*

### Window.setMaximumSize(width, height)

Set window's maximum size.

### Window.setMinimumSize(width, height)

Set window's minimum size.

### Window.setResizable(Boolean resizable)

Set whether window is resizable.

### Window.setAlwaysOnTop(Boolean top)

_Requires node-webkit >= v0.3.4_

Sets the widget to be on top of all other windows in the windowing system.

### Window.setVisibleOnAllWorkspaces(Boolean)

_since v0.11.3_

For platforms that support multiple workspaces (currently Mac OS X and Linux), this allows node-webkit windows to be visible on all workspaces simultaneously.

For example usage see [visible_on_all_workspaces manual test](https://github.com/rogerwang/node-webkit/tree/0d9a0319b49c665c88d69ee6b1093bb1ff8f4915/tests/manual_tests/visible_on_all_workspaces).

For further information see https://github.com/rogerwang/node-webkit/issues/2523.

### Window.canSetVisibleOnAllWorkspaces()

_since v0.11.3_

Returns a a boolean indicating if the platform (currently Mac OS X and Linux) support Window API object method `setVisibleOnAllWorkspace(Boolean)`.

### Window.setPosition(String position)

Shortcut to move window to specified `position`. Currently only `center` is supported on all platforms, which will put window in the middle of the screen.

### Window.setShowInTaskbar(Boolean show)
_since v0.9.2_  
Control whether to show window in taskbar or dock. See also `show_in_taskbar` in [[Manifest-format]].

### Window.requestAttention(Boolean attention)

Pass `true` to indicate that the window needs user's action, pass `false` to cancel it. The final behaviour depends on the platform.

### Window.requestAttention(Integer count)
_since v0.10.2_  
Similar with the boolean version, on Windows platform you can specify number of times the frame flash(es)<br>
on OSX value < 0 will trigger `NSInformationalRequest` while value > 0 will trigger `NSCriticalRequest`<br>
on Linux the Integer value will be casted to Boolean

### Window.capturePage(callback [, image_format | config_object ]) 
_since v0.4.2_

Captures the visible area of the window. Note: a simple demo usage can be found here: https://gist.github.com/zhchbin/4749217 

`callback` should be a function that will be called when the the image data is ready. It looks like this:
```javascript
function(dataUrl) {...};
```
A `dataURL(string)` which encodes an image of the visible area of the captured
window. May be assigned to the 'src' property of an HTML Image element for display.

`image_format` is enumerated string ["jpeg", "png"]. Default is 'jpeg'.

_since v0.9.3_

It is now possible to define the `datatype` of the returned image by using an `config_object` as the second parameter.

This object should be like: 
```js
{ 
 format : "[jpeg|png]", 
 datatype : "[raw|buffer|datauri]" 
}
```
Where:  
`format` defaults to `jpeg`  
`datatype` defaults to `datauri`  

Example usage:
```js
// png as base64string
win.capturePage(function(base64string){
 // do something with the base64string
}, { format : 'png', datatype : 'raw'} );

// png as node buffer
win.capturePage(function(buffer){
 // do something with the buffer
}, { format : 'png', datatype : 'buffer'} );
```
### setProgressBar(progress)
_since v0.10.2_  
valid values are 0 to 1 <br>
val < 0 means remove the progress bar <br>
val > 1 means indeterminate <br>
on linux, only Ubuntu is supported, you'll need to specify the application `.desktop` file through `NW_DESKTOP` env. if `NW_DESKTOP` env variable is not found, it will assume `nw.desktop`

### setBadgeLabel(label)
_since v0.10.0-rc1_  
Windows and OSX only. Set the badge label on the window icon in taskbar or dock.<br>
_since v0.10.2_ the linux Ubuntu is supported, however the label is restricted to a string number only. You'll also need to specify the `.desktop` file for your application (see the note on `setProgressBar`)

### Window.cookies.*

_since v0.8.1_

This includes multiple functions to manipulate the cookies. The API is defined in the same way as [Chrome Extensions'](http://developer.chrome.com/extensions/cookies.html). node-webkit supports the `get`, `getAll`, `remove` and `set` methods; `onChanged` event (supporting both `addListener` and `removeListener` function on this event).

And anything related to `CookieStore` in the Chrome extension API is not supported, because there is only one global cookie store in node-webkit apps.

### Window.eval(frame, script)
_Since v0.9.0 and v0.8.5_  
Execute a piece of JavaScript in the window, if `frame` argument is null, or in the context of an iframe, if `frame` is an iframe object. The `script` argument is the content of the JavaScript source code.

### Window.evalNWBin(frame, path)
_Since v0.12.0-rc1_  
Load compiled JavaScript binary in the window, if `frame` argument is null; or in the context of an iframe, if `frame` is an iframe object. The `path` argument is the path of the JS binary compiled with `nwjc`, see https://github.com/nwjs/nw.js/wiki/Protect-JavaScript-source-code-with-v8-snapshot.

## Events

Following events can be listened by using `Window.on()` function, for more information on how to receive events, you can visit [EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter).

### close

The `close` event is a special event that will affect the result of the `Window.close()` function. If developer is listening to the `close` event of a window, the `Window.close()` call to that window will not close the window but send the `close` event.

Usually you would do some shutdown work in the callback of `close` event, and then call `this.close(true)` to really close the window, which will not be caught again. Forgetting to add `true` when calling `this.close()` in the callback will result in infinite loop.

And if the shutdown work takes some time, users may feel that the app is exiting slowly, which is bad experience, so you could just hide the window in the `close` event before really closing it to make a smooth user experience.

For use case you can see demo code of `Window.close()` above.

Since v0.8.4 on OSX, there is a parameter on the callback of this event. Its value will be set to 'quit' if the window is being closed by pressing 'Cmd-Q' (intent to quit application). Otherwise the value is undefined. See https://github.com/rogerwang/node-webkit/issues/430

### closed

The `closed` event is emitted **after** corresponding window is closed. Normally you'll not be able to get this event since after the window is closed all js objects will be released. But it's useful if you're listening this window's events in another window, whose objects will not be released.

```html
<script>
  var gui = require('nw.gui');

  // Open a new window.
  var win = gui.Window.open('popup.html');

  // Release the 'win' object here after the new window is closed.
  win.on('closed', function() {
    win = null;
  });

  // Listen to main window's close event
  gui.Window.get().on('close', function() {
    // Hide the window to give user the feeling of closing immediately
    this.hide();

    // If the new window is still open then close it.
    if (win != null)
      win.close(true);

    // After closing the new window, close the main window.
    this.close(true);
  });
</script>
```

### loading

_Requires node-webkit >= v0.3.5_

Emitted when the window starts to reload, normally you cannot catch this event because usually it's emitted before you actually setup the callback.

The only situation that you can catch this event is when you refresh the window and listen to this event in another window.

### loaded

_Requires node-webkit >= v0.3.5_

Emitted when the window is fully loaded, this event behaves the same with `window.onload`, but doesn't rely on the DOM.

### document-start
_since v0.9.0 and v0.8.5_ 

`function (frame) {}`  
Emitted when the document object in this window or a child iframe is available, after any files from css, but before any other DOM is constructed or any other script is run; 
* **frame** is the iframe object, or `null` if the event is for the window.  

See also: `inject-js-start` in [[Manifest-format]]

### document-end
_since v0.9.0 and v0.8.5_

`function (frame) {}`    
Emitted when the document object in this window or a child iframe is loaded, before the `onload` event is emitted. 
* **frame** is the iframe object, or `null` if the event is for the window.  

See also: `inject-js-end` in [[Manifest-format]]

### focus

Emitted when window gets focus.

### blur

Emitted when window loses focus.

### minimize

Emitted when window is minimized.

### restore

Emitted when window is restored from minimize state.

### maximize

Emitted when window is maximized.

### unmaximize

Emitted when window is restored from maximize state. Note that on some platforms window can be resized even when maximized, so the `unmaximize` may not be emitted when a maximized window is resized instead of being unmaximized

### move  
_since v0.8.2_  
Emitted after window is moved. The callback is called with 2 arguments: `(x, y)` for the new location of the upper-left corner of the window.

### resize  
_since v0.8.2_  
Emitted after window is resized. The callback is called with 2 arguments: `(width, height)` for the new size of the window.

### enter-fullscreen

Emitted when window enters fullscreen state.

### leave-fullscreen

Emitted when window leaves fullscreen state.

### zoom

Emitted when window zooming changed. It has a parameter indicating the new zoom level. See `Window.zoom` for the parameter's value definition.

### capturepagedone
Emitted after the capturePage method is called and image data is ready. See `Window.capturePage's` callback function for the parameter's value definition. 

### devtools-opened
Emitted after Devtools is opened by any means (since v0.8.0), or ready after calling `Window.showDevTools(id, headless)` with `headless` = `true`. The event callback has an `url` argument, which is the URL to load Devtools UI. See [[Devtools jail feature]] and [[Window]] for more information.

### devtools-closed

_since v0.8.0_

Emitted after Devtools is closed.

### new-win-policy

_since v0.9.0 and v0.8.5_

`function (frame, url, policy) {}`    
Emitted when a new window is requested from this window or a child iframe, e.g. user clicks a link with `_blank` target.
* **frame** is the object of the child iframe where the request is from, or `null` if it's from the top window.
* **url** is the address of the requested link
* **policy** is an object with the following methods:
 * `ignore()` : ignore the request, navigation won't happen.
 * `forceCurrent()` : force the link to be opened in the same frame
 * `forceDownload()` : force the link to be a downloadable, or open by external program
 * `forceNewWindow()` : force the link to be opened in a new window
 * `forceNewPopup()` : force the link to be opened in a new popup window
 * `setNewWindowManifest(m)` : control the options for the new popup window. The object `m` is in the same format as the `window` subfield in [[Manifest format]] (e.g. `{"frame" : false}`). _since v0.11.3_

## Issues

Now on linux, the function `setMaximumSize()/setMinimumSize()` and `setResizable()` can not be set at the same time. If do so, they all do not work. Please take this into consideration.

## See also

* [EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter)