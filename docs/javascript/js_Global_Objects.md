## Global Objects

### Summary

This chapter documents all the JavaScript standard built-in objects, along with their methods and properties.

The term "global objects" (or standard built-in objects) here is not to be confused with the _global object_. Here, global objects refer to _objects in the global scope_ (but only if ECMAScript 5 strict mode is not used! Otherwise it returns `undefined`). The _global object_ itself can be accessed by the [`this`][0] operator in the global scope. In fact, the global scope _consists__of_ the properties of the global object (including inherited properties, if any).

Other objects in the global scope are either [created by the user script][1] or provided by the host application. The host objects available in browser contexts are documented in the [API reference][2]. For more information about the distinction between the [DOM][3] and core [JavaScript][4], see [JavaScript technologies overview][5].

### Standard objects (by category)

### Value properties

Global properties returning a simple value.

* [`Infinity`][6]
* [`NaN`][7]
* [`undefined`][8]
* [`null`][9] literal

### Function properties

Global functions returning the result of a specific routine.

* [`eval()`][10]
* [`uneval()`][11] __
* [`isFinite()`][12]
* [`isNaN()`][13]
* [`parseFloat()`][14]
* [`parseInt()`][15]
* [`decodeURI()`][16]
* [`decodeURIComponent()`][17]
* [`encodeURI()`][18]
* [`encodeURIComponent()`][19]
* [`escape()`][20] __
* [`unescape()`][21] __

### Fundamental objects

General language objects, functions and errors.

* [`Object`][22]
* [`Function`][23]
* [`Boolean`][24]
* [`Symbol`][25] __
* [`Error`][26]
* [`EvalError`][27]
* [`InternalError`][28]
* [`RangeError`][29]
* [`ReferenceError`][30]
* [`SyntaxError`][31]
* [`TypeError`][32]
* [`URIError`][33]

### Numbers and dates

Objects dealing with numbers, dates and mathematical calculations.

* [`Number`][34]
* [`Math`][35]
* [`Date`][36]

### Text processing

Objects for manipulating texts.

* [`String`][37]
* [`RegExp`][38]

### Indexed collections

Collections ordered by an index. Array-type objects.

* [`Array`][39]
* [`Int8Array`][40]
* [`Uint8Array`][41]
* [`Uint8ClampedArray`][42]
* [`Int16Array`][43]
* [`Uint16Array`][44]
* [`Int32Array`][45]
* [`Uint32Array`][46]
* [`Float32Array`][47]
* [`Float64Array`][48]

### Keyed collections

Collections of objects as keys. Elements iterable in insertion order.

* [`Map`][49] __
* [`Set`][50] __
* [`WeakMap`][51] __
* [`WeakSet`][52] __

### Structured data

Data buffers and **J**ava**S**cript **O**bject **N**otation.

* [`ArrayBuffer`][53]
* [`DataView`][54]
* [`JSON`][55]

### Control abstraction objects

* [`Promise`][56] __
* [`Generator`][57] __
* [`GeneratorFunction`][58] __

### Reflection

* [`Reflect`][59] __
* [`Proxy`][60] __

### Internationalization

Additions to the ECMAScript core for language-sensitive functionalities.

* [`Intl`][61]
* [`Intl.Collator`][62]
* [`Intl.DateTimeFormat`][63]
* [`Intl.NumberFormat`][64]

### Non-standard objects

* [`Iterator`][65] __
* [`ParallelArray`][66] __
* [`StopIteration`][67] __

### Other

* `[arguments][68]`



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this "A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Working_with_Objects#Creating_new_objects
[2]: https://developer.mozilla.org/en/docs/Web/API/Reference
[3]: https://developer.mozilla.org/en/docs/DOM/DOM_Reference
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/JavaScript_technologies_overview
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Infinity "The global Infinity property is a numeric value representing infinity."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NaN "The global NaN property is a value representing Not-A-Number."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/undefined "The global undefined value property represents the value undefined. It is one of JavaScript's primitive types."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/null "The value null is a JavaScript literal representing null or an "empty" value, i.e. no object value is present. It is one of JavaScript's primitive values."
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/eval "The eval() method evaluates JavaScript code represented as a string."
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/uneval "The uneval() method creates an string representation of the source code of an Object."
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/isFinite "The global isFinite() function determines whether the passed value is a finite number. If needed, the parameter is first converted to a number."
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/isNaN "The isNaN() function determines whether a value is NaN or not. Note: coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined in ECMAScript 6, or you can use typeof to determine if the value is Not-A-Number."
[14]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/parseFloat "The parseFloat() function parses a string argument and returns a floating point number."
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/parseInt "The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems)."
[16]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/decodeURI "The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine."
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent "The decodeURIComponent() method decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine."
[18]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURI "The encodeURI() method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters)."
[19]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent "The encodeURIComponent() method encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters)."
[20]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/escape "The deprecated escape() method computes a new string in which certain characters have been replaced by a hexadecimal escape sequence. Use encodeURI or encodeURIComponent instead."
[21]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/unescape "The deprecated unescape() method computes a new string in which hexadecimal escape sequences are replaced with the character that it represents. The escape sequences might be introduced by a function like escape. Because unescape is deprecated, use decodeURI or decodeURIComponent instead."
[22]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object "The Object constructor creates an object wrapper."
[23]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function "The Function constructor creates a new Function object. In JavaScript every function is actually a Function object."
[24]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Boolean "The Boolean object is an object wrapper for a boolean value."
[25]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol "A symbol is a unique and immutable data type and may be used as an identifier for object properties. The symbol object is an implicit object wrapper for the symbol primitive data type."
[26]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base objects for user-defined exceptions. See below for standard built-in error types."
[27]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/EvalError "The EvalError object indicates an error regarding the global eval() function."
[28]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/InternalError "The InternalError object indicates an error that occurred internally in the JavaScript engine. For example: "InternalError: too much recursion"."
[29]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RangeError "The RangeError object indicates an error when a value is not in the set or range of allowed values."
[30]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "The ReferenceError object represents an error when a non-existent variable is referenced."
[31]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "The SyntaxError object represents an error when trying to interpret syntactically invalid code."
[32]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type."
[33]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/URIError "The URIError object represents an error when a global URI handling function was used in a wrong way."
[34]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number "The Number JavaScript object is a wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor."
[35]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math "Math is a built-in object that has properties and methods for mathematical constants and functions. Not a function object."
[36]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date "Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC."
[37]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String "The String global object is a constructor for strings, or a sequence of characters."
[38]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp "The RegExp constructor creates a regular expression object for matching text with a pattern."
[39]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array "The JavaScript Array global object is a constructor for arrays, which are high-level, list-like objects."
[40]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Int8Array "The Int8Array typed array represents an array of twos-complement 8-bit signed integers. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[41]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array "The Uint8Array typed array represents an array of 8-bit unsigned integers. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[42]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray "The Uint8ClampedArray typed array represents an array of 8-bit unsigned integers clamped to 0-255. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[43]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Int16Array "The Int16Array typed array represents an array of twos-complement 16-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[44]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array "The Uint16Array typed array represents an array of 16-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[45]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Int32Array "The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[46]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array "The Uint32Array typed array represents an array of 32-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[47]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Float32Array "The Float32Array typed array represents an array of 32-bit floating point numbers (corresponding to the C float data type) in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[48]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Float64Array "The Float64Array typed array represents an array of 64-bit floating point numbers (corresponding to the C double data type) in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[49]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map "The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value."
[50]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set "The Set object lets you store unique values of any type, whether primitive values or object references."
[51]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakMap "The WeakMap object is a collection of key/value pairs in which the keys are objects and the values can be arbitrary values."
[52]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakSet "The WeakSet object lets you store weakly held objects in a collection."
[53]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You can not directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer."
[54]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView "The DataView view provides a low-level interface for reading data from and writing it to an ArrayBuffer."
[55]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON "The JSON object contains methods for parsing JavaScript Object Notation (JSON) and converting values to JSON. It can't be called or constructed, and aside from its two method properties it has no interesting functionality of its own."
[56]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise "The Promise object is used for deferred and asynchronous computations. A Promise is in one of these states:"
[57]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Generator "The Generator object is returned by a generator function and it conforms to both the iterator and the Iterable protocol."
[58]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction "The GeneratorFunction constructor creates a new generator function object. In JavaScript every generator function is actually a GeneratorFunction object."
[59]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Reflect "Reflect is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of the proxy handlers. Reflect It is not a function object."
[60]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy "The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc)."
[61]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl "The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object. This page documents these properties as well as functionality common to the internationalization constructors and other language sensitive functions."
[62]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Collator "The Intl.Collator object is a constructor for collators, objects that enable language sensitive string comparison."
[63]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat "The Intl.DateTimeFormat object is a constructor for objects that enable language sensitive date and time formatting."
[64]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat "The Intl.NumberFormat object is a constructor for objects that enable language sensitive number formatting."
[65]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Iterator "The Iterator function returns an object which implements legacy iterator protocol and iterates over enumerable properties of an object."
[66]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/ParallelArray "The goal of ParallelArray was to enable data-parallelism in web applications. The higher-order functions available on ParallelArray attempted to execute in parallel, though they may fall back to sequential execution if necessary. To ensure that your code executes in parallel, it is suggested that the functions should be limited to the parallelizable subset of JS that Firefox supports."
[67]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/StopIteration "The StopIteration object is used to tell the end of the iteration in the legacy iterator protocol."
[68]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/arguments