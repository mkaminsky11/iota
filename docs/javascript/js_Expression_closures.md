## Expression closures

**Non-standard. Do not use!**  
The expression closure syntax is a deprecated SpiderMonkey-specific feature and [will be removed][0]. For future-facing usages, consider using [arrow functions][1].

### Summary

Expression closures are a shorthand function syntax for writing simple functions.

### Syntax

    function [_name_]([_param1_[, _param2[_, ..., _paramN_]]])
       _expression_
    

### Parameters

**`name`**

> The function name. Can be omitted, in which case the function is _anonymous_. The name is only local to the function body.

**`paramN`**

> The name of an argument to be passed to the function. A function can have up to 255 arguments.

**`expression`**

> The expression which comprise the body of the function.

### Description

This addition is nothing more than a shorthand for writing simple functions, giving the language something similar to a typical [Lambda notation][2].

JavaScript 1.7 and older:

    function(x) { return x * x; }

JavaScript 1.8:

    function(x) x * x

This syntax allows you to leave off the braces and 'return' statement - making them implicit. There is no added benefit to writing code in this manner, other than having it be syntactically shorter.

### Examples

A shorthand for binding event listeners:

     document.addEventListener("click", function() false, true);
    

Using this notation with some of the array functions from JavaScript 1.6:

    elems.some(function(elem) elem.type == "text");
    

### Browser compatibility

* Desktop
* Mobile

Feature
Chrome
Firefox (Gecko)
Internet Explorer
Opera
Safari

Basic support
Not supported
(Yes)
Not supported
Not supported
Not supported

Feature
Android
Chrome for Android
Firefox Mobile (Gecko)
IE Mobile
Opera Mobile
Safari Mobile

Basic support
Not supported
Not supported
(Yes)
Not supported
Not supported
Not supported

### See also

* [`Functions and function scope`][3]
* [`Function`][4]
* [`function statement`][5]
* [`function expression`][6]
* [`function* statement`][7]
* [`function* expression`][8]
* [`GeneratorFunction`][9]


[0]: https://bugzilla.mozilla.org/show_bug.cgi?id=1083458
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
[2]: http://en.wikipedia.org/wiki/Lambda_calculus#Lambda_calculus_and_programming_languages
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope "The documentation about this has not yet been written; please consider contributing!"
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function "The Function constructor creates a new Function object. In JavaScript every function is actually a Function object."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function "The function statement declares function with the specified parameters."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/function "The function keyword can be used to define a function inside an expression."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function* "The function* statement (function keyword followed by an asterisk) defines a generator function."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/function* "The function* keyword can be used to define a generator function inside an expression."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction "The GeneratorFunction constructor creates a new generator function object. In JavaScript every generator function is actually a GeneratorFunction object."