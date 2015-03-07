## break

### Summary

The **break statement** terminates the current loop, [`switch`][0], or [`label`][1] statement and transfers program control to the statement following the terminated statement.

### Syntax

    break [label];

**`label`**

> Optional. Identifier associated with the label of the statement.  If the statement is not a loop or [`switch`][0], this is required.

### Description

The `break` statement includes an optional label that allows the program to break out of a labeled statement. The `break` statement needs to be nested within the referenced label. The labeled statement can be any [`block`][2] statement; it does not have to be preceded by a loop statement.

### Examples

The following function has a `break` statement that terminates the [`while`][3] loop when `i` is 3, and then returns the value 3 \* `x`.

    function testBreak(x) {
       var i = 0;
    
       while (i < 6) {
          if (i == 3) {
             break;
          }
          i += 1;
       }
       return i * x;
    }

The following code uses `break` statements with labeled blocks. A `break` statement must be nested within any label it references. Notice that `inner_block` is nested within `outer_block`.

    outer_block:{
    
      inner_block:{
        console.log ('1');
        break outer_block;      // breaks out of both inner_block and outer_block
        console.log (':-(');    // skipped
      }
    
      console.log ('2');        // skipped
    }
    

The following code also uses `break` statements with labeled blocks but generates a Syntax Error because its `break` statement is within `block_1` but references `block_2`. A `break` statement must always be nested within any label it references.

    block_1:{
      console.log ('1');
      break block_2;            // SyntaxError: label not found
    }
    
    block_2:{
      console.log ('2');
    }
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/switch "The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/label "The labeled statement can be used with break or continue statements. It is prefixing a statement with an identifier which you can refer to."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/block "A block statement (or compound statement in other languages) is used to group zero or more statements. The block is delimited by a pair of curly brackets."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while "The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement."