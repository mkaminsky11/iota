## Grouping

### Summary

The grouping operator `( )` controls the precedence of evaluation in expressions.

### Syntax

     ( )

### Description

The grouping operator consists of a pair of parentheses around an expression or sub-expression to override the normal [operator precedence][0] so that expressions with lower precedence can be evaluated before an expression with higher priority.

### Examples

Overriding multiplication and division first, then addition and subtraction to evaluate addition first.

    var a = 1;
    var b = 2;
    var c = 3;
    
    // default precedence
    a + b * c     // 7
    // evaluated by default like this
    a + (b * c)   // 7
    
    // now overriding precedence 
    // addition before multiplication   
    (a + b) * c   // 9
    
    // which is equivalent to
    a * c + b * c // 9
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence