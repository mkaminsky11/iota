## Play-with-window

_Most of following things require node-webkit >= 0.2.4_

DOM has provided some functions to create, close, resize and move windows, but due to browser's security consideration, the things you can do are much restricted. But with node-webkit, you're much free with window operations.

### Create and close window

To create a window, use the familiar `window.open(URL,name,specs)` which is mainly used to popup ad windows in browser ;-)

Parameter meanings:

* **URL** specifies the URL of the page to open, it can be a page in your app package.
* **name** specifies the target attribute or the name of the window. It has no use currently.
* **specs** specifies window features, `screenX` and `screenY` set new window's position, `width` and `height` set new window's size.

An example:

````javascript
window.open('popup.html', '_blank', 'screenX=0,screenY=0,width=100,height=100');
````

To close a window, use `window.close();`.

### Focus and blur

By using `window.focus()` and `window.blur()`, you can move focus between your windows. To focus on parent window, you can use `window.opener.focus()`.

### Move and resize window

The `window.resizeTo(width,height)` method resizes a window to the specified `width` and `height`.

The `window.resizeBy(width,height)` method resizes a window by the specified amount.

The `window.moveTo(x,y)` method moves a window's left and top edge to the specified coordinates.

The `window.moveBy(x,y)` method moves a window a specified number of pixels relative to its current coordinates.

### Javascript dialogs

Traditional javascript dialogs `alert`, `confirm` and `prompt` are supported in node-webkit.

The `alert()` method displays an alert box with a specified message and an OK button.

The `confirm()` method displays a dialog box with a specified message, along with an OK and a Cancel button.

The `prompt()` method displays a dialog box that prompts the visitor for input.

### Locale information

The `window.navigator.language` shows locale of current system, the default one is `en-US` if node-webkit cannot dig out locale information. You can use it to implement l10n functions.
