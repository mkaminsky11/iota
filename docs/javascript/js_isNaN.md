## isNaN

### Summary

The `**isNaN()**` function determines whether a value is [`NaN`][0] or not. Note: coercion inside the `isNaN` function has [interesting][1] rules; you may alternatively want to use [`Number.isNaN()`][2], as defined in ECMAScript 6, or you can use `[typeof][3]` to determine if the value is Not-A-Number.

### Syntax

    isNaN(_testValue_)

### Parameters

**`testValue`**

> The value to be tested.

### Description

### The necessity of an `isNaN` function

Unlike all other possible values in JavaScript, it is not possible to rely on the equality operators (== and ===) to determine whether a value _is_ [`NaN`][0] or not, because both `NaN == NaN` and `NaN === NaN` evaluate to `false`. Hence, the necessity of an `isNaN` function.

### Origin of `NaN` values

`NaN` values are generated when arithmetic operations result in _undefined_ or _unrepresentable_ values. Such values do not necessarily represent overflow conditions. A `NaN` also results from attempted coercion to numeric values of non-numeric values for which no primitive numeric value is available.

For example, dividing zero by zero results in a `NaN` --- but dividing other numbers by zero does not.

### Confusing special-case behavior

Since the very earliest versions of the `isNaN` function specification, its behavior for non-numeric arguments has been confusing. When the argument to the `isNaN` function is not of type [Number][4], the value is first coerced to a Number. The resulting value is then tested to determine whether it is [`NaN`][0]. Thus for non-numbers that when coerced to numeric type result in a valid non-NaN numeric value (notably the empty string and boolean primitives, which when coerced give numeric values zero or one), the "false" returned value may be unexpected; the empty string, for example, is surely "not a number." The confusion stems from the fact that the term, "not a number", has a specific meaning for numbers represented as IEEE-754 floating-point values. The function should be interpreted as answering the question, "is this value, when coerced to a numeric value, an IEEE-754 'Not A Number' value?"

The next version of ECMAScript (ES6) contains the [`Number.isNaN()`][2] function. `Number.isNaN(x)` will be a reliable way to test whether `x` is `NaN` or not. Even with `Number.isNaN`, however, the meaning of `NaN` remains the precise numeric meaning, and not simply, "not a number". Alternatively, in absense of `Number.isNaN`, the expression `(x != x)` is a more reliable way to test whether variable `x` is `NaN` or not, as the result is not subject to the false positives that make `isNaN` unreliable.

### Examples

    isNaN(NaN);       // true
    isNaN(undefined); // true
    isNaN({});        // true
    
    isNaN(true);      // false
    isNaN(null);      // false
    isNaN(37);        // false
    
    // strings
    isNaN("37");      // false: "37" is converted to the number 37 which is not NaN
    isNaN("37.37");   // false: "37.37" is converted to the number 37.37 which is not NaN
    isNaN("");        // false: the empty string is converted to 0 which is not NaN
    isNaN(" ");       // false: a string with spaces is converted to 0 which is not NaN
    
    // dates
    isNaN(new Date());                // false
    isNaN(new Date().toString());     // true
    
    // This is a false positive and the reason why isNaN is not entirely reliable
    isNaN("blabla")   // true: "blabla" is converted to a number. 
                      // Parsing this as a number fails and returns NaN
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NaN "The global NaN property is a value representing Not-A-Number."
[1]: #Description
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN "The Number.isNaN() method determines whether the passed value is NaN. More robust version of the original global isNaN()."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/typeof
[4]: http://es5.github.com/#x8.5 "http://es5.github.com/#x8.5"