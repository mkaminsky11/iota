## Boolean

### Summary

The **`Boolean`** object is an object wrapper for a boolean value.

### Constructor

    new Boolean([_value_])

### Parameters

**`value`**

> Optional. The initial value of the `Boolean` object.

### Description

The value passed as the first parameter is converted to a boolean value, if necessary. If value is omitted or is `0`, `-0`, [`null`][0], `false`, [`NaN`][1], [`undefined`][2], or the empty string (`""`), the object has an initial value of `false`. All other values, including any object or the string `"false"`, create an object with an initial value of `true`.

Do not confuse the primitive `Boolean` values `true` and `false` with the `true` and `false` values of the `Boolean` object.

Any object whose value is not [`undefined`][2] or [`null`][0], including a `Boolean` object whose value is `false`, evaluates to `true` when passed to a conditional statement. For example, the condition in the following [`if`][3] statement evaluates to `true`:

    x = new Boolean(false);
    if (x) {
      // this code is executed
    }
    

This behavior does not apply to `Boolean` primitives. For example, the condition in the following [`if`][3] statement evaluates to `false`:

    x = false;
    if (x) {
      // this code is not executed
    }
    

Do not use a `Boolean` object to convert a non-boolean value to a boolean value. Instead, use `Boolean` as a function to perform this task:

    x = Boolean(expression);     // preferred
    x = new Boolean(expression); // don't use
    

If you specify any object, including a `Boolean` object whose value is `false`, as the initial value of a `Boolean` object, the new `Boolean` object has a value of `true`.

    myFalse = new Boolean(false);   // initial value of false
    g = new Boolean(myFalse);       // initial value of true
    myString = new String('Hello'); // string object
    s = new Boolean(myString);      // initial value of true
    

Do not use a `Boolean` object in place of a `Boolean` primitive.

### Properties
_For properties available on `Boolean` instances, see [Properties of Boolean instances][4]._

**`Boolean.length`**

> Length property whose value is 1\.

**[`Boolean.prototype`][5]**

> Represents the prototype for the `Boolean` constructor.

Properties inherited from [`Function`][6]:
[`arity`][7], [`caller`][8], [`constructor`][9], [`length`][10], [`name`][11]

### Methods
_For methods available on `Boolean` instances, see [Methods of Boolean instances][12]._

The global `Boolean` object contains no methods of its own, however, it does inherit some methods through the prototype chain:

Methods inherited from [`Function`][6]:
[`apply`][13], [`call`][14], [`toSource`][15], [`toString`][16]

### `Boolean` instances

All `Boolean` instances inherit from [`Boolean.prototype`][5]. As with all constructors, the prototype object dictates instances' inherited properties and methods.

### Properties

**`Boolean.prototype.constructor`**

> Returns the function that created an instance's prototype. This is the [`Boolean`][17] function by default.

Properties inherited from [`Object`][18]:
[`__parent__`][19], [`__proto__`][20]

### Methods

**[`Boolean.prototype.toSource()`][21] __**

> Returns a string containing the source of the [`Boolean`][17] object; you can use this string to create an equivalent object. Overrides the [`Object.prototype.toSource()`][22] method.

**[`Boolean.prototype.toString()`][23]**

> Returns a string of either `"true"` or `"false"` depending upon the value of the object. Overrides the [`Object.prototype.toString()`][24] method.

**[`Boolean.prototype.valueOf()`][25]**

> Returns the primitive value of the [`Boolean`][17] object. Overrides the [`Object.prototype.valueOf()`][26] method.

Methods inherited from [`Object`][18]:
[`__defineGetter__`][27], [`__defineSetter__`][28], [`hasOwnProperty`][29], [`isPrototypeOf`][30], [`__lookupGetter__`][31], [`__lookupSetter__`][32], [`__noSuchMethod__`][33], [`propertyIsEnumerable`][34], [`toLocaleString`][35], [`unwatch`][36], [`watch`][37]

### Examples

### Example: Creating `Boolean` objects with an initial value of `false`

    var bNoParam = new Boolean();
    var bZero = new Boolean(0);
    var bNull = new Boolean(null);
    var bEmptyString = new Boolean('');
    var bfalse = new Boolean(false);
    

### Example: Creating `Boolean` objects with an initial value of `true`

    var btrue = new Boolean(true);
    var btrueString = new Boolean('true');
    var bfalseString = new Boolean('false');
    var bSuLin = new Boolean('Su Lin');
    var bArrayProto = new Boolean([]);
    var bObjProto = new Boolean({});
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/null "The value null is a JavaScript literal representing null or an "empty" value, i.e. no object value is present. It is one of JavaScript's primitive values."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NaN "The global NaN property is a value representing Not-A-Number."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/undefined "The global undefined value property represents the value undefined. It is one of JavaScript's primitive types."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/if...else "The if statement executes a statement if a specified condition is true. If the condition is false, another statement can be executed."
[4]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype#Properties
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype "The Boolean.prototype property represents the prototype for the Boolean constructor."
[6]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function
[7]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Arity
[8]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Caller
[9]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Constructor
[10]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Length
[11]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Name
[12]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype#Methods
[13]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Apply
[14]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Call
[15]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/ToSource
[16]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/ToString
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Boolean "The Boolean object is an object wrapper for a boolean value."
[18]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object
[19]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/Parent
[20]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/Proto
[21]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Boolean/toSource "The toSource() method returns a string representing the source code of the object."
[22]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "The toSource() method returns a string representing the source code of the object."
[23]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Boolean/toString "The toString() method returns a string representing the specified Boolean object."
[24]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "The toString() method returns a string representing object."
[25]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf "The valueOf() method returns the primitive value of a Boolean object."
[26]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf "The valueOf() method returns the primitive value of the specified object."
[27]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineGetter
[28]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineSetter
[29]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty
[30]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/IsPrototypeOf
[31]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupGetter
[32]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupSetter
[33]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/NoSuchMethod
[34]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/PropertyIsEnumerable
[35]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/ToLocaleString
[36]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/Unwatch
[37]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/Watch