## Faq-name-conflict

If your project already has a function called `require()` it will conflict with Node's built-in `require()` which has been integrated into the DOM `window` object. In this case you can either disable Node support with the `nodejs` field in the [manifest](Manifest-format), or use this trick at the beginning of your code:

````html
<script type="text/javascript">
    window.requireNode = window.require;
    window.require = undefined; 
</script>
````

**NOTE:** If you are using the text! plugin of requirejs you also need to add some code before the require.config (or another place once the require object is fully loaded)

````html
require.nodeRequire = window.requireNode;
````

**NOTE:** If you use `nw.gui` module, you need to keep the function name as `require()` as code in the module will call `require()`. A solution is to rename it back before loading `nw.gui` and rename it again after the loading is done.


RequireJS now supports the namespace `requirejs` instead of `require`.