## Frameless-window

_Frameless window requires node-webkit >= v0.3.0_

A frameless window is a window without standard frames and window buttons, usually you would use a frameless window to custom titlebar and other standard window buttons. To have a quick glance of it, you can visit the [frameless-window](https://github.com/zcbenz/nw-sample-apps/tree/master/frameless-window) and [webgl](https://github.com/zcbenz/nw-sample-apps/tree/master/webgl) demo in [zcbenz/nw-sample-apps](https://github.com/zcbenz/nw-sample-apps).

## Enable frameless window

To make your window frameless, you just need to add `"frame": false` in your app's `package.json`'s `window` field, toolbar need to be disabled as well:

```json
{
  "window": {
    "frame": false,
    "toolbar": false
  }
}
```

then your main window will be frameless. To open additional frameless windows from within your app you must also pass them the frameless options.

    gui = require('nw.gui');
    gui.Window.open('http://google.com',{toolbar:false,frame:false});

## Make your window draggable

By default, the frameless window is non-draggable. The app needs to use `-webkit-app-region: drag` to specify the draggable region and use `-webkit-app-region: no-drag` to exclude the non-draggable area from the draggable region. Note that only rectangular shape is currently supported.

To make the whole window draggable, you can add `-webkit-app-region: drag` as `body`'s style:

```html
<body style="-webkit-app-region: drag">
</body>
```

And note that if you have made the whole window draggable,  you must also **mark buttons and custom window buttons as non-draggable**, otherwise it would be very hard for users to click on them:

```css
button {
  -webkit-app-region: no-drag;
}
```

If you're only using a custom titlebar, you also need to make buttons in titlebar non-draggable.

## Text selection

One thing on frameless window is that the dragging behaviour may conflict with selecting text, for example, when you drag the titlebar, you may accidentally select the text on titlebar. To prevent this, you need to disable text selection on dragging area like this:

```css
.titlebar {
  -webkit-user-select: none;
  -webkit-app-region: drag;
}
```

And also remember not to mark text area as draggable.

## Context menu

On some platforms, the OS will treat non-draggable area as non-client frame, and when you right click on it a system window menu will popup. So you should not abuse non-draggable area and only use it for custom frame and titlebars, and you should never try to listen to `contextmenu`  event on non-draggable areas.

## Window operations

After the standard frame is removed, you need to provide ways for users to close/minimize the window. The pure javascript way to close a window is `window.close()`, if you want more, you can use node-webkit's native [[Window]] API.