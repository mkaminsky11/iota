## Conditional Operator

### Summary

The **conditional (ternary) operator** is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the [`if`][0] statement.

### Syntax

    _condition_ ? _expr1_ : _expr2_ 

### Parameters

**`condition`**

> An expression that evaluates to `true` or `false`.

**`expr1`, `expr2`**

> Expressions with values of any type.

### Description

If `condition` is `true`, the operator returns the value of `expr1`; otherwise, it returns the value of `expr2`. For example, to display a different message based on the value of the `isMember` variable, you could use this statement:

    "The fee is " + (isMember ? "$2.00" : "$10.00")
    

You can also assign variables depending on a ternary result:

    var elvisLives = Math.PI > 4 ? "Yep" : "Nope";

Multiple ternary evaluations are also possible (note: the conditional operator is right associative):

    var firstCheck = false,
        secondCheck = false,
        access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";
      
    console.log( access ); // logs "Access granted"

You can also use ternary evaluations in free space in order to do different operations:

    var stop = false, age = 16;
    
    age > 18 ? location.assign("continue.html") : stop = true;
    

You can also do more than one single operation per case, separating them with a comma:

    var stop = false, age = 23;
    
    age > 18 ? (
        alert("OK, you can go."),
        location.assign("continue.html")
    ) : (
        stop = true,
        alert("Sorry, you are much too young!")
    );
    

You can also do more than one operation during the assignation of a value. In this case, **_the last comma-separated value of the parenthesis_ will be the value to be assigned**.

    var age = 16;
    
    var url = age > 18 ? (
        alert("OK, you can go."), 
        // alert returns "undefined", but it will be ignored because
        // isn't the last comma-separated value of the parenthesis
        "continue.html" // the value to be assigned if age > 18
    ) : (
        alert("You are much too young!"),
        alert("Sorry :-("),
        // etc. etc.
        "stop.html" // the value to be assigned if !(age > 18)
    );
    
    location.assign(url); // "stop.html"



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/if...else