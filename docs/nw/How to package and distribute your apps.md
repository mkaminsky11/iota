## How to package and distribute your apps

## Quick start

Just put the files along with NW files in the same directory and then ship them to your users.  
nw.exe and package.json should be in the same directory.  

On OSX it's different: put the tree of your app in a directory named `nwjs.app/Contents/Resources/app.nw`.

For more info and other ways of packaging, please read on.

## Preparing extra files

The following sub-directories can be put in application's root directory:

* **node_modules** - any Node modules you want to deploy with your application
* **plugins** - NPAPI plugin files

You don't need to ship the `nwsnapshot` file in the downloaded zip.

**Caution**: do not assume your `node_modules` that target one platform work _as is_ in all platforms. For instance `node-email-templates` has specific Windows & Mac os x `npm install` commands. Besides, it requires python to install properly, which is not installed by default on Windows.

As a rule of thumb `npm install` your `package.json` on each platform you target to ensure everything works as expected.

## Step 1: Make a package

_Since our package system is similar to [LÖVE](https://love2d.org), following guides are modified from its [Wiki](https://love2d.org/wiki/Game_Distribution)._

An app's package is a zip archive with `.nw` as extension. Three caveats:

* There must be a `package.json` file that describes the package, see [[Manifest format]].
* The `package.json` file must be at the root of the archive. 
* In the `.nw`, the file and directory path names are case sensitive. This can be puzzling for Windows and Mac OS X users, whose filesystem is case insensitive, and whose apps may work when unzipped but not when packaged.

Here's how to proceed to generate a working `.nw` file:

### Windows 

1. Create a zip file (this is built into XP, Vista and 7) 
2. Copy all of your files into the zip file, retaining directory structure and making sure that the `package.json` file is in the root directory (if you make a zip file containing a folder with your stuff in it, then it's not going to work) 
3. Rename the file extension from `.zip` to `.nw`. By default, file extensions may be hidden. You need to (press `alt`), go to folder options and uncheck "Hide extensions for known file types" to be able to rename the zip. 

### Linux / OS X 

From the command line: 

1. Go to your project directory a la `cd ~/Projects/my_app`
2. Run `zip -r ../${PWD##*/}.nw *`
3. Your fully-prepared `.nw` file shall be located right outside of your project directory 
4. Cake!

## Step 2a: Put your app with nw executable

* You can zip your files and name it `package.nw` and place it in the same directory with nw executable.
* Or you can just put files of node-webkit in the same directory with your package.json and then distribute the tree. When nw executable is started it will look for package.json in the same directory. (on OSX it's the same level directory with `node-webkit.app`). **This is the recommended way if the size of your files are big.**
* [nodebob](https://github.com/geo8bit/nodebob) is a build tool for node-webkit that automates a release of your node-webkit application in windows environment. Currently in v0.1, written in windows batch script.
* [node-webkit-builder](https://github.com/mllrsohn/node-webkit-builder) & [grunt-node-webkit-builder](https://github.com/mllrsohn/grunt-node-webkit-builder) Let's you build your node-webkit apps for mac, win and linux with grunt. They will download the prebuilt binaries for a specific version, unpacks it, creates a release folder, creates the app.nw file for a specified directory and copies the app.nw file to where it belongs
* [Nuwk!](http://codeb.it/nuwk/) Nuwk! makes it easy to create Mac Applications based on node-webkit, simplifying testing and building procedures. It takes care of creating the executable, attaching the app icon and configuring the plist file accordingly. (very alpha stage)
* [generator-node-webkit](https://www.npmjs.org/package/generator-node-webkit) is a yeoman generator to develop node-webkit applications and create packages for mac, linux and win.
* [lein-node-webkit-builder](https://github.com/wilkerlucio/lein-node-webkit-build) It's similar to `grunt-node-webkit-builder`, will download the binaries automatically and let you build on multi-platforms, but it runs as a [Leiningen](http://leiningen.org/) plugin, more suitable for people working with [ClojureScript](https://github.com/clojure/clojurescript).
* [Web2Executable](https://github.com/jyapayne/Web2Executable) It's a full, cross-platform, opensource GUI packaging app that makes a single binary out of the web app, ready to use out of the box. It massively simplifies packaging apps and works with the Phaser game library. Works on Mac OSX, Linux and Windows using Pyside. It's in beta, so feedback and contributors are very welcome.

## Step 2b: Alternative way - Making an executable file out of a .nw file 

Many people are (understandably) concerned about what end-users need to do in order to run an app. If users receive a `.nw` alone, they will naturally need `node-webkit` installed (or at least unzipped) in order to run it. But, with `node-webkit`, you can merge the `.nw` file with the `node-webkit` executable. 

In general, it's recommended to offer a `.nw` for download, and optionally "merged" versions for the platforms where this makes things simpler. 

Two things should be noted: 

* The end result will not be a single executable, you must also include some DLLs in your zip-file. 
* The resulting executable from the merge will still be readable by archiving software, such as WinZip.

### Windows 

Here's how to do it on Windows. In a console, type this: 

    copy /b nw.exe+app.nw app.exe 

Then, all you have to do is zip app.exe and required DLLs, and distribute them. Yes; this does mean that the app will have a private copy of `node-webkit`, but there's nothing wrong with that. It also means that you will have to create one package for each platform you would like to support, or simply offer the `.nw` alone for the other platforms. 

And please also note that the `nw.pak` must also be distributed along with the `app.exe`.

**Important note**: if you are using native modules, your `.exe` file shall be named `nw.exe` as detailed in [Using Node modules](https://github.com/rogerwang/node-webkit/wiki/Using-Node-modules). Additional information is available at [#199](https://github.com/rogerwang/node-webkit/issues/199).

### Linux 

On Linux, it's similar: 

    cat /usr/bin/nw app.nw > app && chmod +x app 

Then, you'll have to make a package for various packaging systems with dependencies as the `node-webkit` package. Were you to make a .deb package this way, for instance, the user would not have to install the `node-webkit` package separately. 

And please note that the `nw.pak` file must also be in the same directory with the `app` file, otherwise you would expect blank page for some features.

Eventually, we will provide scripts which do this automatically for various package systems. You'll have to figure it out yourself until then. 

### Mac OS X 

_Following guides apply to node-webkit >= 0.2.4_

On OS X, the `node-webkit.app` is a directory that can be easily changed. To make node-webkit automatically open your app, you need to put your app file under `Contents/Resources` and name it `app.nw`. The bonus over other platforms is that `app.nw` does not need to be a zip file, if you want to speed up startup, you can make `app.nw` your app's directory.

And you need to modify following files to make a real distribution of yours:

* `Contents/Resources/nw.icns`: icon of your app.
* `Contents/Info.plist`: the apple package description file.

About the `Info.plist` file, you can view [Implementing Cocoa's Standard About Panel](http://cocoadevcentral.com/articles/000071.php) on how this file will influence your app and what fields you should modify.

## Which files should be shipped?

**Starting from v0.10.0, `icudtl.dat` need to be shipped on all the 3 platforms, and `icudt.dll` is not needed anymore.**

Apart from the binary files, there're some other files you should also ship, see instructions for different platforms below. 

And since the binary is based on Chromium, multiple open source license notices are needed including the MIT License, the LGPL, the BSD, the Ms-PL and an MPL/GPL/LGPL tri-license. _(This doesn't apply to your code and you don't have to open source your code)_

### Windows

The `nw.pak` and `icudt.dll` must be shipped along with `nw.exe`, the former one contains important javascript lib files, and the latter one is a important network library.

`ffmpegsumo.dll` are media library, if you want to use `<video>` and `<audio>` tag, or other media related features, you should ship it.

`libEGL.dll` and `libGLESv2.dll` are used for WebGL and GPU acceleration, you had better ship them. And `D3DCompiler_43.dll` and `d3dx9_43.dll` as well if you want to make sure WebGL works on more hardware. These 2 files are from DirectX redistributable.

### Linux

`nw.pak` must be shipped with `nw`. If you want media features, also ship `libffmpeg.so`.

### Mac OS X

Just ship the `node-webkit.app` would be fine, you don't need to care for other things.

## An alternative way to make an executable file in Windows

After packaging `app.nw` into `nw.exe` in the above way, you still have to ship `app.exe` with `nw.pak` and some `*.dll` files to the end users. It's still possible to improve the result.

[Enigma Virtual Box](http://enigmaprotector.com/en/aboutvb.html) is a software that 'enables application files and registry to be consolidated in a single executable file'. It's [free](http://forum.enigmaprotector.com/viewtopic.php?f=20&t=5334) for personal and commercial use. 

__Attention__! "Enigma Virtual Box" and all accompanying files are licensed "AS IS" without warranties as to performance or merchantability or any other warranties whether expressed or implied. __You use this way at your own risk!__ There may or may not be some issues with the program generated.

1. [Download](http://enigmaprotector.com/assets/files/enigmavb.exe) and install the software. 
2. Open 'Enigma Virtual Box' from start menu or the program folder.
3. Browse and choose the `app.exe` main program file in the `Enter Input File Name` blank.
4. Drag (or use the 'add' button to select and add) all the other `*.dll` files and `nw.pak` into the 'Files' blank. When the 'Select Folder' panel alerts, choose '%DEFAULT FOLDER' (the default value in fact) and press 'OK' button.
5. Press 'File Options', choose 'Compress Files', and 'OK' if you like.
6. Some other configures if you know what you are doing.
7. Press the big 'Process' button in the main panel.
8. After all things done, you can press 'Close' and exit Enigma Virtual Box.
9. There should be a new `app_boxed.exe` in the program folder now.

Now you can move and distribute the single `app_boxed.exe` to anywhere, without any `nw.pak` and `*.dll` files.

Alternatively, for batch bundling, there is also a small Node integration module 
[enigmavirtualbox](https://www.npmjs.org/package/enigmavirtualbox). It
even automatically downloads and locally unpacks the Enigma Virtual Box
distribution. For this, install Node and NPM and run in your Windows
terminal:

1. `npm install -g enigmavirtualbox`
2. `enigmavirtualbox gen app.evp app_boxed.exe app.exe nw.pak icudtl.dat ffmpegsumo.dll libEGL.dll libGLESv2.dll` (generate configuration)
3. `enigmavirtualbox gui app.evp` (optionally post-edit configuration)
4. `enigmavirtualbox cli app.evp` (execute bundling process in batch)

The generated configuration file `app.evp` can be stored so you
can repeat step (4) arbitrary times.

## Setup on Windows

Instead of packaging your app in one exe file, you can create a setup which contains all necessary files. A free software for easily creating setups is Inno Setup: http://www.jrsoftware.org/isinfo.php

An example for a setup configuration can be found here: https://github.com/SSilence/sum/blob/master/setup.iss