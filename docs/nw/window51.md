## Window.cookies.\*

This includes multiple functions to manipulate the cookies. The API is defined in the same way as Chrome Extensions'. node-webkit supports the `get`, `getAll`, `remove` and `set` methods; `onChanged` event (supporting both `addListener` and `removeListener` function on this event).

And anything related to `CookieStore` in the Chrome extension API is not supported, because there is only one global cookie store in node-webkit apps.