## function

### Summary

The **`function`** keyword can be used to define a function inside an expression.

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

> The statements which comprise the body of the function.

### Description

A function expression is very similar to and has almost the same syntax as a function statement (see [function statement][0] for details). The main difference between a function expression and a function statement is the _function name,_ which can be omitted in function expressions to create _anonymous_ functions. See also the chapter about [functions][1] for more information.

### Examples

The following example defines an unnamed function and assigns it to `x`. The function returns the square of its argument:

    var x = function(y) {
       return y * y;
    };
    

### Named function expression

If you want to refer to the current function inside the function body, you need to create a named function expression. This name is then local only to the function body (scope). This also avoids using the non-standard `[arguments.callee][2]` property.

    var math = {
      'factorial': function factorial(n) {
        if (n <= 1)
          return 1;
        return n * factorial(n - 1);
      }
    };
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/arguments/callee