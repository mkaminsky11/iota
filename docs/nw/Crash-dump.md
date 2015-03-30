## Crash-dump

Since 0.8.0 crash dump is supported. It means if node-webkit crashed, a `minidump` file will be saved. Users can include it in the bug report. It would be helpful to find out what's wrong with node-webkit in certain cases. Ideally node-webkit should not crash in all cases.

Crash dumping is enabled on all the 3 platforms and the minidump file will be saved in the following default directories:

 * Linux: /tmp
 * Windows: [System temporary directory](http://msdn.microsoft.com/en-us/library/windows/desktop/aa364992%28v=vs.85%29.aspx)
 * Mac: ~/Library/Breakpad/`product name`  (product name is defined in .plist file in the application bundle)

The dump location can be changed by an API:

```javascript
var gui = require('nw.gui');
gui.App.setCrashDumpDir(dir);
```

Note that if the program crashes before setting the new location, the dump file will still be saved in the default location.

## Decoding the stack trace ##

To extract the stack trace from the minidump file, you need the `minidump_stackwalk` tool, symbols file of node-webkit binary and the minidump (.dmp) file generated from the crash. 

See http://www.chromium.org/developers/decoding-crash-dumps  

http://code.google.com/p/google-breakpad/wiki/GettingStartedWithBreakpad

Symbols file of official node-webkit binary is provided staring from 0.8.0. It can be downloaded from:

## Trigger the crash for testing ##

To test the crash dump feature, 2 API functions are added in 0.8.0 to trigger the crash on purpose: `App.crashBrowser()` and `App.crashRenderer()`. They crash the browser process and the renderer process respectively.

## Resources ##
You can always find the links to symbols in the release notes of every version.  
**Linux symbol files of breakpad**

https://s3.amazonaws.com/node-webkit/v0.8.0/nw.breakpad.ia32.gz

https://s3.amazonaws.com/node-webkit/v0.8.0/nw.breakpad.x64.gz

**windows pdb file**

https://s3.amazonaws.com/node-webkit/v0.8.0/nw.exe.pdb.zip

**mac dSYM files**

https://s3.amazonaws.com/node-webkit/v0.8.0/node-webkit-osx-dsym-v0.8.0.tar.gz
