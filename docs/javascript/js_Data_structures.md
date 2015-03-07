## Data structures

Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have; these can be used to build other data structures. When possible, comparisons with other languages are drawn.

### Dynamic typing

JavaScript is a _loosely typed_ or a _dynamic_ language. That means you don't have to declare the type of a variable ahead of time. The type will get determined automatically while the program is being processed. That also means that you can have the same variable as different types:

    var foo = 42;    // foo is a Number now
    var foo = "bar"; // foo is a String now
    var foo = true;  // foo is a Boolean now
    

### Data types

The latest ECMAScript standard defines seven data types:

* Six data types that are [primitives][0]:
  * [Boolean][1]
  * [Null][2]
  * [Undefined][3]
  * [Number][4]
  * [String][5]
  * [Symbol][6] (new in ECMAScript 6)
* and [Object][7]

### Primitive values

All types except objects define immutable values (values, which are incapable of being changed). For example and unlike to C, Strings are immutable. We refer to values of these types as "primitive values".

### Boolean type

Boolean represents a logical entity and can have two values: `true`, and `false`.

### Null type

The Null type has exactly one value: `null`. See [`null`][8] and [Null][2] for more details.

### Undefined type

A variable that has not been assigned a value has the value `undefined`. See [`undefined`][9] and [Undefined][3] for more details.

### Number type

According to the ECMAScript standard, there is only one number type: the [double-precision 64-bit binary format IEEE 754 value][10] (number between -(253 -1) and 253 -1). **There is no specific type for integers**. In addition to being able to represent floating-point numbers, the number type has three symbolic values: `+Infinity`, `-Infinity`, and [`NaN`][11] (not-a-number).

To check for larger or smaller values than `+/-Infinity`, you can use the constants [`Number.MAX_VALUE`][12] or [`Number.MIN_VALUE`][13] and starting with ECMAScript 6, you are also able to check if a number is in the double-precision floating-point number range using [`Number.isSafeInteger()`][14] as well as [`Number.MAX_SAFE_INTEGER`][15] and [`Number.MIN_SAFE_INTEGER`][16]. Beyond this range, numbers in JavaScript are not safe anymore.

The number type has only one integer that has two representations: 0 is represented as -0 and +0\. ("0" is an alias for +0). In the praxis, this has almost no impact. For example `+0 === -0` is `true`. However, you are able to notice this when you divide by zero:

    > 42 / +0
    Infinity
    > 42 / -0
    -Infinity
    

Although a number often represents only its value, JavaScript provides [some binary operators][17]. These can be used to represent several Boolean values within a single number using [bit masking][18]. This is usually considered a bad practice, however, JavaScript offers no other means to represent a set of Booleans (like an array of Booleans or an object with Boolean values assigned to named properties). Bit masking also tends to make code more difficult to read, understand, and maintain. It may be necessary to use such techniques in very constrained environments, like when trying to cope with the storage limitation of local storage or in extreme cases when each bit over the network counts. This technique should only be considered when it is the last measure that can be taken to optimize size.

### String type

JavaScript's String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it.

Unlike in languages like C, JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it. However, it is still possible to create another string based on an operation on the original string. For example:

* A substring of the original by picking individual letters or using [`String.substr()`][19].
* A concatenation of two strings using the concatenation operator (`+`) or [`String.concat()`][20].

#### Beware of "stringly-typing" your code!

It can be tempting to use strings to represent complex data. Doing this comes with short-term benefits:

* It is easy to build complex strings with concatenation.
* Strings are easy to debug (what you see printed is always what is in the string).
* Strings are the common denominator of a lot of APIs ([input fields][21], [local storage][22] values, [`XMLHttpRequest`][23] responses when using `responseText`, etc.) and it can be tempting to only work with strings.

With conventions, it is possible to represent any data structure in a string. This does not make it a good idea. For instance, with a separator, one could emulate a list (while a JavaScript array would be more suitable). Unfortunately, when the separator is used in one of the "list" elements, then, the list is broken. An escape character can be chosen, etc. All of this requires conventions and creates an unnecessary maintenance burden.

