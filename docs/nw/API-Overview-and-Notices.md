## API-Overview-and-Notices

_Native UI API requires node-webkit >= 0.3.0_

## Overview

Here is our APIs for creating native UI controls in node-webkit. Generally, to load our Native UI library, you need first to use `require` function to load `nw.gui` module (our module name did not follow node's standard, so you wouldn't encounter module name clashes):

```javascript
var gui = require('nw.gui');
```

Then you create a GUI element the way you create a javascript object:

```javascript
// Standard way of creating elements
var element = new gui.ElementName(option);

// Example of creating a menu
var menu = new gui.Menu({ title: 'Menu Title' });
```

The properties like `title`, `label`, `icon` and `menu` are set/get via directly using object's attributes, like what you did in DOM, such as:

```javascript
menu.title = 'New Title';
console.log('Menu title is', menu.title);
```

And methods like `remove`, `append` and `insert`, are of course, methods of GUI objects:

```javascript
menu.append(new gui.MenuItem({ label: 'Im an item' }));
menu.removeAt(0);
```

Child elements are usually stored in `items` field, and can be got via index accessing:

```javascript
for (var i = 0; i < menu.items.length; ++i) {
  console.log('MenuItem', i, menu.items[i]);
}
```

And please don't directly change elements via reassigning like `menu.items[2] = new gui.MenuItem(...);`, it's absolutely wrong. To update an element, just change it like `menu.items[2].title = 'New Title'`, to replace an element, first `remove` it and then do an `insert`.

Another thing is we don't throw exceptions when you're doing something wrong in UI API, **we crash**. So be careful on using it. If you're reusing a deleted element, or passing wrong types, we will crash without warning you.

One thing you may not notice is after deleting objects, you should always assign `null` to a deleted UI object, in case you accidentally reuse it, an example is:

```javascript
var tray = new gui.Tray(...);
// blablabla...
// We are done with it
tray.remove();
tray = null; // This line is very important
```

## EventEmitter

In node-webkit, every UI element inherits from Node.js's [EventEmitter](http://nodejs.org/api/events.html), so you can listen to element's events with this style:

```javascript
menuitem.on('click', function() {
  console.log('Item is clicked');
});
```

## Don'ts

In summary, please **DO NOT** do following things:

* Do not recreate UI elements, reuse them.
* Do not reassign an element, such as `menu.items[0] = item` or `item = new gui.MenuItem({})`.
* Do not delete an element, such `delete item`.
* Do not change UI types' prototype.