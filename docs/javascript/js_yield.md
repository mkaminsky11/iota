## yield

### Summary

The `yield` keyword is used to pause and resume a generator function ([`function*`][0] or [legacy generator function][1]).

### Syntax

     yield [[expression]];

**`expression`**

> The expression to return. If omitted, `undefined` is returned instead.

### Description

The `yield` keyword causes generator function execution to pause and return the current value of the expression following the `yield` keyword. It can be thought of as a generator-based version of the `return` keyword.

The `yield` keyword actually returns an `IteratorResult` object with two properties, `value` and `done`. The `value` property is the result of evaluating the `yield` expression, and `done` is a Boolean indicating whether or not the generator function has fully completed.

Once paused on a `yield` expression, code execution for the generator cannot resume unless invoked externally by calling the generator's `next()` method. This allows direct control of the generator's execution and incremental return values.

### Examples

The following code is the declaration of an example generator function, along with a helper function.

    function* foo(){
      var index = 0;
      while (index <= 2) // when index reaches 3, 
                         // yield's done will be true 
                         // and its value will be undefined;
        yield index++;
    }

Once a generator function is defined, it can be used by constructing an iterator as shown.

    var iterator = foo();
    console.log(iterator.next()); // { value:0, done:false }
    console.log(iterator.next()); // { value:1, done:false }
    console.log(iterator.next()); // { value:2, done:false }
    console.log(iterator.next()); // { value:undefined, done:true }



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function* "The function* statement (function keyword followed by an asterisk) defines a generator function."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function