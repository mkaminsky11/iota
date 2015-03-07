## Int8Array

### Summary

The **`Int8Array`** typed array represents an array of twos-complement 8-bit signed integers. The contents are initialized to `0`. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

### Syntax

    Int8Array(length);
    Int8Array(typedArray);
    Int8Array(object);
    Int8Array(buffer [, byteOffset [, length]]);

For more information about the constructor syntax and the parameters, see _[TypedArray][0]_.

### Properties

**[`Int8Array.BYTES_PER_ELEMENT`][1]**

> Returns a number value of the element size. `1` in the case of an `Int8Array`.

**Int8Array.length**

> Length property whose value is 3\.

**[`Int8Array.name`][2]**

> Returns the string value of the constructor name. In the case of the `Int8Array` type: "Int8Array".

**[`Int8Array.prototype`][3]**

> Prototype for the _TypedArray_ objects.

### Methods

**[`Int8Array.from()`][4]**

> Creates a new `Int8Array` from an array-like or iterable object. See also [`Array.from()`][5].

**[`Int8Array.of()`][6]**

> Creates a new `Int8Array` with a variable number of arguments. See also [`Array.of()`][7].

### `Int8Array` prototype

All `Int8Array` objects inherit from [`%TypedArray%.prototype`][3].

### Properties

**`Int8Array.prototype.constructor`**

> Returns the function that created an instance's prototype. This is the `Int8Array` constructor by default.

**[`Int8Array.prototype.buffer`][8] Read only **

> Returns the [`ArrayBuffer`][9] referenced by the `Int8Array` Fixed at construction time and thus **read only**.

**[`Int8Array.prototype.byteLength`][10] Read only **

> Returns the length (in bytes) of the `Int8Array` from the start of its [`ArrayBuffer`][9]. Fixed at construction time and thus **read only.**

**[`Int8Array.prototype.byteOffset`][11] Read only **

> Returns the offset (in bytes) of the `Int8Array` from the start of its [`ArrayBuffer`][9]. Fixed at construction time and thus **read only.**

**[`Int8Array.prototype.length`][12] Read only **

> Returns the number of elements hold in the `Int8Array`. Fixed at construction time and thus **read only.**

### Methods

**[`Int8Array.prototype.copyWithin()`][13]**

> Copies a sequence of array elements within the array. See also [`Array.prototype.copyWithin()`][14].

**[`Int8Array.prototype.entries()`][15]**

> Returns a new `Array Iterator` object that contains the key/value pairs for each index in the array. See also [`Array.prototype.entries()`][16].

**[`Int8Array.prototype.every()`][17]**

> Tests whether all elements in the array pass the test provided by a function. See also [`Array.prototype.every()`][18].

**[`Int8Array.prototype.fill()`][19]**

> Fills all the elements of an array from a start index to an end index with a static value. See also [`Array.prototype.fill()`][20].

**[`Int8Array.prototype.filter()`][21]**

> Creates a new array with all of the elements of this array for which the provided filtering function returns true. See also [`Array.prototype.filter()`][22].

**[`Int8Array.prototype.find()`][23]**

> Returns the found value in the array, if an element in the array satisfies the provided testing function or `undefined` if not found. See also [`Array.prototype.find()`][24].

**[`Int8Array.prototype.findIndex()`][25]**

> Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found. See also [`Array.prototype.findIndex()`][26].

**[`Int8Array.prototype.forEach()`][27]**

> Calls a function for each element in the array. See also [`Array.prototype.forEach()`][28].

**[`Int8Array.prototype.includes()`][29] __**

> Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also [`Array.prototype.includes()`][30].

**[`Int8Array.prototype.indexOf()`][31]**

> Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found. See also [`Array.prototype.indexOf()`][32].

**[`Int8Array.prototype.join()`][33]**

> Joins all elements of an array into a string. See also [`Array.prototype.join()`][34].

**[`Int8Array.prototype.keys()`][35]**

> Returns a new `Array Iterator` that contains the keys for each index in the array. See also [`Array.prototype.keys()`][36].

**[`Int8Array.prototype.lastIndexOf()`][37]**

> Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found. See also [`Array.prototype.lastIndexOf()`][38].

**[`Int8Array.prototype.map()`][39]**

> Creates a new array with the results of calling a provided function on every element in this array. See also [`Array.prototype.map()`][40].

**[`Int8Array.prototype.move()`][41] __ Unimplemented**

> Former non-standard version of [`Int8Array.prototype.copyWithin()`][13].

