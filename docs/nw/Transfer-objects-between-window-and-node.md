## Transfer-objects-between-window-and-node

When you found you can use the `require` function in the `<script>` tag, one thing you would be tempted to do is moving every javascript libraries into node modules and use `require` to use them. Most times you're right to do this, but there're some cases that are terribly wrong on this.

## Contexts

First I should introduce the concept of `context`, every javascript variable lives in a javascript context, and every javascript context has a root global variable.

In the browser world, every window you open has a `window` object in it, and global variables will only live in the window where they're created, so different windows' global variables will not conflict. That's because every browser window (or tab) has its own javascript context, and the `window` object is the root global variable of the window's javascript context.

In the node.js world, things are similar. Every module in node.js has it's own context (including the main script you passed in command line), so modules' global variables won't fight each other, and if you want to pass variables between contexts, you have to use `require` and `export`, this is the fundamental idea of node.js's module system.

But in contrast to browsers, node.js also has a global context which has a `global` root variable, every global variables lives the global context is accessible from modules' context. So members of `global`, such as `process` and `console`, can be used in modules.

## Bridge between window and node

The magic node-webkit does, is simply assigning members of `global` object to the `window` object when window's javascript context is created, so you can use `require` and others in the `<script>` tag.

So the `require` function is indeed living in node.js's context, when you execute a module by `require(module)`, node-webkit will execute module's code in node.js's context and then transfer results to the browser window's context.

Another interesting point is the `global` object, since node-webkit have transferred the `global` object to `window` object, you can assign `window`'s DOM elements to the node.js's modules, like this:

```html
// In index.html
<script>
global.$ = $;
require('./test.js');
</script>
```

```javascript
// In test.js
$('#content').text('Modifying DOM elements');
```

## One node to multiple windows

In node-webkit, every renderer process has only one node.js context. So even you have created many windows, they will share the same `global` variable, in this way you can store shared information between multiple windows.

But one problem cased by this scheme is, variables you stored in `global` object may be overlapped by other windows. As an example, if we execute `global.$ = $` used above in multiple windows, the `global.$` will store only the last window's `$` object.

So if you are developing a multiple-window app that may share a module between multiple windows, you should never store DOM elements in the `global` variable or manipulate DOM elements in node.js modules, instead you need to switch to the traditional web javascript library way:

```html
// In index.html
<script src="test.js"></script>
```

```javascript
// In test.js
var test = {}
(function(){
var local = ...;
test.operation = ...;
})();
```

## Operations that require window context

Even if your app has only one window, there are still some DOM operations that cannot run under node.js context. For example, you may be tempted to wrap the Web SQL Database to a node.js module:

```html
// In index.html
<script>
global.window = window;
var cache = require('./cache');
console.log(cache);
</script>
```

```javascript
// In cache.js
var db = window.openDatabase(...);
exports.get = function (key, callback) { ... }
```

If you do so, you will find node-webkit's renderer process crashed, that's because the `window.openDatabase` requires to run under the browser window's context, which is a limitation of WebKit, and it will just crash when running under node.js's context. So when you want to use such functions, please don't use them as node.js modules.

One thing need to be noted that if you call functions defined in context C1 from context C2, the V8 engine will automatically do the context switch (from C2 to C1) stuff for you. So regarding application architecture, maybe interfacing the code in 2 contexts with functions could be better than just sharing variables.