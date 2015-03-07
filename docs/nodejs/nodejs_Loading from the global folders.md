## Loading from the global folders

## 

If the `NODE_PATH` environment variable is set to a colon-delimited list
of absolute paths, then node will search those paths for modules if they
are not found elsewhere. (Note: On Windows, `NODE_PATH` is delimited by
semicolons instead of colons.)

Additionally, node will search in the following locations:

* 1: `$HOME/.node_modules`
* 2: `$HOME/.node_libraries`
* 3: `$PREFIX/lib/node`

Where `$HOME` is the user's home directory, and `$PREFIX` is node's
configured `node_prefix`.

These are mostly for historic reasons. You are highly encouraged to
place your dependencies locally in `node_modules` folders. They will be
loaded faster, and more reliably.