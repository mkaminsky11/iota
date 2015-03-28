## Menu.popup(int x, int y)

Popup the `Menu` at position (`x`, `y`) in current window. Usually you would listen to `contextmenu` event of DOM elements and manually popup the menu:

    document.body.addEventListener('contextmenu', function(ev) { 
      ev.preventDefault();
      menu.popup(ev.x, ev.y);
      return false;
    });
    

In this way, you can precisely choose which menu to show for different elements, and you can update menu elements just before popuping it.