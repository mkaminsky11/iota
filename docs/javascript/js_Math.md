## Math

### Summary

**`Math`** is a built-in object that has properties and methods for mathematical constants and functions. Not a function object.

### Description

Unlike the other global objects, `Math` is not a constructor. All properties and methods of `Math` are static. You refer to the constant pi as `Math.PI` and you call the sine function as `Math.sin(x)`, where `x` is the method's argument. Constants are defined with the full precision of real numbers in JavaScript.

### Properties

**[`Math.E`][0]**

> Euler's constant and the base of natural logarithms, approximately 2.718\.

**[`Math.LN2`][1]**

> Natural logarithm of 2, approximately 0.693\.

**[`Math.LN10`][2]**

> Natural logarithm of 10, approximately 2.303\.

**[`Math.LOG2E`][3]**

> Base 2 logarithm of E, approximately 1.443\.

**[`Math.LOG10E`][4]**

> Base 10 logarithm of E, approximately 0.434\.

**[`Math.PI`][5]**

> Ratio of the circumference of a circle to its diameter, approximately 3.14159\.

**[`Math.SQRT1_2`][6]**

> Square root of 1/2; equivalently, 1 over the square root of 2, approximately 0.707\.

**[`Math.SQRT2`][7]**

> Square root of 2, approximately 1.414\.

### Methods

Note that the trigonometric functions (`sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`, `atan2()`) expect or return angles in radians. To convert radians to degrees, divide by `(Math.PI / 180)`, and multiply by this to convert the other way.

Note a lot of the math functions have a precision that's implementation-dependent. This means that different browsers can give a different result, and even the same JS engine on a different OS or architecture can give different results.

**[`Math.abs(x)`][8]**

> Returns the absolute value of a number.

**[`Math.acos(x)`][9]**

> Returns the arccosine of a number.

**[`Math.acosh(x)`][10] __**

> Returns the hyperbolic arccosine of a number.

**[`Math.asin(x)`][11]**

> Returns the arcsine of a number.

**[`Math.asinh(x)`][12] __**

> Returns the hyperbolic arcsine of a number.

**[`Math.atan(x)`][13]**

> Returns the arctangent of a number.

**[`Math.atanh(x)`][14] __**

> Returns the hyperbolic arctangent of a number.

**[`Math.atan2(y, x)`][15]**

> Returns the arctangent of the quotient of its arguments.

**[`Math.cbrt(x)`][16] __**

> Returns the cube root of a number.

**[`Math.ceil(x)`][17]**

> Returns the smallest integer greater than or equal to a number.

**[`Math.clz32(x)`][18] __**

> Returns the number of leading zeroes of a 32-bit integer.

**[`Math.cos(x)`][19]**

> Returns the cosine of a number.

**[`Math.cosh(x)`][20] __**

> Returns the hyperbolic cosine of a number.

**[`Math.exp(x)`][21]**

> Returns Ex, where _x_ is the argument, and E is Euler's constant (2.718...), the base of the natural logarithm.

**[`Math.expm1(x)`][22] __**

> Returns subtracting 1 from `exp(x)`.

**[`Math.floor(x)`][23]**

> Returns the largest integer less than or equal to a number.

**[`Math.fround(x)`][24] __**

> Returns the nearest [single precision][25] float representation of a number.

**[`Math.hypot([x[, y[, …]]])`][26] __**

> Returns the square root of the sum of squares of its arguments.

**[`Math.imul(x)`][27] __**

> Returns the result of a 32-bit integer multiplication.

**[`Math.log(x)`][28]**

> Returns the natural logarithm (loge, also ln) of a number.

**[`Math.log1p(x)`][29] __**

> Returns the natural logarithm of `1 + x` (loge, also ln) of a number.

**[`Math.log10(x)`][30] __**

> Returns the base 10 logarithm of a number.

**[`Math.log2(x)`][31] __**

> Returns the base 2 logarithm of a number.

**[`Math.max([x[, y[, …]]])`][32]**

> Returns the largest of zero or more numbers.

**[`Math.min([x[, y[, …]]])`][33]**

> Returns the smallest of zero or more numbers.

**[`Math.pow(x, y)`][34]**

> Returns base to the exponent power, that is, `baseexponent`.

**[`Math.random()`][35]**

> Returns a pseudo-random number between 0 and 1\.

**[`Math.round(x)`][36]**

> Returns the value of a number rounded to the nearest integer.

**[`Math.sign(x)`][37] __**

> Returns the sign of the x, indicating whether x is positive, negative or zero.

**[`Math.sin(x)`][38]**

> Returns the sine of a number.

