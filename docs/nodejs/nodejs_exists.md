## fs.exists(path, callback)

## 

Test whether or not the given path exists by checking with the file system.
Then call the `callback` argument with either true or false. Example:

    fs.exists('/etc/passwd', function (exists) {
      util.debug(exists ? "it's there" : "no passwd!");
    });

`fs.exists()` is an anachronism and exists only for historical reasons.
There should almost never be a reason to use it in your own code.

In particular, checking if a file exists before opening it is an anti-pattern
that leaves you vulnerable to race conditions: another process may remove the
file between the calls to `fs.exists()` and `fs.open()`. Just open the file
and handle the error when it's not there.

`fs.exists()` will be deprecated.