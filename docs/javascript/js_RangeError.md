## RangeError

### Summary

The `**RangeError**` object indicates an error when a value is not in the set or range of allowed values.

### Syntax

    new RangeError([_message_[, _fileName_[, _lineNumber_]]])

### Parameters

**`message`**

> Optional. Human-readable description of the error

**`fileName` __**

> Optional. The name of the file containing the code that caused the exception

**`lineNumber` __**

> Optional. The line number of the code that caused the exception

### Description

A `RangeError` is thrown when trying to pass a number as an argument to a function that does not allow a range that includes that number. This can be encountered when to create an array of an illegal length with the [`Array`][0] constructor, or when passing bad values to the numeric methods [`Number.toExponential()`][1], [`Number.toFixed()`][2] or [`Number.toPrecision()`][3].

### Properties

**[`RangeError.prototype`][4]**

> Allows the addition of properties to an `RangeError` object.

### Methods

The global `RangeError` contains no methods of its own, however, it does inherit some methods through the prototype chain.

### `RangeError` instances

### Properties

**`RangeError.prototype.constructor`**

> Specifies the function that created an instance's prototype.

**[`RangeError.prototype.message`][5]**

> Error message. Although ECMA-262 specifies that [`RangeError`][6] should provide its own `message` property, in [SpiderMonkey][7], it inherits [`Error.prototype.message`][5].

**[`RangeError.prototype.name`][8]**

> Error name. Inherited from [`Error`][9].

**[`RangeError.prototype.fileName`][10]**

> Path to file that raised this error. Inherited from [`Error`][9].

**[`RangeError.prototype.lineNumber`][11]**

> Line number in file that raised this error. Inherited from [`Error`][9].

**[`RangeError.prototype.columnNumber`][12]**

> Column number in line that raised this error. Inherited from [`Error`][9].

**[`RangeError.prototype.stack`][13]**

> Stack trace. Inherited from [`Error`][9].

### Methods

Although the [`RangeError`][6] prototype object does not contain any methods of its own, [`RangeError`][6] instances do inherit some methods through the prototype chain.

### Examples

### Example: Using `RangeError`

    var check = function(num) {
      if (num < MIN || num > MAX) {
        throw new RangeError('Parameter must be between ' + MIN + ' and ' + MAX);
      }
    };
    
    try {
      check(500);
    }
    catch (e) {
      if (e instanceof RangeError) {
        // Handle range error
      }
    }
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array "The JavaScript Array global object is a constructor for arrays, which are high-level, list-like objects."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential "The toExponential() method returns a string representing the Number object in exponential notation"
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed "The toFixed() method formats a number using fixed-point notation."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision "The toPrecision() method returns a string representing the Number object to the specified precision."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RangeError/prototype "The RangeError.prototype property represents the prototype the RangeError constructor."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/message "The message property is a human-readable description of the error."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RangeError "The RangeError object indicates an error when a value is not in the set or range of allowed values."
[7]: https://developer.mozilla.org/en/docs/Mozilla/Projects/SpiderMonkey
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/name "The name property represents a name for the type of error. The initial value is "Error"."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base objects for user-defined exceptions. See below for standard built-in error types."
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName "The fileName property contains the path to the file that raised this error."
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber "The lineNumber property contains the line number in the file that raised this error."
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber "The columnNumber property contains the column number in the line of the file that raised this error."
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/stack "The non-standard stack property of Error objects offer a trace of which functions were called, in what order, from which line and file, and with what arguments. The stack string proceeds from the most recent calls to earlier ones, leading back to the original global scope call."