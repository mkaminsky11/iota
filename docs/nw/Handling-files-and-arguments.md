## Handling-files-and-arguments

_This feature requires node-webkit >= v0.3.2_

For some applications, such as text editor and IDE, it's important to have the ability to bind file types to the app, e.g. the `Open With` on many platforms.

## Command line arguments

In node-webkit, when a user uses your app to open a file under command line, like `your-app file.txt file2.txt`, the `file.txt file2.txt` will be recorded and you can use `App.argv` to get the array of command line arguments:

```javascript
var gui = require('nw.gui');
console.log(gui.App.argv);
// Print "file.txt, file2.txt"
```

And if you open a file with your app in GUI (like file explorer in Windows, Finder in Mac and nautilus in Linux), the path of opened file will also be passed with `App.argv`.

## Open file with existing app

In most times, when you want to open multiple files with your app, you would like to open them in one session instead of multiple sessions. For example, for an IDE, if you have already opened one IDE instance, and then you opened a source code file, you would want the existing IDE instance to handle this file instead of opening a new huge instance of the IDE.

For node-webkit apps, this is solved by default. When you open a file, node-webkit will check whether your app  has already opened, if not, a new instance of your app would start and the path of file will be passed in `App.argv`, if there is already one instance of your app, the full command line of the second instance will be passed to the existing instance by sending `open` event to the `App` object:

```javascript
// Listen to `open` event
gui.App.on('open', function(cmdline) {
  console.log('command line: ' + cmdline);
});
```
**Before v0.7.0** the callback is different: it was defined as sending the file path in the argument as parameter, and the callback is called multiple times for each of the arguments.
```javascript
// Listen to `open` event
gui.App.on('open', function(path) {
  console.log('Opening file: ' + path);
});
```


**Note:** `open` event is sent only if your app is a standalone app, e.g. packaged with instructions of [[How to package and distribute your apps]].

**Note:** On Mac, when you drag a file into the dock icon of your app, the `open` will also be emitted.

**Note:** On Mac, you should [Register the File Types Your App Supports](http://developer.apple.com/library/ios/#documentation/FileManagement/Conceptual/DocumentInteraction_TopicsForIOS/Articles/RegisteringtheFileTypesYourAppSupports.html) in the `node-webkit.app/Contents/Info.plist`.

**Note:** On Windows and Linux, if you don't want this behaviour you can close it by setting `single-instance` to `false` in `package.json`, however it has no effect on Mac since it's forced by the OS.

## Difference between "App.argv" and "open" event

You may be confused to find that there're two ways to handle file opening, the differences are:

* `App.argv` is used at the startup of your app, `open` event is sent to an existing app.
* `open` event is sent only for standalone apps, while `App.argv` has no restrictions.