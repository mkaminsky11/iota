## Availability

## 

This feature depends on the underlying operating system providing a way
to be notified of filesystem changes.

* On Linux systems, this uses `inotify`.
* On BSD systems, this uses `kqueue`.
* On OS X, this uses `kqueue` for files and 'FSEvents' for directories.
* On SunOS systems (including Solaris and SmartOS), this uses `event ports`.
* On Windows systems, this feature depends on `ReadDirectoryChangesW`.

If the underlying functionality is not available for some reason, then
`fs.watch` will not be able to function. For example, watching files or
directories on network file systems (NFS, SMB, etc.) often doesn't work
reliably or at all.

You can still use `fs.watchFile`, which uses stat polling, but it is slower and
less reliable.