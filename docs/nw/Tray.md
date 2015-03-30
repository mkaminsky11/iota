## Tray

_Tray API requires node-webkit >= v0.3.0_

`Tray` is an abstraction of different controls on different platforms, usually it's a small icon shown on the OS's notification area. On Mac OS X it's called `Status Item`, on GTK it's `Status Icon`, and on Windows it's `System Tray Icon`.

## Synopsis

```javascript
// Load native UI library
var gui = require('nw.gui');

// Create a tray icon
var tray = new gui.Tray({ title: 'Tray', icon: 'img/icon.png' });

// Give it a menu
var menu = new gui.Menu();
menu.append(new gui.MenuItem({ type: 'checkbox', label: 'box1' }));
tray.menu = menu;

// Remove the tray
tray.remove();
tray = null;
```

## Reference

### new Tray(option)

Create a new `Tray`, `option` is an object contains initial settings for the `Tray`. `option` can have following fields: `title`, `tooltip`, `icon` and `menu`.

Every field has its own property in the `Tray`, see documentation of each property for details.

When you assign `new Tray(option)` to a variable/property take care about visibility and GC. 
```
function init(){
 var tray = new gui.Tray({ title: 'Tray', icon: 'img/icon.png' });
 // In this case tray will be collected by GC after some time and icon will disappear
}
```
here is correct variant
```
var tray;
function init(){
 tray = new gui.Tray({ title: 'Tray', icon: 'img/icon.png' });
}
```
### Tray.title

**Get** or **Set** the `title` of `Tray`.

On Mac OS X `title` will be showed on status bar along with its `icon`, but it doesn't have effects on GTK and Windows, since the latter two platforms only support tray to be showed as icons.

### Tray.tooltip

**Get** or **Set** the `tooltip` of `Tray`. `tooltip` shows when you hover the `Tray` with mouse.

`tooltip` is showed on all three platforms. Should be set as `Tray` property rather from `option` object constructor. See issue [#1903](https://github.com/rogerwang/node-webkit/issues/1903) for more information. 

### Tray.icon

**Get** or **Set** the `icon` of `Tray`, `icon` must a path to your icon file. It can be a relative path which points to an icon in your app, or an absolute path pointing to a file in user's system.

Mac OS X caveat: when used in notification context, (png) icon is not sized down like in windows notification area, it is rather displayed in 1:1 ratio.

### Tray.alticon
_since v0.4.2_

Mac OS X Only. **Get** or **Set** the alternate (active) tray icon. It has no effects on Linux and Windows.

### Tray.iconsAreTemplates
_since v0.11.3_

Mac OS X Only. **Get** or **Set** whether `icon` and `alticon` images are treated as "templates" (`true` by default). When the property is set to `true` the images are treated as "templates" and the system automatically ensures proper styling according to the various states of the status item (e.g. dark menu, light menu, etc.). Template images should consist only of black and clear colours and can use the alpha channel in the image to adjust the opacity of black content. It has no effects on Linux and Windows. For further information see [#2775](https://github.com/rogerwang/node-webkit/pull/2775).

### Tray.menu

**Get** or **Set** the `menu` of `Tray`, `menu` will be showed when you click on the `Tray` icon.

On Mac OS X the menu will be showed when you click on the tray (which is the only action available for tray icons on Mac OS X). On Windows and Linux, the menu will be showed when you single click on the tray with right mouse button, clicking with left mouse button sends the `click` event and does not show a menu.

In order to reduce differences from different platforms, setting `menu` property is the only way to bind a menu to tray, there's no way to popup a menu with left mouse button click on Linux and Windows.

### Tray.remove()

Remove the tray.

Once removed, you will not be able to show it again and you should set your tray variable to `null`. There is no way temporarily hide a tray icon.

## Events
Following events can be listened by using `Tray.on()` function, for more information on how to receive events, you can visit [EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter).

### click

Emitted when user clicks the menu item with left mouse button.

And you cannot catch click with right mouse button, because it is used to show menu. Even if you're not binding a menu to a tray, you still can not listen to it. Double click events are also ignored.

## See also

* [[Menu]]