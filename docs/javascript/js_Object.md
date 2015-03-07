## Object

### Summary

The `**Object**` constructor creates an object wrapper.

### Constructor

    // Object initialiser or literal
    { [ _nameValuePair1_[, _nameValuePair2_[, ..._nameValuePairN_] ] ] }
    
    // Called as a constructor
    new Object([_value_])

### Parameters

**`nameValuePair1, nameValuePair2, ... nameValuePair_N_`**

> Pairs of names (strings) and values (any value) where the name is separated from the value by a colon.

**`value`**

> Any value.

### Description

The `Object` constructor creates an object wrapper for the given value. If the value is [`null`][0] or [`undefined`][1], it will create and return an empty object, otherwise, it will return an object of a Type that corresponds to the given value. If the value is an object already, it will return the value.

When called in a non-constructor context, `Object` behaves identically to `new Object()`.

See also the [object initializer / literal syntax][2].

### Properties of the `Object` constructor

_For properties available on `Object` instances, see [Properties of Object instances][3]._

**`Object.length`**

> Has a value of 1\.

**[`Object.prototype`][4]**

> Allows the addition of properties to all objects of type Object.

### Methods of the `Object` constructor

_For methods available on `Object` instances, see [Methods of Object instances][5]._

**[`Object.assign()`][6] __**

> Creates a new object by copying the values of all enumerable own properties from one or more source objects to a target object.

**[`Object.create()`][7]**

> Creates a new object with the specified prototype object and properties.

**[`Object.defineProperty()`][8]**

> Adds the named property described by a given descriptor to an object.

**[`Object.defineProperties()`][9]**

> Adds the named properties described by the given descriptors to an object.

**[`Object.freeze()`][10]**

> Freezes an object: other code can't delete or change any properties.

**[`Object.getOwnPropertyDescriptor()`][11]**

> Returns a property descriptor for a named property on an object.

**[`Object.getOwnPropertyNames()`][12]**

> Returns an array containing the names of all of the given object's **own** enumerable and non-enumerable properties.

**[`Object.getOwnPropertySymbols()`][13] __**

> Returns an array of all symbol properties found directly upon a given object.

**[`Object.getPrototypeOf()`][14]**

> Returns the prototype of the specified object.

**[`Object.is()`][15] __**

> Compares if two values are distinguishable (ie. the same)

**[`Object.isExtensible()`][16]**

> Determines if extending of an object is allowed.

**[`Object.isFrozen()`][17]**

> Determines if an object was frozen.

**[`Object.isSealed()`][18]**

> Determines if an object is sealed.

**[`Object.keys()`][19]**

> Returns an array containing the names of all of the given object's **own** enumerable properties.

**[`Object.observe()`][20] __**

> Asynchronously observes changes to an object.

**[`Object.preventExtensions()`][21]**

> Prevents any extensions of an object.

**[`Object.seal()`][22]**

> Prevents other code from deleting properties of an object.

**[`Object.setPrototypeOf()`][23] __**

> Sets the prototype (i.e., the internal `[[Prototype]]` property)

### `Object` instances and `Object` prototype object

All objects in JavaScript are descended from `Object`; all objects inherit methods and properties from [`Object.prototype`][4], although they may be overridden. For example, other constructors' prototypes override the `constructor` property and provide their own `toString()` methods. Changes to the `Object` prototype object are propagated to all objects unless the properties and methods subject to those changes are overridden further along the prototype chain.

### Properties

**[`Object.prototype.constructor`][24]**

> Specifies the function that creates an object's prototype.

**[`Object.prototype.__proto__`][25] __**

> Points to the object which was used as prototype when the object was instantiated.

**[`Object.prototype.__noSuchMethod__`][26] __**

> Allows a function to be defined that will be executed when an undefined object member is called as a method.

**[`Object.prototype.__count__`][27] __**

> Used to return the number of enumerable properties directly on a user-defined object, but has been removed.

**[`Object.prototype.__parent__`][28] __**

> Used to point to an object's context, but has been removed.

### Methods

**[`Object.prototype.__defineGetter__()`][29] __ __**

> Associates a function with a property that, when accessed, executes that function and returns its return value.

**[`Object.prototype.__defineSetter__()`][30] __ __**

> Associates a function with a property that, when set, executes that function which modifies the property.

**[`Object.prototype.__lookupGetter__()`][31] __ __**

> Returns the function associated with the specified property by the [`__defineGetter__`][32] method.

**[`Object.prototype.__lookupSetter__()`][33] __ __**

> Returns the function associated with the specified property by the [`__defineSetter__`][34] method.

**[`Object.prototype.hasOwnProperty()`][35]**

> Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.

**[`Object.prototype.isPrototypeOf()`][36]**

> Returns a boolean indication whether the specified object is in the prototype chain of the object this method is called upon.

**[`Object.prototype.propertyIsEnumerable()`][37]**

> Returns a boolean indicating if the internal [ECMAScript DontEnum attribute][38] is set.

**[`Object.prototype.toSource()`][39] __**

