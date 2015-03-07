## SyntaxError

### Summary

The `**SyntaxError**` object represents an error when trying to interpret syntactically invalid code.

### Description

A `SyntaxError` is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code.

### Syntax

    new SyntaxError([_message_[, _fileName_[, _lineNumber_]]])

### Parameters

**`message`**

> Optional. Human-readable description of the error

**`fileName` __**

> Optional. The name of the file containing the code that caused the exception

**`lineNumber` __**

> Optional. The line number of the code that caused the exception

### Properties

**[`SyntaxError.prototype`][0]**

> Allows the addition of properties to a `SyntaxError` object.

### Methods

The global `SyntaxError` contains no methods of its own, however, it does inherit some methods through the prototype chain.

### `SyntaxError` instances

### Properties

**`SyntaxError.prototype.constructor`**

> Specifies the function that created an instance's prototype.

**[`SyntaxError.prototype.message`][1]**

> Error message. Although ECMA-262 specifies that [`SyntaxError`][2] should provide its own `message` property, in [SpiderMonkey][3], it inherits [`Error.prototype.message`][1].

**[`SyntaxError.prototype.name`][4]**

> Error name. Inherited from [`Error`][5].

**[`SyntaxError.prototype.fileName`][6]**

> Path to file that raised this error. Inherited from [`Error`][5].

**[`SyntaxError.prototype.lineNumber`][7]**

> Line number in file that raised this error. Inherited from [`Error`][5].

**[`SyntaxError.prototype.columnNumber`][8]**

> Column number in line that raised this error. Inherited from [`Error`][5].

**[`SyntaxError.prototype.stack`][9]**

> Stack trace. Inherited from [`Error`][5].

### Methods

Although the [`SyntaxError`][2] prototype object does not contain any methods of its own, [`SyntaxError`][2] instances do inherit some methods through the prototype chain.

### Examples

### Example: Catch an `SyntaxError`

    try {
      eval('hoo bar');
    } catch (e) {
      console.log(e instanceof SyntaxError); // true
      console.log(e.message);                // "missing ; before statement"
      console.log(e.name);                   // "SyntaxError"
      console.log(e.fileName);               // "Scratchpad/1"
      console.log(e.lineNumber);             // 1
      console.log(e.columnNumber);           // 4
      console.log(e.stack);                  // "@Scratchpad/1:2:3\n"
    }
    

### Example: Create an `SyntaxError`

    try {
      throw new SyntaxError('Hello', 'someFile.js', 10);
    } catch (e) {
      console.log(e instanceof SyntaxError); // true
      console.log(e.message);                // "Hello"
      console.log(e.name);                   // "SyntaxError"
      console.log(e.fileName);               // "someFile.js"
      console.log(e.lineNumber);             // 10
      console.log(e.columnNumber);           // 0
      console.log(e.stack);                  // "@Scratchpad/2:11:9\n"
    }
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError/prototype "The SyntaxError.prototype property represents the prototype for the SyntaxError constructor."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/message "The message property is a human-readable description of the error."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "The SyntaxError object represents an error when trying to interpret syntactically invalid code."
[3]: https://developer.mozilla.org/en/docs/Mozilla/Projects/SpiderMonkey
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/name "The name property represents a name for the type of error. The initial value is "Error"."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base objects for user-defined exceptions. See below for standard built-in error types."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName "The fileName property contains the path to the file that raised this error."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber "The lineNumber property contains the line number in the file that raised this error."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber "The columnNumber property contains the column number in the line of the file that raised this error."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/stack "The non-standard stack property of Error objects offer a trace of which functions were called, in what order, from which line and file, and with what arguments. The stack string proceeds from the most recent calls to earlier ones, leading back to the original global scope call."