## Tray.menu

**Get** or **Set** the `menu` of `Tray`, `menu` will be showed when you click on the `Tray` icon.

On Mac OS X the menu will be showed when you click on the tray (which is the only action available for tray icons on Mac OS X). On Windows and Linux, the menu will be showed when you single click on the tray with right mouse button, clicking with left mouse button sends the `click` event and does not show a menu.

In order to reduce differences from different platforms, setting `menu` property is the only way to bind a menu to tray, there's no way to popup a menu with left mouse button click on Linux and Windows.