## Number

### Summary

The **`Number`** JavaScript object is a wrapper object allowing you to work with numerical values. A `Number` object is created using the `Number()` constructor.

### Constructor

    new Number(value);

### Parameters

**`value`**

> The numeric value of the object being created.

### Description

The primary uses for the `Number` object are:

* If the argument cannot be converted into a number, it returns [`NaN`][0].
* In a non-constructor context (i.e., without the [`new`][1] operator), `Number` can be used to perform a type conversion.

### Properties

**[`Number.EPSILON`][2] __**

> The smallest interval between two representable numbers.

**[`Number.MAX_SAFE_INTEGER`][3] __**

> The maximum safe integer in JavaScript (`253 - 1`).

**[`Number.MAX_VALUE`][4]**

> The largest positive representable number.

**[`Number.MIN_SAFE_INTEGER`][5] __**

> The minimum safe integer in JavaScript (`-(253 - 1)`).

**[`Number.MIN_VALUE`][6]**

> The smallest positive representable number - that is, the positive number closest to zero (without actually being zero).

**[`Number.NaN`][7]**

> Special "not a number" value.

**[`Number.NEGATIVE_INFINITY`][8]**

> Special value representing negative infinity; returned on overflow.

**[`Number.POSITIVE_INFINITY`][9]**

> Special value representing infinity; returned on overflow.

**[`Number.prototype`][10]**

> Allows the addition of properties to a `Number` object.

Properties inherited from [`Function`][11]:
[`arity`][12], [`caller`][13], [`constructor`][14], [`length`][15], [`name`][16]

### Methods
_For methods available on `Number` instances, see [Methods of Number instances][17]._

**[`Number.isNaN()`][18] __**

> Determine whether the passed value is NaN.

**[`Number.isFinite()`][19] __**

> Determine whether the type of and the passed value itself is a finite number.

**[`Number.isInteger()`][20] __**

> Determine whether the type of the passed value is "number" and the passed value is an integer.

**[`Number.isSafeInteger()`][21] __**

> Determine whether the type of the passed value is a safe integer (number between `-(253 - 1)` and `253 - 1`).

**[`Number.toInteger()`][22] __**

> Used to evaluate the passed value and convert it to an integer (or [`Infinity`][23]), but has been removed.

**[`Number.parseFloat()`][24] __**

> The value is the same as [`parseFloat`][25] of the global object.

**[`Number.parseInt()`][26] __**

> The value is the same as [`parseInt`][27] of the global object.

Methods inherited from [`Function`][11]:
[`apply`][28], [`call`][29], [`toSource`][30], [`toString`][31]

### `Number` instances

All `Number` instances inherit from [`Number.prototype`][10]. The prototype object of the `Number` constructor can be modified to affect all `Number` instances.

### Methods

**[`Number.prototype.toExponential()`][32]**

> Returns a string representing the number in exponential notation.

**[`Number.prototype.toFixed()`][33]**

> Returns a string representing the number in fixed-point notation.

**[`Number.prototype.toLocaleString()`][34]**

> Returns a string with a language sensitive representation of this number. Overrides the [`Object.prototype.toLocaleString()`][35] method.

**[`Number.prototype.toPrecision()`][36]**

> Returns a string representing the number to a specified precision in fixed-point or exponential notation.

**[`Number.prototype.toSource()`][37] __**

> Returns an object literal representing the specified [`Number`][38] object; you can use this value to create a new object. Overrides the [`Object.prototype.toSource()`][39] method.

**[`Number.prototype.toString()`][40]**

> Returns a string representing the specified object in the specified radix (base). Overrides the [`Object.prototype.toString()`][41] method.

**[`Number.prototype.valueOf()`][42]**

> Returns the primitive value of the specified object. Overrides the [`Object.prototype.valueOf()`][43] method.

Methods inherited from [`Object`][44]:
[`__defineGetter__`][45], [`__defineSetter__`][46], [`hasOwnProperty`][47], [`isPrototypeOf`][48], [`__lookupGetter__`][49], [`__lookupSetter__`][50], [`__noSuchMethod__`][51], [`propertyIsEnumerable`][52], [`unwatch`][53], [`watch`][54]

### Examples

### Example: Using the `Number` object to assign values to numeric variables

The following example uses the `Number` object's properties to assign values to several numeric variables:

    var biggestNum = Number.MAX_VALUE;
    var smallestNum = Number.MIN_VALUE;
    var infiniteNum = Number.POSITIVE_INFINITY;
    var negInfiniteNum = Number.NEGATIVE_INFINITY;
    var notANum = Number.NaN;
    