> Returns string containing the source of an object literal representing the object that this method is called upon; you can use this value to create a new object.

**[`Object.prototype.toLocaleString()`][40]**

> Calls [`toString()`][41].

**[`Object.prototype.toString()`][41]**

> Returns a string representation of the object.

**[`Object.prototype.unwatch()`][42] __**

> Removes a watchpoint from a property of the object.

**[`Object.prototype.valueOf()`][43]**

> Returns the primitive value of the specified object.

**[`Object.prototype.watch()`][44] __**

> Adds a watchpoint to a property of the object.

**[`Object.prototype.eval()`][45] __**

> Used to evaluate a string of JavaScript code in the context of the specified object, but has been removed.

### Examples

### Example: Using `Object` given `undefined` and `null` types

The following examples store an empty `Object` object in `o`:

    var o = new Object();
    

    var o = new Object(undefined);
    

    var o = new Object(null);
    

### Example: Using `Object` to create `Boolean` objects

The following examples store [`Boolean`][46] objects in `o`:

    // equivalent to o = new Boolean(true);
    var o = new Object(true);
    

    // equivalent to o = new Boolean(false);
    var o = new Object(Boolean());
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/null "The value null is a JavaScript literal representing null or an "empty" value, i.e. no object value is present. It is one of JavaScript's primitive values."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/undefined "The global undefined value property represents the value undefined. It is one of JavaScript's primitive types."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer
[3]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype#Properties
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype "The Object.prototype property represents the Object prototype object."
[5]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype#Methods
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign "The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create "The Object.create() method creates a new object with the specified prototype object and properties."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties "The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object."
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze "The Object.freeze() method freezes an object: that is, prevents new properties from being added to it; prevents existing properties from being removed; and prevents existing properties, or their enumerability, configurability, or writability, from being changed. In essence the object is made effectively immutable. The method returns the object being frozen."
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor "The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property (that is, one directly present on an object, not present by dint of being along an object's prototype chain) of a given object."
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames "The Object.getOwnPropertyNames() method returns an array of all properties (enumerable or not) found directly upon a given object."
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols "The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object."
[14]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf "The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object."
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/is "The Object.is() method determines whether two values are the same value."
[16]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible "The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it)."
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen "The Object.isFrozen() determines if an object is frozen."
[18]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed "The Object.isSealed() method determines if an object is sealed."
[19]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys "The Object.keys() method returns an array of a given object's own enumerable properties, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well)."
[20]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/observe "The Object.observe() method is used for asynchronously observing the changes to an object. It provides a stream of changes in the order in which they occur."
[21]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions "The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object)."
[22]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/seal "The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable."
[23]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf "The Object.setPrototype() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null."
[24]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor "Returns a reference to the Object function that created the instance's prototype. Note that the value of this property is a reference to the function itself, not a string containing the function's name. The value is only read-only for primitive values such as 1, true and "test"."
[25]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/__proto__ "The __proto__ property of Object.prototype is an accessor property (a getter function and a setter function) that exposes the internal [[Prototype]] (either an object or null) of the object through which it is accessed."
[26]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/__noSuchMethod__ "The __noSuchMethod__ property references a function to be executed when a non-existent method is called on an object."
[27]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/__count__ "The documentation about this has not yet been written; please consider contributing!"
[28]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/__parent__ "The documentation about this has not yet been written; please consider contributing!"
[29]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__ "The __defineGetter__ method binds an object's property to a function to be called when that property is looked up."
[30]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__ "The __defineSetter__ method binds an object's property to a function to be called when an attempt is made to set that property."
[31]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__ "The __lookupGetter__ method returns the function bound as a getter to the specified property."
[32]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineGetter "The documentation about this has not yet been written; please consider contributing!"
[33]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__ "The __lookupSetter__ method returns the function bound as a setter to the specified property."
[34]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineSetter "The documentation about this has not yet been written; please consider contributing!"
[35]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty "The hasOwnProperty() method returns a boolean indicating whether the object has the specified property."
[36]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf "The isPrototypeOf() method tests for an object in another object's prototype chain."
[37]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable "The propertyIsEnumerable() method returns a Boolean indicating whether the specified property is enumerable."
[38]: https://developer.mozilla.org/en/docs/ECMAScript_DontEnum_attribute "ECMAScript_DontEnum_attribute"
[39]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "The toSource() method returns a string representing the source code of the object."
[40]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString "The toLocaleString() method returns a string representing the object. This method is meant to be overriden by derived objects for locale-specific purposes."
[41]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "The toString() method returns a string representing object."
[42]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/unwatch "The unwatch() method removes a watchpoint set with the watch() method."
[43]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf "The valueOf() method returns the primitive value of the specified object."
[44]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/watch "The watch() method watches for a property to be assigned a value and runs a function when that occurs."
[45]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/eval "The Object.eval() method used to evaluate a string of JavaScript code in the context of an object, however, this method has been removed."
[46]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Boolean "The Boolean object is an object wrapper for a boolean value."