Use strings for textual data. When representing complex data, parse strings and use the appropriate abstraction.

### Symbol type

Symbols are new to JavaScript in ECMAScript Edition 6\. A Symbol is a **unique** and **immutable** primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called atoms. You can also compare them to named enumerations (enum) in C. For more details see [Symbol][6] and the [`Symbol`][24] object wrapper in JavaScript.

### Objects

In computer science, an object is a value in memory which is possibly referenced by an [identifier][25].

### Properties

In JavaScript, objects can be seen as a collection of properties. With the [object literal syntax][26], a limited set of properties are initialized; then properties can be added and removed. Property values can be values of any type, including other objects, which enables building complex data structures. Properties are identified using key values. A key value is either a String or a Symbol value.

There are two types of object properties which have certain attributes: The data property and the accessor property.

#### Data property

Associates a key with a value and has the following attributes:
Attributes of a data property
Attribute
Type
Description
Default value

\[\[Value\]\]
Any JavaScript type
The value retrieved by a get access of the property.
undefined

\[\[Writable\]\]
Boolean
If `false`, the property's \[\[Value\]\] can't be changed.
false

\[\[Enumerable\]\]
Boolean
If `true`, the property will be enumerated in [for...in][27] loops.
false

\[\[Configurable\]\]
Boolean
If `false`, the property can't be deleted and attributes other than \[\[Value\]\] and \[\[Writable\]\] can't be changed.
false

#### Accessor property

Associates a key with one or two accessor functions (get and set) to retrieve or store a value and has the following attributes:
Attributes of an accessor property
Attribute
Type
Description
Default value

\[\[Get\]\]
Function object or undefined
The function is called with an empty argument list and retrieves the property value whenever a get access to the value is performed. See also [`get`][28].
undefined

\[\[Set\]\]
Function object or undefined
The function is called with an argument that contains the assigned value and is executed whenever a specified property is attempted to be changed. See also [`set`][29].
undefined

\[\[Enumerable\]\]
Boolean
If `true`, the property will be enumerated in [for...in][27] loops.
false

\[\[Configurable\]\]
Boolean
If `false`, the property can't be deleted and can't be changed to a data property.
false

### "Normal" objects, and functions

A JavaScript object is a mapping between keys and values. Keys are strings and values can be anything. This makes objects a natural fit for [hashmaps][30].

Functions are regular objects with the additional capability of being callable.

### Dates

When representing dates, the best choice is to use the built-in [`Date` utility][31] in JavaScript.

### Indexed collections: Arrays and typed Arrays

[Arrays][32] are regular objects for which there is a particular relationship between integer-key-ed properties and the 'length' property. Additionally, arrays inherit from `Array.prototype` which provides to them a handful of convenient methods to manipulate arrays. For example, `[indexOf][33]` (searching a value in the array) or `[push][34]` (adding an element to the array), etc. This makes Arrays a perfect candidate to represent lists or sets.

[Typed Arrays][35] are new to JavaScript with ECMAScript Edition 6 and present an array-like view of an underlying binary data buffer. The following table helps you to find the equivalent C data types:

#### TypedArray objects
Type
Size
Description
Web IDL type
Equivalent C type

[`Int8Array`][36]
1
8-bit twos complement signed integer
`byte`
`int8_t`

[`Uint8Array`][37]
1
8-bit unsigned integer
`octet`
`uint8_t`

[`Uint8ClampedArray`][38]
1
8-bit unsigned integer (clamped)
`octet`
`uint8_t`

[`Int16Array`][39]
2
16-bit twos complement signed integer
`short`
`int16_t`

[`Uint16Array`][40]
2
16-bit unsigned integer
`unsigned short`
`uint16_t`

[`Int32Array`][41]
4
32-bit twos complement signed integer
`long`
`int32_t`

