## while

### Summary

The **while statement** creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

### Syntax

    while (_condition_) {
      _statement_
    }

**`condition`**

> An expression evaluated before each pass through the loop. If this condition evaluates to true, `statement` is executed. When condition evaluates to false, execution continues with the statement after the `while` loop.

**`statement`**

> A statement that is executed as long as the condition evaluates to true. To execute multiple statements within the loop, use a [block][0] statement (`{ ... }`) to group those statements.

### Examples

The following `while` loop iterates as long as `n` is less than three.

    var n = 0;
    var x = 0;
    
    while (n < 3) {
      n++;
      x += n;
    }

Each iteration, the loop increments `n` and adds it to `x`. Therefore, `x` and `n` take on the following values:

* After the first pass: `n` = 1 and `x` = 1
* After the second pass: `n` = 2 and `x` = 3
* After the third pass: `n` = 3 and `x` = 6

After completing the third pass, the condition `n` < 3 is no longer true, so the loop terminates.


[0]: https://developer.mozilla.org/en/docs/JavaScript/Reference/Statements/block "JavaScript/Reference/Statements/block"