### Example: Integer range for `Number`

The following example shows minimum and maximum integer values that can be represented as `Number` object (for details, refer to EcmaScript standard, chapter _8.5 The Number Type_):

    var biggestInt = 9007199254740992;
    var smallestInt = -9007199254740992;
    

When parsing data that has been serialized to JSON, integer values falling out of this range can be expected to become corrupted when JSON parser coerces them to `Number` type. Using [`String`][55] instead is a possible workaround.

### Example: Using `Number` to convert a `Date` object

The following example converts the [`Date`][56] object to a numerical value using `Number` as a function:

    var d = new Date('December 17, 1995 03:24:00');
    print(Number(d));
    

This displays "819199440000".

### Example: Convert numeric strings to numbers

    Number("123")     // 123
    Number("")        // 0
    Number("0x11")    // 17
    Number("0b11")    // 3
    Number("0o11")    // 9
    Number("foo")     // NaN
    Number("100a")    // NaN
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NaN "The global NaN property is a value representing Not-A-Number."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/new "The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON "The Number.EPSILON property represents the difference between one and the smallest value greater than one that can be represented as a Number."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER "The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (253 - 1)."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE "The Number.MAX_VALUE property represents the maximum numeric value representable in JavaScript."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER "The Number.MIN_SAFE_INTEGER constant represents the minimum safe integer in JavaScript (-(253 - 1))."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE "The Number.MIN_VALUE property represents the smallest positive numeric value representable in JavaScript."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN "The Number.NaN property represents Not-A-Number. Equivalent of NaN."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY "The Number.NEGATIVE_INFINITY property represents the negative Infinity value."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY "The Number.POSITIVE_INFINITY property represents the positive Infinity value."
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/prototype "The Number.prototype property represents the prototype for the Number constructor."
[11]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function
[12]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Arity
[13]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Caller
[14]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Constructor
[15]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Length
[16]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Name
[17]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/prototype#Methods
[18]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN "The Number.isNaN() method determines whether the passed value is NaN. More robust version of the original global isNaN()."
[19]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite "The Number.isFinite() method determines whether the passed value is finite."
[20]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger "The Number.isInteger() method determines whether the passed value is an integer."
[21]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger "The Number.isSafeInteger() method determines whether the provided value is a number that is a safe integer. A safe integer is an integer that"
[22]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toInteger "The Number.toInteger() method used to evaluate the passed value and convert it to an integer, but its implementation has been removed."
[23]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Infinity "The global Infinity property is a numeric value representing infinity."
[24]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat "The Number.parseFloat() method parses a string argument and returns a floating point number. This method behaves identically to the global function parseFloat() and is part of ECMAScript 6 (its purpose is modularization of globals)."
[25]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/parseFloat "The parseFloat() function parses a string argument and returns a floating point number."
[26]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt "The Number.parseInt() method parses a string argument and returns an integer of the specified radix or base. This method behaves identically to the global function parseInt() and is part of ECMAScript 6 (its purpose is modularization of globals)."
[27]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/parseInt "The parseInt() function parses a string argument and returns an integer of the specified radix or base."
[28]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Apply
[29]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Call
[30]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/ToSource
[31]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/ToString
[32]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential "The toExponential() method returns a string representing the Number object in exponential notation"
[33]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed "The toFixed() method formats a number using fixed-point notation."
[34]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString "The toLocaleString() method returns a string with a language sensitive representation of this number."
[35]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString "The toLocaleString() method returns a string representing the object. This method is meant to be overriden by derived objects for locale-specific purposes."
[36]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision "The toPrecision() method returns a string representing the Number object to the specified precision."
[37]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toSource "The toSource() method returns a string representing the source code of the object."
[38]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number "The Number JavaScript object is a wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor."
[39]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "The toSource() method returns a string representing the source code of the object."
[40]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toString "The toString() method returns a string representing the specified Number object."
[41]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "The toString() method returns a string representing object."
[42]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/valueOf "The valueOf() method returns the primitive value of a Number object."
[43]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf "The valueOf() method returns the primitive value of the specified object."
[44]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object
[45]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineGetter
[46]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineSetter
[47]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty
[48]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/IsPrototypeOf
[49]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupGetter
[50]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupSetter
[51]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/NoSuchMethod
[52]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/PropertyIsEnumerable
[53]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/Unwatch
[54]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/Watch
[55]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String "The String global object is a constructor for strings, or a sequence of characters."
[56]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date "Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC."