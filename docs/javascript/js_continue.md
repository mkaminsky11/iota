## continue

### Summary

The **continue statement** terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

### Syntax

    continue [ label ];

**`label`**

> Identifier associated with the label of the statement.

### Description

In contrast to the [`break`][0] statement, `continue` does not terminate the execution of the loop entirely: instead,

* In a [`while`][1] loop, it jumps back to the condition.

* In a [`for`][2] loop, it jumps to the update expression.

The `continue` statement can include an optional label that allows the program to jump to the next iteration of a labeled loop statement instead of the current loop. In this case, the `continue` statement needs to be nested within this labeled statement.

### Examples

### Example: Using `continue` with `while`

The following example shows a [`while`][1] loop that has a `continue` statement that executes when the value of `i` is 3\. Thus, `n` takes on the values 1, 3, 7, and 12\.

    i = 0;
    n = 0;
    while (i < 5) {
       i++;
       if (i === 3) {
          continue;
       }
       n += i;
    }
    

### Example: Using `continue` with a label

In the following example, a statement labeled `checkiandj` contains a statement labeled `checkj`. If `continue` is encountered, the program continues at the top of the `checkj` statement. Each time `continue` is encountered, `checkj` reiterates until its condition returns false. When false is returned, the remainder of the `checkiandj` statement is completed.

If `continue` had a label of `checkiandj`, the program would continue at the top of the `checkiandj` statement.

See also [`label`][3].

    var i = 0, 
        j = 8;
    
    checkiandj: while (i < 4) {
       console.log("i: " + i);
       i += 1;
    
       checkj: while (j > 4) {
          console.log("j: "+ j);
          j -= 1;
          if ((j % 2) == 0)
             continue checkj;
          console.log(j + " is odd.");
       }
       console.log("i = " + i);
       console.log("j = " + j);
    }
    

Output:

    "i: 0"
    
    // start checkj
    "j: 8"
    "7 is odd."
    "j: 7"
    "j: 6"
    "5 is odd."
    "j: 5"
    // end checkj
    
    "i = 1" 
    "j = 4" 
    
    "i: 1"
    "i = 2" 
    "j = 4"
    
    "i: 2"
    "i = 3"
    "j = 4"
    
    "i: 3"
    "i = 4"
    "j = 4"
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/break "The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while "The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for "The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/label "The labeled statement can be used with break or continue statements. It is prefixing a statement with an identifier which you can refer to."