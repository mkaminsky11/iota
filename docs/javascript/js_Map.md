## Map

**This is an experimental technology, part of the ECMAScript 6 (Harmony) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

The **`Map`** object is a simple key/value map. Any value (both objects and [primitive values][1]) may be used as either a key or a value.

### Syntax

    new Map([iterable])
    

### Parameters

**`iterable`**

> Iterable is an Array or other iterable object whose elements are key-value pairs (2-element Arrays). Each key-value pair will be added to the new Map. null is treated as undefined.

### Description

A Map object can iterate its elements in insertion order - a `for..of` loop will return an array of `[key, value]` for each iteration.

### Key equality

Key equality is based on the "same-value" algorithm: `NaN` is considered the same as `NaN` (even though `NaN !== NaN`) and all other values are considered equal according to the semantics of the === operator. In earlier versions of the ECMAScript 6 draft `-0` and `+0` were considered distinct (even though `-0 === +0`), this has been changed in later versions and has been adapted in Gecko 29 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26) ([bug 952870][2]) and a [recent nightly Chrome][3].

### Objects and maps compared

[`Objects`][4] are similar to `Maps` in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Because of this, `Objects` have been used as `Maps` historically; however, there are important differences between `Objects` and `Maps` that make using a `Map` better.

* An `Object` has a prototype, so there are default keys in the map. However, this can be bypassed using `map = Object.create(null)`.
* The keys of an `Object` are [`Strings`][5], where they can be any value for a `Map`.
* You can get the size of a `Map` easily while you have to manually keep track of size for an `Object`.

Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.

Use objects when there is logic that operates on individual elements.

### Properties

**`Map.length`**

> The value of the `length` property is 1\.

**[`Map.prototype`][6]**

> Represents the prototype for the `Map` constructor. Allows the addition of properties to all `Map` objects.

### `Map` instances

All `Map` instances inherit from [`Map.prototype`][6].

### Properties

**`Map.prototype.constructor`**

> Returns the function that created an instance's prototype. This is the [`Map`][7] function by default.

**[`Map.prototype.size`][8]**

> Returns the number of key/value pairs in the `Map` object.

### Methods

**[`Map.prototype.clear()`][9]**

> Removes all key/value pairs from the `Map` object.

**[`Map.prototype.delete(key)`][10]**

> Removes any value associated to the `key` and returns the value that `Map.prototype.has(value)` would have previously returned. `Map.prototype.has(key)` will return `false` afterwards.

**[`Map.prototype.entries()`][11]**

> Returns returns a new `Iterator` object that contains**an array of `[key, value]`** for each element in the `Map` object in insertion order.

**[`Map.prototype.forEach(callbackFn[, thisArg])`][12]**

> Calls callbackFn once for each key-value pair present in the `Map` object, in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.

**[`Map.prototype.get(key)`][13]**

> Returns the value associated to the `key`, or `undefined` if there is none.

**[`Map.prototype.has(key)`][14]**

> Returns a boolean asserting whether a value has been associated to the `key` in the `Map` object or not.

**[`Map.prototype.keys()`][15]**

> Returns a new `Iterator` object that contains the **keys** for each element in the `Map` object in insertion order.

**[`Map.prototype.set(key, value)`][16]**

> Sets the value for the `key` in the `Map` object. Returns the `Map` object.

**[`Map.prototype.values()`][17]**

> Returns a new `Iterator` object that contains the **values** for each element in the `Map` object in insertion order.

**[`Map.prototype[@@iterator]()`][18]**

> Returns returns a new `Iterator` object that contains**an array of `[key, value]`** for each element in the `Map` object in insertion order.

### Examples

