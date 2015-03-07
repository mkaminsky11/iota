## block

### Summary

A**block statement** (or **compound statement** in other languages) is used to group zero or more statements. The block is delimited by a pair of curly brackets.

### Syntax

    {
      _statement_1_;
      _statement_2;_
      ...
      _statement_n;_
    }
    

**`statement_1`, `statement_2`, `statement_n`**

> Statements grouped within the block statement.

### Description

This statement is commonly used with control flow statements (e.g. `if`, `for`, `while`). For example:

    while (x < 10) {
      x++;
    }
    

Note that the block statement does not end with a semicolon.

The block statement is often called **compound statement** in other languages. It allows you to use multiple statements where JavaScript expects only one statement. Combining statements into blocks is a common practice in JavaScript. The opposite behavior is possible using an [empty statement][0], where you provide no statement, although one is required.

### No block scope

**Important**: Variables declared with `var` do **not** have block scope. Variables introduced with a block are scoped to the containing function or script, and the effects of setting them persist beyond the block itself. In other words, block statements do not introduce a scope. Although "standalone" blocks are valid syntax, you do not want to use standalone blocks in JavaScript, because they don't do what you think they do, if you think they do anything like such blocks in C or Java. For example:

    var x = 1;
    {
      var x = 2;
    }
    console.log(x); // logs 2
    

This logs 2 because the `var x` statement within the block is in the same scope as the `var x` statement before the block. In C or Java, the equivalent code would have outputted 1\.


[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/Empty