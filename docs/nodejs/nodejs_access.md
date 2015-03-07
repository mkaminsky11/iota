## fs.access(path\[, mode\], callback)

## 

Tests a user's permissions for the file specified by `path`. `mode` is an
optional integer that specifies the accessibility checks to be performed. The
following constants define the possible values of `mode`. It is possible to
create a mask consisting of the bitwise OR of two or more values.

* `fs.F_OK` - File is visible to the calling process. This is useful for
determining if a file exists, but says nothing about `rwx` permissions.
Default if no `mode` is specified.
* `fs.R_OK` - File can be read by the calling process.
* `fs.W_OK` - File can be written by the calling process.
* `fs.X_OK` - File can be executed by the calling process. This has no effect
on Windows (will behave like `fs.F_OK`).

The final argument, `callback`, is a callback function that is invoked with
a possible error argument. If any of the accessibility checks fail, the error
argument will be populated. The following example checks if the file
`/etc/passwd` can be read and written by the current process.

    fs.access('/etc/passwd', fs.R_OK | fs.W_OK, function(err) {
      util.debug(err ? 'no access!' : 'can read/write');
    });