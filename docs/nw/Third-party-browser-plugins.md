## Third-party-browser-plugins

_This feature requires node-webkit v0.3.3 or newer._

Like normal browsers, node-webkit enables you to load third party NPAPI plugins, and you can even ship them with your app. So apart from using node.js native modules, you can also use browser plugins to add native code for your app.

## Supported plugins

Despite using Chromium codebase, node-webkit **does not** support [Pepper API](http://en.wikipedia.org/wiki/PPAPI#PPAPI) plugins.

Only [NPAPI](http://en.wikipedia.org/wiki/NPAPI)-based plugins are supported.

## Enabling plugins

The support for plugins is turned off by default.

Add [`"plugin": true`](https://github.com/rogerwang/node-webkit/wiki/Manifest-format#plugin) in the `"webkit"` section of your [[application's manifest|Manifest format]] to turn on the plugins.

```json
{
  "webkit": {
    "plugin": true
  }
}
```

## Location of plugins

Node-webkit will find and pick plugins installed on your system (i.e. will use the paths common for other browsers).

Additionally node-webkit scans `/plugins` subdirectory of your application's root directory (root is where `package.json` resides).

## Distribution of plugins

* If a plugin is relatively popular (such as Flash), you may hope that plugin's already installed on your users' systems and node-webkit picks it.

* If a plugin has its own installer, you may run it when your application is installed.

* You may also include plugins in the `/plugins` directory of your application.

## Listing of the loaded plugins

To see whether your plugins are loaded, you can use `navigator.plugins` in [[Developer Tools|Debugging with devtools]]' console.

Your application can also use `navigator.plugins`. (For example, it's possible to warn the user about a missing plugin or to use a workaround.)