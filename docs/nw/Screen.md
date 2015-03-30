## Screen

_Screen API requires node-webkit >= v0.10.2_

`Screen` is an instance of [EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter) object, and you're able to use `Screen.on(...)` to respond to native screen's events.

`Screen` is a singleton object, need to be initiated once by calling `gui.Screen.Init()`

## Reference

### Screen.Init()
Init the Screen singleton object, you only need to call this once

### Screen.screens
**Get** the array of screen (number of screen connected to the computer)

screen has following structure:
```javascript
screen {
// unique id for a screen
  id : int,

// physical screen resolution, can be negative, not necessarily start from 0,depending on screen arrangement
  bounds : {
    x : int,
    y : int,
    width : int,
    height : int
  },
 
// useable area within the screen bound
  work_area : {
    x : int,
    y : int,
    width : int,
    height : int
  },

  scaleFactor : float,
  isBuiltIn : bool,
  rotation : int,
  touchSupport : int
}
```
### Screen.chooseDesktopMedia (array of DesktopCaptureSourceType sources, function callback)
_Screen.chooseDesktopMedia requires nwjs >= v0.12.0_<br>
Screen sharing by selection; Currently only working in Windows and OSX and some linux distribution.<br><br> 
DesktopCaptureSourceType: ```"window" or "screen" ```<br>
The callback parameter should be a function that looks like this:
```function(string streamId) {...};```<br>
```returns false``` if the function fails to execute or existing chooseDesktopMedia is still active
<br><br>
Example:  
```js
var gui = require('nw.gui');
gui.Screen.Init(); // you only need to call this once
gui.Screen.chooseDesktopMedia(["window","screen"], 
  function(streamId) {
    var vid_constraint = {
      mandatory: {
        chromeMediaSource: 'desktop', 
        chromeMediaSourceId: streamId, 
        maxWidth: 1920, 
        maxHeight: 1080
      }, 
      optional:[]
    };
    navigator.webkitGetUserMedia({audio: false, video: constraint}, success_func, fallback_func);
  }
);
```
More info: https://github.com/nwjs/nw.js/issues/3077
## Events

Following events can be listened by using `Screen.on()` function, for more information on how to receive events, you can visit [EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter).

### displayBoundsChanged

emitted when the screen resolution, arrangement is changed, the callback is called with 1 argument `screen'

### displayAdded

emitted when a new screen added, the callback is called with 1 argument `screen'

### displayRemoved

emitted when existing screen removed, the callback is called with 1 argument `screen'

## Synopsis
```javascript
function ScreenToString(screen) {
  var string = "";
  string += "screen " + screen.id + " ";
  var rect = screen.bounds;
  string += "bound{" + rect.x + ", " + rect.y + ", " + rect.width + ", " + rect.height + "} ";
  rect = screen.work_area;
  string += "work_area{" + rect.x + ", " + rect.y + ", " + rect.width + ", " + rect.height + "} ";
  string += " scaleFactor: " + screen.scaleFactor;
  string += " isBuiltIn: " + screen.isBuiltIn;
  string += "<br>";
  return string;
}

//init must be called once during startup, before any function to gui.Screen can be called
gui.Screen.Init();
var string = "";
var screens = gui.Screen.screens;
// store all the screen information into string
for(var i=0; i<screens.length; i++) {
  string += ScreenToString(screens[i]);
}

var screenCB = {
  onDisplayBoundsChanged : function(screen) {
    var out = "OnDisplayBoundsChanged " + ScreenToString(screen);
  },

  onDisplayAdded : function(screen) {
    var out = "OnDisplayAdded " + ScreenToString(screen);
  },

  onDisplayRemoved : function(screen) {
    var out = "OnDisplayRemoved " + ScreenToString(screen);
  }
};

// listen to screen events
gui.Screen.on('displayBoundsChanged', screenCB.onDisplayBoundsChanged);
gui.Screen.on('displayAdded', screenCB.onDisplayAdded);
gui.Screen.on('displayRemoved', screenCB.onDisplayRemoved);
```