**[`Int8Array.prototype.reduce()`][42]**

> Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also [`Array.prototype.reduce()`][43].

**[`Int8Array.prototype.reduceRight()`][44]**

> Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also [`Array.prototype.reduceRight()`][45].

**[`Int8Array.prototype.reverse()`][46]**

> Reverses the order of the elements of an array --- the first becomes the last, and the last becomes the first. See also [`Array.prototype.reverse()`][47].

**[`Int8Array.prototype.set()`][48]**

> Stores multiple values in the typed array, reading input values from a specified array.

**[`Int8Array.prototype.slice()`][49]**

> Extracts a section of an array and returns a new array. See also [`Array.prototype.slice()`][50].

**[`Int8Array.prototype.some()`][51]**

> Returns true if at least one element in this array satisfies the provided testing function. See also [`Array.prototype.some()`][52].

**[`Int8Array.prototype.sort()`][53]**

> Sorts the elements of an array in place and returns the array. See also [`Array.prototype.sort()`][54].

**[`Int8Array.prototype.subarray()`][55]**

> Returns a new `Int8Array` from the given start and end element index.

**[`Int8Array.prototype.values()`][56]**

> Returns a new `Array Iterator` object that contains the values for each index in the array. See also [`Array.prototype.values()`][57].

**[`Int8Array.prototype.toLocaleString()`][58]**

> Returns a localized string representing the array and its elements. See also [`Array.prototype.toLocaleString()`][59].

**[`Int8Array.prototype.toString()`][60]**

> Returns a string representing the array and its elements. See also [`Array.prototype.toString()`][61].

**[`Int8Array.prototype[@@iterator]()`][62]**

> Returns a new `Array Iterator` object that contains the values for each index in the array.

