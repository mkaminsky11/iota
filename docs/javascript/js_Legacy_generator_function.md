## Legacy generator function

The legacy generator function expression is a SpiderMonkey-specific feature, and will be removed at some point. For future-facing usages, consider using the [`function* expression`][0].

### Summary

The **`function`** keyword can be used to define a legacy generator function inside an expression. To make the function a legacy generator, the function body should contain at least one [`yield`][1] expression.

### Syntax

    function [_name_]([_param1_[, _param2[_, ..., _paramN_]]]) {
       _statements_
    }

### Parameters

**`name`**

> The function name. Can be omitted, in which case the function is _anonymous_. The name is only local to the function body.

**`paramN`**

> The name of an argument to be passed to the function. A function can have up to 255 arguments.

**`statements`**

> The statements which comprise the body of the function. This should contain at least one [`yield`][1] expression.

### Description

An overview of the usage is available on the [Iterators and Generators][2] page.

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

* [`Generator`][3]
* [The legacy generator function][4]
* [The legacy Iterator protocol][5]
* [`yield`][1]
* [Functions and function scope][6]
* [`function`][7]
* [`function expression`][8]
* [`Function`][9]
* [`function*`][10]
* [`function* expression`][0]
* [`GeneratorFunction`][11]
* [The Iterator protocol][12]


[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/function* "The function* keyword can be used to define a generator function inside an expression."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/yield "The yield keyword is used to pause and resume a generator function (function* or legacy generator function)."
[2]: https://developer.mozilla.org/en/docs/JavaScript/Guide/Iterators_and_Generators "https://developer.mozilla.org/en/docs/JavaScript/Guide/Iterators_and_Generators"
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Generator "Generator is the object returned by The legacy generator function."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/The_legacy_Iterator_protocol
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope "JavaScript/Reference/Functions_and_function_scope"
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function "The function statement declares function with the specified parameters."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/function "The function keyword can be used to define a function inside an expression."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function "The Function constructor creates a new Function object. In JavaScript every function is actually a Function object."
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function* "The function* statement (function keyword followed by an asterisk) defines a generator function."
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction "The GeneratorFunction constructor creates a new generator function object. In JavaScript every generator function is actually a GeneratorFunction object."
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/The_Iterator_protocol