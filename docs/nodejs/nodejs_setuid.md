## process.setuid(id)

## 

Note: this function is only available on POSIX platforms (i.e. not Windows,
Android)

Sets the user identity of the process. (See setuid(2).) This accepts either
a numerical ID or a username string. If a username is specified, this method
blocks while resolving it to a numerical ID.

    if (process.getuid && process.setuid) {
      console.log('Current uid: ' + process.getuid());
      try {
        process.setuid(501);
        console.log('New uid: ' + process.getuid());
      }
      catch (err) {
        console.log('Failed to set uid: ' + err);
      }
    }