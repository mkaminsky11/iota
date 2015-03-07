## Watchers

## 

You can watch expression and variable values while debugging your code.
On every breakpoint each expression from the watchers list will be evaluated
in the current context and displayed just before the breakpoint's source code
listing.

To start watching an expression, type `watch("my_expression")`. `watchers`
prints the active watchers. To remove a watcher, type
`unwatch("my_expression")`.