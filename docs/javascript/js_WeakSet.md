## WeakSet

**This is an experimental technology, part of the ECMAScript 6 (Harmony) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

The **`WeakSet`** object lets you store weakly held _objects_ in a collection.

### Syntax

     new WeakSet([iterable]);

### Parameters

**iterable**

> If an [iterable object ][1]is passed, all of its elements will be added to the new `WeakSet`. null is treated as undefined.

### Description

`WeakSet` objects are collections of objects. An object in the `WeakSet` may only occur once; it is unique in the `WeakSet`'s collection.

The main differences to the [`Set`][2] object are:

* In contrast to `Sets`, `WeakSets` are **collections of objects only** and not of arbitrary values of any type.
* The `WeakSet` is _weak_: References to objects in the collection are held weakly. If there is no other reference to an object stored in the `WeakSet`, they can be garbage collected. That also means that there is no list of current objects stored in the collection. `WeakSets` are not enumerable.

### Properties

**`WeakSet.length`**

> The value of the `length` property is 1\.

**[`WeakSet.prototype`][3]**

> Represents the prototype for the `Set` constructor. Allows the addition of properties to all `WeakSet` objects.

### `WeakSet` instances

All `WeakSet` instances inherit from [`WeakSet.prototype`][3].

### Properties

**`WeakSet.prototype.constructor`**

> Returns the function that created an instance's prototype. This is the [`WeakSet`][4] function by default.

### Methods

**[`WeakSet.prototype.add(value)`][5]**

> Appends a new element with the given value to the `WeakSet` object.

**[`WeakSet.prototype.delete(value)`][6]**

> Removes the element associated to the `value`. `WeakSet.prototype.has(value)` will return `false` afterwards.

**[`WeakSet.prototype.has(value)`][7]**

> Returns a boolean asserting whether an element is present with the given value in the `WeakSet` object or not.

**[`WeakSet.prototype.clear()`][8] __**

> Removes all elements from the `WeakSet` object.

### Examples

### Example: Using the `WeakSet` object

    var ws = new WeakSet();
    var obj = {};
    var foo = {};
    
    ws.add(window);
    ws.add(obj);
    
    ws.has(window); // true
    ws.has(foo);    // false, foo has not been added to the set
    
    ws.delete(window); // removes window from the set
    ws.has(window);    // false, window has been removed
    
    ws.clear(); // empty the whole WeakSet
    



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set "The Set object lets you store unique values of any type, whether primitive values or object references."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/prototype "The WeakSet.prototype property represents the prototype for the WeakSet constructor."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakSet "The WeakSet object lets you store weakly held objects in a collection."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/add "The add() method appends a new object to the end of a WeakSet object."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/delete "The delete() method removes the specified element from a WeakSet object."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/has "The has() method returns a boolean indicating whether an object exists in a WeakSet or not."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/clear "The clear() method removes all elements from a WeakSet object."