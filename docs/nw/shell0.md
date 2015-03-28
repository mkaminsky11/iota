## Shell

`Shell` is a collection of APIs that do desktop related jobs.

    // Load native UI library.
    var gui = require('nw.gui');
    
    // Open URL with default browser.
    gui.Shell.openExternal('https://github.com/rogerwang/node-webkit');
    
    // Open a text file with default text editor.
    gui.Shell.openItem('test.txt');
    
    // Open a file in file explorer.
    gui.Shell.showItemInFolder('test.txt');