## Comparison Operators\#Less than operator

### Summary

JavaScript has both strict and type--converting comparisons. A strict comparison (e.g., `===`) is only true if the operands are of the same type. The more commonly used abstract comparison (e.g. `==`) converts the operands to the same Type before making the comparison. For relational abstract comparisons (e.g., `<=`), the operands are first converted to primitives, then to the same type, before comparison.

Strings are compared based on standard lexicographical ordering, using Unicode values.

Features of comparisons:

* Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
* Two numbers are strictly equal when they are numerically equal (have the same number value). [NaN][0] is not equal to anything, including NaN. Positive and negative zeros are equal to one another.
* Two Boolean operands are strictly equal if both are `true` or both are `false`.
* Two distinct objects are never equal for either strict or abstract comparisons.
* An expression comparing Objects is only true if the operands reference the same Object.
* Null and Undefined Types are strictly equal to themselves and abstractly equal to each other.

### Equality operators

### Equality (==)

The equality operator converts the operands if they are **not of the same type**, then applies strict comparison. If **both operands are objects**, then JavaScript compares internal references which are equal when operands refer to the same object in memory.

#### Syntax

    x == y
    

#### Examples

     1   ==  1     // true
    "1"  ==  1     // true
     1   == '1'    // true
     0   == false  // true
    

### Inequality (!=)

The inequality operator returns true if the operands are not equal. If the two operands are **not of the same type**, JavaScript attempts to convert the operands to an appropriate type for the comparison. If **both operands are objects**, then JavaScript compares internal references which are not equal when operands refer to different objects in memory.

#### Syntax

    x != y

#### Examples

    1 !=   2     // true
    1 !=  "1"    // false
    1 !=  '1'    // false
    1 !=  true   // false
    0 !=  false  // false
    

### Identity / strict equality (===)

The identity operator returns true if the operands are strictly equal (see above) **with no type conversion**.

#### Syntax

    x === y

#### Examples

    3 === 3   // true
    3 === '3' // false

### Non-identity / strict not equal (!==)

The non-identity operator returns true if the operands **are not equal and/or not of the same type**.

#### Syntax

    x !== y

#### Examples

    3 !== '3' // true
    4 !== 3   // true
    

### Relational operators

### Greater than operator (\>)

The greater than operator returns true if the left operand is greater than the right operand.

#### Syntax

    x > y

#### Examples

    4 > 3 // true
    

### Greater than or equal operator (\>=)

The greater than or equal operator returns true if the left operand is greater than or equal to the right operand.

#### Syntax

     x >= y

#### Examples

    4 >= 3 // true
    3 >= 3 // true
    

### Less than operator (<)

The less than operator returns true if the left operand is less than the right operand.

#### Syntax

     x < y

#### Examples

    3 < 4 // true
    

### Less than or equal operator (<=)

The less than or equal operator returns true if the left operand is less than or equal to the right operand.

#### Syntax

     x <= y

#### Examples

    3 <= 4 // true
    

### Using the Equality Operators

The standard equality operators (`==` and `!=`) use the [Abstract Equality Comparison Algorithm][1] to compare two operands. If the operands are of different Types, it will attempt to convert them to the same Type before making the comparison, e.g., in the expression `5 == '5'`, the string on the right is converted to Number before the comparison is made.

The strict equality operators (`===` and `!==`) use the Strict Equality Comparison Algorithm and are intended for performing equality comparisons on operands of the same Type. If the operands are of different Types, the result is always `false` so `5 !== '5'`.

Use strict equality operators if the operands must be of a specific Type as well as value or if the exact Type of the operands is important. Otherwise, use the standard equality operators, which allow you to compare the identity of two operands even if they are not of the same Type.

When Type conversion is involved in the comparison (i.e., non--strict comparison), JavaScript converts Type String, Number, Boolean, or Object operands as follows:

* When comparing a number and a string, the string is converted to a number value. JavaScript attempts to convert the string numeric literal to a `Number` type value. First, a mathematical value is derived from the string numeric literal. Next, this value is rounded to nearest `Number` type value.
* If one of the operands is `Boolean`, the Boolean operand is converted to 1 if it is `true` and +0 if it is `false`.
* If an object is compared with a number or string, JavaScript attempts to return the default value for the object. Operators attempt to convert the object to a primitive value, a `String` or `Number` value, using the `valueOf` and `toString` methods of the objects. If this attempt to convert the object fails, a runtime error is generated.
* Note that an object is converted into a primitive if, and only if, its comparand is a primitive. If both operands are objects, they're compared as objects, and the equality test is true only if both refer the same object.

**Note:** String Objects are Type Object, not String! String objects are rarely used, so the following results might be surprising:

    // true as both operands are Type String (i.e. string primitives):
    'foo' === 'foo'
    
    var a = new String('foo');
    var b = new String('foo');
    
    // false as a and b are Type Object and reference different objects
    a == b 
    
    // false as a and b are Type Object and reference different objects
    a === b 
    
    // true as a and 'foo' are of different type and, the Object (a) 
    // is converted to String 'foo' before comparison
    a == 'foo' 



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NaN "NaN"
[1]: http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3