## Tray

`Tray` is an abstraction of different controls on different platforms, usually it's a small icon shown on the OS's notification area. On Mac OS X it's called `Status Item`, on GTK it's `Status Icon`, and on Windows it's `System Tray Icon`.

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