## App

    // Load native UI library
    var gui = require('nw.gui');
    
    // Print arguments
    console.log(gui.App.argv);
    
    // Quit current app
    gui.App.quit();
    
    // Get the name field in manifest
    gui.App.manifest.name