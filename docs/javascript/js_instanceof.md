## instanceof

### Summary

The `instanceof` operator tests whether an object has in its prototype chain the `prototype` property of a constructor.

### Syntax

    _object_ instanceof _constructor_

### Parameters

**`object`**

> The object to test.

**`constructor`**

> Function to test against

### Description

The `instanceof` operator tests presence of `constructor.prototype` in `object` prototype chain.

    // defining constructors
    function C(){}
    function D(){}
    
    var o = new C();
    
    // true, because: Object.getPrototypeOf(o) === C.prototype
    o instanceof C;
    
    // false, because D.prototype is nowhere in o's prototype chain
    o instanceof D;
    
    o instanceof Object; // true, because:
    C.prototype instanceof Object // true
    
    C.prototype = {};
    var o2 = new C();
    
    o2 instanceof C; // true
    
    // false, because C.prototype is nowhere in
    // o's prototype chain anymore
    o instanceof C; 
    
    D.prototype = new C(); // use inheritance
    var o3 = new D();
    o3 instanceof D; // true
    o3 instanceof C; // true
    

Note that if the value of an `instanceof` test can change based on changes to the `prototype` property of constructors, it cannot be changed by changing an object prototype, because changing an object prototype is not possible in standard ECMAScript. It is however possible using the non-standard `__proto__` pseudo-property.

### `instanceof` and multiple context (e.g. frames or windows)

Different scope have different execution environments. This means that they have different built-ins (different global object, different constructors, etc.). This may result in unexpected results. For instance, `[] instanceof window.frames[0].Array` will return `false`, because `Array.prototype !== ``window.frames[0].Array` and arrays inherit from the former. This may not make sense at first but when you start dealing with multiple frames or windows in your script and pass objects from one context to another via functions, this will be a valid and strong issue. For instance, you can securely check if a given object is in fact an Array using `Array.isArray(myObj)`

**Note for Mozilla developers:**  
In code using XPCOM `instanceof` has special effect: `obj instanceof `_`xpcomInterface`_ (e.g. `Components.interfaces.nsIFile`) calls `obj.QueryInterface(_xpcomInterface_)` and returns `true` if QueryInterface succeeded. A side effect of such call is that you can use _`xpcomInterface`_'s properties on `obj` after a successful `instanceof` test. Unlike standard JavaScript globals, the test `obj instanceof xpcomInterface `works as expected even if `obj` is from a different scope.

### Examples

### Example: Demonstrating that `String` and `Date` are of type `Object` and exceptional cases

The following code uses `instanceof` to demonstrate that `String` and `Date` objects are also of type `Object` (they are derived from `Object`).

However, objects created with the object literal notation are an exception here: Although the prototype is undefined, `instanceof Object` returns `true`.

    var simpleStr = "This is a simple string"; 
    var myString  = new String();
    var newStr    = new String("String created with constructor");
    var myDate    = new Date();
    var myObj     = {};
    
    simpleStr instanceof String; // returns false, checks the prototype chain, finds undefined
    myString  instanceof String; // returns true
    newStr    instanceof String; // returns true
    myString  instanceof Object; // returns true
    
    myObj instanceof Object;    // returns true, despite an undefined prototype
    ({})  instanceof Object;    // returns true, same case as above
    
    myString instanceof Date;   // returns false
    
    myDate instanceof Date;     // returns true
    myDate instanceof Object;   // returns true
    myDate instanceof String;   // returns false
    

### Example: Demonstrating that `mycar` is of type `Car` and type `Object`

The following code creates an object type `Car` and an instance of that object type, `mycar`. The `instanceof` operator demonstrates that the `mycar` object is of type `Car` and of type `Object`.

    function Car(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    var mycar = new Car("Honda", "Accord", 1998);
    var a = mycar instanceof Car;    // returns true
    var b = mycar instanceof Object; // returns true