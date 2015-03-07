## Bitwise Operators\#Left shift

### Summary

**Bitwise operators** treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal `[numbers][0]`. For example, the decimal number nine has a binary representation of 1001\. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.

The following table summarizes JavaScript's bitwise operators:
Operator
Usage
Description

[Bitwise AND][1]
`a & b`
Returns a one in each bit position for which the corresponding bits of both operands are ones.

[Bitwise OR][2]
`a | b`
Returns a one in each bit position for which the corresponding bits of either or both operands are ones.

[Bitwise XOR][3]
`a ^ b`
Returns a one in each bit position for which the corresponding bits of either but not both operands are ones.

[Bitwise NOT][4]
`~ a`
Inverts the bits of its operand.

[Left shift][5]
`a << b`
Shifts `a` in binary representation `b` (< 32) bits to the left, shifting in zeroes from the right.

[Sign-propagating right shift][6]
`a >> b`
Shifts `a` in binary representation `b` (< 32) bits to the right, discarding bits shifted off.

[Zero-fill right shift][7]
`a >>> b`
Shifts `a` in binary representation `b` (< 32) bits to the right, discarding bits shifted off, and shifting in zeroes from the left.

### Signed 32-bit integers

The operands of all bitwise operators are converted to signed 32-bit integers in two's complement format. Two's complement format means that a number's negative counterpart (e.g. 5 vs. -5) is all the number's bits inverted (bitwise NOT of the number, a.k.a. ones' complement of the number) plus one. For example, the following encodes the integer 314:

    00000000000000000000000100111010
    

The following encodes `~314`, i.e. the ones' complement of `314`:

    11111111111111111111111011000101
    

Finally, the following encodes `-314,` i.e. the two's complement of `314`:

    11111111111111111111111011000110
    

The two's complement guarantees that the left-most bit is 0 when the number is positive and 1 when the number is negative. Thus, it is called the _sign bit_.

The number `0` is the integer that is composed completely of 0 bits.

    0 (base 10) = 00000000000000000000000000000000 (base 2)
    

The number `-1` is the integer that is composed completely of 1 bits.

    -1 (base 10) = 11111111111111111111111111111111 (base 2)
    

The number `-2147483648` (hexadecimal representation: `-0x80000000`) is the integer that is composed completely of 0 bits except the first (left-most) one.

    -2147483648 (base 10) = 10000000000000000000000000000000 (base 2)
    

The number `2147483647` (hexadecimal representation: `0x7fffffff`) is the integer that is composed completely of 1 bits except the first (left-most) one.

    2147483647 (base 10) = 01111111111111111111111111111111 (base 2)
    

The numbers `-2147483648` and `2147483647` are the minimum and the maximum integers representable through a 32bit signed number.

### Bitwise logical operators

Conceptually, the bitwise logical operators work as follows:

* The operands are converted to 32-bit integers and expressed by a series of bits (zeroes and ones).
* Each bit in the first operand is paired with the corresponding bit in the second operand: first bit to first bit, second bit to second bit, and so on.
* The operator is applied to each pair of bits, and the result is constructed bitwise.

### & (Bitwise AND)

Performs the AND operation on each pair of bits. `a` AND `b` yields 1 only if both `a` and `b` are 1\. The truth table for the AND operation is:
a
b
a AND b

0
0
0

0
1
0

1
0
0

1
1
1

         9 (base 10) = 00000000000000000000000000001001 (base 2)
        14 (base 10) = 00000000000000000000000000001110 (base 2)
                       --------------------------------
    14 & 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)
    

Bitwise ANDing any number x with 0 yields 0\. Bitwise ANDing any number x with -1 yields x.

### | (Bitwise OR)

Performs the OR operation on each pair of bits. `a` OR `b` yields 1 if either `a` or `b` is 1\. The truth table for the OR operation is:
a
b
a OR b

0
0
0

0
1
1

1
0
1

