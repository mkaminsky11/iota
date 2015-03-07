## REPL Features

## 

Inside the REPL, Control+D will exit. Multi-line expressions can be input.
Tab completion is supported for both global and local variables.

The special variable `_` (underscore) contains the result of the last expression.

    > [ "a", "b", "c" ]
    [ 'a', 'b', 'c' ]
    > _.length
    3
    > _ += 1
    4

The REPL provides access to any variables in the global scope. You can expose
a variable to the REPL explicitly by assigning it to the `context` object
associated with each `REPLServer`. For example:

    // repl_test.js
    var repl = require("repl"),
        msg = "message";
    
    repl.start("> ").context.m = msg;

Things in the `context` object appear as local within the REPL:

    mjr:~$ node repl_test.js
    > m
    'message'

There are a few special REPL commands:

* `.break` - While inputting a multi-line expression, sometimes you get lost
or just don't care about completing it. `.break` will start over.
* `.clear` - Resets the `context` object to an empty object and clears any
multi-line expression.
* `.exit` - Close the I/O stream, which will cause the REPL to exit.
* `.help` - Show this list of special commands.
* `.save` - Save the current REPL session to a file
> 
> .save ./file/to/save.js
> 

* `.load` - Load a file into the current REPL session.
> 
> .load ./file/to/load.js
> 

The following key combinations in the REPL have these special effects:

* `<ctrl>C` - Similar to the `.break` keyword. Terminates the current
command. Press twice on a blank line to forcibly exit.
* `<ctrl>D` - Similar to the `.exit` keyword.