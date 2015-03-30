## App-protocol

_since v0.7.0_

The app protocol is defined like http protocol: `app://<host>/path`. The host part is essential. You can define it to anything you want. The root of `path` refers to the application's directory, which is the directory where the manifest file resides.

It's provided for the ease of migrating files from your web site, e.g. repackage your web site as a node-webkit application.

Regarding [security](Security), it's treated as local file protocol and has access to Node functionality. 

_Example:_

If you use absolute paths in the project and move the project directory to different path, you can just set a global 'app://xyz' in package's manifest.json to avoid of path modification in each file. Well, if you only use relative paths, you don't need to use it.

```json
 {
  "name": "ParleysDesktop",
  "main": "app://whatever/index.html",
  "window": {
    "toolbar": true,
    "frame": true,
    "width": 1000,
    "height": 800,
    "position": "mouse",
    "min_width": 400,
    "min_height": 200,
    "max_width": 8000,
    "max_height": 8000
  }
 }
```