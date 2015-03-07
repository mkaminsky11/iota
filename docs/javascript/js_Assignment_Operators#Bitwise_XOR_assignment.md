## Assignment Operators\#Bitwise XOR assignment

### Summary

An **assignment operator** assigns a value to its left operand based on the value of its right operand.

### Description

The basic assignment operator is equal (`=`), which assigns the value of its right operand to its left operand. That is, `x = y` assigns the value of `y` to `x`. The other assignment operators are usually shorthand for standard operations, as shown in the following definitions and examples.
Name
Shorthand operator
Meaning

[Assignment][0]
`x = y`
`x = y`

[Addition assignment][1]
`x += y`
`x = x + y`

[Subtraction assignment][2]
`x -= y`
`x = x - y`

[Multiplication assignment][3]
`x *= y`
`x = x * y`

[Division assignment][4]
`x /= y`
`x = x / y`

[Remainder assignment][5]
`x %= y`
`x = x % y`

[Left shift assignment][6]
`x <<= y`
`x = x << y`

[Right shift assignment][7]
`x >>= y`
`x = x >> y`

[Unsigned right shift assignment][8]
`x >>>= y`
`x = x >>> y`

[Bitwise AND assignment][9]
`x &= y`
`x = x & y`

[Bitwise XOR assignment][10]
`x ^= y`
`x = x ^ y`

[Bitwise OR assignment][11]
`x |= y`
`x = x | y`

### Assignment

Simple assignment operator which assigns a value to a variable. Chaining the assignment operator is possible in order to assign a single value to multiple variables. See the example.

#### Syntax

    **Operator:** x = y
    

#### Examples

    // Assuming the following variables
    //  x = 5
    //  y = 10
    //  z = 25
    
    x = y     // x is 10
    x = y = z // x, y and z are all 25
    

### Addition assignment

The addition assignment operator **adds** the value of the right operand to a variable and assigns the result to the variable. The types of the two operands determine the behavior of the addition assignment operator. Addition or concatenation is possible. See the [addition operator][12] for more details.

#### Syntax

    **Operator:** x += y 
    **Meaning:**  x  = x + y
    

#### Examples

    // Assuming the following variables
    //  foo = "foo"
    //  bar = 5
    //  baz = true
    
    
    // Number + Number -> addition
    bar += 2 // 7
    
    // Boolean + Number -> addition
    baz += 1 // 2
    
    // Boolean + Boolean -> addition
    baz += false // 0
    
    // Number + String -> concatenation
    bar += "foo" // "5foo"
    
    // String + Boolean -> concatenation
    foo += false // "foofalse"
    
    // String + String -> concatenation
    foo += "bar" // "foobar"
    

### Subtraction assignment

The subtraction assignment operator **subtracts** the value of the right operand from a variable and assigns the result to the variable. See the [subtraction operator][13] for more details.

#### Syntax

    **Operator:** x -= y 
    **Meaning:**  x  = x - y
    

#### Examples

    // Assuming the following variable
    //  bar = 5
    
    bar -= 2     // 3
    bar -= "foo" // NaN
    

### Multiplication assignment

The multiplication assignment operator **multiplies** a variable by the value of the right operand and assigns the result to the variable. See the [multiplication operator][14] for more details.

#### Syntax

    **Operator:** x *= y 
    **Meaning:**  x  = x * y
    

#### Examples

    // Assuming the following variable
    //  bar = 5
    
    bar *= 2     // 10
    bar *= "foo" // NaN
    

### Division assignment

The division assignment operator **divides** a variable by the value of the right operand and assigns the result to the variable. See the [division operator][15] for more details.

#### Syntax

    **Operator:** x /= y 
    **Meaning:**  x  = x / y
    

#### Examples

    // Assuming the following variable
    //  bar = 5
    
    bar /= 2     // 2.5
    bar /= "foo" // NaN
    bar /= 0     // Infinity
    

### Remainder assignment

The remainder assignment operator **divides** a variable by the value of the right operand and assigns the **remainder** to the variable. See the [remainder operator][16] for more details.

#### Syntax

    **Operator:** x %= y 
    **Meaning:**  x  = x % y
    

#### Examples

    // Assuming the following variable
    //  bar = 5
    
    bar %= 2     // 1
    bar %= "foo" // NaN
    bar %= 0     // NaN
    

### Left shift assignment

