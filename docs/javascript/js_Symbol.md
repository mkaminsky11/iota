## Symbol

**This is an experimental technology, part of the Harmony (ECMAScript 6) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

A **symbol** is a unique and immutable data type and may be used as an identifier for object properties. The _symbol object_ is an implicit object wrapper for the symbol [primitive data type][1].

### Syntax

    Symbol(_[description]_)

### Parameters

**`description` Optional**

> Optional, string. A description of the symbol which can be used for debugging but not to access the symbol itself.

### Description

To create a new primitive symbol, you simply write `Symbol()` with an optional string as its description:

    var sym1 = Symbol();
    var sym2 = Symbol("foo");
    var sym3 = Symbol("foo");
    

The above code creates three new symbols. Note that `Symbol("foo")` does not coerce the string "foo" into a symbol. It creates a new symbol each time:

    Symbol("foo") === Symbol("foo"); // false

The following syntax with the [`new`][2] operator will throw a [`TypeError`][3]:

    var sym = new Symbol(); // TypeError

This prevents authors from creating an explicit `Symbol` wrapper object instead of a new symbol value. Creating an explicit wrapper object around primitive data types is no longer supported starting with ECMAScript 6\. However, existing primitive wrapper objects like `new Boolean`, `new String` and `new Number` can still be created for legacy reasons.

And if you really want to create a `Symbol` wrapper object, you can use `Object()` function:

    var sym = Symbol("foo");
    typeof sym;     // "symbol" 
    var symObj = Object(sym);
    typeof symObj;  // "object"
    

### Shared symbols in the global symbol registry

The above syntax using the `Symbol()` function will not create a global symbol that is available in your whole codebase. To create symbols available across files and in a global scope-like environment, use the methods [`Symbol.for()`][4] and [`Symbol.keyFor()`][5] to set and retrieve symbols from the global symbol registry.

### Finding symbol properties on objects

The method [`Object.getOwnPropertySymbols()`][6] returns an array of symbols and lets you find symbol properties on a given object. Note that every object is initialized with no own symbol properties, so that this array will be empty unless you've set symbol properties on the object.

### Properties

**`Symbol.length`**

> Length property whose value is 1\.

**[`Symbol.prototype`][7]**

> Represents the prototype for the `Symbol` constructor.

### Well-known symbols

In addition to your own symbols, JavaScript has some built-in symbols which represent internal language behaviors which were not exposed to developers in ECMAScript 5 and before. These symbols can be accessed using the following properties:

**Symbol.hasInstance**

> Specified as @@hasInstance. A method determining if a constructor object recognizes an object as its instance. Used by [`instanceof`][8].

**Symbol.isConcatSpreadable**

> Specified as @@isConcatSpreadable. A Boolean value indicating if an object should be flattened to its array elements. Used by [`Array.prototype.concat()`][9].

**Symbol.isRegExp**

> Specified as @@isRegExp. A Boolean value indicating if an object may be used as a regular expression.

**Symbol.iterator**

> Specified as @@iterator. A method returning the default iterator for an object. Used by [`for...of`][10].

**Symbol.toPrimitive**

> Specified as @@toPrimitive. A method converting an object to a primitive value.

**Symbol.toStringTag**

> Specified as @@toStringTag. A string value used for the default description of an object. Used by [`Object.prototype.toString()`][11]

**Symbol.unscopables**

> Specified as @@unscopables. An Array of string values that are property values. These are excluded from the with environment bindings of the associated objects.

### Methods

**[`Symbol.for(key)`][4]**

> Searches for existing symbols with the given key and returns it if found. Otherwise a new symbol gets created in the global symbol registry with this key.

**[`Symbol.keyFor(sym)`][5]**

> Retrieves a shared symbol key from the global symbol registry for the given symbol.

### `Symbol` prototype

All Symbols inherit from [`Symbol.prototype`][7].

### Properties

**`Symbol.prototype.constructor`**

> Returns the function that created an instance's prototype. This is the [`Symbol`][12] function by default.

### Methods

