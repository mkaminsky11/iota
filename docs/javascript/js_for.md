## for

### Summary

The **for statement** creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement or a set of statements executed in the loop.

### Syntax

    for ([_initialization_]; [_condition_]; [_final-expression_])
       _statement_
    

**`initialization`**

> An expression (including assignment expressions) or variable declaration. Typically used to initialize a counter variable. This expression may optionally declare new variables with the `var` keyword. These variables are not local to the loop, i.e. they are in the same scope the `for` loop is in. The result of this expression is discarded.

**`condition`**

> An expression to be evaluated before each loop iteration. If this expression evaluates to true, `statement` is executed. This conditional test is optional. If omitted, the condition always evaluates to true. If the expression evaluates to false, execution skips to the first expression following the `for` construct.

**`final-expression`**

> An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of `condition`. Generally used to update or increment the counter variable.

**`statement`**

> A statement that is executed as long as the condition evaluates to true. To execute multiple statements within the loop, use a [block][0] statement (`{ ... }`) to group those statements. To execute no statement within the loop, use an [empty][1] statement (`;`).

### Examples

### Example: Using `for`

The following `for` statement starts by declaring the variable `i` and initializing it to `0`. It checks that `i` is less than nine, performs the two succeeding statements, and increments `i` by 1 after each pass through the loop.

    for (var i = 0; i < 9; i++) {
       console.log(i);
       // more statements
    }
    

### Example: Optional `for` expressions

All three expressions in the head of the `for` loop are optional.

For example, in the _initialization_ block it is not required to initialize variables:

    var i = 0;
    for (; i < 9; i++) {
        console.log(i);
        // more statements
    }
    

Like the _initialization_ block, the _condition_ block is also optional. If you are omitting this expression, you must make sure to break the loop in the body in order to not create an infinite loop.

    for (var i = 0;; i++) {
       console.log(i);
       if (i > 3) break;
       // more statements
    }

You can also omit all three blocks. Again, make sure to use a `[break][2]` statement to end the loop and also modify (increase) a variable, so that the condition for the break statement is true at some point.

    var i = 0;
    
    for (;;) {
      if (i > 3) break;
      console.log(i);
      i++;
    }
    

### Example: Using `for` with an empty statement

The following `for` cycle calculates the offset position of a node in the _\[final-expression\]_ section, and therefore it does not require the use of a `statement` or `[block][0] statement` section, an [empty][1] statement is used instead.

    function showOffsetPos (sId) {
      var nLeft = 0, nTop = 0;
    
      for (var oItNode = document.getElementById(sId); // initialization
           oItNode; // condition
           nLeft += oItNode.offsetLeft, nTop += oItNode.offsetTop, oItNode = oItNode.offsetParent) // final-expression
           /* empty statement */ ;
      
      console.log("Offset position of \"" + sId + "\" element:\n left: " + nLeft + "px;\n top: " + nTop + "px;");
    }
    
    // Example call:
    
    showOffsetPos("content");
    
    // Output:
    // "Offset position of "content" element:
    // left: 0px;
    // top: 153px;"

**Note:** In this case, when you do not use the `statement` section, **a semicolon is put immediately after the declaration of the cycle**.


[0]: https://developer.mozilla.org/en/docs/JavaScript/Reference/Statements/block "JavaScript/Reference/Statements/block"
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/Empty
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/break