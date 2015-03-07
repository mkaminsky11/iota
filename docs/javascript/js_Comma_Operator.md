## Comma Operator

### Summary

The**comma operator** evaluates each of its operands (from left to right) and returns the value of the last operand.

### Syntax

    _expr1_, _expr2, expr3..._

### Parameters

**`expr1`, `expr2, expr3...`**

> Any expressions.

### Description

You can use the comma operator when you want to include multiple expressions in a location that requires a single expression. The most common usage of this operator is to supply multiple parameters in a `for` loop.

### Example

If `a` is a 2-dimensional array with 10 elements on a side, the following code uses the comma operator to increment two variables at once. Note that the comma in the `var` statement is _**not**_ the comma operator, because it doesn't exist within an expression. Rather, it is a special character in `var` statements to combine multiple of them into one. Practically, that comma behaves almost the same as the comma operator, though. The code prints the values of the diagonal elements in the array:

    for (var i = 0, j = 9; i <= 9; i++, j--)
      document.writeln("a[" + i + "][" + j + "] = " + a[i][j]);

### Processing and then returning

Another example that one could make with comma operator is processing before returning. As stated, only the last element will be returned but all others are going to be evaluated as well. So, one could do:

    function myFunc () {
      var x = 0;
    
      return (x += 1, x); // the same of return ++x;
    }