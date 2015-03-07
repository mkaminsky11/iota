## Array

### Summary

The JavaScript **`Array`** global object is a constructor for arrays, which are high-level, list-like objects.

### Syntax

    [_element0_, _element1_, ..., _elementN_]
    new Array(_element0_, _element1_[, ...[, _elementN_]])
    new Array(_arrayLength_)

**`element_N_`**

> A JavaScript array is initialized with the given elements, except in the case where a single argument is passed to the `Array` constructor and that argument is a number. (See below.) Note that this special case only applies to JavaScript arrays created with the `Array` constructor, not array literals created with the bracket syntax.

**`arrayLength`**

> If the only argument passed to the `Array` constructor is an integer between 0 and 232-1 (inclusive), this returns a new JavaScript array with length set to that number. If the argument is any other number, a [`RangeError`][0] exception is thrown.

### Description

Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's size length grow or shrink at any time, JavaScript arrays are not guaranteed to be dense. In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.

Some people think that [you shouldn't use an array as an associative array][1]. In any case, you can use plain [`objects`][2] instead, although doing so comes with its own caveats. See the post [Lightweight JavaScript dictionaries with arbitrary keys][3] as an example.

### Accessing array elements

JavaScript arrays are zero-indexed: the first element of an array is at index `0`, and the last element is at the index equal to the value of the array's [`length`][4] property minus 1\.

    var arr = ['this is the first element', 'this is the second element'];
    console.log(arr[0]);              // prints 'this is the first element'
    console.log(arr[1]);              // prints 'this is the second element'
    console.log(arr[arr.length - 1]); // prints 'this is the second element'
    

Array elements are object properties in the same way that `toString` is a property, but trying to access an element of an array as follows throws a syntax error, because the property name is not valid:

    console.log(arr.0); // a syntax error
    

There is nothing special about JavaScript arrays and the properties that cause this. JavaScript properties that begin with a digit cannot be referenced with dot notation; and must be accessed using bracket notation. For example, if you had an object with a property named `'3d'`, it can only be referenced using bracket notation. E.g.:

    var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
    console.log(years.0);   // a syntax error
    console.log(years[0]);  // works properly
    

    renderer.3d.setTexture(model, 'character.png');     // a syntax error
    renderer['3d'].setTexture(model, 'character.png');  // works properly
    

Note that in the `3d` example, `'3d'` had to be quoted. It's possible to quote the JavaScript array indexes as well (e.g., `years['2']` instead of `years[2]`), although it's not necessary. The 2 in `years[2]` is coerced into a string by the JavaScript engine through an implicit `toString` conversion. It is for this reason that `'2'` and `'02'` would refer to two different slots on the `years` object and the following example could be `true`:

    console.log(years['2'] != years['02']);
    

Similarly, object properties which happen to be reserved words(!) can only be accessed as string literals in bracket notation:

    var promise = {
      'var'  : 'text',
      'array': [1, 2, 3, 4]
    };
    
    console.log(promise['array']);
    

### Relationship between `length` and numerical properties

A JavaScript array's [`length`][4] property and numerical properties are connected. Several of the built-in array methods (e.g., [`join`][5], [`slice`][6], [`indexOf`][7], etc.) take into account the value of an array's [`length`][4] property when they're called. Other methods (e.g., [`push`][8], [`splice`][9], etc.) also result in updates to an array's [`length`][4] property.

    var fruits = [];
    fruits.push('banana', 'apple', 'peach');
    
    console.log(fruits.length); // 3
    

When setting a property on a JavaScript array when the property is a valid array index and that index is outside the current bounds of the array, the engine will update the array's [`length`][4] property accordingly:

    fruits[5] = 'mango';
    console.log(fruits[5]); // 'mango'
    console.log(Object.keys(fruits));  // ['0', '1', '2', '5']
    console.log(fruits.length); // 6
    

Increasing the [`length`][4].

    fruits.length = 10;
    console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
    console.log(fruits.length); // 10
    

Decreasing the [`length`][4] property does, however, delete elements.

    fruits.length = 2;
    console.log(Object.keys(fruits)); // ['0', '1']
    console.log(fruits.length); // 2
    

This is explained further on the [`Array.length`][4] page.

### Creating an array using the result of a match

The result of a match between a regular expression and a string can create a JavaScript array. This array has properties and elements which provide information about the match. Such an array is returned by [`RegExp.exec`][10], [`String.match`][11], and [`String.replace`][12]. To help explain these properties and elements, look at the following example and then refer to the table below:

    // Match one d followed by one or more b's followed by one d
    // Remember matched b's and the following d
    // Ignore case
    
    var myRe = /d(b+)(d)/i;
    var myArray = myRe.exec('cdbBdbsbz');
    

The properties and elements returned from this match are as follows:
Property/Element
Description
Example

`input`
A read-only property that reflects the original string against which the regular expression was matched.
cdbBdbsbz

`index`
A read-only property that is the zero-based index of the match in the string.
1

`[0]`
A read-only element that specifies the last matched characters.
dbBd

`[1], ...[n]`
Read-only elements that specify the parenthesized substring matches, if included in the regular expression. The number of possible parenthesized substrings is unlimited.
\[1\]: bB  
\[2\]: d

### Properties
_For properties available on `Array` instances, see [Properties of Array instances][13]._

**[`Array.length`][4]**

> The `Array` constructor's length property whose value is 1\.

**[`Array.prototype`][14]**

> Allows the addition of properties to all array objects.

### Methods
_For methods available on `Array` instances, see [Methods of Array instances][15]._

**[`Array.from()`][16] __**

> Creates a new `Array` instance from an array-like or iterable object.

**[`Array.isArray()`][17]**

> Returns true if a variable is an array, if not false.

**[`Array.observe()`][18] __**

> Asynchronously observes changes to Arrays, similar to [`Object.observe()`][19] for objects. It provides a stream of changes in order of occurrence.

**[`Array.of()`][20] __**

> Creates a new `Array` instance with a variable number of arguments, regardless of number or type of the arguments.

### `Array` instances

All `Array` instances inherit from [`Array.prototype`][14]. The prototype object of the `Array` constructor can be modified to affect all `Array` instances.

### Properties

**`Array.prototype.constructor`**

> Specifies the function that creates an object's prototype.

**[`Array.prototype.length`][4]**

> Reflects the number of elements in an array.

### Methods

#### Mutator methods

These methods modify the array:

**[`Array.prototype.copyWithin()`][21] __**

> Copies a sequence of array elements within the array.

**[`Array.prototype.fill()`][22] __**

> Fills all the elements of an array from a start index to an end index with a static value.

**[`Array.prototype.pop()`][23]**

> Removes the last element from an array and returns that element.

**[`Array.prototype.push()`][8]**

> Adds one or more elements to the end of an array and returns the new length of the array.

**[`Array.prototype.reverse()`][24]**

> Reverses the order of the elements of an array --- the first becomes the last, and the last becomes the first.

**[`Array.prototype.shift()`][25]**

> Removes the first element from an array and returns that element.

**[`Array.prototype.sort()`][26]**

> Sorts the elements of an array in place and returns the array.

**[`Array.prototype.splice()`][9]**

> Adds and/or removes elements from an array.

**[`Array.prototype.unshift()`][27]**

> Adds one or more elements to the front of an array and returns the new length of the array.

#### Accessor methods

These methods do not modify the array and return some representation of the array.

**[`Array.prototype.concat()`][28]**

> Returns a new array comprised of this array joined with other array(s) and/or value(s).

**[`Array.prototype.includes()`][29] __**

> Determines whether an array contains a certain element, returning `true` or `false` as appropriate.

**[`Array.prototype.join()`][5]**

> Joins all elements of an array into a string.

**[`Array.prototype.slice()`][6]**

> Extracts a section of an array and returns a new array.

**[`Array.prototype.toSource()`][30] __**

> Returns an array literal representing the specified array; you can use this value to create a new array. Overrides the [`Object.prototype.toSource()`][31] method.

**[`Array.prototype.toString()`][32]**

> Returns a string representing the array and its elements. Overrides the [`Object.prototype.toString()`][33] method.

**[`Array.prototype.toLocaleString()`][34]**

> Returns a localized string representing the array and its elements. Overrides the [`Object.prototype.toLocaleString()`][35] method.

**[`Array.prototype.indexOf()`][7]**

> Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.

**[`Array.prototype.lastIndexOf()`][36]**

> Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.

#### Iteration methods

Several methods take as arguments functions to be called back while processing the array. When these methods are called, the `length` of the array is sampled, and any element added beyond this length from within the callback is not visited. Other changes to the array (setting the value of or deleting an element) may affect the results of the operation if the method visits the changed element afterwards. While the specific behavior of these methods in such cases is well-defined, you should not rely upon it so as not to confuse others who might read your code. If you must mutate the array, copy into a new array instead.

**[`Array.prototype.forEach()`][37]**

> Calls a function for each element in the array.

**[`Array.prototype.entries()`][38] __**

> Returns a new `Array Iterator` object that contains the key/value pairs for each index in the array.

**[`Array.prototype.every()`][39]**

> Returns true if every element in this array satisfies the provided testing function.

**[`Array.prototype.some()`][40]**

> Returns true if at least one element in this array satisfies the provided testing function.

**[`Array.prototype.filter()`][41]**

> Creates a new array with all of the elements of this array for which the provided filtering function returns true.

**[`Array.prototype.find()`][42] __**

> Returns the found value in the array, if an element in the array satisfies the provided testing function or `undefined` if not found.

**[`Array.prototype.findIndex()`][43] __**

> Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.

**[`Array.prototype.keys()`][44] __**

> Returns a new `Array Iterator` that contains the keys for each index in the array.

**[`Array.prototype.map()`][45]**

> Creates a new array with the results of calling a provided function on every element in this array.

**[`Array.prototype.reduce()`][46]**

> Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.

**[`Array.prototype.reduceRight()`][47]**

> Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.

**[`Array.prototype.values()`][48] __**

> Returns a new `Array Iterator` object that contains the values for each index in the array.

**[`Array.prototype[@@iterator]()`][49] __**

> Returns a new `Array Iterator` object that contains the values for each index in the array.

### `Array` generic methods

Sometimes you would like to apply array methods to strings or other array-like objects (such as function [arguments][50]). By doing this, you treat a string as an array of characters (or otherwise treat a non-array as an array). For example, in order to check that every character in the variable _str_ is a letter, you would write:

    function isLetter(character) {
      return character >= 'a' && character <= 'z';
    }
    
    if (Array.prototype.every.call(str, isLetter)) {
      console.log("The string '" + str + "' contains only letters!");
    }
    

This notation is rather wasteful and JavaScript 1.6 introduced a generic shorthand:

    if (Array.every(str, isLetter)) {
      console.log("The string '" + str + "' contains only letters!");
    }
    

[Generics][51] are also available on [`String`][52].

These are currently not part of ECMAScript standards (though the ES6 [`Array.from()`][53] can be used to achieve this). The following is a shim to allow its use in all browsers:

    // Assumes Array extras already present (one may use polyfills for these as well)
    (function() {
      'use strict';
    
      var i,
        // We could also build the array of methods with the following, but the
        //   getOwnPropertyNames() method is non-shimable:
        // Object.getOwnPropertyNames(Array).filter(function(methodName) {
        //   return typeof Array[methodName] === 'function'
        // });
        methods = [
          'join', 'reverse', 'sort', 'push', 'pop', 'shift', 'unshift',
          'splice', 'concat', 'slice', 'indexOf', 'lastIndexOf',
          'forEach', 'map', 'reduce', 'reduceRight', 'filter',
          'some', 'every'
        ],
        methodCount = methods.length,
        assignArrayGeneric = function(methodName) {
          if (!Array[methodName]) {
            var method = Array.prototype[methodName];
            if (typeof method === 'function') {
              Array[methodName] = function() {
                return method.call.apply(method, arguments);
              };
            }
          }
        };
    
      for (i = 0; i < methodCount; i++) {
        assignArrayGeneric(methods[i]);
      }
    }());
    

### Examples

### Example: Creating an array

The following example creates an array, `msgArray`, with a length of 0, then assigns values to `msgArray[0]` and `msgArray[99]`, changing the length of the array to 100\.

    var msgArray = [];
    msgArray[0] = 'Hello';
    msgArray[99] = 'world';
    
    if (msgArray.length === 100) {
      console.log('The length is 100.');
    }
    

### Example: Creating a two-dimensional array

The following creates a chess board as a two dimensional array of strings. The first move is made by copying the 'p' in (6,4) to (4,4). The old position (6,4) is made blank.

    var board = [ 
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p','p','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ];
    
    console.log(board.join('\n') + '\n\n');
    
    // Move King's Pawn forward 2
    board[4][4] = board[6][4];
    board[6][4] = ' ';
    console.log(board.join('\n'));
    

Here is the output:

    R,N,B,Q,K,B,N,R
    P,P,P,P,P,P,P,P
     , , , , , , , 
     , , , , , , , 
     , , , , , , , 
     , , , , , , , 
    p,p,p,p,p,p,p,p
    r,n,b,q,k,b,n,r
    
    R,N,B,Q,K,B,N,R
    P,P,P,P,P,P,P,P
     , , , , , , , 
     , , , , , , , 
     , , , ,p, , , 
     , , , , , , , 
    p,p,p,p, ,p,p,p
    r,n,b,q,k,b,n,r
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RangeError "The RangeError object indicates an error when a value is not in the set or range of allowed values."
[1]: http://www.andrewdupont.net/2006/05/18/javascript-associative-arrays-considered-harmful/
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object "The Object constructor creates an object wrapper."
[3]: http://www.less-broken.com/blog/2010/12/lightweight-javascript-dictionaries.html
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length "The length property represents an unsigned, 32-bit integer that specifies the number of elements in an array."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join "The join() method joins all elements of an array into a string."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice "The slice() method returns a shallow copy of a portion of an array into a new array object."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push "The push() method adds one or more elements to the end of an array and returns the new length of the array."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/splice "The splice() method changes the content of an array by removing existing elements and/or adding new elements."
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec "The exec() method executes a search for a match in a specified string. Returns a result array, or null."
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/match "The match() method retrieves the matches when matching a string against a regular expression."
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/replace "The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match."
[13]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Properties
[14]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype "The Array.prototype property represents the prototype for the Array constructor."
[15]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Methods
[16]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from "The Array.from() method creates a new Array instance from an array-like or iterable object."
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray "The Array.isArray() method returns true if an object is an array, false if it is not."
[18]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/observe "The Array.observe() method is used for asynchronously observing changes to Arrays, similar to Object.observe() for objects. It provides a stream of changes in order of occurrence. It's equivalent to Object.observe() invoked with the accept type list ["add", "update", "delete", "splice"]."
[19]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/observe "The Object.observe() method is used for asynchronously observing the changes to an object. It provides a stream of changes in the order in which they occur."
[20]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/of "The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments."
[21]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin "The copyWithin() method copies the sequence of array elements within the array to the position starting at target. The copy is taken from the index positions of the second and third arguments start and end. The end argument is optional and defaults to the length of the array."
[22]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/fill "The fill() method fills all the elements of an array from a start index to an end index with a static value."
[23]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/pop "The pop() method removes the last element from an array and returns that element."
[24]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse "The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first."
[25]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/shift "The shift() method removes the first element from an array and returns that element. This method changes the length of the array."
[26]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort "The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points."
[27]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift "The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array."
[28]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/concat "The concat() method returns a new array comprised of the array on which it is called joined with the array(s) and/or value(s) provided as arguments."
[29]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/includes "The includes() method determines whether an array includes a certain element, returning true or false as appropriate."
[30]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/toSource "The toSource() method returns a string representing the source code of the array."
[31]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "The toSource() method returns a string representing the source code of the object."
[32]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/toString "The toString() method returns a string representing the specified array and its elements."
[33]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "The toString() method returns a string representing object."
[34]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString "The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”)."
[35]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString "The toLocaleString() method returns a string representing the object. This method is meant to be overriden by derived objects for locale-specific purposes."
[36]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf "The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex."
[37]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "The forEach() method executes a provided function once per array element."
[38]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/entries "The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array."
[39]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every "The every() method tests whether all elements in the array pass the test implemented by the provided function."
[40]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some "The some() method tests whether some element in the array passes the test implemented by the provided function."
[41]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter "The filter() method creates a new array with all elements that pass the test implemented by the provided function."
[42]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/find "The find() method returns a value in the array, if an element in the array satisfies the provided testing function. Otherwise undefined is returned."
[43]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex "The findIndex() method returns an index in the array, if an element in the array satisfies the provided testing function. Otherwise -1 is returned."
[44]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/keys "The keys() method returns a new Array Iterator that contains the keys for each index in the array."
[45]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map "The map() method creates a new array with the results of calling a provided function on every element in this array."
[46]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce "The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) has to reduce it to a single value."
[47]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight "The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) has to reduce it to a single value."
[48]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/values "The values() method returns a new Array Iterator object that contains the values for each index in the array."
[49]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator "The initial value of the @@iterator property is the same function object as the initial value of the values() property."
[50]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments "The documentation about this has not yet been written; please consider contributing!"
[51]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String#String_generic_methods "The String global object is a constructor for strings, or a sequence of characters."
[52]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String "The String global object is a constructor for strings, or a sequence of characters."
[53]: https://github.com/monolithed/ECMAScript-6