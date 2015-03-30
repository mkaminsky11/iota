## Show-window-after-page-is-ready

_This example needs node-webkit >= v0.3.0_

Normally when node-webkit loads an app, it would: 1. show the browser; 2. unzip your app; 3. create renderer process; 4. initialize WebKit; 5. finally open your app. This progress would take some time, and your user may see the empty browser becoming a full loaded app.

To make your app seem to start smoothly, you should show the main window after everything is ready. There are some tips to achieve this.

First you need to specify `"show": false` in the `package.json`, so node-webkit will not show the window on startup:

```json
{
  "window": {
    "show": false
  }
}
```

Then after everything is fully loaded, you can use the [[Window]] API to show your app's window:

```html
<script>
var gui = require('nw.gui');

onload = function() {
  gui.Window.get().show();
}
</script>
```