**[`Math.sinh(x)`][39] __**

> Returns the hyperbolic sine of a number.

**[`Math.sqrt(x)`][40]**

> Returns the positive square root of a number.

**[`Math.tan(x)`][41]**

> Returns the tangent of a number.

**[`Math.tanh(x)`][42] __**

> Returns the hyperbolic tangent of a number.

**`Math.toSource()` __**

> Returns the string `"Math"`.

**[`Math.trunc(x)`][43] __**

> Returns the integral part of the number x, removing any fractional digits.



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/E "The Math.E property represents the base of natural logarithms, e, approximately 2.718."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/LN2 "The Math.LN2 property represents the natural logarithm of 2, approximately 0.693:"
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/LN10 "The Math.LN10 property represents the natural logarithm of 10, approximately 2.302:"
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG2E "The Math.LOG2E property represents the base 2 logarithm of e, approximately 1.442:"
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG10E "The Math.LOG10E property represents the base 10 logarithm of e, approximately 0.434:"
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/PI "The Math.PI property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159:"
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2 "The Math.SQRT1_2 property represents the square root of 1/2 which is approximately 0.707:"
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/SQRT2 "The Math.SQRT2 property represents the square root of 2, approximately 1.414:"
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/abs "The Math.abs() function returns the absolute value of a number, that is"
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/acos "The Math.acos() function returns the arccosine (in radians) of a number, that is"
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh "The Math.acosh() function returns the hyperbolic arc-cosine of a number"
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/asin "The Math.asin() function returns the arcsine (in radians) of a number, that is"
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh "The Math.asinh() function returns the hyperbolic arcsine of a number, that is"
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/atan "The Math.atan() function returns the arctangent (in radians) of a number, that is"
[14]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh "The Math.atanh() function returns the hyperbolic arctangent of a number, that is"
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2 "The Math.atan2() function returns the arctangent of the quotient of its arguments."
[16]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt "The Math.cbrt() function returns the cube root of a number, that is"
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil "The Math.ceil(x) function returns the smallest integer greater than or equal to a number "x"."
[18]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32 "The Math.clz32() function returns the number of leading zero bits in the 32-bit binary representation of a number."
[19]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/cos "The Math.cos() function returns the cosine of a number."
[20]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh "The Math.cosh() function returns the hyperbolic cosine of a number, that can be expressed using the constant e:"
[21]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/exp "The Math.exp() function returns ex, where x is the argument, and e is Euler's constant, the base of the natural logarithms."
[22]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/expm1 "The Math.expm1() function returns ex - 1, where x is the argument, and e the base of the natural logarithms."
[23]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/floor "The Math.floor(x) function returns the largest integer less than or equal to a number "x"."
[24]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/fround "The Math.fround() function returns the nearest single precision float representation of a number."
[25]: http://en.wikipedia.org/wiki/Single-precision_floating-point_format "link to the wikipedia page on single precision"
[26]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot "The Math.hypot() function returns the square root of the sum of squares of its arguments, that is"
[27]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/imul "The Math.imul() function returns the result of the C-like 32-bit multiplication of the two parameters."
[28]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/log "The Math.log() function returns the natural logarithm (base e) of a number, that is"
[29]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p "The Math.log1p() function returns the natural logarithm (base e) of 1 + a number, that is"
[30]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/log10 "The Math.log10() function returns the base 10 logarithm of a number, that is"
[31]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/log2 "The Math.log2() function returns the base 2 logarithm of a number, that is"
[32]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/max "The Math.max() function returns the largest of zero or more numbers."
[33]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/min "The Math.min() function returns the smallest of zero or more numbers."
[34]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/pow "The Math.pow() function returns the base to the exponent Power, that is, baseexponent."
[35]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/random "The Math.random() function returns a floating-point, pseudo-random number in the range [0, 1) that is, from 0 (inclusive) up to but not including 1 (exclusive), which you can then scale to your desired range.  The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user."
[36]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/round "The Math.round() function returns the value of a number rounded to the nearest integer."
[37]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/sign "The Math.sign() function returns the sign of a number, indicating whether the number is positive, negative or zero."
[38]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/sin "The Math.sin() function returns the sine of a number."
[39]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh "The Math.sinh() function returns the hyperbolic sine of a number, that can be expressed using the constant e:"
[40]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt "The Math.sqrt() function returns the square root of a number, that is"
[41]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/tan "The Math.tan() function returns the tangent of a number."
[42]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh "The Math.tanh() function returns the hyperbolic tangent of a number, that is"
[43]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc "The Math.trunc() method returns the integral part of a number by removing any fractional digits."