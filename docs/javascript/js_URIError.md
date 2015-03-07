## URIError

### Summary

The `**URIError**` object represents an error when a global URI handling function was used in a wrong way.

### Syntax

    new URIError([_message_[, _fileName_[, _lineNumber_]]])

### Parameters

**`message`**

> Optional. Human-readable description of the error

**`fileName` __**

> Optional. The name of the file containing the code that caused the exception

**`lineNumber` __**

> Optional. The line number of the code that caused the exception

### Description

A `URIError` is thrown when the global URI handling functions are passed a malformed URI.

### Properties

**[`URIError.prototype`][0]**

> Allows the addition of properties to a `URIError` object.

### Methods

The global `URIError` contains no methods of its own, however, it does inherit some methods through the prototype chain.

### `URIError` instances

### Properties

**`URIError.prototype.constructor`**

> Specifies the function that created an instance's prototype.

**[`URIError.prototype.message`][1]**

> Error message. Although ECMA-262 specifies that [`URIError`][2] should provide its own `message` property, in [SpiderMonkey][3], it inherits [`Error.prototype.message`][1].

**[`URIError.prototype.name`][4]**

> Error name. Inherited from [`Error`][5].

**[`URIError.prototype.fileName`][6]**

> Path to file that raised this error. Inherited from [`Error`][5].

**[`URIError.prototype.lineNumber`][7]**

> Line number in file that raised this error. Inherited from [`Error`][5].

**[`URIError.prototype.columnNumber`][8]**

> Column number in line that raised this error. Inherited from [`Error`][5].

**[`URIError.prototype.stack`][9]**

> Stack trace. Inherited from [`Error`][5].

### Methods

Although the [`URIError`][2] prototype object does not contain any methods of its own, [`URIError`][2] instances do inherit some methods through the prototype chain.

### Examples

### Example: Catch an `URIError`

    try {
      decodeURIComponent('%');
    } catch (e) {
      console.log(e instanceof URIError); // true
      console.log(e.message);             // "malformed URI sequence"
      console.log(e.name);                // "URIError"
      console.log(e.fileName);            // "Scratchpad/1"
      console.log(e.lineNumber);          // 2
      console.log(e.columnNumber);        // 2
      console.log(e.stack);               // "@Scratchpad/2:2:3\n"
    }
    

### Example: Create an `URIError`

    try {
      throw new URIError('Hello', 'someFile.js', 10);
    } catch (e) {
      console.log(e instanceof URIError); // true
      console.log(e.message);             // "Hello"
      console.log(e.name);                // "URIError"
      console.log(e.fileName);            // "someFile.js"
      console.log(e.lineNumber);          // 10
      console.log(e.columnNumber);        // 0
      console.log(e.stack);               // "@Scratchpad/2:2:9\n"
    }
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/URIError/prototype "The URIError.prototype property represents the prototype for the URIError constructor."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/message "The message property is a human-readable description of the error."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/URIError "The URIError object represents an error when a global URI handling function was used in a wrong way."
[3]: https://developer.mozilla.org/en/docs/Mozilla/Projects/SpiderMonkey
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/name "The name property represents a name for the type of error. The initial value is "Error"."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base objects for user-defined exceptions. See below for standard built-in error types."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName "The fileName property contains the path to the file that raised this error."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber "The lineNumber property contains the line number in the file that raised this error."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber "The columnNumber property contains the column number in the line of the file that raised this error."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/stack "The non-standard stack property of Error objects offer a trace of which functions were called, in what order, from which line and file, and with what arguments. The stack string proceeds from the most recent calls to earlier ones, leading back to the original global scope call."