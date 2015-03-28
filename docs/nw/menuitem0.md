## MenuItem

`MenuItem` represents an item in a menu. A `MenuItem` can be a separator or a normal item which has label and icon. `MenuItem` is usually used with `Menu` together.

    // Load native UI library
    var gui = require('nw.gui');
    var item;
    
    // Create a separator
    item = new gui.MenuItem({ type: 'separator' });
    
    // Create a normal item with label and icon
    item = new gui.MenuItem({
      type: "normal", 
      label: "I'm a menu item",
      icon: "img/icon.png"
    });
    
    // Or you can omit the 'type' field for normal items
    item = new gui.MenuItem({ label: 'Simple item' });
    
    // Bind a callback to item
    item = new gui.MenuItem({
      label: "Click me",
      click: function() {
        console.log("I'm clicked");
      },
      key: "s",
      modifiers: "ctrl-alt",
    });
    
    // You can have submenu!
    var submenu = new gui.Menu();
    submenu.append(new gui.MenuItem({ label: 'Item 1' }));
    submenu.append(new gui.MenuItem({ label: 'Item 2' }));
    submenu.append(new gui.MenuItem({ label: 'Item 3' }));
    item.submenu = submenu;
    
    // And everything can be changed at runtime
    item.label = 'New label';
    item.click = function() { console.log('New click callback'); };