[`Uint32Array`][42]
4
32-bit unsigned integer
`unsigned long`
`uint32_t`

[`Float32Array`][43]
4
32-bit IEEE floating point number
`unrestricted float`
`float`

[`Float64Array`][44]
8
64-bit IEEE floating point number
`unrestricted double`
`double`

### Keyed collections: Maps, Sets, WeakMaps, WeakSets

These data structures take object references as keys and are introduced in ECMAScript Edition 6\. [`Set`][45] and [`WeakSet`][46] represent a set of objects, while [`Map`][47] and [`WeakMap`][48] associate a value to an object. The difference between Maps and WeakMaps is that in the former, object keys can be enumerated over. This allows garbage collection optimizations in the latter case.

One could implement Maps and Sets in pure ECMAScript 5\. However, since objects cannot be compared (in the sense of "less than" for instance), look-up performance would necessarily be linear. Native implementations of them (including WeakMaps) can have look-up performance that is approximately logarithmic to constant time.

Usually, to bind data to a DOM node, one could set properties directly on the object or use `data-*` attributes. This has the downside that the data is available to any script running in the same context. Maps and WeakMaps make easy to privately bind data to an object.

### Structured data: JSON

JSON (JavaScript Object Notation) is a lightweight data-interchange format, derived from JavaScript but used by many programming languages. JSON builds universal data structures. See [JSON][49] and [`JSON`][50] for more details.

### More objects in the standard library

JavaScript has a standard library of built-in objects. Please have a look at the [reference][51] to find out about more objects.

### Determining types using the `typeof` operator

The `typeof` operator can help you to find the type of your variable. Please read the [reference page][52] for more details and edge cases.


