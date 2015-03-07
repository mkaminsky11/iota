## undefined

### Summary

The global `**undefined**` value property represents the value `undefined`. It is one of JavaScript's [primitive types][0].

Property attributes of `undefined`

Writable
no

Enumerable
no

Configurable
no

### Syntax

    undefined

### Description

`undefined` is a property of the _global object_, i.e. it is a variable in global scope. The initial value of `undefined` is the primitive value `undefined`. 

In modern browsers (JavaScript 1.8.5 / Firefox 4+), `undefined` is a non-configurable, non-writable property per the ECMAScript 5 specification. Even when this is not the case, avoid overriding it.

A variable that has not been assigned a value is of type undefined. A method or statement also returns `undefined` if the variable that is being evaluated does not have an assigned value. A function returns `undefined` if a value was not [`returned`][1].

Since `undefined` is not a [`reserved word`][2], it can be used as an [identifier][3] (variable name) in any scope other than the global scope.

    // logs "foo string"
    (function(){ var undefined = 'foo'; console.log(undefined, typeof undefined); })();
    
    // logs "foo string"
    (function(undefined){ console.log(undefined, typeof undefined); })('foo');
    

### Examples

### Strict equality and `undefined`

You can use `undefined` and the strict equality and inequality operators to determine whether a variable has a value. In the following code, the variable `x` is not defined, and the `if` statement evaluates to true.

    var x;
    if (x === undefined) {
       // these statements execute
    }
    else {
       // these statements do not execute
    }
    

Note: The strict equality operator rather than the standard equality operator must be used here, because `x == undefined` also checks whether `x` is `null`, while strict equality doesn't. `null` is not equivalent to `undefined`. See [`comparison operators`][4] for details.

### `Typeof` operator and `undefined`

Alternatively, [`typeof`][5] can be used:

    var x;
    if (typeof x === 'undefined') {
       // these statements execute
    }
    

One reason to use [`typeof`][5] is that it does not throw an error if the variable has not been declared.

    // x has not been declared before
    if (typeof x === 'undefined') { // evaluates to true without errors
       // these statements execute
    }
    
    if(x === undefined){ // throws a ReferenceError
    
    }
    

However, this kind of technique should be avoided. JavaScript is a statically scoped language, so knowing if a variable is declared can be read by seeing whether it is declared in an enclosing context. The only exception is the global scope, but the global scope is bound to the global object, so checking the existence of a variable in the global context can be done by checking the existence of a property on the _global object_ (using the [`in`][6] operator, for instance).

### `Void` operator and `undefined`

The [`void`][7] operator is a third alternative.

    var x;
    if (x === void 0) {
       // these statements execute
    }
    
    // y has not been declared before
    if (y === void 0) {
       // throws a ReferenceError (in contrast to `typeof`)
    }
    



[0]: https://developer.mozilla.org/en/docs/Glossary/Primitive "primitive types: A primitive (primitive value, primitive data type) is data that is not an object and has no methods."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/return "The return statement ends function execution and specifies a value to be returned to the function caller."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Reserved_Words "This section describes JavaScript's lexical grammar."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Variables
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Comparison_Operators "JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type. The more commonly used abstract comparison (e.g. ==) converts the operands to the same Type before making the comparison. For relational abstract comparisons (e.g., <=), the operands are first converted to primitives, then to the same type, before comparison."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/typeof "The typeof operator returns a string indicating the type of the unevaluated operand."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/in "The in operator returns true if the specified property is in the specified object."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/void "The void operator evaluates the given expression and then returns undefined."