### Example: Using the `Map` object

    var myMap = new Map();
    
    var keyObj = {},
        keyFunc = function () {},
        keyString = "a string";
    
    // setting the values
    myMap.set(keyString, "value associated with 'a string'");
    myMap.set(keyObj, "value associated with keyObj");
    myMap.set(keyFunc, "value associated with keyFunc");
    
    myMap.size; // 3
    
    // getting the values
    myMap.get(keyString);    // "value associated with 'a string'"
    myMap.get(keyObj);       // "value associated with keyObj"
    myMap.get(keyFunc);      // "value associated with keyFunc"
    
    myMap.get("a string");   // "value associated with 'a string'"
                             // because keyString === 'a string'
    myMap.get({});           // undefined, because keyObj !== {}
    myMap.get(function() {}) // undefined, because keyFunc !== function () {}
    

### Example: Using `NaN` as `Map` keys

`NaN` can also be used as a key. Even though every `NaN` is not equal to itself (`NaN !== NaN` is true), the following example works, because `NaN`s are indistinguishable from each other:

    var myMap = new Map();
    myMap.set(NaN, "not a number");
    
    myMap.get(NaN); // "not a number"
    
    var otherNaN = Number("foo");
    myMap.get(otherNaN); // "not a number"
    

### Example: Iterating `Maps` with `for..of`

Maps can be iterated using a `for..of` loop:

    var myMap = new Map();
    myMap.set(0, "zero");
    myMap.set(1, "one");
    for (var [key, value] of myMap) {
      alert(key + " = " + value);
    }
    // Will show 2 alerts; first with "0 = zero" and second with "1 = one"
    
    for (var key of myMap.keys()) {
      alert(key);
    }
    // Will show 2 alerts; first with "0" and second with "1"
    
    for (var value of myMap.values()) {
      alert(value);
    }
    // Will show 2 alerts; first with "zero" and second with "one"
    
    for (var [key, value] of myMap.entries()) {
      alert(key + " = " + value);
    }
    // Will show 2 alerts; first with "0 = zero" and second with "1 = one"
    
    myMap.forEach(function(value, key) {
      alert(key + " = " + value);
    }, myMap)
    // Will show 2 alerts; first with "0 = zero" and second with "1 = one"
    

### Example: Relation with `Array` objects

    var kvArray = [["key1", "value1"], ["key2", "value2"]];
    
    // Use the regular Map constructor to transform a 2D key-value Array into a map
    var myMap = new Map(kvArray);
    
    myMap.get("key1"); // returns "value1"
    
    // Use the spread operator to transform a map into a 2D key-value Array.
    alert(uneval([...myMap])); // Will show you exactly the same Array as kvArray
    
    // Or use the spread operator on the keys or values iterator to get 
    // an array of only the keys or values
    alert(uneval([...myMap.keys()])); // Will show ["key1", "key2"]
    



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Glossary/Primitive "primitive values: A primitive (primitive value, primitive data type) is data that is not an Object and does not have any methods."
[2]: https://bugzilla.mozilla.org/show_bug.cgi?id=952870 "FIXED: Treat -0 and 0 as the same key in Maps and Sets"
[3]: https://code.google.com/p/v8/issues/detail?id=3069
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object "The Object constructor creates an object wrapper."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String "The String global object is a constructor for strings, or a sequence of characters."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map/prototype "The Map.prototype property represents the prototype for the Map constructor."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map "The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map/size "The size accessor property returns the number of elements in a Map object."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map/clear "The clear() method removes all elements from a Map object."
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map/delete "The delete() method removes the specified element from a Map object."
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map/entries "The entries() method returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order."
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach "The forEach() method executes a provided function once per each key/value pair in the Map object, in insertion order."
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map/get "The get() method returns a specified element from a Map object."
[14]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map/has "The has() method returns a boolean indicating whether an element with the specified key exists or not."
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map/keys "The keys() method returns a new Iterator object that contains the keys for each element in the Map object in insertion order."
[16]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map/set "The set() method adds a new element with a specified key and value to a Map object."
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map/values "The values() method returns a new Iterator object that contains the values for each element in the Map object in insertion order."
[18]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator "The initial value of the @@iterator property is the same function object as the initial value of the entries property."