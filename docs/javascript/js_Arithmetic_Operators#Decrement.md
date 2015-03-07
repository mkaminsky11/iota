## Arithmetic Operators\#Decrement

### Summary

**Arithmetic operators** take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (\*), and division (/).

### Addition (+)

The addition operator produces the sum of numeric operands or string concatenation.

### Syntax

    **Operator:** x + y
    

### Examples

    // Number + Number -> addition
    1 + 2 // 3
    
    // Boolean + Number -> addition
    true + 1 // 2
    
    // Boolean + Boolean -> addition
    false + false // 0
    
    // Number + String -> concatenation
    5 + "foo" // "5foo"
    
    // String + Boolean -> concatenation
    "foo" + false // "foofalse"
    
    // String + String -> concatenation
    "foo" + "bar" // "foobar"
    

### Subtraction (-)

The subtraction operator subtracts the two operands, producing their difference.

### Syntax

    **Operator:** x - y
    

### Examples

    5 - 3 // 2
    3 - 5 // -2
    "foo" - 3 // NaN

### Division (/)

The division operator produces the quotient of its operands where the left operand is the dividend and the right operand is the divisor.

### Syntax

    **Operator:** x / y
    

### Examples

    1 / 2      // returns 0.5 in JavaScript
    1 / 2      // returns 0 in Java 
    // (neither number is explicitly a floating point number)
    
    1.0 / 2.0  // returns 0.5 in both JavaScript and Java
    
    2.0 / 0    // returns Infinity in JavaScript
    2.0 / 0.0  // returns Infinity too
    2.0 / -0.0 // returns -Infinity in JavaScript

### Multiplication (\*)

The multiplication operator produces the product of the operands.

### Syntax

    **Operator:** x * y
    

### Examples

    2 * 2 // 4
    -2 * 2 // -4
    Infinity * 0 // NaN
    Infinity * Infinity // Infinity
    "foo" * 2 // NaN
    

### Remainder (%)

The remainder operator returns the first operand modulo the second operand, that is, `var1` modulo `var2`, in the preceding statement, where `var1` and `var2` are variables. The modulo function is the integer remainder of dividing `var1` by `var2`. [There is a proposal to get an actual modulo operator in a future version of ECMAScript.][0]

### Syntax

    **Operator:** var1 % var2
    

### Examples

    12 % 5 // 2
    -1 % 2 // -1
    NaN % 2 // NaN
    

### Increment (++)

The increment operator increments (adds one to) its operand and returns a value.

* If used postfix, with operator after operand (for example, x++), then it returns the value before incrementing.
* If used prefix with operator before operand (for example, ++x), then it returns the value after incrementing.

### Syntax

    **Operator:** x++ or ++x
    

### Examples

    // Postfix 
    var x = 3;
    y = x++; // y = 3, x = 4
    
    // Prefix
    var a = 2;
    b = ++a; // a = 3, b = 3
    

### Decrement (--)

The decrement operator decrements (subtracts one from) its operand and returns a value.

* If used postfix (for example, x--), then it returns the value before decrementing.
* If used prefix (for example, --x), then it returns the value after decrementing.

### Syntax

    **Operator:** x-- or --x
    

### Examples

    // Postfix 
    var x = 3;
    y = x--; // y = 3, x = 2
    
    // Prefix
    var a = 2;
    b = --a; // a = 1, b = 1
    

### Unary negation (-)

The unary negation operator precedes its operand and negates it.

### Syntax

    **Operator:** -x
    

### Examples

    var x = 3;
    y = -x; // y = -3, x = 3
    

### Unary plus (+)

The unary plus operator precedes its operand and evaluates to its operand but attempts to converts it into a number, if it isn't already. Although unary negation (-) also can convert non-numbers, unary plus is the fastest and preferred way of converting something into a number, because it does not perform any other operations on the number. It can convert string representations of integers and floats, as well as the non-string values `true`, `false`, and `null`. Integers in both decimal and hexadecimal ("0x"-prefixed) formats are supported. Negative numbers are supported (though not for hex). If it cannot parse a particular value, it will evaluate to [NaN][1].

### Syntax

    **Operator:** +x
    

### Examples

    +3     // 3
    +"3"   // 3
    +true  // 1
    +false // 0
    +null  // 0
    



[0]: http://wiki.ecmascript.org/doku.php?id=strawman:modulo_operator "http://wiki.ecmascript.org/doku.php?id=strawman:modulo_operator"
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NaN