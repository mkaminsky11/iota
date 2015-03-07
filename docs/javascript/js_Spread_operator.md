## Spread operator

**This is an experimental technology, part of the Harmony (ECMAScript 6) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

The **spread operator** allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.

### Syntax

For function calls:

    f(...iterableObj);
    

For array literals:

    [...iterableObj, 4, 5, 6]

For destructuring:

    [a, b, ...iterableObj] = [1, 2, 3, 4, 5];

### Examples

### A better apply

**Example:** it is common to use [`Function.prototype.apply`][1] in cases where you want to use an array as arguments to a function.

    function f(x, y, z) { }
    var args = [0, 1, 2];
    f.apply(null, args);

With ES6 spread you can now write the above as:

    function f(x, y, z) { }
    var args = [0, 1, 2];
    f(...args);

Any argument in the argument list can use the spread syntax and it can be used multiple times.

    function f(v, w, x, y, z) { }
    var args = [0, 1];
    f(-1, ...args, 2, ...[3]);

### A more powerful array literal

**Example:** Today if you have an array and want to create a new array with the existing one being part of it, the array literal syntax is no longer sufficient and you have to fall back to imperative code, using a combination of `push`, `splice`, `concat`, etc. With spread syntax this becomes much more succinct:

    var parts = ['shoulder', 'knees'];
    var lyrics = ['head', ...parts, 'and', 'toes'];

Just like with spread for argument lists `...` can be used anywhere in the array literal and it can be used multiple times.

### Apply for new

**Example:** In ES5 it is not possible to compose `new` with `apply` (in ES5 terms `apply` does a `[[Call]]` and not a `[[Construct]]`). In ES6 the spread syntax naturally supports this:

    var dateFields = readDateFields(database);
    var d = new Date(...dateFields);

### A better push

**Example:** [`push`][2] is often used to push an array to the end of an existing array. In ES5 this is often done as:

    var arr1 = [0, 1, 2];
    var arr2 = [3, 4, 5];
    // Append all items from arr2 onto arr1
    Array.prototype.push.apply(arr1, arr2);

In ES6 with spread this becomes:

    var arr1 = [0, 1, 2];
    var arr2 = [3, 4, 5];
    arr1.push(...arr2);



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/apply "The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object)."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push "The push() method adds one or more elements to the end of an array and returns the new length of the array."