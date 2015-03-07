## util.deprecate(function, string)

## 

Marks that a method should not be used any more.

    exports.puts = exports.deprecate(function() {
      for (var i = 0, len = arguments.length; i < len; ++i) {
        process.stdout.write(arguments[i] + '\n');
      }
    }, 'util.puts: Use console.log instead')

It returns a modified function which warns once by default. If
`--no-deprecation` is set then this function is a NO-OP. If
`--throw-deprecation` is set then the application will throw an exception
if the deprecated API is used.