## null

### Summary

The value `null` is a JavaScript literal representing null or an "empty" value, i.e. no object value is present. It is one of JavaScript's [primitive values][0].

### Syntax

    null 

### Description

The value `null` is a literal (not a property of the global object like [`undefined`][1] can be). In APIs, `null` is often retrieved in place where an object can be expected but no object is relevant. When checking for null or undefined beware of the [differences between equality (==) and identity (===) operators][2] (type-conversion is performed with the former).

    // foo does not exist, it is not defined and has never been initialized:
    > foo
    "ReferenceError: foo is not defined"
    
    // foo is known to exist now but it has no type or value:
    > var foo = null; foo
    "null"
    

### Difference between `null` and `undefined`

    typeof null        // object (bug in ECMAScript, should be null)
    typeof undefined   // undefined
    null === undefined // false
    null  == undefined // true
    



[0]: https://developer.mozilla.org/en/docs/Glossary/Primitive "primitive values: A primitive (primitive value, primitive data type) is data that is not an Object and does not have any methods."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/undefined "https://developer.mozilla.org/en/docs/JavaScript/Reference/Global_Objects/undefined"
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Comparison_Operators