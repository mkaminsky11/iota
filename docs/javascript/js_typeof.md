## typeof

### Summary

The `typeof` operator returns a string indicating the type of the unevaluated operand.

### Syntax

The `typeof` operator is followed by its operand:

    typeof _operand_

### Parameters

`_operand_` is an expression representing the object or [primitive][0] whose type is to be returned.

### Description

The following table summarizes the possible return values of `typeof`. For more information about types and primitives, see also the [JavaScript data structure][1] page.
Type
Result

Undefined
`"undefined"`

Null
`"object" `(see below)

Boolean
`"boolean"`

Number
`"number"`

String
`"string"`

Symbol (new in ECMAScript 6)
`"symbol"`

Host object (provided by the JS environment)
_Implementation-dependent_

Function object (implements \[\[Call\]\] in ECMA-262 terms)
`"function"`

Any other object
`"object"`

### Examples

### Normal cases

    // Numbers
    typeof 37 === 'number';
    typeof 3.14 === 'number';
    typeof Math.LN2 === 'number';
    typeof Infinity === 'number';
    typeof NaN === 'number'; // Despite being "Not-A-Number"
    typeof Number(1) === 'number'; // but never use this form!
    
    
    // Strings
    typeof "" === 'string';
    typeof "bla" === 'string';
    typeof (typeof 1) === 'string'; // typeof always return a string
    typeof String("abc") === 'string'; // but never use this form!
    
    
    // Booleans
    typeof true === 'boolean';
    typeof false === 'boolean';
    typeof Boolean(true) === 'boolean'; // but never use this form!
    
    
    // Symbols
    typeof Symbol() === 'symbol'
    typeof Symbol('foo') === 'symbol'
    typeof Symbol.iterator === 'symbol'
    
    
    // Undefined
    typeof undefined === 'undefined';
    typeof blabla === 'undefined'; // an undefined variable
    
    
    // Objects
    typeof {a:1} === 'object';
    
    // use [Array.isArray][2] or Object.prototype.toString.call
    // to differentiate regular objects from arrays
    typeof [1, 2, 4] === 'object';
    
    typeof new Date() === 'object';
    
    
    // The following is confusing. Don't use!
    typeof new Boolean(true) === 'object'; 
    typeof new Number(1) === 'object'; 
    typeof new String("abc") === 'object';
    
    
    // Functions
    typeof function(){} === 'function';
    typeof Math.sin === 'function';
    

### `null`

    // This stands since the beginning of JavaScript
    typeof null === 'object';
    

In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0\. `null` was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the bogus `typeof` return value. ([reference][3])

A fix was proposed for ECMAScript (via an opt-in), but [was rejected][4]. It would have resulted in `typeof null === 'null'`.

### Regular expressions

Callable regular expressions were a non-standard addition in some browsers.

    typeof /s/ === 'function'; // Chrome 1-12 Non-conform to ECMAScript 5.1
    typeof /s/ === 'object';   // Firefox 5+  Conform to ECMAScript 5.1
    



[0]: https://developer.mozilla.org/en/docs/Glossary/Primitive "primitive: A primitive (primitive value, primitive data type) is data that is not an Object and does not have any methods."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Data_structures
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray "https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray"
[3]: http://www.2ality.com/2013/10/typeof-null.html
[4]: http://wiki.ecmascript.org/doku.php?id=harmony:typeof_null