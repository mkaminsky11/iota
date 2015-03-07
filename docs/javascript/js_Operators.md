## Operators

This chapter documents all the JavaScript language operators, expressions and keywords.

### Expressions and operators by category

For an alphabetical listing see the sidebar on the left.

### Primary expressions

Basic keywords and general expressions in JavaScript.

**[`this`][0]**

> The `this` keyword refers to the function's execution context.

**[`function`][1]**

> The `function` keyword defines a function expression.

**__ [`function*`][2]**

> The `function*` keyword defines a generator function expression.

**__ [`yield`][3]**

> Pause and resume a generator function

**__ [`yield*`][4]**

> Delegate to another generator function or iterable object.

**[`[]`][5]**

> Array initializer/literal syntax.

**[`{}`][6]**

> Object initializer/literal syntax.

**[`/ab+c/i`][7]**

> Regular expression literal syntax.

**__ [`[for (x of y) x]`][8]**

> Array comprehensions.

**__ [`(for (x of y) y)`][9]**

> Generator comprehensions.

**[`( )`][10]**

> Grouping operator.

### Left-hand-side expressions

Left values are the destination of an assignment.

**[Property accessors][11]**

> Member operators provide access to a property or method of an object  
> (`object.property` and `object["property"]`).

**[`new`][12]**

> The `new` operator creates an instance of a constructor.

**__ [`super`][13]**

> The `super` keyword calls the parent constructor.

**__ [`...obj`][14]**

> The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.

### Increment and decrement

Postfix/prefix increment and postfix/prefix decrement operators.

**[`A++`][15]**

> Postfix increment operator.

**[`A--`][16]**

> Postfix decrement operator.

**[`++A`][15]**

> Prefix increment operator.

**[`--A`][16]**

> Prefix decrement operator.

### Unary operators

A unary operation is operation with only one operand.

**[`delete`][17]**

> The `delete` operator deletes a property from an object.

**[`void`][18]**

> The `void` operator discards an expression's return value.

**[`typeof`][19]**

> The `typeof` operator determines the type of a given object.

**[`+`][20]**

> The unary plus operator converts its operand to Number type.

**[`-`][21]**

> The unary negation operator converts its operand to Number type and then negates it.

**[`~`][22]**

> Bitwise NOT operator.

**[`!`][23]**

> Logical NOT operator.

### Arithmetic operators

Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value.

**[`+`][24]**

> Addition operator.

**[`-`][25]**

> Subtraction operator.

**[`/`][26]**

> Division operator.

**[`*`][27]**

> Multiplication operator.

**[`%`][28]**

> Remainder operator.

### Relational operators

A comparison operator compares its operands and returns a `Boolean` value based on whether the comparison is true.

**[`in`][29]**

> The `in` operator determines whether an object has a given property.

**[`instanceof`][30]**

> The `instanceof` operator determines whether an object is an instance of another object.

**[`<`][31]**

> Less than operator.

**[`>`][32]**

> Greater than operator.

**[`<=`][33]**

> Less than or equal operator.

**[`>=`][34]**

> Greater than or equal operator.

### Equality operators

The result of evaluating an equality operator is always of type `Boolean` based on whether the comparison is true.

**[`==`][35]**

> Equality operator.

**[`!=`][36]**

> Inequality operator.

**[`===`][37]**

> Identity operator.

**[`!==`][38]**

> Nonidentity operator.

### Bitwise shift operators

Operations to shift all bits of the operand.

**[`<<`][39]**

> Bitwise left shift operator.

**[`>>`][40]**

> Bitwise right shift operator.

**[`>>>`][41]**

> Bitwise unsigned right shift operator.

### Binary bitwise operators

Bitwise operators treat their operands as a set of 32 bits (zeros and ones) and return standard JavaScript numerical values.

**[`&`][42]**

> Bitwise AND.

**[`|`][43]**

> Bitwise OR.

**[`^`][44]**

> Bitwise XOR.

### Binary logical operators

