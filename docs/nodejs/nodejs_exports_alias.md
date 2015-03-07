## exports alias

## 

The `exports` variable that is available within a module starts as a reference
to `module.exports`. As with any variable, if you assign a new value to it, it
is no longer bound to the previous value.

To illustrate the behaviour, imagine this hypothetical implementation of
`require()`:

    function require(...) {
      // ...
      function (module, exports) {
        // Your module code here
        exports = some_func;        // re-assigns exports, exports is no longer
                                    // a shortcut, and nothing is exported.
        module.exports = some_func; // makes your module export 0
      } (module, module.exports);
      return module;
    }

As a guideline, if the relationship between `exports` and `module.exports`
seems like magic to you, ignore `exports` and only use `module.exports`.