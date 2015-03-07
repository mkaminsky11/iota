## parseFloat

### Summary

The `**parseFloat()**` function parses a string argument and returns a floating point number.

### Syntax

    parseFloat(_string_)

### Parameters

**`string`**

> A string that represents the value you want to parse.

### Description

`parseFloat` is a top-level function and is not associated with any object.

`parseFloat` parses its argument, a string, and returns a floating point number. If it encounters a character other than a sign (+ or -), numeral (0-9), a decimal point, or an exponent, it returns the value up to that point and ignores that character and all succeeding characters. Leading and trailing spaces are allowed.

If the first character cannot be converted to a number, `parseFloat` returns `NaN`.

For arithmetic purposes, the `NaN` value is not a number in any radix. You can call the [`isNaN`][0] function to determine if the result of `parseFloat` is `NaN`. If `NaN` is passed on to arithmetic operations, the operation results will also be `NaN`.

`parseFloat` can also parse and return the value `Infinity`. You can use the [`isFinite`][1] function to determine if the result is a finite number (not `Infinity`, `-Infinity`, or `NaN`).

### Examples

### Example: `parseFloat` returning a number

The following examples all return **3.14**

    parseFloat("3.14");
    parseFloat("314e-2");
    parseFloat("0.0314E+2");
    parseFloat("3.14more non-digit characters");
    

### Example: `parseFloat` returning NaN

The following example returns `NaN`

    parseFloat("FF2");
    

### A stricter parse function

It is sometime useful to have a stricter way to parse float values, regular expressions can help :

    var filterFloat = function (value) {
        if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
          .test(value))
          return Number(value);
      return NaN;
    }
    
    console.log(filterFloat('421'));               // 421
    console.log(filterFloat('-421'));              // -421
    console.log(filterFloat('+421'));              // 421
    console.log(filterFloat('Infinity'));          // Infinity
    console.log(filterFloat('1.61803398875'));     // 1.61803398875
    console.log(filterFloat('421e+0'));            // NaN
    console.log(filterFloat('421hop'));            // NaN
    console.log(filterFloat('hop1.61803398875'));  // NaN
    
    

Note that this code is an example only; it does not accept valid numbers such as `1.` or `.5`.


[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/isNaN "The isNaN() function determines whether a value is NaN or not. Note: coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined in ECMAScript 6, or you can use typeof to determine if the value is Not-A-Number."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/isFinite "The global isFinite() function determines whether the passed value is a finite number. If needed, the parameter is first converted to a number."