1
1
1

         9 (base 10) = 00000000000000000000000000001001 (base 2)
        14 (base 10) = 00000000000000000000000000001110 (base 2)
                       --------------------------------
    14 | 9 (base 10) = 00000000000000000000000000001111 (base 2) = 15 (base 10)
    

Bitwise ORing any number x with 0 yields x. Bitwise ORing any number x with -1 yields -1\.

### ^ (Bitwise XOR)

Performs the XOR operation on each pair of bits. `a` XOR `b` yields 1 if `a` and `b` are different. The truth table for the XOR operation is:
a
b
a XOR b

0
0
0

0
1
1

1
0
1

1
1
0

         9 (base 10) = 00000000000000000000000000001001 (base 2)
        14 (base 10) = 00000000000000000000000000001110 (base 2)
                       --------------------------------
    14 ^ 9 (base 10) = 00000000000000000000000000000111 (base 2) = 7 (base 10)
    

Bitwise XORing any number x with 0 yields x. Bitwise XORing any number x with -1 yields ~x.

### ~ (Bitwise NOT)

Performs the NOT operator on each bit. NOT `a` yields the inverted value (a.k.a. one's complement) of `a`. The truth table for the NOT operation is:
a
NOT a

0
1

1
0

     9 (base 10) = 00000000000000000000000000001001 (base 2)
                   --------------------------------
    ~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
    

Bitwise NOTing any number x yields -(x + 1). For example, ~5 yields -6\.

Example with indexOf:

    var str = 'rawr';
    var searchFor = 'a';
    
    // this is alternative way of typing if (-1*str.indexOf('a') <= -1)
    if (~str.indexOf(searchFor)) {
      // searchFor is in the string
    } else {
      // searchFor is not in the string
    }
    
    // here are the values returned by (~str.indexOf(searchFor))
    // r == -1
    // a == -2
    // w == -3
    

### Bitwise shift operators

The bitwise shift operators take two operands: the first is a quantity to be shifted, and the second specifies the number of bit positions by which the first operand is to be shifted. The direction of the shift operation is controlled by the operator used.

Shift operators convert their operands to 32-bit integers in big-endian order and return a result of the same type as the left operand. The right operand should be less than 32, but if not only the low five bits will be used.

### << (Left shift)

This operator shifts the first operand the specified number of bits to the left. Excess bits shifted off to the left are discarded. Zero bits are shifted in from the right.

For example, `9 << 2` yields 36:

         9 (base 10): 00000000000000000000000000001001 (base 2)
                      --------------------------------
    9 << 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)
    

Bitwise shifting any number **x** to the left by **y** bits yields **x \* 2^y**.

### \>\> (Sign-propagating right shift)

This operator shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Copies of the leftmost bit are shifted in from the left. Since the new leftmost bit has the same value as the previous leftmost bit, the sign bit (the leftmost bit) does not change. Hence the name "sign-propagating".

For example, `9 >> 2` yields 2:

         9 (base 10): 00000000000000000000000000001001 (base 2)
                      --------------------------------
    9 >> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
    

Likewise, `-9 >> 2` yields -3, because the sign is preserved:

         -9 (base 10): 11111111111111111111111111110111 (base 2)
                       --------------------------------
    -9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
    

### \>\>\> (Zero-fill right shift)

This operator shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Zero bits are shifted in from the left. The sign bit becomes 0, so the result is always non-negative.

For non-negative numbers, zero-fill right shift and sign-propagating right shift yield the same result. For example, `9 >>> 2` yields 2, the same as `9 >> 2`:

          9 (base 10): 00000000000000000000000000001001 (base 2)
                       --------------------------------
    9 >>> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
    

However, this is not the case for negative numbers. For example, `-9 >>> 2` yields 1073741821, which is different than `-9 >> 2` (which yields -3):

          -9 (base 10): 11111111111111111111111111110111 (base 2)
                        --------------------------------
    -9 >>> 2 (base 10): 00111111111111111111111111111101 (base 2) = 1073741821 (base 10)
    

