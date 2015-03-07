## \_\_filename

## 

The filename of the code being executed. This is the resolved absolute path
of this code file. For a main program this is not necessarily the same
filename used in the command line. The value inside a module is the path
to that module file.

Example: running `node example.js` from `/Users/mjr`

    console.log(__filename);
    // /Users/mjr/example.js

`__filename` isn't actually a global but rather local to each module.