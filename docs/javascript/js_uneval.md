## uneval

**Non-standard**  
This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

### Summary

The `**uneval()**` method creates an string representation of the source code of an Object.

### Syntax

    uneval(_object_)

### Parameters

**`object`**

> A JavaScript expression or statement.

**Note:** You won't get a valid JSON representation of your Object.

### Description

`uneval()` is a top-level function and is not associated with any object.

### Examples

    var a = 1;
    uneval(a); // returns a String containing 1
    
    var b = "1";
    uneval(b) // returns a String containing "1"
    
    uneval(function foo(){}); // returns "(function foo(){})"
    
    
    var a = uneval(function foo(){return 'hi'});
    var foo = eval(a);
    foo(); // returns "hi"