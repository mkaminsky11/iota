## in

### Summary

The `in` operator returns `true` if the specified property is in the specified object.

### Syntax

    _prop_ in _objectName_

### Parameters

**`prop`**

> A string or numeric expression representing a property name or array index.

**`objectName`**

> Name of an object.

### Description

The following examples show some uses of the `in` operator.

    // Arrays
    var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
    0 in trees        // returns true
    3 in trees        // returns true
    6 in trees        // returns false
    "bay" in trees    // returns false (you must specify the 
                      // index number, not the value at that index)
    "length" in trees // returns true (length is an Array property)
    
    // Predefined objects
    "PI" in Math          // returns true
    
    // Custom objects
    var mycar = {make: "Honda", model: "Accord", year: 1998};
    "make" in mycar  // returns true
    "model" in mycar // returns true
    

You must specify an object on the right side of the `in` operator. For example, you can specify a string created with the `String` constructor, but you cannot specify a string literal.

    var color1 = new String("green");
    "length" in color1 // returns true
    
    var color2 = "coral";
    // generates an error (color2 is not a String object)
    "length" in color2
    

### Using `in` with deleted or undefined properties

If you delete a property with the `[delete][0]` operator, the `in` operator returns `false` for that property.

    var mycar = {make: "Honda", model: "Accord", year: 1998};
    delete mycar.make;
    "make" in mycar;  // returns false
    
    var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
    delete trees[3];
    3 in trees; // returns false
    

If you set a property to [`undefined`][1] but do not delete it, the `in` operator returns true for that property.

    var mycar = {make: "Honda", model: "Accord", year: 1998};
    mycar.make = undefined;
    "make" in mycar;  // returns true
    

    var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
    trees[3] = undefined;
    3 in trees; // returns true
    

### Inherited properties

The `in` operator returns `true` for properties in the prototype chain.

    "toString" in {}; // returns true
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/delete "en-US/docs/JavaScript/Reference/Operators/Special/delete"
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/undefined "The global undefined value property represents the value undefined. It is one of JavaScript's primitive types."