## The-Kiosk-mode

_The Kiosk mode requires node-webkit >= v0.3.1_

The Kiosk mode is mainly suited for public displays and information stands. Such stands are typically found in libraries, airports, bank offices, or shopping malls. The information stand will run a node-webkit app that lets the user browse for the necessary information, but denies access to the computer and browser settings.

## Kiosk Mode Settings

After entering Kiosk mode, node-webkit will become fullscreen, and there will be no ways to quit by clicking  mouse.

On Linux and Windows, users can still quit node-webkit by pressing keys like `Alt + F4` and `Control + Alt + Del`, currently node-webkit does not block those keys be because it would make node-webkit behave like virus and be blocked by AV software.

On Mac, because it has a decent Kiosk API, node-webkit will hide menu bar and Dock bar, and process switching will also be blocked.

## Enter Kiosk Mode

There are two ways to open Kiosk mode in the node-webkit, one is to specify `"kiosk": true` in the `package.json`:

```json
{
  "window": {
    "kiosk": true
  }
}
```

In this way, node-webkit will automatically enter kiosk mode when starting the app.

The other way is to use our [[Window]] API, you can place a call to `Window.enterKioskMode` in the `<script>` tag:

```html
<script>
var gui = require('nw.gui');
gui.Window.get().enterKioskMode();
</script>
```

## Quit Kiosk Mode

Usually under Kiosk mode, there is no normal way to quit node-webkit, so you must provide a way for administrators to leave Kiosk mode or quit the app.

To leave Kiosk mode, there is a corresponding function `Window.leaveKioskMode` in [[Window]] API:

```javascript
var gui = require('nw.gui');
gui.Window.get().leaveKioskMode();
```

After calling this, node-webkit will leave fullscreen and give up system controls.

Or you can just quit the whole app with [[App]] API:

```javascript
gui.App.quit();
```