### Examples

### Example: Flags and bitmasks

The bitwise logical operators are often used to create, manipulate, and read sequences of _flags_, which are like binary variables. Variables could be used instead of these sequences, but binary flags take much less memory (by a factor of 32).

Suppose there are 4 flags:

* flag A: we have an ant problem
* flag B: we own a bat
* flag C: we own a cat
* flag D: we own a duck

These flags are represented by a sequence of bits: DCBA. When a flag is _set_, it has a value of 1\. When a flag is _cleared_, it has a value of 0\. Suppose a variable `flags` has the binary value 0101:

    var flags = 5;   // binary 0101
    

This value indicates:

* flag A is true (we have an ant problem);
* flag B is false (we don't own a bat);
* flag C is true (we own a cat);
* flag D is false (we don't own a duck);

Since bitwise operators are 32-bit, 0101 is actually 00000000000000000000000000000101, but the preceding zeroes can be neglected since they contain no meaningful information.

A _bitmask_ is a sequence of bits that can manipulate and/or read flags. Typically, a "primitive" bitmask for each flag is defined:

    var FLAG_A = 1; // 0001
    var FLAG_B = 2; // 0010
    var FLAG_C = 4; // 0100
    var FLAG_D = 8; // 1000
    

New bitmasks can be created by using the bitwise logical operators on these primitive bitmasks. For example, the bitmask 1011 can be created by ORing FLAG\_A, FLAG\_B, and FLAG\_D:

    var mask = FLAG_A | FLAG_B | FLAG_D; // 0001 | 0010 | 1000 => 1011
    

Individual flag values can be extracted by ANDing them with a bitmask, where each bit with the value of one will "extract" the corresponding flag. The bitmask _masks_ out the non-relevant flags by ANDing with zeroes (hence the term "bitmask"). For example, the bitmask 0101 can be used to see if flag C is set:

    // if we own a cat
    if (flags & FLAG_C) { // 0101 & 0100 => 0100 => true
       // do stuff
    }
    

A bitmask with multiple set flags acts like an "either/or". For example, the following two are equivalent:

    // if we own a bat or we own a cat
    // (0101 & 0010) || (0101 & 0100) => 0000 || 0100 => true
    if ((flags & FLAG_B) || (flags & FLAG_C)) {
       // do stuff
    }
    

    // if we own a bat or cat
    var mask = FLAG_B | FLAG_C; // 0010 | 0100 => 0110
    if (flags & mask) { // 0101 & 0110 => 0100 => true
       // do stuff
    }
    

Flags can be set by ORing them with a bitmask, where each bit with the value one will set the corresponding flag, if that flag isn't already set. For example, the bitmask 1100 can be used to set flags C and D:

    // yes, we own a cat and a duck
    var mask = FLAG_C | FLAG_D; // 0100 | 1000 => 1100
    flags |= mask;   // 0101 | 1100 => 1101
    

Flags can be cleared by ANDing them with a bitmask, where each bit with the value zero will clear the corresponding flag, if it isn't already cleared. This bitmask can be created by NOTing primitive bitmasks. For example, the bitmask 1010 can be used to clear flags A and C:

    // no, we don't have an ant problem or own a cat
    var mask = ~(FLAG_A | FLAG_C); // ~0101 => 1010
    flags &= mask;   // 1101 & 1010 => 1000
    

The mask could also have been created with `~FLAG_A & ~FLAG_C` (De Morgan's law):

    // no, we don't have an ant problem, and we don't own a cat
    var mask = ~FLAG_A & ~FLAG_C;
    flags &= mask;   // 1101 & 1010 => 1000
    

Flags can be toggled by XORing them with a bitmask, where each bit with the value one will toggle the corresponding flag. For example, the bitmask 0110 can be used to toggle flags B and C:

    // if we didn't have a bat, we have one now, 
    // and if we did have one, bye-bye bat
    // same thing for cats
    var mask = FLAG_B | FLAG_C;
    flags = flags ^ mask;   // 1100 ^ 0110 => 1010
    

Finally, the flags can all be flipped with the NOT operator:

    // entering parallel universe...
    flags = ~flags;    // ~1010 => 0101
    

### Conversion snippets

Convert a binary `[String][8]` to a decimal `[Number][0]`:

    var sBinString = "1011";
    var nMyNumber = parseInt(sBinString, 2);
    alert(nMyNumber); // prints 11, i.e. 1011
    

Convert a decimal `[Number][0]` to a binary `[String][8]`:

    var nMyNumber = 11;
    var sBinString = nMyNumber.toString(2);
    alert(sBinString); // prints 1011, i.e. 11
    

### Automatize the creation of a mask

If you have to create many masks from some `[Boolean][9]` values, you can automatize the process:

    function createMask () {
      var nMask = 0, nFlag = 0, nLen = arguments.length > 32 ? 32 : arguments.length;
      for (nFlag; nFlag < nLen; nMask |= arguments[nFlag] << nFlag++);
      return nMask;
    }
    var mask1 = createMask(true, true, false, true); // 11, i.e.: 1011
    var mask2 = createMask(false, false, true); // 4, i.e.: 0100
    var mask3 = createMask(true); // 1, i.e.: 0001
    // etc.
    
    alert(mask1); // prints 11, i.e.: 1011
    

### Reverse algorithm: an array of booleans from a mask

If you want to create an `[Array][10]` of `[Booleans][9]` from a mask you can use this code:

    function arrayFromMask (nMask) {
      // nMask must be between -2147483648 and 2147483647
      if (nMask > 0x7fffffff || nMask < -0x80000000) { 
        throw new TypeError("arrayFromMask - out of range"); 
      }
      for (var nShifted = nMask, aFromMask = []; nShifted; 
           aFromMask.push(Boolean(nShifted & 1)), nShifted >>>= 1);
      return aFromMask;
    }
    
    var array1 = arrayFromMask(11);
    var array2 = arrayFromMask(4);
    var array3 = arrayFromMask(1);
    
    alert("[" + array1.join(", ") + "]");
    // prints "[true, true, false, true]", i.e.: 11, i.e.: 1011
    

You can test both algorithms at the same time...

    var nTest = 19; // our custom mask
    var nResult = createMask.apply(this, arrayFromMask(nTest));
    
    alert(nResult); // 19
    

For didactic purpose only (since there is the `[Number.toString(2)][11]` method), we show how it is possible to modify the `arrayFromMask` algorithm in order to create a `[String][8]` containing the binary representation of a `[Number][0]`, rather than an `[Array][10]` of `[Booleans][9]`:

    function createBinaryString (nMask) {
      // nMask must be between -2147483648 and 2147483647
      for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
           nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
      return sMask;
    }
    
    var string1 = createBinaryString(11);
    var string2 = createBinaryString(4);
    var string3 = createBinaryString(1);
    
    alert(string1);
    // prints 00000000000000000000000000001011, i.e. 11
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number "https://developer.mozilla.org/en/docs/JavaScript/Reference/Global_Objects/Number"
[1]: #Bitwise_AND
[2]: #Bitwise_OR
[3]: #Bitwise_XOR
[4]: #Bitwise_NOT
[5]: #Left_shift
[6]: #Right_shift
[7]: #Unsigned_right_shift
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String "https://developer.mozilla.org/en/docs/JavaScript/Reference/Global_Objects/String"
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Boolean "https://developer.mozilla.org/en/docs/JavaScript/Reference/Global_Objects/Boolean"
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array "https://developer.mozilla.org/en/docs/JavaScript/Reference/Global_Objects/Array"
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toString "https://developer.mozilla.org/en/docs/JavaScript/Reference/Global_Objects/Number/toString"