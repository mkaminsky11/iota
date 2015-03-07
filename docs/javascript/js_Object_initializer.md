## Object initializer

### Summary

Objects can be initialized using [`new Object()`][0],` [Object.create()][1]`, or using the _literal_ notation (_initializer_ notation). An object initializer is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (`{}`).

### Syntax

    var o = {};
    var o = { a: "foo", b: 42, c: {} };
    
    var a = "foo", b = 42, c = {};
    var o = { a: a, b: b, c: c };
    
    var o = {
      _property: function _([_parameters_]) {},
      get _property_() {},
      set _property_(_value_) {},
    };
    

### New notations in ECMAScript 6

Please see the compatibility table for support for these notations. In non-supporting environments, these notations will lead to syntax errors.

    // Shorthand property names (ES6)
    var a = "foo", b = 42, c = {};
    var o = { a, b, c };
    
    // Shorthand method names (ES6)
    var o = {
      _property_([_parameters_]) {},
      get _property_() {},
      set _property_(_value_) {},
      * _generator_() {}
    };
    
    // Computed property names (ES6)
    var prop = "foo";
    var o = {
      [prop]: "hey",
      ["b" + "ar"]: "there",
    };

### Description

An object initializer is an expression that describes the initialization of an [`Object`][2]. Objects consist of _properties_, which are used to describe an object. Values of object properties can either contain [primitive][3] data types or other objects.

### Creating objects

An empty object with no properties can be created like this:

    var object = {};

However, the advantage of the _literal_ or _initializer_ notation is, that you are able to quickly create objects with properties inside the curly braces. You simply notate a list of key: value pairs delimited by comma. The following code creates an object with three properties and the keys are "foo", "age" and "baz". The values of these keys are a string "bar", a number 42 and the third property has another object as its value.

    var object = {
      foo: "bar",
      age: 42,
      baz: { myProp: 12 },
    }

### Accessing properties

Once you have created an object, you might want to read or change them. Object properties can be accessed by using the dot notation or the bracket notation. See [property accessors][4] for detailed information.

    object.foo; // "bar"
    object["age"]; // 42
    
    object.foo = "baz";
    

### Property definitions

We have already learned how to notate properties using the initializer syntax. Oftentimes, there are variables in your code that you would like to put into an object. You will see code like this:

    var a = "foo", 
        b = 42,
        c = {};
    
    var o = { 
      a: a,
      b: b,
      c: c
    };

With ECMAScript 6, there is a shorter notation available to achieve the same:

    var a = "foo", 
        b = 42, 
        c = {};
    
    // Shorthand property names (ES6)
    var o = { a, b, c };

#### Duplicate property names

When using the same name for your properties, the second property will overwrite the first.

    var a = {x: 1, x: 2};
    console.log(a); // { x: 2}
    

In ECMAScript 5 strict mode code, duplicate property names were considered a [`SyntaxError`][5].  With the introduction of computed property names making duplication possible at runtime, ECMAScript 6 has removed this restriction.

    function haveES6DuplicatePropertySemantics(){
      "use strict";
      try {
        ({ prop: 1, prop: 2 });
    
        // No error thrown, duplicate property names allowed in strict mode
        return true;
      } catch (e) {
        // Error thrown, duplicates prohibited in strict mode
        return false;
      }
    }

### Method definitions

A property of an object can also refer to a [function][6] or a [getter][7] or [setter][8] method.

    var o = {
      _property: function _([_parameters_]) {},
      get _property_() {},
      set _property_(_value_) {},
    };

In ECMAScript 6, a shorthand notation is available, so that the keyword "function" is no longer necessary.

    // Shorthand method names (ES6)
    var o = {
      _property_([_parameters_]) {},
      get _property_() {},
      set _property_(_value_) {},
      * _generator_() {}
    };

For more information and examples about methods, see [method definitions][9].

### Computed property names

Starting with ECMAScript 6, the object initializer syntax also supports computed property names. That allows you to put an expression in brackets `[]`, that will be computed as the property name. This is symmetrically to the bracket notation of the [property accessor][4] syntax, which you might have used to read and set properties already. Now you can use the same syntax in object literals, too:

    // Computed property names (ES6)
    var i = 0;
    var a = {
      ["foo" + ++i]: i,
      ["foo" + ++i]: i,
      ["foo" + ++i]: i
    };
    
    console.log(a.foo1); // 1
    console.log(a.foo2); // 2
    console.log(a.foo3); // 3
    
    var param = 'size';
    var config = {
      [param]: 12,
      ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4
    };
    
    console.log(config); // { size: 12, mobileSize: 4 }

### Prototype mutation

A property definition of the form `__proto__: value` or `"__proto__": value` does not create a property with the name `__proto__`.  Instead, if the provided value is an object or [`null`][10], it changes the `[[Prototype]]` of the created object to that value.  (If the value is not an object or null, the object is not changed.)

    var obj1 = {};
    assert(Object.getPrototypeOf(obj1) === Object.prototype);
    
    var obj2 = { __proto__: null };
    assert(Object.getPrototypeOf(obj2) === null);
    
    var protoObj = {};
    var obj3 = { "__proto__": protoObj };
    assert(Object.getPrototypeOf(obj3) === protoObj);
    
    var obj4 = { __proto__: "not an object or null" };
    assert(Object.getPrototypeOf(obj4) === Object.prototype);
    assert(!obj4.hasOwnProperty("__proto__"));
    

Only a single prototype mutation is permitted in an object literal: multiple prototype mutations are a syntax error.

Property definitions that do not use "colon" notation are not prototype mutations: they are property definitions that behave identically to similar definitions using any other name.

    var __proto__ = "variable";
    
    var obj1 = { __proto__ };
    assert(Object.getPrototypeOf(obj1) === Object.prototype);
    assert(obj1.hasOwnProperty("__proto__"));
    assert(obj1.__proto__ === "variable");
    
    var obj2 = { __proto__() { return "hello"; } };
    assert(obj2.__proto__() === "hello");
    
    var obj3 = { ["__prot" + "o__"]: 17 };
    assert(obj3.__proto__ === 17);
    

### Object literal notation vs JSON

The object literal notation is not the same as the **J**ava**S**cript **O**bject **N**otation ([JSON][11]). Although they look similar, there are differences between them:

* JSON permits _only_ property definition using `"property": value` syntax.  The property name must be double-quoted, and the definition cannot be a shorthand.
* In JSON the values can only be strings, numbers, arrays, `true`, `false`, `null`, or another (JSON) object.
* A function value (see "Methods" above) can not be assigned to a value in JSON.
* Objects like [`Date`][12] will be a string after [`JSON.parse()`][13].
* [`JSON.parse()`][13] will reject computed property names and an error will be thrown.


[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object "The Object constructor creates an object wrapper."
[3]: https://developer.mozilla.org/en/docs/Glossary/primitive "primitive: A primitive (primitive value, primitive data type) is data that is not an Object and does not have any methods."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Property_Accessors
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "The SyntaxError object represents an error when trying to interpret syntactically invalid code."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/get
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/set
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Method_definitions
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/null
[11]: https://developer.mozilla.org/en/docs/Glossary/JSON
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date "Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC."
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse "The JSON.parse() method parses a string as JSON, optionally transforming the value produced by parsing."