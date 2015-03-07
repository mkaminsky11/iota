## isFinite

### Summary

The global `**isFinite()**` function determines whether the passed value is a finite number. If needed, the parameter is first converted to a number.

### Syntax

    isFinite(_testValue_)

### Parameters

**`testValue`**

> The value to be tested for finiteness.

### Description

`isFinite` is a top-level function and is not associated with any object.

You can use this function to determine whether a number is a finite number. The `isFinite` function examines the number in its argument. If the argument is `NaN`, positive infinity, or negative infinity, this method returns `false`; otherwise, it returns `true`.

### Examples

    isFinite(Infinity);  // false
    isFinite(NaN);       // false
    isFinite(-Infinity); // false
    
    isFinite(0);         // true
    isFinite(2e64);      // true
    
    
    isFinite("0");       // true, would've been false with the 
                         // more robust Number.isFinite("0")