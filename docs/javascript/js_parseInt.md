## parseInt

### Summary

The `**parseInt()**` function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

### Syntax

    parseInt(_string_, _radix_);

### Parameters

**`string`**

> The value to parse. If `string` is not a string, then it is converted to one. Leading whitespace in the string is ignored.

**`radix`**

> An integer between 2 and 36 that represents the _radix_ (the base in mathematical numeral systems) of the above mentioned string. Specify `10` for the decimal numeral system commonly used by humans. **Always specify this parameter** to eliminate reader confusion and to guarantee predictable behavior. Different implementations produce different results when a radix is not specified.

### Description

The `parseInt` function converts its first argument to a string, parses it, and returns an integer or `NaN`. If not `NaN`, the returned value will be the decimal integer representation of the first argument taken as a number in the specified _radix_ (base). For example, a _radix_ of 10 indicates to convert from a decimal number, 8 octal, 16 hexadecimal, and so on. For radices above `10`, the letters of the alphabet indicate numerals greater than `9`. For example, for hexadecimal numbers (base 16), `A` through `F` are used.

If `parseInt` encounters a character that is not a numeral in the specified radix, it ignores it and all succeeding characters and returns the integer value parsed up to that point. `parseInt` truncates numbers to integer values. Leading and trailing spaces are allowed.

If _radix_ is `undefined` or 0 (or absent), JavaScript assumes the following:

* If the input `string` begins with "0x" or "0X", _radix_ is 16 (hexadecimal) and the remainder of the string is parsed.
* If the input `string` begins with "0", _radix_ is eight (octal) or 10 (decimal).  Exactly which radix is chosen is implementation-dependent.  ECMAScript 5 specifies that 10 (decimal) is used, but not all browsers support this yet.  For this reason **always specify a radix when using `parseInt`**.
* If the input `string` begins with any other value, the radix is 10 (decimal).

If the first character cannot be converted to a number, `parseInt` returns `NaN`.

For arithmetic purposes, the `NaN` value is not a number in any radix. You can call the [`isNaN`][0] function to determine if the result of `parseInt` is `NaN`. If `NaN` is passed on to arithmetic operations, the operation results will also be `NaN`.

To convert number to its string literal in a particular radix use `intValue.toString(radix)`.

### Examples

### Example: Using `parseInt`

The following examples all return **`15`**:

    parseInt(" 0xF", 16);
    parseInt(" F", 16);
    parseInt("17", 8);
    parseInt(021, 8);
    parseInt("015", 10);
    parseInt(15.99, 10);
    parseInt("FXX123", 16);
    parseInt("1111", 2);
    parseInt("15*3", 10);
    parseInt("15e2", 10);
    parseInt("15px", 10);
    parseInt("12", 13);
    

The following examples all return **`NaN`**:

    parseInt("Hello", 8); // Not a number at all
    parseInt("546", 2);   // Digits are not valid for binary representations
    

The following examples all return **`-15`**:

    parseInt("-F", 16);
    parseInt("-0F", 16);
    parseInt("-0XF", 16);
    parseInt(-15.1, 10)
    parseInt(" -17", 8);
    parseInt(" -15", 10);
    parseInt("-1111", 2);
    parseInt("-15e1", 10);
    parseInt("-12", 13);
    

The following example returns **`224`**:

    parseInt("0e0", 16);
    

### Octal interpretations with no radix

Although discouraged by ECMAScript 3 and forbidden by ECMAScript 5, many implementations interpret a numeric string beginning with a leading `0` as octal. The following may have an octal result, or it may have a decimal result.  **Always specify a radix to avoid this unreliable behavior.**

    parseInt("0e0"); // 0
    parseInt("08"); // 0, '8' is not an octal digit.
    

### ECMAScript 5 removes octal interpretation

The ECMAScript 5 specification of the function `parseInt` no longer allows implementations to treat Strings beginning with a `0` character as octal values. ECMAScript 5 states:

The `parseInt` function produces an integer value dictated by interpretation of the contents of the string argument according to the specified radix. Leading white space in string is ignored. If radix is undefined or `0`, it is assumed to be `10` except when the number begins with the character pairs `0x` or `0X`, in which case a radix of 16 is assumed. If radix is `16`, number may also optionally begin with the character pairs `0x` or `0X`.

This differs from ECMAScript 3, which discouraged but allowed octal interpretation.

Many implementations have not adopted this behavior as of 2013, and because older browsers must be supported, **always specify a radix**.

### A stricter parse function

It is sometimes useful to have a stricter way to parse int values. Regular expressions can help:

    filterInt = function (value) {
      if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
        return Number(value);
      return NaN;
    }
    
    console.log(filterInt('421'));               // 421
    console.log(filterInt('-421'));              // -421
    console.log(filterInt('+421'));              // 421
    console.log(filterInt('Infinity'));          // Infinity
    console.log(filterInt('421e+0'));            // NaN
    console.log(filterInt('421hop'));            // NaN
    console.log(filterInt('hop1.61803398875'));  // NaN
    console.log(filterInt('1.61803398875'));     // NaN
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/isNaN "The isNaN() function determines whether a value is NaN or not. Note: coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined in ECMAScript 6, or you can use typeof to determine if the value is Not-A-Number."