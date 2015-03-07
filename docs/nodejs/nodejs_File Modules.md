## File Modules

## 

If the exact filename is not found, then node will attempt to load the
required filename with the added extension of `.js`, `.json`, and then `.node`.

`.js` files are interpreted as JavaScript text files, and `.json` files are
parsed as JSON text files. `.node` files are interpreted as compiled addon
modules loaded with `dlopen`.

A module prefixed with `'/'` is an absolute path to the file. For
example, `require('/home/marco/foo.js')` will load the file at
`/home/marco/foo.js`.

A module prefixed with `'./'` is relative to the file calling `require()`.
That is, `circle.js` must be in the same directory as `foo.js` for
`require('./circle')` to find it.

Without a leading '/' or './' to indicate a file, the module is either a
"core module" or is loaded from a `node_modules` folder.

If the given path does not exist, `require()` will throw an Error with its
`code` property set to `'MODULE_NOT_FOUND'`.