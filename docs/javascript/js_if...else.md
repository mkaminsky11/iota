## if...else

### Summary

The **if [statement][0]** executes a statement if a specified condition is true. If the condition is false, another statement can be executed.

### Syntax

    if (_condition_)
       _statement1_
    [else
       _statement2_]
    

**`condition`**

> An [expression][1] that evaluates to true or false.

**`statement1`**

> Statement that is executed if `condition` evaluates to true. Can be any statement, including further nested `if` statements. To execute multiple statements, use a [block][2] statement ({ ... }) to group those statements, to execute no statements, use an [empty][3] statement.

**`statement2`**

> Statement that is executed if `condition` evaluates to false and the `else` clause exists. Can be any statement, including block statements and further nested `if` statements.

### Description

Multiple `if...else` statements can be nested to create an `else if` clause. Note that there is no `elseif` (in one word) keyword in JavaScript.

    if (_condition1_)
       _statement1_
    else if (_condition2_)
       _statement2_
    else if (_condition3_)
       _statement3_
    ...
    else
       _statementN_
    

To see how this works, this is how it would look like if the nesting were properly indented:

    if (_condition1_)
       _statement1_
    else
       if (_condition2_)
          _statement2_
       else
          if (_condition3_)
    ...
    

To execute multiple statements within a clause, use a block statement (`{ ... }`) to group those statements. In general, it is a good practice to always use block statements, especially in code involving nested `if` statements:

    if (_condition_) {
       _statements1_
    } else {
       _statements2_
    }
    

Do not confuse the primitive boolean values `true` and `false` with the true and false values of the [Boolean][4] object. Any value that is not `undefined`, `null`, `0`, `NaN`, or the empty string (`""`), and any object, including a Boolean object whose value is false, evaluates to true when passed to a conditional statement. For example:

    var b = new Boolean(false);
    if (b) // this condition evaluates to true
    

### Examples

### Example: Using `if...else`

    if (cipher_char === from_char) {
       result = result + to_char;
       x++;
    } else {
       result = result + clear_char;
    }
    

### Example: Using `else if`

Note that there is no `elseif` syntax in JavaScript. However, you can write it with a space between `else` and `if`:

    if (x > 5) {
    
    } else if (x > 50) {
    
    } else {
    
    }

### Example: Assignment within the conditional expression

It is advisable to not use simple assignments in a conditional expression, because the assignment can be confused with equality when glancing over the code. For example, do not use the following code:

    if (x = y) {
       /* do the right thing */
    }
    

If you need to use an assignment in a conditional expression, a common practice is to put additional parentheses around the assignment. For example:

    if ((x = y)) {
       /* do the right thing */
    }
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Statements
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/block "en/JavaScript/Reference/Statements/block"
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/Empty
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Boolean "en/JavaScript/Reference/Global_Objects/Boolean"