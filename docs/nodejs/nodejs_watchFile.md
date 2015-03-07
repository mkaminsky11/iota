## fs.watchFile(filename\[, options\], listener)

## 

Watch for changes on `filename`. The callback `listener` will be called each
time the file is accessed.

The second argument is optional. The `options` if provided should be an object
containing two members a boolean, `persistent`, and `interval`. `persistent`
indicates whether the process should continue to run as long as files are
being watched. `interval` indicates how often the target should be polled,
in milliseconds. The default is `{ persistent: true, interval: 5007 }`.

The `listener` gets two arguments the current stat object and the previous
stat object:

    fs.watchFile('message.text', function (curr, prev) {
      console.log('the current mtime is: ' + curr.mtime);
      console.log('the previous mtime was: ' + prev.mtime);
    });

These stat objects are instances of `fs.Stat`.

If you want to be notified when the file was modified, not just accessed
you need to compare `curr.mtime` and `prev.mtime`.