**[`Symbol.prototype.toSource()`][13] __**

> Returns a string containing the source of the [`Symbol`][12] object. Overrides the [`Object.prototype.toSource()`][14] method.

**[`Symbol.prototype.toString()`][15]**

> Returns a string of containing the description of the Symbol. Overrides the [`Object.prototype.toString()`][11] method.

**[`Symbol.prototype.valueOf()`][16]**

> Returns the primitive value of the [`Symbol`][12] object. Overrides the [`Object.prototype.valueOf()`][17] method.

### Examples

### Using the `typeof` operator with symbols

The [`typeof`][18] operator can help you to identify symbols.

    typeof Symbol() === 'symbol'
    typeof Symbol('foo') === 'symbol'
    typeof Symbol.iterator === 'symbol'
    

### Symbol type conversions

Some things to note when working with type conversion of symbols.

* When trying to convert a symbol to a number, a [`TypeError`][3] will be thrown  
(e.g. `+sym` or `sym | 0`).
* When using loose equality, `Object(sym) == sym` returns `true.`
* `Symbol("foo") + "bar" `throws a [`TypeError`][3] (can't convert symbol to string). This prevents you from silently creating a new string property name from a symbol, for example.
* The ["safer" `String(sym)` conversion][19] works like a call to [`Symbol.prototype.toString()`][15] with symbols, but note that `new String(sym)` will throw.

### Symbols and `for...in` iteration

Symbols are not visible in [`for...in`][20] iterations. In addition, [`Object.getOwnPropertyNames()`][21] will not return symbol object properties, however, you can use [`Object.getOwnPropertySymbols()`][6] to get these.

    var obj = {};
    
    obj[Symbol("a")] = "a";
    obj[Symbol.for("b")] = "b";
    obj["c"] = "c";
    obj.d = "d";
    
    for (var i in obj) {
       console.log(i); // logs "c" and "d"
    }

### Symbols and `JSON.stringify()`

Symbol-keyed properties will be completely ignored when using `JSON.stringify()`:

    JSON.stringify({[Symbol("foo")]: "foo"});                 
    // '{}'

For more details, see [`JSON.stringify()`][22].

### Symbol wrapper objects as property keys

When a Symbol wrapper object is used as a property key, this object will be coerced to its wrapped symbol:

    var sym = Symbol("foo");
    var obj = {[sym]: 1};
    obj[sym];            // 1
    obj[Object(sym)];    // still 1
    



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Glossary/Primitive "primitive data type: A primitive (primitive value, primitive data type) is data that is not an Object and does not have any methods."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/new "The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for "The Symbol.for(key) method searches for existing symbols in a runtime-wide symbol registry with the given key and returns it if found. Otherwise a new symbol gets created in the global symbol registry with this key."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor "The Symbol.keyFor(sym) method retrieves a shared symbol key from the global symbol registry for the given symbol."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols "The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol/prototype "The Symbol.prototype property represents the prototype for the Symbol constructor."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/instanceof "The instanceof operator tests whether an object has in its prototype chain the prototype property of a constructor."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/concat "The concat() method returns a new array comprised of the array on which it is called joined with the array(s) and/or value(s) provided as arguments."
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "The toString() method returns a string representing object."
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol "A symbol is a unique and immutable data type and may be used as an identifier for object properties. The symbol object is an implicit object wrapper for the symbol primitive data type."
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toSource "The toSource() method returns a string representing the source code of the object."
[14]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "The toSource() method returns a string representing the source code of the object."
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString "The toString() method returns a string representing the specified Symbol object."
[16]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol/valueOf "The valueOf() method returns the primitive value of a Symbol object."
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf "The valueOf() method returns the primitive value of the specified object."
[18]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/typeof "The typeof operator returns a string indicating the type of the unevaluated operand."
[19]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String#String_conversion
[20]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...in
[21]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames "The Object.getOwnPropertyNames() method returns an array of all properties (enumerable or not) found directly upon a given object."
[22]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify "The JSON.stringify() method converts a value to JSON, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified."