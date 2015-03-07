## WeakMap

**This is an experimental technology, part of the ECMAScript 6 (Harmony) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

The **`WeakMap`** object is a collection of key/value pairs in which the keys are objects and the values can be arbitrary values.

### Syntax

    new WeakMap([iterable])
    

### Parameters

**`iterable`**

> Iterable is an Array or other iterable object whose elements are key-value pairs (2-element Arrays). Each key-value pair will be added to the new WeakMap. null is treated as undefined.

### Description

Keys of WeakMaps are of the type `Object` only. [Primitive data types][1] as keys are not allowed (e.g. a [`Symbol`][2] can't be a `WeakMap` key).

### Why _Weak_Map?

The experienced JavaScript programmer will notice that this API could be implemented in JavaScript with two arrays (one for keys, one for values) shared by the four API methods. Such an implementation would have two main inconveniences. The first one is an O(n) search (n being the number of keys in the map). The second one is a memory leak issue. With manually written maps, the array of keys would keep references to key objects, preventing them from being garbage collected. In native WeakMaps, references to key objects are held "weakly", which means that they do not prevent garbage collection in case there would be no other reference to the object.

Because of references being weak, `WeakMap` keys are not enumerable (i.e. there is no method giving you a list of the keys). If they were, the list would depend on the state of garbage collection, introducing non-determinism. If you want to have a list of keys, you should maintain it yourself.

### Properties

**`WeakMap.length`**

> The value of the `length` property is 1\.

**[`WeakMap.prototype`][3]**

> Represents the prototype for the `WeakMap` constructor. Allows the addition of properties to all `WeakMap` objects.

### `WeakMap` instances

All `WeakMap` instances inherit from [`WeakMap.prototype`][3].

### Properties

**`WeakMap.prototype.constructor`**

> Returns the function that created an instance's prototype. This is the [`WeakMap`][4] function by default.

### Methods

**[`WeakMap.prototype.delete(key)`][5]**

> Removes any value associated to the `key`. `WeakMap.prototype.has(key)` will return `false` afterwards.

**[`WeakMap.prototype.get(key)`][6]**

> Returns the value associated to the `key`, or `undefined` if there is none.

**[`WeakMap.prototype.has(key)`][7]**

> Returns a Boolean asserting whether a value has been associated to the `key` in the `WeakMap` object or not.

**[`WeakMap.prototype.set(key, value)`][8]**

> Sets the value for the `key` in the `WeakMap` object. Returns the `WeakMap` object.

**[`WeakMap.prototype.clear()`][9] __**

> Removes all key/value pairs from the `WeakMap` object. Note that it is possible to implement a `WeakMap`-like object that has a `.clear()` method by encapsulating a `WeakMap` object that hasn't it (see example on page [`WeakMap`][4])

### Examples

### Example: Using `WeakMap`

    var wm1 = new WeakMap(),
        wm2 = new WeakMap(),
        wm3 = new WeakMap();
    var o1 = {},
        o2 = function(){},
        o3 = window;
    
    wm1.set(o1, 37);
    wm1.set(o2, "azerty");
    wm2.set(o1, o2); // a value can be anything, including an object or a function
    wm2.set(o3, undefined);
    wm2.set(wm1, wm2); // keys and values can be any objects. Even WeakMaps!
    
    wm1.get(o2); // "azerty"
    wm2.get(o2); // undefined, because there is no value for o2 on wm2
    wm2.get(o3); // undefined, because that is the set value
    
    wm1.has(o2); // true
    wm2.has(o2); // false
    wm2.has(o3); // true (even if the value itself is 'undefined')
    
    wm3.set(o1, 37);
    wm3.get(o1); // 37
    
    wm1.has(o1);   // true
    wm1.delete(o1);
    wm1.has(o1);   // false
    
    

### Example: Implementing a `WeakMap`-like class with a .clear() method

For expository purpose, the following example uses the new ECMAScript 6 `class` construct, which is currently not widely implemented.

    class ClearableWeakMap {
        constructor(init) {
            this._wm = new WeakMap(init)
        }
        clear() {
            this._wm = new WeakMap
        }
        delete(k) {
            return this._wm.delete(k)
        }
        get(k) {
            return this._wm.get(k)
        }
        has(k) {
            return this._wm.has(k)
        }
        set(k, v) {
            this._wm.set(k, v)
            return this
        }
    }
    



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Glossary/Primitive "Primitive data types: A primitive (primitive value, primitive data type) is data that is not an Object and does not have any methods."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol "A symbol is a unique and immutable data type and may be used as an identifier for object properties. The symbol object is an implicit object wrapper for the symbol primitive data type."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/prototype "The WeakMap.prototype property represents the prototype for the WeakMap constructor."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakMap "The WeakMap object is a collection of key/value pairs in which the keys are objects and the values can be arbitrary values."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/delete "The delete() method removes the specified element from a WeakMap object."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/get "The get() method returns a specified element from a WeakMap object."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/has "The has() method returns a boolean indicating whether an element with the specified key exists in the WeakMap object or not."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/set "The set() method adds a new element with a specified key and value to a WeakMap object."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/clear "The clear() method removes all elements from a WeakMap object."