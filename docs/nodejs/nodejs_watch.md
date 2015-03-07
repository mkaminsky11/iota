## fs.watch(filename\[, options\]\[, listener\])

## 

Watch for changes on `filename`, where `filename` is either a file or a
directory. The returned object is a [fs.FSWatcher][0].

The second argument is optional. The `options` if provided should be an object.
The supported boolean members are `persistent` and `recursive`. `persistent`
indicates whether the process should continue to run as long as files are being
watched. `recursive` indicates whether all subdirectories should be watched, or
only the current directory. This applies when a directory is specified, and only
on supported platforms (See Caveats below).

The default is `{ persistent: true, recursive: false }`.

The listener callback gets two arguments `(event, filename)`. `event` is either
'rename' or 'change', and `filename` is the name of the file which triggered
the event.


[0]: #fs_class_fs_fswatcher