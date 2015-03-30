## Changes related to node

_This document is still under construction_

## console
Since node-webkit supports GUI applications instead of console applications, the output of `console.log()` (and other similar methods such as `console.warn()` and `console.error()`) is redirected to WebKit's console. You may see it in your “[Developer Tools](Debugging-with-devtools)” window (on its “Console” tab).

## process
A couple of new fields is added to the global `process` object:
* `process.versions['node-webkit']` is set with node-webkit's version.
* `process.versions['chromium']` is set with the chromium version which node-webkit is based on. _(since v0.7.3)_
* `process.mainModule` is set for the start page (such as `index.html`) as specified in the manifest's [`main`](Manifest-format#main) field. However, when the [`node-main`](Manifest-format#node-main) field is also specified in the manifest, `process.mainModule` points to the file specified in the `node-main` field.

## global
The following names are inserted to the global object in Node's context:
* `require` - this is the `require()` function within the main module.

## require
Behaviour of relative paths in Node's `require()` method depends on how the parent file is used in the application (where “the parent file” is the file in which the `require()` method is called):
* If the parent file was also required by Node (using `require()`), then the child's relative path is treated as relative to its parent.
* If the parent file is included by WebKit (using any web technology: classic DOM `window.open()`, node-webkit's [`Window.open()`](Window#openurl-options), classic DOM [`XMLHttpRequest`](https://developer.mozilla.org/en/docs/DOM/XMLHttpRequest), jQuery's [`$.getScript()`](http://api.jquery.com/jQuery.getScript/), HTML `<script src="...">` element, etc.), then the child's relative path is treated as relative to the application's root directory.

## crypto
WebKit (Chrome) has its own DOM `crypto` object. When you `require()` the Node API module of the same name (see http://nodejs.org/docs/latest/api/crypto.html for details), you have to use some other name (see [issue 540](https://github.com/rogerwang/node-webkit/issues/540) for example).

## __dirname
Only Node modules (called by `require()` method) can use the `__dirname` global to read the path to their file's directory.

This global is not available in WebKit's context (including the “Developer Tools” window).

### Workaround

Put `exports.dirname = __dirname;` in a `util.js` file and require it in your main JS file:

```js
var dirname = require('./util').dirname;

console.log(dirname);
//=> /Users/johndoe/dev/project/
```

## require('child_process')

Currently `child_process.fork` ~~[is broken](https://github.com/rogerwang/node-webkit/issues/213) in node-webkit~~
works fine after 0.10.3 on Linux and 0.10.4 on Windows.