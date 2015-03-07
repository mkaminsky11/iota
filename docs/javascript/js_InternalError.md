## InternalError

**Non-standard**  
This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

### Summary

The **`InternalError` object** indicates an error that occurred internally in the JavaScript engine. For example: **"InternalError**: too much recursion".

### Syntax

    new InternalError([_message_[, _fileName_[, _lineNumber_]]])

### Parameters

**`message`**

> Optional. Human-readable description of the error

**`fileName` __**

> Optional. The name of the file containing the code that caused the exception

**`lineNumber` __**

> Optional. The line number of the code that caused the exception

### Description

An `InternalError` is thrown whenever an internal error in the JavaScript engine occurred.

Example cases are mostly when something is too large, e.g.:

* "too many switch cases",
* "too many parentheses in regular expression",
* "array initializer too large",
* "too much recursion".

### Properties

**[`InternalError.prototype`][0]**

> Allows the addition of properties to an `InternalError` object.

### Methods

The global `InternalError` contains no methods of its own, however, it does inherit some methods through the prototype chain.

### `InternalError` instances

### Properties

**`InternalError.prototype.constructor`**

> Specifies the function that created an instance's prototype.

**[`InternalError.prototype.message`][1]**

> Error message. Inherited from [`Error`][2].

**[`InternalError.prototype.name`][3]**

> Error name. Inherited from [`Error`][2].

**[`InternalError.prototype.fileName`][4]**

> Path to file that raised this error. Inherited from [`Error`][2].

**[`InternalError.prototype.lineNumber`][5]**

> Line number in file that raised this error. Inherited from [`Error`][2].

**[`InternalError.prototype.columnNumber`][6]**

> Column number in line that raised this error. Inherited from [`Error`][2].

**[`InternalError.prototype.stack`][7]**

> Stack trace. Inherited from [`Error`][2].

### Methods

Although the [`InternalError`][8] prototype object does not contain any methods of its own, [`InternalError`][8] instances do inherit some methods through the prototype chain.


[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/InternalError/prototype "The InternalError.prototype property represents the prototype of the InternalError constructor."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/message "The message property is a human-readable description of the error."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base objects for user-defined exceptions. See below for standard built-in error types."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/name "The name property represents a name for the type of error. The initial value is "Error"."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName "The fileName property contains the path to the file that raised this error."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber "The lineNumber property contains the line number in the file that raised this error."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber "The columnNumber property contains the column number in the line of the file that raised this error."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/stack "The non-standard stack property of Error objects offer a trace of which functions were called, in what order, from which line and file, and with what arguments. The stack string proceeds from the most recent calls to earlier ones, leading back to the original global scope call."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/InternalError "The InternalError object indicates an error that occured internally in the JavaScript engine. For example: "InternalError: too much recursion"."