Logical operators are typically used with boolean (logical) values, and when they are, they return a boolean value.

**[`&&`][45]**

> Logical AND.

**[`||`][46]**

> Logical OR.

### Conditional (ternary) operator

**[`(condition ? ifTrue : ifFalse)`][47]**

> The conditional operator returns one of two values based on the logical value of the condition.
> 

### Assignment operators

An assignment operator assigns a value to its left operand based on the value of its right operand.

**[`=`][48]**

> Assignment operator.

**[`*=`][49]**

> Multiplication assignment.

**[`/=`][50]**

> Division assignment.

**[`%=`][51]**

> Remainder assignment.

**[`+=`][52]**

> Addition assignment.

**[`-=`][53]**

> Subtraction assignment

**[`<<=`][54]**

> Left shift assignment.

**[`>>=`][55]**

> Right shift assignment.

**[`>>>=`][56]**

> Unsigned right shift assignment.

**[`&=`][57]**

> Bitwise AND assignment.

**[`^=`][58]**

> Bitwise XOR assignment.

**[`|=`][59]**

> Bitwise OR assignment.

**__ [`[a, b] = [1, 2]`][60]  
__ [`{a, b} = {a:1, b:2}`][60]**

> Destructuring assignment allows you to assign the properties of an array or object to variables using syntax that looks similar to array or object literals.
> 

### Comma operator

**[`,`][61]**

> The comma operator allows multiple expressions to be evaluated in a single statement and returns the result of the last expression.

### Non-standard features

**__ [Legacy generator function][62]**

> The `function` keyword can be used to define a legacy generator function inside an expression. To make the function a legacy generator, the function body should contains at least one [`yield`][3] expression.

**__ [Expression closures][63]**

