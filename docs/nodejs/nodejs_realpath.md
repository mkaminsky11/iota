## fs.realpath(path\[, cache\], callback)

## 

Asynchronous realpath(2). The `callback` gets two arguments `(err,
resolvedPath)`. May use `process.cwd` to resolve relative paths. `cache` is an
object literal of mapped paths that can be used to force a specific path
resolution or avoid additional `fs.stat` calls for known real paths.

Example:

    var cache = {'/etc':'/private/etc'};
    fs.realpath('/etc/passwd', cache, function (err, resolvedPath) {
      if (err) throw err;
      console.log(resolvedPath);
    });