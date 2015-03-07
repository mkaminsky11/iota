## Reflect

**This is an experimental technology, part of the ECMAScript 6 (Harmony) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

**Reflect** is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of the [proxy handlers][1]. `Reflect` It is not a function object.

### Description

Unlike the other global objects, `Reflect` is not a constructor. You can not use it with a [`new` operator][2] or invoke the `Reflect` object as a function. All properties and methods of `Reflect` are static (like it is the case with the [`Math`][3] object).

### Methods

The `Reflect` object provides the following static functions which have the same names as the [proxy handler methods][1] and also overlap with some of the [`Object`][4] methods:

**[`Reflect.apply()`][5]**

> Calls a target function with arguments as specified by the `args` parameter. See also [`Function.prototype.apply()`][6].

**[`Reflect.construct()`][7]**

> The [`new` operator][2] as a function. Equivalent to calling `new target(...args)`.

**[`Reflect.defineProperty()`][8]**

> Similar to [`Object.defineProperty()`][9]. Returns a [`Boolean`][10].

**[`Reflect.deleteProperty()`][11]**

> The [`delete` operator][12] as a function. Equivalent to calling `delete target[name]`.

**[`Reflect.enumerate()`][13]**

> Like the [`for...in`][14] loop. Returns an iterator with the enumerable own and inherited properties of the target object.

**[`Reflect.get()`][15]**

> A function that returns the value of properties.

**[`Reflect.getOwnPropertyDescriptor()`][16]**

> Similar to [`Object.getOwnPropertyDescriptor()`][17]. Returns a [`Boolean`][10].

**[`Reflect.getPrototypeOf()`][18]**

> Same as [`Object.getPrototypeOf()`][19].

**[`Reflect.has()`][20]**

> The [`in` operator][21] as function. Returns a boolean indicating whether an own or inherited property exists.

**[`Reflect.isExtensible()`][22]**

> Same as [`Object.isExtensible()`][23].

**[`Reflect.ownKeys()`][24]**

> Returns an array of strings with own (not inherited) property keys.

**[`Reflect.preventExtensions()`][25]**

> Similar to [`Object.preventExtensions()`][26]. Returns a [`Boolean`][10].

**[`Reflect.set()`][27]**

> A function that assigns values to properties. Returns a [`Boolean`][10] that is true if the update was successful.

**[`Reflect.setPrototypeOf()`][28]**

> A function that sets the prototype of an object.



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/new
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math "Math is a built-in object that has properties and methods for mathematical constants and functions. Not a function object."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object "The Object constructor creates an object wrapper."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply "The documentation about this has not yet been written; please consider contributing!"
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/apply "The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object)."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct "The documentation about this has not yet been written; please consider contributing!"
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty "The documentation about this has not yet been written; please consider contributing!"
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object."
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Boolean "The Boolean object is an object wrapper for a boolean value."
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty "The documentation about this has not yet been written; please consider contributing!"
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/delete
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Reflect/enumerate "The documentation about this has not yet been written; please consider contributing!"
[14]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...in
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get "The documentation about this has not yet been written; please consider contributing!"
[16]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor "The documentation about this has not yet been written; please consider contributing!"
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor "The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property (that is, one directly present on an object, not present by dint of being along an object's prototype chain) of a given object."
[18]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf "The documentation about this has not yet been written; please consider contributing!"
[19]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf "The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object."
[20]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has "The documentation about this has not yet been written; please consider contributing!"
[21]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/in
[22]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible "The documentation about this has not yet been written; please consider contributing!"
[23]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible "The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it)."
[24]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys "The documentation about this has not yet been written; please consider contributing!"
[25]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions "The documentation about this has not yet been written; please consider contributing!"
[26]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions "The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object)."
[27]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set "The documentation about this has not yet been written; please consider contributing!"
[28]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf "The documentation about this has not yet been written; please consider contributing!"