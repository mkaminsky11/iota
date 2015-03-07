## process.mainModule

## 

Alternate way to retrieve
[`require.main`][0].
The difference is that if the main module changes at runtime, `require.main`
might still refer to the original main module in modules that were required
before the change occurred. Generally it's safe to assume that the two refer
to the same module.

As with `require.main`, it will be `undefined` if there was no entry script.


[0]: modules.html#modules_accessing_the_main_module