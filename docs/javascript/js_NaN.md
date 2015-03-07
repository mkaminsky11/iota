## NaN

### Summary

The global `**NaN**` property is a value representing Not-A-Number.

Property attributes of `NaN`

Writable
no

Enumerable
no

Configurable
no

### Syntax

    NaN

### Description

`NaN` is a property of the _global object_.

The initial value of `NaN` is Not-A-Number --- the same as the value of `Number.NaN`. In modern browsers, `NaN` is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it.

It is rather rare to use `NaN` in a program. It is the returned value when Math functions fail (`Math.sqrt(-1)`) or when a function trying to parse a number fails (`parseInt("blabla")`).

### Testing against `NaN`

Equality operator (`==` and `===`) cannot be used to test a value against `NaN`. Use [`Number.isNaN()`][0] or [`isNaN()`][1] instead.

    NaN === NaN;        // false
    Number.NaN === NaN; // false
    isNaN(NaN);         // true
    isNaN(Number.NaN);  // true
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN "The Number.isNaN() method determines whether the passed value is NaN. More robust version of the original global isNaN()."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/isNaN "The isNaN() function determines whether a value is NaN or not. Note: coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined in ECMAScript 6, or you can use typeof to determine if the value is Not-A-Number."