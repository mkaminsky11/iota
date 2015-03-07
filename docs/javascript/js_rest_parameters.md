## rest parameters

**This is an experimental technology, part of the Harmony (ECMAScript 6) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

The **rest parameter** syntax allows to represent an indefinite number of arguments as an array.

### Syntax

    function(a, b, ...theArgs) {
      // ...
    }
    

### Description

If the last named argument of a function is prefixed with `...`, it becomes an array whose elements from `0` to `theArgs.length` are supplied by the actual arguments passed to the function.

In the above example, `theArgs` would collect the third argument of the function (because the first one is mapped to `a`, and the second to `b`) and all the consecutive arguments.

### Difference between rest parameters and the `arguments` object

There are three main differences between rest parameters and the [`arguments`][1] object:

* rest parameters are only the ones that haven't been given a separate name, while the `arguments` object contains all arguments passed to the function;
* the `arguments` object is not a real array, while rest parameters are [`Array`][2] instances, meaning methods like [`sort`][3], [`map`][4], [`forEach`][5] or [`pop`][6] can be applied on it directly;
* the `arguments` object has additional functionality specific to itself (like the `callee` property).

### From arguments to an array

Rest parameters have been introduced to reduce the boilerplate code that was induced by the arguments

    // Before rest parameters, the following could be found:
    function f(a, b){
      var args = Array.prototype.slice.call(arguments, f.length);
    
      // ...
    }
    
    // to be equivalent of
    
    function(a, b, ...args) {
      
    }
    

### Examples

Since `theArgs` is an array, you can get the count of its elements by using the `length` property:

    function fun1(...theArgs) {
      console.log(theArgs.length);
    }
    
    fun1();  // 0
    fun1(5); // 1
    fun1(5, 6, 7); // 3
    

In the next example, we use the rest parameters to collect arguments from the second one to the end. We then multiply them by the first one:

    function multiply(multiplier, ...theArgs) {
      return theArgs.map(function (element) {
        return multiplier * element;
      });
    }
    
    var arr = multiply(2, 1, 2, 3); 
    console.log(arr); // [2, 4, 6]
    

The following example shows that you can use `Array` methods on rest params, but not on the `arguments` object:

    function sortRestArgs(...theArgs) {
      var sortedArgs = theArgs.sort();
      return sortedArgs;
    }
    
    console.log(sortRestArgs(5,3,7,1)); // shows 1,3,5,7
    
    function sortArguments() {
      var sortedArgs = arguments.sort(); 
      return sortedArgs; // this will never happen
    }
    
    // throws a TypeError: arguments.sort is not a function
    console.log(sortArguments(5,3,7,1));
    

In order to use `Array` methods on the `arguments` object, you would need to convert it to a real array first.


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/arguments "arguments"
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort "Array sort method"
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map "Array map method"
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "Array forEach method"
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/pop "Array pop method"