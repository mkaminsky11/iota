## Devtools-jail-feature

## Devtools Jail

With the feature `Devtools jail` you can limit the functions of devtools inside an iframe of your window. That means the user can only inspect the DOM elements and JavaScript files in the iframe.

To do that, call `Window.showDevTools(id)` where `id` is the value of `id` attribute of the iframe element. Since v0.7.2, you can also call `Window.showDevTools(iframe)` where `iframe` is the object of the iframe element.

This feature is useful for developing IDE with node-webkit: the IDE developers want their users (application developers) to be able to debug their application with Devtools. The UI of the user's application is shown in an iframe in an simulator window, the outer parts of which is used for decoration or control buttons.

## Headless

If you want to show Devtools in an iframe of your window, you can use this feature:

**NOTE: it's not supposed to use a single iframe for both Jail and showing the Devtools UI.**

Call `Window.showDevTools(id, headless)`. When `headless` is `true`, there will be no new window popped up to show Devtools. A `devtools-opened` event will be sent to the `Window` object with a `url` parameter, which is the URL for showing Devtools UI.

```javascript
var win = nwgui.Window.get();
win.showDevTools('', true);
win.on("devtools-opened", function(url) {
    console.log("devtools-opened: " + url);
    document.getElementById('devtools').src = url;
});
```
## see also
[[Window]]
