## Advanced Usage

## 

The V8 debugger can be enabled and accessed either by starting Node with
the `--debug` command-line flag or by signaling an existing Node process
with `SIGUSR1`.

Once a process has been set in debug mode with this it can be connected to
with the node debugger. Either connect to the `pid` or the URI to the debugger.
The syntax is:

* `node debug -p <pid>` - Connects to the process via the `pid`
* `node debug <URI>` - Connects to the process via the URI such as localhost:5858