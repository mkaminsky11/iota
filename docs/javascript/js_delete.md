## delete

### Summary

The `delete` operator removes a property from an object.

### Syntax

    delete _expression_ 

where _expression_ should evaluate to a property reference, e.g.:

    delete _object.property_
    delete _object_['_property_']
    

### Parameters

**`object`**

> The name of an object, or an expression evaluating to an object.

**`property`**

> The property to delete.

### Returns

Throws in [strict mode][0] if the property is an own non-configurable property (returns `false` in non-strict). Returns `true` in all other cases.

### Description

Unlike what common belief suggests, the `delete` operator has **nothing** to do with directly freeing memory (it only does indirectly via breaking references. See the [memory management][1] page for more details).

If the `delete` operator succeeds, it removes the property from the object entirely. However, if a property with the same name exists on the object's prototype chain, the object will inherit that property from the prototype.

`delete` is only effective on an object's properties. It has no effect on variable or function names.  
While sometimes mis-characterized as global variables, assignments that don't specify an object (e.g. `x = 5`) are actually property assignments on the global object.

`delete` can't remove certain properties of predefined objects (like Object, Array, Math etc). These are described in ECMAScript 5 and later as non-configurable.

### Temporal dead zone

The "[temporal dead zone"][2] (TDZ), specified in ECMAScript 6 for `[const][3]` and [`let`][4] declarations, also applies to the `delete` operator. Thus, code like the following will throw a [`ReferenceError`][5].

    function foo() { 
      delete x;
      let x;
    }
    
    function bar() { 
      delete y; 
      const y; 
    }

### Examples

    x = 42;         // creates the property x on the global object
    var y = 43;     // creates the property y on the global object, and marks it as non-configurable
    myobj = {
      h: 4,
      k: 5
    };
    
    // x is a property of the global object and can be deleted
    delete x;       // returns true
    
    // y is not configurable, so it cannot be deleted                
    delete y;       // returns false 
    
    // delete doesn't affect certain predefined properties
    delete Math.PI; // returns false 
    
    // user-defined properties can be deleted
    delete myobj.h; // returns true 
    
    // myobj is a property of the global object, not a variable,
    // so it can be deleted
    delete myobj;   // returns true
    
    function f() {
      var z = 44;
    
      // delete doesn't affect local variable names
      delete z;     // returns false
    }
    

If the object inherits a property from a prototype, and doesn't have the property itself, the property can't be deleted by referencing the object. You can, however, delete it directly on the prototype.

    function Foo(){}
    Foo.prototype.bar = 42;
    var foo = new Foo();
    
    // returns true, but with no effect, 
    // since bar is an inherited property
    delete foo.bar;           
    
    // logs 42, property still inherited
    console.log(foo.bar);
    
    // deletes property on prototype
    delete Foo.prototype.bar; 
    
    // logs "undefined", property no longer inherited
    console.log(foo.bar);           

### Deleting array elements

When you delete an array element, the array length is not affected. This holds even if you delete the last element of the array.

When the `delete` operator removes an array element, that element is no longer in the array. In the following example, `trees[3]` is removed with `delete`.

    var trees = ["redwood","bay","cedar","oak","maple"];
    delete trees[3];
    if (3 in trees) {
        // this does not get executed
    }

If you want an array element to exist but have an undefined value, use the `undefined` value instead of the `delete` operator. In the following example, `trees[3]` is assigned the value undefined, but the array element still exists:

    var trees = ["redwood","bay","cedar","oak","maple"];
    trees[3] = undefined;
    if (3 in trees) {
        // this gets executed
    }



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Memory_Management
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "The ReferenceError object represents an error when a non-existent variable is referenced."