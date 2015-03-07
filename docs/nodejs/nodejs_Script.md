## new vm.Script(code, options)

## 

Creating a new `Script` compiles `code` but does not run it. Instead, the
created `vm.Script` object represents this compiled code. This script can be run
later many times using methods below. The returned script is not bound to any
global object. It is bound before each run, just for that run.

The options when creating a script are:

* `filename`: allows you to control the filename that shows up in any stack
traces produced from this script.
* `displayErrors`: whether or not to print any errors to stderr, with the
line of code that caused them highlighted, before throwing an exception.
Applies only to syntax errors compiling the code; errors while running the
code are controlled by the options to the script's methods.