### Examples

    // From a length
    var int8 = new Int8Array(2);
    int8[0] = 42;
    console.log(int8[0]); // 42
    console.log(int8.length); // 2
    console.log(int8.BYTES_PER_ELEMENT); // 1
    
    // From an array
    var arr = new Int8Array([21,31]);
    console.log(arr[1]); // 31
    
    // From another TypedArray
    var x = new Int8Array([21, 31]);
    var y = new Int8Array(x);
    console.log(y[0]); // 21
    
    // From an ArrayBuffer
    var buffer = new ArrayBuffer(8);
    var z = new Int8Array(buffer, 1, 4);
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT "The TypedArray.BYTES_PER_ELEMENT property represents the size in bytes of each element in an typed array."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/name "The TypedArray.name property represents a string value of the typed array constructor name."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype "The TypedArray.prototype property represents the prototype for TypedArray constructors."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from "The %TypedArray%.from() method creates a new typed array from an array-like or iterable object. This method is nearly the same as Array.from()."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from "The Array.from() method creates a new Array instance from an array-like or iterable object."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of "The %TypedArray%.of() method creates a new new typed array with a variable number of arguments. This method is nearly the same as Array.of()."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/of "The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer "The buffer accessor property represents the ArrayBuffer referenced by a TypedArray at construction time."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You can not directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer."
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength "The byteLength accessor property represents the length (in bytes) of a typed array from the start of its ArrayBuffer."
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset "The byteOffset accessor property represents the offset (in bytes) of a typed array from the start of its ArrayBuffer."
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length "The length accessor property represents the length (in elements) of a typed array."
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin "The copyWithin() method copies the sequence of array elements within the array to the position starting at target. The copy is taken from the index positions of the second and third arguments start and end. The end argument is optional and defaults to the length of the array. This method has the same algorithm as Array.prototype.copyWithin. TypedArray is one of the typed array types here."
[14]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin "The copyWithin() method copies the sequence of array elements within the array to the position starting at target. The copy is taken from the index positions of the second and third arguments start and end. The end argument is optional and defaults to the length of the array."
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries "The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array."
[16]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/entries "The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array."
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every "The every() method tests whether all elements in the typed array pass the test implemented by the provided function. This method has the same algorithm as Array.prototype.every(). TypedArray is one of the typed array types here."
[18]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every "The every() method tests whether all elements in the array pass the test implemented by the provided function."
[19]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill "The fill() method fills all the elements of a typed array from a start index to an end index with a static value. This method has the same algorithm as Array.prototype.fill(). TypedArray is one of the typed array types here."
[20]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/fill "The fill() method fills all the elements of an array from a start index to an end index with a static value."
[21]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter "The documentation about this has not yet been written; please consider contributing!"
[22]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter "The filter() method creates a new array with all elements that pass the test implemented by the provided function."
[23]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/find "The find() method returns a value in the typed array, if an element satisfies the provided testing function. Otherwise undefined is returned. TypedArray is one of the typed array types here."
[24]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/find "The find() method returns a value in the array, if an element in the array satisfies the provided testing function. Otherwise undefined is returned."
[25]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex "The findIndex() method returns an index in the typed array, if an element in the typed array satisfies the provided testing function. Otherwise -1 is returned."
[26]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex "The findIndex() method returns an index in the array, if an element in the array satisfies the provided testing function. Otherwise -1 is returned."
[27]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach "The documentation about this has not yet been written; please consider contributing!"
[28]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "The forEach() method executes a provided function once per array element."
[29]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes "The includes() method determines whether a typed array includes a certain element, returning true or false as appropriate. This method has the same algorithm as Array.prototype.includes(). TypedArray is one of the typed array types here."
[30]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/includes "The includes() method determines whether an array includes a certain element, returning true or false as appropriate."
[31]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf "The indexOf() method returns the first index at which a given element can be found in the typed array, or -1 if it is not present. This method has the same algorithm as Array.prototype.indexOf(). TypedArray is one of the typed array types here."
[32]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."
[33]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join "The join() method joins all elements of an array into a string. This method has the same algorithm as Array.prototype.join(). TypedArray is one of the typed array types here."
[34]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join "The join() method joins all elements of an array into a string."
[35]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys "The keys() method returns a new Array Iterator object that contains the keys for each index in the array."
[36]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/keys "The keys() method returns a new Array Iterator that contains the keys for each index in the array."
[37]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf "The lastIndexOf() method returns the last index at which a given element can be found in the typed array, or -1 if it is not present. The typed array is searched backwards, starting at fromIndex. This method has the same algorithm as Array.prototype.lastIndexOf(). TypedArray is one of the typed array types here."
[38]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf "The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex."
[39]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map "The documentation about this has not yet been written; please consider contributing!"
[40]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map "The map() method creates a new array with the results of calling a provided function on every element in this array."
[41]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/move "The move() method used to copy the sequence of array elements within the array to the position starting at target. However, this non-standard method has been replaced with the standard TypedArray.prototype.copyWithin() method. TypedArray is one of the typed array types here."
[42]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce "The reduce() method applies a function against an accumulator and each value of the typed array (from left-to-right) has to reduce it to a single value. This method has the same algorithm as Array.prototype.reduce(). TypedArray is one of the typed array types here."
[43]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce "The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) has to reduce it to a single value."
[44]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight "The reduceRight() method applies a function against an accumulator and each value of the typed array (from right-to-left) has to reduce it to a single value. This method has the same algorithm as Array.prototype.reduceRight(). TypedArray is one of the typed array types here."
[45]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight "The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) has to reduce it to a single value."
[46]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse "The reverse() method reverses a typed array in place. The first typed array element becomes the last and the last becomes the first. This method has the same algorithm as Array.prototype.reverse(). TypedArray is one of the typed array types here."
[47]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse "The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first."
[48]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set "The set() method stores multiple values in the typed array, reading input values from a specified array."
[49]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice "The documentation about this has not yet been written; please consider contributing!"
[50]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice "The slice() method returns a shallow copy of a portion of an array into a new array object."
[51]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some "The some() method tests whether some element in the typed array passes the test implemented by the provided function. This method has the same algorithm as Array.prototype.some(). TypedArray is one of the typed array types here."
[52]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some "The some() method tests whether some element in the array passes the test implemented by the provided function."
[53]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/sort "The documentation about this has not yet been written; please consider contributing!"
[54]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort "The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points."
[55]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray "The subarray() method returns a new TypedArray on the same ArrayBuffer store and with the same element types as for this TypedArray object. The begin offset is inclusive and the end offset is exclusive. TypedArray is one of the typed array types."
[56]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values "The values() method returns a new Array Iterator object that contains the values for each index in the array."
[57]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/values "The values() method returns a new Array Iterator object that contains the values for each index in the array."
[58]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString "The documentation about this has not yet been written; please consider contributing!"
[59]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString "The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”)."
[60]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString "The documentation about this has not yet been written; please consider contributing!"
[61]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/toString "The toString() method returns a string representing the specified array and its elements."
[62]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator "The initial value of the @@iterator property is the same function object as the initial value of the values property."