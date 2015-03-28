## Tray.Events

Following events can be listened by using `Tray.on()` function.

### click

Emitted when user clicks the menu item with left mouse button.

And you cannot catch click with right mouse button, because it is used to show menu. Even if you're not binding a menu to a tray, you still can not listen to it. Double click events are also ignored.