[0]: https://developer.mozilla.org/en/docs/Glossary/Primitive "primitives: A primitive (primitive value, primitive data type) is data that is not an Object and does not have any methods."
[1]: https://developer.mozilla.org/en/docs/Glossary/Boolean "Boolean: In any computer programming language, a Boolean is a logical data type that can have one of two possible values: true or false."
[2]: https://developer.mozilla.org/en/docs/Glossary/Null "The definition of that term (Null) has not been written yet; please consider contributing it!"
[3]: https://developer.mozilla.org/en/docs/Glossary/Undefined "The definition of that term (Undefined) has not been written yet; please consider contributing it!"
[4]: https://developer.mozilla.org/en/docs/Glossary/Number "Number: In JavaScript, Number is a data type in the double-precision 64-bit foating point format (IEEE 754). In other programming languages different numeric types such as Integers, Floats, Doubles, or Bignums can exist."
[5]: https://developer.mozilla.org/en/docs/Glossary/String "String: In any computer programming language, a String is a sequence of characters and is used to represent textual data."
[6]: https://developer.mozilla.org/en/docs/Glossary/Symbol "Symbol: A Symbol is a primitive data type whose instances are unique and immutable. In some programming languages they are also called atoms."
[7]: https://developer.mozilla.org/en/docs/Glossary/Object "Object: The term of "Object" is used when referring to some data structure representing an object. For example, if you want to develop a racing game, you may need a Car object or a Map object that are describing cars and maps. See Object Oriented Programming (OOP) for a way of programming that mainly uses objects. JavaScript, Java, C++, Python -among others- are object oriented programming languages."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/null "The value null is a JavaScript literal representing null or an "empty" value, i.e. no object value is present. It is one of JavaScript's primitive values."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/undefined "The global undefined value property represents the value undefined. It is one of JavaScript's primitive types."
[10]: http://en.wikipedia.org/wiki/Double_precision_floating-point_format
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NaN
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE "The Number.MAX_VALUE property represents the maximum numeric value representable in JavaScript."
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE "The Number.MIN_VALUE property represents the smallest positive numeric value representable in JavaScript."
[14]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger "The Number.isSafeInteger() method determines whether the provided value is a number that is a safe integer. A safe integer is an integer that"
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER "The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (253 - 1)."
[16]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER "The Number.MIN_SAFE_INTEGER constant represents the minimum safe integer in JavaScript (-(253 - 1))."
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators "en/JavaScript/Reference/Operators/Bitwise_Operators"
[18]: http://en.wikipedia.org/wiki/Mask_%28computing%29
[19]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/substr "The substr() method returns the characters in a string beginning at the specified location through the specified number of characters."
[20]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/concat "The concat() method combines the text of two or more strings and returns a new string."
[21]: https://developer.mozilla.org/en/docs/Web/API/HTMLInputElement "HTMLInputElement"
[22]: https://developer.mozilla.org/en/docs/Storage "Storage"
[23]: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest "XMLHttpRequest is a JavaScript object that was designed by Microsoft and adopted by Mozilla, Apple, and Google. It's now being standardized in the W3C. It provides an easy way to retrieve data from a URL without having to do a full page refresh. A Web page can update just a part of the page without disrupting what the user is doing.  XMLHttpRequest is used heavily in AJAX programming."
[24]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol "A symbol is a unique and immutable data type and may be used as an identifier for object properties. The symbol object is an implicit object wrapper for the symbol primitive data type."
[25]: https://developer.mozilla.org/en/docs/Glossary/Identifier "identifier: A sequence of characters in the code that identifies a variable, function, or property. Identifiers must start with a letter, "$", or "_", and can contain alphanumerical characters, "$", and "_". An identifier differs from a string in that a string is data, while an identifier is part of the code. In JavaScript, there is no way to convert identifiers to strings, but it is possible to parse strings into identifiers in certain cases."
[26]: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Object_literals
[27]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...in
[28]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/get
[29]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/set
[30]: http://en.wikipedia.org/wiki/Hash_table
[31]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date
[32]: https://developer.mozilla.org/en/docs/JavaScript/Reference/Global_Objects/Array "Array"
[33]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf "en/JavaScript/Reference/Global_Objects/Array/indexOf"
[34]: https://developer.mozilla.org/en/docs/JavaScript/Reference/Global_Objects/Array/push "en/JavaScript/Reference/Global_Objects/Array/push"
[35]: https://developer.mozilla.org/en/docs/Web/JavaScript/Typed_arrays
[36]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Int8Array "The Int8Array typed array represents an array of twos-complement 8-bit signed integers. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[37]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array "The Uint8Array typed array represents an array of 8-bit unsigned integers. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[38]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray "The Uint8ClampedArray typed array represents an array of 8-bit unsigned integers clamped to 0-255. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[39]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Int16Array "The Int16Array typed array represents an array of twos-complement 16-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[40]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array "The Uint16Array typed array represents an array of 16-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[41]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Int32Array "The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[42]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array "The Uint32Array typed array represents an array of 32-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[43]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Float32Array "The Float32Array typed array represents an array of 32-bit floating point numbers (corresponding to the C float data type) in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[44]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Float64Array "The Float64Array typed array represents an array of 64-bit floating point numbers (corresponding to the C double data type) in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[45]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set "The Set object lets you store unique values of any type, whether primitive values or object references."
[46]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakSet "The WeakSet object lets you store weakly held objects in a collection."
[47]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map "The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value."
[48]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakMap "The WeakMap object is a collection of key/value pairs in which the keys are objects and the values can be arbitrary values."
[49]: https://developer.mozilla.org/en/docs/Glossary/JSON "JSON: JSON (JavaScript Object Notation) is a data-interchange format.  It closely resembles a subset of JavaScript syntax, although it is not a strict subset. (See JSON in the JavaScript Reference for full details.)  It is useful when writing any kind of JavaScript-based application, including websites and browser extensions.  For example, you might store user information in JSON format in a cookie, or you might store extension preferences in JSON in a string-valued browser preference."
[50]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON "The JSON object contains methods for parsing JavaScript Object Notation (JSON) and converting values to JSON. It can't be called or constructed, and aside from its two method properties it has no interesting functionality of its own."
[51]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects
[52]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/typeof