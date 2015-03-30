## Window-menu

_Window menu requires node-webkit >= v0.3.2_

Different platforms has different meanings of window menu, following discussions will point out the differences and provide best practice to keep window menu working decently on all platforms.

## Create and set window menu

To create a menubar, you just need to specify `type: 'menubar'` in the option when you create the menu:

```javascript
var your_menu = new gui.Menu({ type: 'menubar' });
```

And make sure every item appended to the menubar has a submenu, a normal text-only menu item on menubar makes no sense on most platforms.

Then you can set the window menu by setting the `menu` property of the window:

```javascript
gui.Window.get().menu = your_menu;
```

See both [[Menu]] and [[Window]] for details of the API.

## Windows & Linux

On Windows Desktop Mode and GTK environment, the menubars behave exactly the same, each window can have one menubar and they all reside bellow the titlebar.

Note on Ubuntu's Unity environment, the menubar is remade to be global menu and is placed on the top of screen (which is similar to Mac), but still each window owns its own menubar and we can safely ignore this difference.

## Mac

On Mac, things are quite different. One app can only have one menu (which is called application menu) no matter how many windows the app may have. And many key shortcuts rely on the existence of application menu, such as `Quit`, `Close` and `Copy`.

By default node-webkit shows a default menubar which includes necessary menus and keeps minimal. When you use [[Menu]] API to create custom menu, it would be rather tedious to add all such menu items back, so in order to simplify the menu creation, node-webkit will merge your menu with original application menu. For example, if you set an empty menu as window menu:

```javascript
var gui = require('nw.gui');

gui.Window.get().menu = new gui.Menu({ type: 'menubar' });
```

The resulted menu will have indeed three submenus: `your-app-name`, `Edit` and `Window`, which are necessary for full-functionality apps.

Another thing you may encounter is that the first item of application menu shows `node-webkit` instead of `your-app-name`, to fix it, you need to edit CFBundleName in `node-webkit.app/Contents/Info.plist`. Set your app name instead of `node-webkit` string.

_Since v0.10.0-rc1_

By default the standard menus (`your-app-name`, `Edit` and `Window`) are no longer enabled and so the associated hotkeys (Copy, Paste, ...).
The window menu can be initialized with the standard menu items using the [Menu.createMacBuiltin](https://github.com/rogerwang/node-webkit/wiki/Menu#menucreatemacbuiltinappname) method:

```javascript
var gui = require('nw.gui');
var mb = new gui.Menu({type:"menubar"});
mb.createMacBuiltin("your-app-name");
gui.Window.get().menu = mb;
```

## Best practice

As mentioned above, on Windows and Linux each window can have one menubar, while on Mac an app can have only one application menu. So generally you should set menu for only your main window and avoid using window menu when you may have multiple main windows.

And it may happens that you want to design different menus for different platforms, then you can use [process.platform](http://nodejs.org/api/process.html#process_process_platform) to get which platform you're in.