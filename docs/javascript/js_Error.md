## Error

### Summary

The **`Error`** constructor creates an error object. Instances of `Error` objects are thrown when runtime errors occur. The `Error` object can also be used as a base objects for user-defined exceptions. See below for standard built-in error types.

### Syntax

    new Error([_message_[, _fileName_[, _lineNumber_]]])

### Parameters

**`message`**

> Optional. Human-readable description of the error.

**`fileName` __**

> Optional. The value for the `fileName` property on the created `Error` object. Defaults to the name of the file containing the code that called the `Error()` constructor.

**`lineNumber` __**

> Optional. The value for the `lineNumber` property on the created `Error` object. Defaults to the line number containing the `Error()` constructor invocation.

### Description

Runtime errors result in new `Error` objects being created and thrown.

This page documents the use of the `Error` object itself and its use as a constructor function. For a list of properties and methods inherited by `Error` instances, see [`Error.prototype`][0].

### Error types

Besides the generic `Error` constructor, there are six other core error constructors in JavaScript. For client-side exceptions, see [Exception Handling Statements][1].

**[`EvalError`][2]**

> Creates an instance representing an error that occurs regarding the global function [`eval()`][3].

**[`InternalError`][4] __**

> Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".

**[`RangeError`][5]**

> Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.

**[`ReferenceError`][6]**

> Creates an instance representing an error that occurs when de-referencing an invalid reference.

**[`SyntaxError`][7]**

> Creates an instance representing a syntax error that occurs while parsing code in [`eval()`][3].

**[`TypeError`][8]**

> Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.

**[`URIError`][9]**

> Creates an instance representing an error that occurs when [`encodeURI()`][10] or [`decodeURl()`][11] are passed invalid parameters.

### Properties

**[`Error.prototype`][0]**

> Allows the addition of properties to `Error` instances.

### Methods

The global `Error` object contains no methods of its own, however, it does inherit some methods through the prototype chain.

### `Error` instances

All [`Error`][12] instances and instances of [non-generic errors][13] inherit from `Error.prototype`. As with all constructor functions, you can use the prototype of the constructor to add properties or methods to all instances created with that constructor.

### Properties

### Standard properties

**`Error.prototype.constructor`**

> Specifies the function that created an instance's prototype.

**[`Error.prototype.message`][14]**

> Error message.

**[`Error.prototype.name`][15]**

> Error name.

### Vendor-specific extensions

**Non-standard**  
This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

#### Microsoft

**[`Error.prototype.description`][16]**

> Error description. Similar to [`message`][14].

**[`Error.prototype.number`][17]**

> Error number.

#### Mozilla

**[`Error.prototype.fileName`][18]**

> Path to file that raised this error.

**[`Error.prototype.lineNumber`][19]**

> Line number in file that raised this error.

**[`Error.prototype.columnNumber`][20]**

> Column number in line that raised this error.

**[`Error.prototype.stack`][21]**

> Stack trace.

### Methods

**[`Error.prototype.toSource()`][22] __**

> Returns a string containing the source of the specified [`Error`][12] object; you can use this value to create a new object. Overrides the [`Object.prototype.toSource()`][23] method.

**[`Error.prototype.toString()`][24]**

> Returns a string representing the specified object. Overrides the [`Object.prototype.toString()`][25] method.

### Examples

### Example: Throwing a generic error

Usually you create an `Error` object with the intention of raising it using the [`throw`][26] keyword. You can handle the error using the [`try...catch`][27] construct:

    try {
      throw new Error('Whoops!');
    } catch (e) {
      alert(e.name + ': ' + e.message);
    }
    

### Example: Handling a specific error

this should probably be removed You can choose to handle only specific error types by testing the error type with the error's [`constructor`][28] property or, if you're writing for modern JavaScript engines, [`instanceof`][29] keyword:

    try {
      foo.bar();
    } catch (e) {
      if (e instanceof EvalError) {
        alert(e.name + ': ' + e.message);
      } else if (e instanceof RangeError) {
        alert(e.name + ': ' + e.message);
      }
      // ... etc
    }
    

### Example: Custom Error Types

You might want to define your own error types deriving from `Error` to be able to `throw new MyError()` and use `instanceof MyError` to check the kind of error in the exception handler. The common way to do this is demonstrated below.

Note that the thrown `MyError` will report incorrect `lineNumber` and `fileName` at least in Firefox.

See also the ["What's a good way to extend Error in JavaScript?" discussion on Stackoverflow][30].

    // Create a new object, that prototypally inherits from the Error constructor.
    function MyError(message) {
      this.name = 'MyError';
      this.message = message || 'Default Message';
    }
    MyError.prototype = Object.create(Error.prototype);
    MyError.prototype.constructor = MyError;
    
    try {
      throw new MyError();
    } catch (e) {
      console.log(e.name);     // 'MyError'
      console.log(e.message);  // 'Default Message'
    }
    
    try {
      throw new MyError('custom message');
    } catch (e) {
      console.log(e.name);     // 'MyError'
      console.log(e.message);  // 'custom message'
    }
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype "The Error.prototype property represents the prototype for the Error constructor."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Statements#Exception_Handling_Statements
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/EvalError "The EvalError object indicates an error regarding the global eval() function."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/eval "The eval() method evaluates JavaScript code represented as a string."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/InternalError "The InternalError object indicates an error that occurred internally in the JavaScript engine. For example: "InternalError: too much recursion"."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RangeError "The RangeError object indicates an error when a value is not in the set or range of allowed values."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "The ReferenceError object represents an error when a non-existent variable is referenced."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "The SyntaxError object represents an error when trying to interpret syntactically invalid code."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/URIError "The URIError object represents an error when a global URI handling function was used in a wrong way."
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURI "The encodeURI() method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters)."
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/decodeURI "The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine."
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base objects for user-defined exceptions. See below for standard built-in error types."
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base objects for user-defined exceptions. See below for standard built-in error types."
[14]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/message "The message property is a human-readable description of the error."
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/name "The name property represents a name for the type of error. The initial value is "Error"."
[16]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/description "The documentation about this has not yet been written; please consider contributing!"
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/number "The documentation about this has not yet been written; please consider contributing!"
[18]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName "The fileName property contains the path to the file that raised this error."
[19]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber "The lineNumber property contains the line number in the file that raised this error."
[20]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber "The columnNumber property contains the column number in the line of the file that raised this error."
[21]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/stack "The non-standard stack property of Error objects offer a trace of which functions were called, in what order, from which line and file, and with what arguments. The stack string proceeds from the most recent calls to earlier ones, leading back to the original global scope call."
[22]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/toSource "The toSource() method returns code that could eval to the same error."
[23]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "The toSource() method returns a string representing the source code of the object."
[24]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error/toString "The toString() method returns a string representing the specified Error object."
[25]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "The toString() method returns a string representing object."
[26]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/throw "The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate."
[27]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/try...catch "The try...catch statement marks a block of statements to try, and specifies a response, should an exception be thrown."
[28]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor "Returns a reference to the Object function that created the instance's prototype. Note that the value of this property is a reference to the function itself, not a string containing the function's name. The value is only read-only for primitive values such as 1, true and "test"."
[29]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/instanceof "The instanceof operator tests whether an object has in its prototype chain the prototype property of a constructor."
[30]: http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript