## Building-nw.js

Our compilation will follow `Chromium`'s standard, by using `gclient` and `gyp`, be sure to read following documentations before you continue, they contained required knowledge to build `node-webkit`.

* [Get the Code](http://www.chromium.org/developers/how-tos/get-the-code) - the usage of `gclient`

And preview the upstream instructions for your platform, they contained important building conventions.

* [Build Instructions for Windows](http://www.chromium.org/developers/how-tos/build-instructions-windows)
* [Build instructions for Linux](http://code.google.com/p/chromium/wiki/LinuxBuildInstructions)
* [Build instructions for Mac OS X](http://code.google.com/p/chromium/wiki/MacBuildInstructions)

## Prerequisite

1. [Get the Chromium depot_tools](http://www.chromium.org/developers/how-tos/install-depot-tools).
2. Setup building enviroment, see *Build Instructions* above.

**Starting from v0.11.0, it's required to use at least VS2013 Pro update 2 to build on windows.** And see also the section 'Official extra build settings' below.

## Get the Code

`node-webkit` is now a part of our custom `Chromium`, that means the way we get `node-webkit` is mostly the same with `Chromium`, following steps are indeed modified from the [Get the Code](http://www.chromium.org/developers/how-tos/get-the-code).

First find a place to put our code, it will take up about 14G disk space after compilation.

### Getting main version of node-webkit

To start, make an empty directory, say `node-webkit`, then create the `.gclient` file in it, its content should be:

    solutions = [
       { "name"        : "src",
         "url"         : "https://github.com/nwjs/chromium.src.git@origin/nw12",
         "deps_file"   : "DEPS",
         "managed"     : True,
         "custom_deps" : {
           "src/third_party/WebKit/LayoutTests": None,
           "src/chrome_frame/tools/test/reference_build/chrome": None,
           "src/chrome_frame/tools/test/reference_build/chrome_win": None,
           "src/chrome/tools/test/reference_build/chrome": None,
           "src/chrome/tools/test/reference_build/chrome_linux": None,
           "src/chrome/tools/test/reference_build/chrome_mac": None,
           "src/chrome/tools/test/reference_build/chrome_win": None,
         },
         "safesync_url": "",
       },
    ]

### Getting forked version of node-webkit

These instructions will help you build a custom version of node-webkit that you have forked off [the main version](https://github.com/rogerwang/node-webkit).

First, create a fork of [chromium.src](https://github.com/nwjs/chromium.src).

Next, edit *DEPS* by changing the value of `deps['src/content/nw']` from `https://github.com/rogerwang/node-webkit.git@origin/master` to the URL of your forked version of node-webkit.

Then, if you have added any dependencies to the project, make sure to specify them in the appropriate gyp file (these are located in the **build** directory).

Now, on your workstation make an empty directory, say `node-webkit`, then create the `.gclient` file in it, its content should be:

    solutions = [
       { "name"        : "src",
         "url"         : "https://github.com/YOUR-NAME-HERE/chromium.src.git@origin/nw12",
         "deps_file"   : "DEPS",
         "managed"     : True,
         "custom_deps" : {
           "src/third_party/WebKit/LayoutTests": None,
           "src/chrome_frame/tools/test/reference_build/chrome": None,
           "src/chrome_frame/tools/test/reference_build/chrome_win": None,
           "src/chrome/tools/test/reference_build/chrome": None,
           "src/chrome/tools/test/reference_build/chrome_linux": None,
           "src/chrome/tools/test/reference_build/chrome_mac": None,
           "src/chrome/tools/test/reference_build/chrome_win": None,
         },
         "safesync_url": "",
       },
    ]

### Syncing code

Finally sync code under `node-webkit` directory (where `.gclient` resides), it would spend a few hours depending on your network condition:

    gclient sync

If you are not interested in the repo history and don't want to wait hours or have a slow/flaky internet connection, you can use the --no-history flag

    gclient sync --no-history


### Notes

_On OSX you'll see error messages reporting `cycle in .gyp file dependency graph detected`. It can be ignored because `gclient` wants to run `gyp_chromium` without a switch we need. Please move on to the `Build` section._

Assume you store code under `node-webkit` folder, after all code is downloaded by gclient, our final directory architecture will be like:

    node-webkit/
    |-- .gclient
    `-- src/
        |-- many-stuff
        |-- ...
        `-- content
            |-- ...
            `-- nw  (source code of this repo)

Note: if you're on Linux and you get any dependency errors during `gclient sync` (like 'nss' or 'gtk+-2.0'), run `./src/build/install-build-deps.sh`, then re-run gclient sync:

    cd /path/to/node-webkit
    # Do this to boot strap dependencies on Linux:
    gclient sync --nohooks
    ./src/build/install-build-deps.sh
    gclient sync

If you encountered other problems, see [UsingNewGit](http://code.google.com/p/chromium/wiki/UsingNewGit).

### Extra Steps on Windows

If you're building node-webkit on Windows, you should copy DirectX SDK files into `/path/to/node-webkit/src/third_party/directxsdk/files`:

```bash
mkdir -p /path/to/node-webkit/src/third_party/directxsdk/files
cp -r /c/Program\ Files\ \(x86\)/Microsoft\ DirectX\ SDK\ \(June\ 2010\)/* /path/to/node-webkit/src/third_party/directxsdk/files/
```

This step is necessary to get some DirectX dlls files extracted, and we mentioned it here because this is not documented in Chromium's site.

### Build

After the `gclient sync`, project files should have be prepared. If not, you should manually run:

    ./build/gyp_chromium content/content.gyp   (on OSX the argument '--no-circular-check' is needed)

Then you can just compile the `nw` target (and don't forget to build with `Release` mode):

* Windows - Use `ninja` as described below. Currently building with Visual Studio (Open the Visual Studio solution file and build project `nw` under `content`) is reported broken.
* Mac OS X - Use `ninja` as described bellow, XCode will die building `node-webkit` :(. 
* Linux - Run `make -j4 nw BUILDTYPE=Release` from the Chromium `src` directory. 

Alternately, you can use `ninja` to build `node-webkit`, see [NinjaBuild](http://code.google.com/p/chromium/wiki/NinjaBuild). This method is also recommended since it's very fast and easy to use. A short summary of using `ninja` is:

````
export GYP_GENERATORS='ninja'
./build/gyp_chromium content/content.gyp
ninja -C out/Release nw -j4
````

## Official extra build settings

Windows all: set DEPOT_TOOLS_WIN_TOOLCHAIN=0; set GYP_MSVS_VERSION=2013  
Win64: set GYP_DEFINES='host_arch=x64 target_arch=x64' and build in src/out/Release_x64  
Mac ia32: export GYP_DEFINES='host_arch=ia32'  
Linux ia32: export GYP_DEFINES='clang=0'  

You can view the official build environment settings and commands in the build log here: http://buildbot-master.node-webkit.org:8010/waterfall

##Tips
1. You can specify what project files to generate through `GYP_GENERATORS`. And you can export it in `~/.bashrc` etc.For example, if you want to use `make`:
````
export GYP_GENERATORS='make'
./build/gyp_chromium content/content.gyp
````

2. When you build on Mac, don't forget to pass `--no-circular-check` to generate project files:
````
export GYP_GENERATORS='ninja'
./build/gyp_chromium content/content.gyp --no-circular-check
````

## Build Faster

* [Build Instructions for Windows](http://www.chromium.org/developers/how-tos/build-instructions-windows#TOC-Accelerating-the-build)
* [LinuxFasterBuilds](http://code.google.com/p/chromium/wiki/LinuxFasterBuilds)
* [WindowsPrecompiledHeaders](http://code.google.com/p/chromium/wiki/WindowsPrecompiledHeaders)

## Update to upstream

You can use gclient to update everything automatically:

````
cd /path-to-node-webkit
gclient sync
````

NW.js's code are in 6 git repos. To keep an eye on the commits, subscribe to our dev mailing list: node-webkit-dev+subscribe@googlegroups.com . 

List of repos, they are the repos we're doing daily works on and there are no internal repos:
````
https://github.com/nwjs/node-webkit
https://github.com/nwjs/blink
https://github.com/nwjs/chromium.src
https://github.com/nwjs/breakpad
https://github.com/nwjs/v8
https://github.com/nwjs/node
````
### branches
There are two branches for node-webkit: v0.8 branch and master branch. See https://groups.google.com/d/msg/node-webkit/2OJ1cEMPLlA/09BvpTagSA0J

The "default branch" is the branch name you see in the start page of github repos. Regarding the root Chromium repo, the current default branch is 'nw12'.

The branch names in dependency repos are specified in `DEPS` or `.DEPS.git` file in the root repo. The tool 'gclient' is supposed to sync them for you. But sometimes manual switching between branches might be needed.