## EvalError

### Summary

The **`EvalError`** object indicates an error regarding the global [`eval()`][0] function.

### Syntax

    new EvalError([_message_[, _fileName_[, _lineNumber_]]])

### Parameters

**`message`**

> Optional. Human-readable description of the error

**`fileName` __**

> Optional. The name of the file containing the code that caused the exception

**`lineNumber` __**

> Optional. The line number of the code that caused the exception

### Description

An `EvalError` is thrown when the global [`eval()`][0] function is used improperly.

### Properties

**[`EvalError.prototype`][1]**

> Allows the addition of properties to an `EvalError` object.

### Methods

The global `EvalError` contains no methods of its own, however, it does inherit some methods through the prototype chain.

### `EvalError` instances

### Properties

**`EvalError.prototype.constructor`**

> Specifies the function that created an instance's prototype.

**[`EvalError.prototype.message`][2]**

> Error message. Although ECMA-262 specifies that [`EvalError`][3] should provide its own `message` property, in [SpiderMonkey][4], it inherits [`Error.prototype.message`][2].

**[`EvalError.prototype.name`][5]**

> Error name. Inherited from [`Error`][6].

**[`EvalError.prototype.fileName`][7]**

> Path to file that raised this error. Inherited from [`Error`][6].

**[`EvalError.prototype.lineNumber`][8]**

> Line number in file that raised this error. Inherited from [`Error`][6].

**[`EvalError.prototype.columnNumber`][9]**

> Column number in line that raised this error. Inherited from [`Error`][6].

**[`EvalError.prototype.stack`][10]**

> Stack trace. Inherited from [`Error`][6].

### Methods

Although the [`EvalError`][3] prototype object does not contain any methods of its own, [`EvalError`][3] instances do inherit some methods through the prototype chain.

### Examples

`EvalError` is not used now, and never be thrown by the runtime.

### Example: Create an `EvalError`

    try {
      throw new EvalError('Hello', 'someFile.js', 10);
    } catch (e) {
      console.log(e instanceof EvalError); // true
      console.log(e.message);              // "Hello"
      console.log(e.name);                 // "EvalError"
      console.log(e.fileName);             // "someFile.js"
      console.log(e.lineNumber);           // 10
      console.log(e.columnNumber);         // 0
      console.log(e.stack);                // "@Scratchpad/2:2:9\n"
    }
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/eval() "The documentation about this has not yet been written; please consider contributing!"
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/EvalError/prototype "The EvalError.prototype property represents the prototype of the EvalError constructor."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/message "The message property is a human-readable description of the error."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/EvalError "The EvalError object indicates an error regarding the global eval() function."
[4]: https://developer.mozilla.org/en/docs/Mozilla/Projects/SpiderMonkey
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/name "The name property represents a name for the type of error. The initial value is "Error"."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base objects for user-defined exceptions. See below for standard built-in error types."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName "The fileName property contains the path to the file that raised this error."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber "The lineNumber property contains the line number in the file that raised this error."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber "The columnNumber property contains the column number in the line of the file that raised this error."
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/stack "The non-standard stack property of Error objects offer a trace of which functions were called, in what order, from which line and file, and with what arguments. The stack string proceeds from the most recent calls to earlier ones, leading back to the original global scope call."