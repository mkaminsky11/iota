## Menu

_Menu API requires node-webkit >= 0.3.0_

`Menu` represents a native menu, it can be used as window menu or context menu.

## Synopsis

```javascript
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
```

## Reference

### new Menu([option])

Create a new `Menu`.

If no `option` is specified, a normal context menu will be created. To create a menu to be used as window's menu, you need to explicitly specify `'type': 'menubar'` in the `option`, e.g. `new Menu({ 'type': 'menubar' })`.

### Menu.items
**Get** an array that contains all items of a menu.

### Menu.items.length

**Get** how many items this `Menu` has.

### Menu.items[i]

**Get** the `i`th menu item of the `Menu`. It will return a `MenuItem` object.

### Menu.append(MenuItem item)

Append `item` of `MenuItem` type to the tail of the `Menu`.

### Menu.insert(MenuItem item, int i)

Insert `item` of `MenuItem` type to the `i`th position of the `Menu`, `Menu` is 0-indexed.

### Menu.remove(MenuItem item)

Remove `item` from `Menu`. This method requires you to keep the `MenuItem` outside the `Menu`.

### Menu.removeAt(int i)

Remove the `i`th item form `Menu`

### Menu.items[x].click
Reference: x is the index of the menu object.

```javascript
  menu.items[x].click = function() { 
      console.log('clicked');
  };
```

### Menu.popup(int x, int y)

Popup the `Menu` at position (`x`, `y`) in current window. Usually you would listen to `contextmenu` event of DOM elements and manually popup the menu:

```javascript
document.body.addEventListener('contextmenu', function(ev) { 
  ev.preventDefault();
  menu.popup(ev.x, ev.y);
  return false;
});
```

In this way, you can precisely choose which menu to show for different elements, and you can update menu elements just before popuping it.

### Menu.createMacBuiltin(appname)
_since v0.10.0-rc1_  
OSX only. Creates the default menus (App, Edit and Window). The items can be manipulated with the `items` property. The argument `appname` is used for the title of App menu.  
Example:
```js
var gui = require('nw.gui');
var win = gui.Window.get();
var nativeMenuBar = new gui.Menu({ type: "menubar" });
nativeMenuBar.createMacBuiltin("My App");
win.menu = nativeMenuBar;
```
Since v0.10.1, if desired, you can also hide the "Edit" and "Window" menus when invoking `createMacBuiltin` like so:
```js
nativeMenuBar.createMacBuiltin("My App", {
  hideEdit: true,
  hideWindow: true
});
```
## See also

* [[Tray]]
* [[MenuItem]]
* [Example of cut/copy/paste context menu implementation](https://gist.github.com/b1rdex/7409406)