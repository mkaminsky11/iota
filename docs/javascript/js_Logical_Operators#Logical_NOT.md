## Logical Operators\#Logical NOT

### Summary

Logical operators are typically used with `[Boolean][0]` (logical) values. When they are, they return a Boolean value. However, the `&&` and `||` operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value.

### Description

The logical operators are described in the following table:
Operator
Usage
Description

Logical AND (`&&`)
`_expr1_ && _expr2_`
Returns `expr1` if it can be converted to false; otherwise, returns `expr2`. Thus, when used with Boolean values, `&&` returns true if both operands are true; otherwise, returns false.

Logical OR (`||`)
`_expr1_ || _expr2_`
Returns `expr1` if it can be converted to true; otherwise, returns `expr2`. Thus, when used with Boolean values, `||` returns true if either operand is true; if both are false, returns false.

Logical NOT (`!`)
`!_expr_`
Returns false if its single operand can be converted to true; otherwise, returns true.

Examples of expressions that can be converted to false are those that evaluate to null, 0, the empty string (""), or undefined.

Even though the `&&` and `||` operators can be used with operands that are not Boolean values, they can still be considered Boolean operators since their return values can always be converted to Boolean values.

### Short-Circuit Evaluation

As logical expressions are evaluated left to right, they are tested for possible "short-circuit" evaluation using the following rules:

* `false && (_anything)_` is short-circuit evaluated to false.
* `true || (_anything)_` is short-circuit evaluated to true.

The rules of logic guarantee that these evaluations are always correct. Note that the anything part of the above expressions is not evaluated, so any side effects of doing so do not take effect. Also note that the anything part of the above expression is any single logical expression (as indicated by the parentheses).

For example, the following two functions are equivalent.

    function shortCircuitEvaluation() {
      doSomething() || doSomethingElse()
    }
    
    function equivalentEvaluation() {
      var flag = doSomething();
      if (!flag) {
        doSomethingElse();
      }
    }
    

However, the following expressions are not equivalent due to [operator precedence][1], and stresses the importance of requiring the right hand operator to be a single expression (grouped if needed by parentheses).

    false && true  || true      // returns true
    false && (true || true)     // returns false

### Logical AND (`&&`)

The following code shows examples of the `&&` (logical AND) operator.

    a1 = true  && true      // t && t returns true
    a2 = true  && false     // t && f returns false
    a3 = false && true      // f && t returns false
    a4 = false && (3 == 4)  // f && f returns false
    a5 = "Cat" && "Dog"     // t && t returns "Dog"
    a6 = false && "Cat"     // f && t returns false
    a7 = "Cat" && false     // t && f returns false
    

### Logical OR (`||`)

The following code shows examples of the `||` (logical OR) operator.

    o1 = true  || true       // t || t returns true
    o2 = false || true       // f || t returns true
    o3 = true  || false      // t || f returns true
    o4 = false || (3 == 4)   // f || f returns false
    o5 = "Cat" || "Dog"      // t || t returns "Cat"
    o6 = false || "Cat"      // f || t returns "Cat"
    o7 = "Cat" || false      // t || f returns "Cat"
    

### Logical NOT (`!`)

The following code shows examples of the `!` (logical NOT) operator.

    n1 = !true              // !t returns false
    n2 = !false             // !f returns true
    n3 = !"Cat"             // !t returns false
    

### Conversion rules

#### Converting AND to OR

the following operation involving Booleans:

    bCondition1 && bCondition2

is always equal to:

    !(!bCondition1 || !bCondition2)

#### Converting OR to AND

the following operation involving Booleans:

    bCondition1 || bCondition2

is always equal to:

    !(!bCondition1 && !bCondition2)

### Removing nested parentheses

As logical expressions are evaluated left to right, it is always possible to remove parentheses from a complex expression following some rules.

#### Removing nested AND

The following composite operation involving Booleans:

    bCondition1 || (bCondition2 && bCondition3)

is always equal to:

    bCondition1 || bCondition2 && bCondition3

#### Removing nested OR

The following composite operation involving Booleans:

    bCondition1 && (bCondition2 || bCondition3)

is always equal to:

    !(!bCondition1 || !bCondition2 && !bCondition3)



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence