## Window

`Window` is a wrapper of DOM's `window` object, it has extended operations and can receive various window events.

Every `Window` is an instance of `EventEmitter` object, and you're able to use `Window.on(...)` to respond to native window's events.

    // Load native UI library
    var gui = require('nw.gui'); 
    //or global.window.nwDispatcher.requireNwGui() (see https://github.com/rogerwang/node-webkit/issues/707)
    
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