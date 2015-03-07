## Statements

JavaScript applications consist of statements with an appropriate syntax. A single statement may span multiple lines. Multiple statements may occur on a single line if each statement is separated by a semicolon. This isn't a keyword, but a group of keywords.

### Statements and declarations by category

For an alphabetical listing see the sidebar on the left.

### Control flow

**[`Block`][0]**

> A block statement is used to group zero or more statements. The block is delimited by a pair of curly brackets.

**[`break`][1]**

> Terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.

**[`continue`][2]**

> Terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

**[`Empty`][3]**

> An empty statement is used to provide no statement, although the JavaScript syntax would expect one.

**[`if...else`][4]**

> Executes a statement if a specified condition is true. If the condition is false, another statement can be executed.

**[`switch`][5]**

> Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.

**[`throw`][6]**

> Throws a user-defined exception.

**[`try...catch`][7]**

> Marks a block of statements to try, and specifies a response, should an exception be thrown.

### Declarations

**[`var`][8]**

> Declares a variable, optionally initializing it to a value.

**__ [`let`][9]**

> Declares a block scope local variable, optionally initializing it to a value.

**__ [`const`][10]**

> Declares a read-only named constant.

### Functions

**[`function`][11]**

> Declares a function with the specified parameters.

**__ [`function*`][12]**

> Generators functions enable writing [iterators][13] more easily.

**[`return`][14]**

> Specifies the value to be returned by a function.

### Iterations

**[`do...while`][15]**

> Creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

**[`for`][16]**

> Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop.

**__ __ [`for each...in`][17]**

> Iterates a specified variable over all values of object's properties. For each distinct property, a specified statement is executed.

**[`for...in`][18]**

> Iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.

**__ [`for...of`][19]**

> Iterates over iterable objects (including [arrays][20], array-like objects, [iterators and generators][21]), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

**[`while`][22]**

> Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

### Others

**[`debugger`][23]**

> Invokes any available debugging functionality. If no debugging functionality is available, this statement has no effect.

**__ [`export`][24]**

> Used to export functions to make them available for imports in external modules, another scripts.

**__ [`import`][25]**

> Used to import functions exported from an external module, another script.

**[`label`][26]**

> Provides a statement with an identifier that you can refer to using a `break` or `continue` statement.

**__ [`with`][27]**

> Extends the scope chain for a statement.



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/block "A block statement (or compound statement in other languages) is used to group zero or more statements. The block is delimited by a pair of curly brackets."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/break "The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/continue "The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/Empty "An empty statement is used to provide no statement, although the JavaScript syntax would expect one."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/if...else "The if statement executes a statement if a specified condition is true. If the condition is false, another statement can be executed."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/switch "The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/throw "The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/try...catch "The try...catch statement marks a block of statements to try, and specifies a response, should an exception be thrown."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/var "The variable statement declares a variable, optionally initializing it to a value."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let "The let statement declares a block scope local variable, optionally initializing it to a value."
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const "The const declaration creates a read-only named constant."
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function "The function declaration defines a function with the specified parameters."
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function* "The function* declaration (function keyword followed by an asterisk) defines a generator function."
[13]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Guide/The_Iterator_protocol
[14]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/return "The return statement ends function execution and specifies a value to be returned to the function caller."
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/do...while "The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once."
[16]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for "The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement or a set of statements executed in the loop."
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for_each...in "The for each...in statement iterates a specified variable over all values of object's properties. For each distinct property, a specified statement is executed."
[18]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...in "The for..in statement iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed."
[19]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of "The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property."
[20]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference/Global_Objects/Array "Array"
[21]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/JavaScript/Guide/Iterators_and_Generators "Iterators and generators"
[22]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while "The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement."
[23]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/debugger "The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect."
[24]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/export "The export statement is used to allow a signed script to provide properties, functions, and objects to other signed or unsigned scripts. It is an ancient Netscape 4 feature that has been removed in Firefox 3.5 (bug 447713). In the future, a new export declaration will be specified by ECMAScript 6 modules."
[25]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/import "The import statement is used to import functions exported from an external module, another script."
[26]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/label "The labeled statement can be used with break or continue statements. It is prefixing a statement with an identifier which you can refer to."
[27]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/with "The with statement extends the scope chain for a statement."