## process.getgid()

## 

Note: this function is only available on POSIX platforms (i.e. not Windows,
Android)

Gets the group identity of the process. (See getgid(2).)
This is the numerical group id, not the group name.

    if (process.getgid) {
      console.log('Current gid: ' + process.getgid());
    }