## debugger

### Summary

The **debugger statement** invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.

### Syntax

    debugger;

### Examples

The following example shows code where a debugger statement has been inserted, to invoke a debugger (if one exists) when the function is called.

    function potentiallyBuggyCode() {
        debugger;
        // do potentially buggy stuff to examine, step through, etc.
    }

When the debugger is invoked, execution is paused at the debugger statement. It is like a breakpoint in the script source.

[![Paused at a debugger statement.](https://mdn.mozillademos.org/files/6963/Screen%20Shot%202014-02-07%20at%209.14.35%20AM.png)][0]


[0]: https://mdn.mozillademos.org/files/6963/Screen Shot 2014-02-07 at 9.14.35 AM.png