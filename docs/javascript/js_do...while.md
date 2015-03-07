## do...while

### Summary

The `do...while` statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

### Syntax

    do
       _statement_
    while (_condition_);
    

**`statement`**

> A statement that is executed at least once and is re-executed each time the condition evaluates to true. To execute multiple statements within the loop, use a [`block`][0] statement (`{ ... }`) to group those statements.

**`condition`**

> An expression evaluated after each pass through the loop. If `condition` evaluates to true, the `statement` is re-executed. When `condition` evaluates to false, control passes to the statement following the `do...while`.

### Examples

### Example: Using `do...while`

In the following example, the `do...while` loop iterates at least once and reiterates until `i` is no longer less than 5\.

    var i = 0;
    do {
       i += 1;
       console.log(i);
    } while (i < 5);
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/block "A block statement (or compound statement in other languages) is used to group zero or more statements. The block is delimited by a pair of curly brackets."