> The expression closure syntax is a shorthand for writing simple function.



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this "A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/function "The function keyword can be used to define a function inside an expression."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/function* "The function* keyword can be used to define a generator function inside an expression."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/yield "The yield keyword is used to pause and resume a generator function (function* or legacy generator function)."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/yield* "The yield* expression is used to delegate to another generator or iterable object."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array "The JavaScript Array global object is a constructor for arrays, which are high-level, list-like objects."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer "Objects can be initialized using new Object(), Object.create(), or using the literal notation (initializer notation). An object initializer is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({})."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp "The RegExp constructor creates a regular expression object for matching text with a pattern."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Array_comprehensions "The array comprehension syntax is a JavaScript expression which allows you to quickly assemble a new array based on an existing one. Comprehensions exist in many programming languages and the upcoming ECMAScript 7 standard defines array comprehensions for JavaScript. "
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Generator_comprehensions "The generator comprehension syntax is a JavaScript expression which allows you to quickly assemble a new generator function based on an existing iterable object. Comprehensions exist in many programming languages and the upcoming ECMAScript 7 standard defines array comprehensions for JavaScript. "
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Grouping "The grouping operator ( ) controls the precedence of evaluation in expressions."
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Property_accessors "Property accessors provide access to an object's properties by using the dot notation or the bracket notation."
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/new "The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function."
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/super "The documentation about this has not yet been written; please consider contributing!"
[14]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator "The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected."
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment "Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/)."
[16]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement "Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/)."
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/delete "The delete operator removes a property from an object."
[18]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/void "The void operator evaluates the given expression and then returns undefined."
[19]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/typeof "The typeof operator returns a string indicating the type of the unevaluated operand."
[20]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus "Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/)."
[21]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_negation "Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/)."
[22]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT "Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values."
[23]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT "Logical operators are typically used with Boolean (logical) values. When they are, they return a Boolean value. However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value."
[24]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition "Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/)."
[25]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Subtraction "Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/)."
[26]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Division "Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/)."
[27]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Multiplication "Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/)."
[28]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder "Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/)."
[29]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/in "The in operator returns true if the specified property is in the specified object."
[30]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/instanceof "The instanceof operator tests whether an object has in its prototype chain the prototype property of a constructor."
[31]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_operator "JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type. The more commonly used abstract comparison (e.g. ==) converts the operands to the same Type before making the comparison. For relational abstract comparisons (e.g., <=), the operands are first converted to primitives, then to the same type, before comparison."
[32]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_operator "JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type. The more commonly used abstract comparison (e.g. ==) converts the operands to the same Type before making the comparison. For relational abstract comparisons (e.g., <=), the operands are first converted to primitives, then to the same type, before comparison."
[33]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_or_equal_operator "JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type. The more commonly used abstract comparison (e.g. ==) converts the operands to the same Type before making the comparison. For relational abstract comparisons (e.g., <=), the operands are first converted to primitives, then to the same type, before comparison."
[34]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_or_equal_operator "JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type. The more commonly used abstract comparison (e.g. ==) converts the operands to the same Type before making the comparison. For relational abstract comparisons (e.g., <=), the operands are first converted to primitives, then to the same type, before comparison."
[35]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality "JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type. The more commonly used abstract comparison (e.g. ==) converts the operands to the same Type before making the comparison. For relational abstract comparisons (e.g., <=), the operands are first converted to primitives, then to the same type, before comparison."
[36]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Inequality "JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type. The more commonly used abstract comparison (e.g. ==) converts the operands to the same Type before making the comparison. For relational abstract comparisons (e.g., <=), the operands are first converted to primitives, then to the same type, before comparison."
[37]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity "JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type. The more commonly used abstract comparison (e.g. ==) converts the operands to the same Type before making the comparison. For relational abstract comparisons (e.g., <=), the operands are first converted to primitives, then to the same type, before comparison."
[38]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Nonidentity "JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type. The more commonly used abstract comparison (e.g. ==) converts the operands to the same Type before making the comparison. For relational abstract comparisons (e.g., <=), the operands are first converted to primitives, then to the same type, before comparison."
[39]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Left_shift "Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values."
[40]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Right_shift "Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values."
[41]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Unsigned_right_shift "Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values."
[42]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND "Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values."
[43]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR "Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values."
[44]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR "Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values."
[45]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_AND "Logical operators are typically used with Boolean (logical) values. When they are, they return a Boolean value. However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value."
[46]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR "Logical operators are typically used with Boolean (logical) values. When they are, they return a Boolean value. However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value."
[47]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator "The conditional (ternary) operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement."
[48]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Assignment "An assignment operator assigns a value to its left operand based on the value of its right operand."
[49]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Multiplication_assignment "An assignment operator assigns a value to its left operand based on the value of its right operand."
[50]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Division_assignment "An assignment operator assigns a value to its left operand based on the value of its right operand."
[51]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Remainder_assignment "An assignment operator assigns a value to its left operand based on the value of its right operand."
[52]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Addition_assignment "An assignment operator assigns a value to its left operand based on the value of its right operand."
[53]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Subtraction_assignment "An assignment operator assigns a value to its left operand based on the value of its right operand."
[54]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Left_shift_assignment "An assignment operator assigns a value to its left operand based on the value of its right operand."
[55]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Right_shift_assignment "An assignment operator assigns a value to its left operand based on the value of its right operand."
[56]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Unsigned_right_shift_assignment "An assignment operator assigns a value to its left operand based on the value of its right operand."
[57]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_AND_assignment "An assignment operator assigns a value to its left operand based on the value of its right operand."
[58]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_XOR_assignment "An assignment operator assigns a value to its left operand based on the value of its right operand."
[59]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_OR_assignment "An assignment operator assigns a value to its left operand based on the value of its right operand."
[60]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment "The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects using a syntax that mirrors the construction of array and object literals."
[61]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Comma_Operator "The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand."
[62]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Legacy_generator_function "The function keyword can be used to define a legacy generator function inside an expression. To make the function a legacy generator, the function body should contain at least one yield expression."
[63]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Expression_closures "Expression closures are a shorthand function syntax for writing simple functions."