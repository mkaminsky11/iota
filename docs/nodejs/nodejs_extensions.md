## extensions {Object} 

## 

Instruct `require` on how to handle certain file extensions.

Process files with the extension `.sjs` as `.js`:

    require.extensions['.sjs'] = require.extensions['.js'];

**Deprecated** In the past, this list has been used to load
non-JavaScript modules into Node by compiling them on-demand.
However, in practice, there are much better ways to do this, such as
loading modules via some other Node program, or compiling them to
JavaScript ahead of time.

Since the Module system is locked, this feature will probably never go
away. However, it may have subtle bugs and complexities that are best
left untouched.