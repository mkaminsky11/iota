## const

**This is an experimental technology, part of the ECMAScript 6 (Harmony) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

The**const declaration** creates a read-only named constant.

### Syntax

    const _name1 = _value1 [_, _name2_ = _value2__ [_, ... [_, _nameN_ = _valueN]]]]_;

**`nameN`**

> Constant name. It can be any legal identifier.

**`valueN`**

> Value of the constant. It can be any legal expression.

### Description

This declaration creates a constant that can be global or local to the function in which it is declared. Constants are block-scoped. The value of a constant cannot change through re-assignment, and a constant cannot be re-declared. An initializer for a constant is required. A constant cannot share its name with a function or a variable in the same scope.

### Examples

The following example demonstrates how constants behave. Try this in you browser console.

    // define my_fav as a constant and give it the value 7
    const my_fav = 7;
    
    // this will fail silently in Firefox and Chrome (but does not fail in Safari)
    my_fav = 20;
    
    // will print 7
    console.log("my favorite number is: " + my_fav);
    
    // trying to redeclare a constant throws an error 
    const my_fav = 20;
    
    // the name my_fav is reserved for constant above, so this will also fail
    var my_fav = 20; 
    
    // my_fav is still 7
    console.log("my favorite number is " + my_fav);
    
    // Assigning to a const variable is a syntax error
    const a = 1; a = 2;
    
    // const requires an initializer
    const foo; // SyntaxError: missing = in const declaration
    
    // const also works on objects
    const myObject = {"key": "value"};
    
    // Overwriting the object fails as above (in Firefox and Chrome but not in Safari)
    myObject = {"otherKey": "value"};
    
    // However, object attributes are not protected,
    // so the following statement is executed without problems
    myObject.key = "otherValue";
    



[0]: #Browser_compatibility