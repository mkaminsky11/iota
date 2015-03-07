## Set

**This is an experimental technology, part of the ECMAScript 6 (Harmony) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

The **`Set`** object lets you store _unique_ values of any type, whether [primitive values][1] or object references.

### Syntax

    new Set([iterable]);

### Parameters

**iterable**

> If an [iterable object ][2]is passed, all of its elements will be added to the new Set. null is treated as undefined.

### Description

`Set` objects are collections of values, you can iterate its elements in insertion order. A value in the `Set` may only occur once; it is unique in the `Set`'s collection.

### Value equality

Because each value in the Set has to be unique, the value equality will be checked and is not based on the same algorithm as the one used in the === operator. Specifically, for `Set`s, `+0` (which is strictly equal to `-0`) and `-0` are different values. However, this has been changed in the latest ECMAScript 6 specification. Starting with Gecko 29.0 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26) ([bug 952870][3]) and a [recent nightly Chrome][4], `+0` and `-0` are treated as the same value in `Set` objects. Also, `NaN` and `undefined` can also be stored in a Set. `NaN` is considered the same as `NaN` (even though `NaN !== NaN`).

### Properties

**`Set.length`**

> The value of the `length` property is 1\.

**[`Set.prototype`][5]**

> Represents the prototype for the `Set` constructor. Allows the addition of properties to all `Set` objects.

### `Set` instances

All `Set` instances inherit from [`Set.prototype`][5].

### Properties

**`Set.prototype.constructor`**

> Returns the function that created an instance's prototype. This is the [`Set`][6] function by default.

**[`Set.prototype.size`][7]**

> Returns the number of values in the `Set` object.

### Methods

**[`Set.prototype.add(value)`][8]**

> Appends a new element with the given value to the `Set` object. Returns the `Set` object.

**[`Set.prototype.clear()`][9]**

> Removes all elements from the `Set` object.

**[`Set.prototype.delete(value)`][10]**

> Removes the element associated to the `value` and returns the value that `Set.prototype.has(value)` would have previously returned. `Set.prototype.has(value)` will return `false` afterwards.

**[`Set.prototype.entries()`][11]**

> Returns a new `Iterator` object that contains**an array of `[value, value]`** for each element in the `Set` object, in insertion order. This is kept similar to the `Map` object, so that each entry has the same value for its _key_ and _value_ here.

**[`Set.prototype.forEach(callbackFn[, thisArg])`][12]**

> Calls `callbackFn` once for each value present in the `Set` object, in insertion order. If a `thisArg` parameter is provided to `forEach`, it will be used as the `this` value for each callback.

**[`Set.prototype.has(value)`][13]**

> Returns a boolean asserting whether an element is present with the given value in the `Set` object or not.

**[`Set.prototype.keys()`][14]**

> Is the same function as the **`values()`** function and returns a new `Iterator` object that contains the values for each element in the `Set` object in insertion order.

**[`Set.prototype.values()`][15]**

> Returns a new `Iterator` object that contains the **values** for each element in the `Set` object in insertion order.

**[`Set.prototype[@@iterator]()`][16]**

> Returns a new `Iterator` object that contains the **values** for each element in the `Set` object in insertion order.

### Examples

### Example: Using the `Set` object

    var mySet = new Set();
    
    mySet.add(1);
    mySet.add(5);
    mySet.add("some text");
    
    mySet.has(1); // true
    mySet.has(3); // false, 3 has not been added to the set
    mySet.has(5);              // true
    mySet.has(Math.sqrt(25));  // true
    mySet.has("Some Text".toLowerCase()); // true
    
    mySet.size; // 3
    
    mySet.delete(5); // removes 5 from the set
    mySet.has(5);    // false, 5 has been removed
    
    mySet.size; // 2, we just removed one value
    

### Example: Iterating Sets

    // iterate over items in set
    // logs the items in the order: 1, "some text" 
    for (let item of mySet) console.log(item);
    
    // logs the items in the order: 1, "some text" 
    for (let item of mySet.keys()) console.log(item);
     
    // logs the items in the order: 1, "some text" 
    for (let item of mySet.values()) console.log(item);
    
    // logs the items in the order: 1, "some text" 
    //(key and value are the same here)
    for (let [key, value] of mySet.entries()) console.log(key);
    
    // convert set to plain Array (with [Array comprehensions][17])
    var myArr = [v for (v of mySet)]; // [1, "some text"]
    // Alternative (with [Array.from][18])
    var myArr = Array.from(mySet); // [1, "some text"]
    
    // the following will also work if run in an HTML document
    mySet.add(document.body);
    mySet.has(document.querySelector("body")); // true
    
    // converting between Set and Array
    mySet2 = new Set([1,2,3,4]);
    mySet2.size; // 4
    [...mySet2]; // [1,2,3,4]
    
    // intersect can be simulated via  
    var intersection = new Set([x for (x of set1) if (set2.has(x))]);
    
    // Iterate set entries with forEach
    mySet.forEach(function(value) {
      console.log(value);
    });
    
    // 1
    // 2
    // 3
    // 4

### Example: Relation with `Array` objects

    var myArray = ["value1", "value2", "value3"];
    
    // Use the regular Set constructor to transform an Array into a Set
    var mySet = new Set(myArray);
    
    mySet.has("value1"); // returns true
    
    // Use the spread operator to transform a set into an Array.
    alert(uneval([...mySet])); // Will show you exactly the same Array as myArray



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Glossary/Primitive "primitive values: A primitive (primitive value, primitive data type) is data that is not an Object and does not have any methods."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of
[3]: https://bugzilla.mozilla.org/show_bug.cgi?id=952870 "FIXED: Treat -0 and 0 as the same key in Maps and Sets"
[4]: https://code.google.com/p/v8/issues/detail?id=3069
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set/prototype "The Set.prototype property represents the prototype for the Set constructor."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set "The Set object lets you store unique values of any type, whether primitive values or object references."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set/size "The size accessor property returns the number of elements in a Set object."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set/add "The add() method appends a new element with a specified value to the end of a Set object."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set/clear "The clear() method removes all elements from a Set object."
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set/delete "The delete() method removes the specified element from a Set object."
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set/entries "The entries() method returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in insertion order. For Set objects there is no key like in Map objects. However, to keep the API similar to the Map object, each entry has the same value for its key and value here, so that an array [value, value] is returned."
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach "The forEach() method executes a provided function once per each value in the Set object, in insertion order."
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set/has "The has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not."
[14]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set/keys "REDIRECT Set.prototype.values() [en-US]"
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set/values "The values() method returns a new Iterator object that contains the values for each element in the Set object in insertion order."
[16]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator "The initial value of the @@iterator property is the same function object as the initial value of the values property."
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Array_comprehensions
[18]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from