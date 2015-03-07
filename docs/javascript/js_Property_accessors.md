## Property accessors

### Summary

Property accessors provide access to an object's properties by using the dot notation or the bracket notation.

### Syntax

    object.property
    object["property"]
    

### Description

One can think of an object as an _associative array_ (a.k.a. _map_, _dictionary_, _hash_, _lookup table_). The _keys_ in this array are the names of the object's properties. It's typical when speaking of an object's properties to make a distinction between properties and methods. However, the property/method distinction is little more than a convention. A method is simply a property that can be called, for example if it has a reference to a [Function][0] instance as its value.

There are two ways to access properties: dot notation and bracket notation.

### Dot notation

    get = object.property;
    object.property = set;
    

`property` must be a valid JavaScript identifier, i.e. a sequence of alphanumerical characters, also including the underscore ("`_`") and dollar sign ("`$`"), that cannot start with a number. For example, `object.$1` is valid, while `object.1` is not.

#### Example:

    document.createElement('pre');
    

Here, the method named "createElement" is retrieved from `document` and is called.

### Bracket notation

    get = object[property_name];
    object[property_name] = set;
    

`property_name` is a string. The string does not have to be a valid identifier; it can have any value, e.g. "1foo", "!bar!", or even " " (a space).

#### Example:

    document['createElement']('pre');
    

This does the exact same thing as the previous example.

### Property names

Property names must be strings. This means that non-string objects cannot be used as keys in the object. Any non-string object, including a number, is typecasted into a string via the [toString][1] method.

#### Examples:

    var object = {};
    object['1'] = 'value';
    alert(object[1]);
    

This outputs "value", since 1 is type-casted into '1'.

    var foo = {unique_prop: 1}, bar = {unique_prop: 2}, object = {};
    object[foo] = 'value';
    alert(object[bar]);
    

This also outputs "value", since both foo and bar are converted to the same string. In the [SpiderMonkey][2] JavaScript engine, this string would be "\['object Object'\]".

### Method binding

A method is not bound to the object that it is a method of. Specifically, `this` is not fixed in a method, i.e., `this` does not necessarily refer to an object containing the method. `this` is instead "passed" by the function call. See [method binding][3].

### Note on `eval`

JavaScript novices often make the mistake of using [eval][4] where the bracket notation can be used instead. For example, the following syntax is often seen in many scripts.

    x = eval('document.forms.form_name.elements.' + strFormControl + '.value');
    

`eval` is slow and should be avoided whenever possible. Also, `strFormControl` would have to hold an identifier, which is not required for names and IDs of form controls. It is better to use bracket notation instead:

    x = document.forms["form_name"].elements[strFormControl].value;
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
[2]: https://developer.mozilla.org/en/docs/Mozilla/Projects/SpiderMonkey
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this#Method_binding
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/eval