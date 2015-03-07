## readline.createInterface(options)

## 

Creates a readline `Interface` instance. Accepts an "options" Object that takes
the following values:

* `input` - the readable stream to listen to (Required).
* 
`output` - the writable stream to write readline data to (Optional).
* 
`completer` - an optional function that is used for Tab autocompletion. See
below for an example of using this.
* 
`terminal` - pass `true` if the `input` and `output` streams should be
treated like a TTY, and have ANSI/VT100 escape codes written to it.
Defaults to checking `isTTY` on the `output` stream upon instantiation.

The `completer` function is given the current line entered by the user, and
is supposed to return an Array with 2 entries:

1. An Array with matching entries for the completion.
2. 
The substring that was used for the matching.

Which ends up looking something like:
`[[substr1, substr2, ...], originalsubstring]`.

Example:

    function completer(line) {
      var completions = '.help .error .exit .quit .q'.split(' ')
      var hits = completions.filter(function(c) { return c.indexOf(line) == 0 })
      // show all completions if none found
      return [hits.length ? hits : completions, line]
    }

Also `completer` can be run in async mode if it accepts two arguments:

    function completer(linePartial, callback) {
      callback(null, [['123'], linePartial]);
    }

`createInterface` is commonly used with `process.stdin` and
`process.stdout` in order to accept user input:

    var readline = require('readline');
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

Once you have a readline instance, you most commonly listen for the
`"line"` event.

If `terminal` is `true` for this instance then the `output` stream will get
the best compatibility if it defines an `output.columns` property, and fires
a `"resize"` event on the `output` if/when the columns ever change
(`process.stdout` does this automatically when it is a TTY).