## Menu.createMacBuiltin(appname)

_since v0.10.0-rc1_  
OSX only. Creates the default menus (App, Edit and Window). The items can be manipulated with the `items` property. The argument `appname` is used for the title of App menu.  
Example:

    var gui = require('nw.gui');
    var win = gui.Window.get();
    var nativeMenuBar = new gui.Menu({ type: "menubar" });
    nativeMenuBar.createMacBuiltin("My App");
    win.menu = nativeMenuBar;
    

Since v0.10.1, if desired, you can also hide the "Edit" and "Window" menus when invoking `createMacBuiltin` like so:

    nativeMenuBar.createMacBuiltin("My App", {
      hideEdit: true,
      hideWindow: true
    });