The left shift assignment operator moves the specified amount of bits to the left and assigns the result to the variable. See the [left shift operator][17] for more details.

#### Syntax

    **Operator:** x <<= y 
    **Meaning:**  x   = x << y
    

#### Examples

    var bar = 5; //  (00000000000000000000000000000101)
    bar <<= 2; // 20 (00000000000000000000000000010100)
    

### Right shift assignment

The right shift assignment operator moves the specified amount of bits to the right and assigns the result to the variable. See the [right shift operator][18] for more details.

#### Syntax

    **Operator:** x >>= y 
    **Meaning:**  x   = x >> y
    

#### Examples

    var bar = 5; //   (00000000000000000000000000000101)
    bar >>= 2;   // 1 (00000000000000000000000000000001)
    
    var bar -5; //    (-00000000000000000000000000000101)
    bar >>= 2;  // -2 (-00000000000000000000000000000010)
    

### Unsigned right shift assignment

The unsigned right shift assignment operator moves the specified amount of bits to the right and assigns the result to the variable. See the [unsigned right shift operator][19] for more details.

#### Syntax

    **Operator:** x >>>= y 
    **Meaning:**  x    = x >>> y
    

#### Examples

    var bar = 5; //   (00000000000000000000000000000101)
    bar >>>= 2;  // 1 (00000000000000000000000000000001)
    
    var bar = -5; // (-00000000000000000000000000000101)
    bar >>>= 2; // 1073741822 (00111111111111111111111111111110)

### Bitwise AND assignment

The bitwise AND assignment operator uses the binary representation of both operands, does a bitwise AND operation on them and assigns the result to the variable. See the [bitwise AND operator][20] for more details.

#### Syntax

    **Operator:** x &= y 
    **Meaning:**  x  = x & y
    

#### Example

    var bar = 5;
    // 5:     00000000000000000000000000000101
    // 2:     00000000000000000000000000000010
    bar &= 2; // 0
    

### Bitwise XOR assignment

The bitwise XOR assignment operator uses the binary representation of both operands, does a bitwise XOR operation on them and assigns the result to the variable. See the [bitwise XOR operator][21] for more details.

#### Syntax

    **Operator:** x ^= y 
    **Meaning:**  x  = x ^ y
    

#### Example

    var bar = 5;
    bar ^= 2; // 7
    // 5: 00000000000000000000000000000101
    // 2: 00000000000000000000000000000010
    // -----------------------------------
    // 7: 00000000000000000000000000000111
    

### Bitwise OR assignment

The bitwise OR assignment operator uses the binary representation of both operands, does a bitwise OR operation on them and assigns the result to the variable. See the [bitwise OR operator][22] for more details.

#### Syntax

    **Operator:** x |= y 
    **Meaning:**  x  = x | y
    

#### Example

    var bar = 5;
    bar |= 2; // 7
    // 5: 00000000000000000000000000000101
    // 2: 00000000000000000000000000000010
    // -----------------------------------
    // 7: 00000000000000000000000000000111
    

### Examples

### Left operand with another assignment operator

In unusual situations, the assignment operator (e.g.` x += y`) is not identical to the meaning expression (here `x = x + y`). When the left operand of an assignment operator itself contains an assignment operator, the left operand is evaluated only once. For example:

    a[i++] += 5         // i is evaluated only once
    a[i++] = a[i++] + 5 // i is evaluated twice
    



[0]: #Assignment
[1]: #Addition_assignment
[2]: #Subtraction_assignment
[3]: #Multiplication_assignment
[4]: #Division_assignment
[5]: #Remainder_assignment
[6]: #Left_shift_assignment
[7]: #Right_shift_assignment
[8]: #Unsigned_right_shift_assignment
[9]: #Bitwise_AND_assignment
[10]: #Bitwise_XOR_assignment
[11]: #Bitwise_OR_assignment
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition "Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/)."
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Subtraction "Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/)."
[14]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Multiplication "Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/)."
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Division "Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/)."
[16]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder "Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/)."
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Left_shift "Bitwise operators treat their operands as a sequence of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values."
[18]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Right_shift "Bitwise operators treat their operands as a sequence of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values."
[19]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Unsigned_right_shift "Bitwise operators treat their operands as a sequence of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values."
[20]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND "Bitwise operators treat their operands as a sequence of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values."
[21]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR "Bitwise operators treat their operands as a sequence of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values."
[22]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR "Bitwise operators treat their operands as a sequence of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values."