## Menu

`Menu` represents a native menu, it can be used as window menu or context menu.

    // Load native UI library
    var gui = require('nw.gui');
    
    // Create an empty menu
    var menu = new gui.Menu();
    
    // Add some items
    menu.append(new gui.MenuItem({ label: 'Item A' }));
    menu.append(new gui.MenuItem({ label: 'Item B' }));
    menu.append(new gui.MenuItem({ type: 'separator' }));
    menu.append(new gui.MenuItem({ label: 'Item C' }));
    
    // Remove one item
    menu.removeAt(1);
    
    // Popup as context menu
    menu.popup(10, 10);
    
    // Iterate menu's items
    for (var i = 0; i < menu.items.length; ++i) {
      console.log(menu.items[i]);
    }