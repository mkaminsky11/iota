## How-to-run-apps

_Since our package system is similar to [LÖVE](https://love2d.org), following guides are modified from its [Wiki](https://love2d.org/wiki/Getting_Started)._

`node-webkit` can load an app in two ways: 

* From a folder. The startup path specifies this folder. 
* From a `.nw` file (a renamed .zip-file). The startup path specifies the file. 

In both cases, there has to be a file called `package.json` in the startup path or `.nw` zipfile. This file will be parsed when `node-webkit` starts. If this file is missing, `node-webkit` will not recognize the folder or `.nw` file as app, and it will complain about a wrongly packaged app. A frequently made mistake is zipping the folder rather than its contents. This stems from very old practice (because when you unzip a folder you don't want it to splash out all over your current directory), but for `node-webkit` doing that doesn't make sense: you need to zip the app folder's contents only, to get a correct `.nw`. 

### All platforms

You can put files of node-webkit in the same directory with your app's files including `package.json`, and then just run the `nw` executable.

### Windows

On Windows, the easiest way to run the app is to drag the folder onto `nw.exe`, or a shortcut to `nw.exe`. Remember to drag the folder containing `package.json`, and not `package.json` itself.

You can also call it from the command line: 

For instance: 

    nw C:\apps\myapp
    nw C:\apps\packagedapp.nw

### Linux

On Linux, you can use one of these command lines: 

    nw /home/path/to/appdir/
    nw /home/path/to/packagedapp.nw

If you have installed the `.deb`, you can double click on `.nw` files in your file manager as well. 

### Mac OS X

On Mac OSX, a folder or `.nw` file can be dropped onto the nw.app application bundle. On the Mac OSX Terminal (commandline), you can use nw like this (assuming it's installed to the Applications directory): 

    open -n -a nwjs "/home/path/to/app" 

In some cases it may be faster to invoke the nw binary inside the application bundle directly via the following: 

    /Applications/nwjs.app/Contents/MacOS/nwjs myapp 

You can setup an alias in your Terminal session to call the binary when you use nw by adding an alias to your ~/.bash_profile (open -a TextEdit ~/.bash_profile): 

    # alias to nw
    alias nw="/Applications/nwjs.app/Contents/MacOS/nwjs"

You have to refresh the bash shell environment:

    source ~/.bash_profile

Now you can call nw from the commandline like Linux and Windows: 

    nw "/home/path/to/game" 