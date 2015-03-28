## Window.Events

Following events can be listened by using `Window.on()` function.

### close

The `close` event is a special event that will affect the result of the `Window.close()` function. If developer is listening to the `close` event of a window, the `Window.close()` call to that window will not close the window but send the `close` event.

Usually you would do some shutdown work in the callback of `close` event, and then call `this.close(true)` to really close the window, which will not be caught again. Forgetting to add `true` when calling `this.close()` in the callback will result in infinite loop.

And if the shutdown work takes some time, users may feel that the app is exiting slowly, which is bad experience, so you could just hide the window in the `close` event before really closing it to make a smooth user experience.

For use case you can see demo code of `Window.close()` above.

Since v0.8.4 on OSX, there is a parameter on the callback of this event. Its value will be set to 'quit' if the window is being closed by pressing 'Cmd-Q' (intent to quit application). Otherwise the value is undefined. See https://github.com/rogerwang/node-webkit/issues/430

### closed

The `closed` event is emitted **after** corresponding window is closed. Normally you'll not be able to get this event since after the window is closed all js objects will be released. But it's useful if you're listening this window's events in another window, whose objects will not be released.

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
    

### loading

_Requires node-webkit \>= v0.3.5_

Emitted when the window starts to reload, normally you cannot catch this event because usually it's emitted before you actually setup the callback.

The only situation that you can catch this event is when you refresh the window and listen to this event in another window.

### loaded

_Requires node-webkit \>= v0.3.5_

Emitted when the window is fully loaded, this event behaves the same with `window.onload`, but doesn't rely on the DOM.

### document-start

`function (frame) {}`  
Emitted when the document object in this window or a child iframe is available, after any files from css, but before any other DOM is constructed or any other script is run; 
\* **frame** is the iframe object, or `null` if the event is for the window.  

See also: `inject-js-start` in \[\[Manifest-format\]\]

### document-end

`function (frame) {}`   
Emitted when the document object in this window or a child iframe is loaded, before the `onload` event is emitted. 
\* **frame** is the iframe object, or `null` if the event is for the window.  

See also: `inject-js-end` in \[\[Manifest-format\]\]

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

  
Emitted after window is moved. The callback is called with 2 arguments: `(x, y)` for the new location of the upper-left corner of the window.

### resize

  
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

Emitted after Devtools is opened by any means (since v0.8.0), or ready after calling `Window.showDevTools(id, headless)` with `headless` = `true`. The event callback has an `url` argument, which is the URL to load Devtools UI. See \[\[Devtools jail feature\]\] and \[\[Window\]\] for more information.

### devtools-closed

Emitted after Devtools is closed.

### new-win-policy

`function (frame, url, policy) {}`   
Emitted when a new window is requested from this window or a child iframe, e.g. user clicks a link with `_blank` target.
_**frame** is the object of the child iframe where the request is from, or `null` if it's from the top window.
_ **url** is the address of the requested link
\* **policy** is an object with the following methods:
\* `ignore()` : ignore the request, navigation won't happen.
\* `forceCurrent()` : force the link to be opened in the same frame
\* `forceDownload()` : force the link to be a downloadable, or open by external program
\* `forceNewWindow()` : force the link to be opened in a new window
\* `forceNewPopup()` : force the link to be opened in a new popup window
\* `setNewWindowManifest(m)` : control the options for the new popup window. The object `m` is in the same format as the `window` subfield in \[\[Manifest format\]\] (e.g. `{"frame" : false}`).