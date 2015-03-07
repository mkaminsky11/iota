## Default parameters

**This is an experimental technology, part of the Harmony (ECMAScript 6) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

**Default function parameters** allow formal parameters to be initialized with default values if no value or `undefined` is passed.

### Syntax

    function [_name_]([_param1_[ = defaultValue1 ][, ..., _paramN_[ = defaultValueN ]]]) {
       _statements_
    }
    

### Description

In JavaScript, parameters of functions default to `undefined`. However, in some situations it might be useful to set a different default value. This is where default parameters can help.

In the past, the general strategy for setting defaults was to test parameter values in the body of the function and assign a value if they are `undefined`. If in the following example, no value is provided for `b` in the call, its value would be `undefined` when evaluating `a*b` and the call to `multiple` would have returned `NaN`. However, this is caught with the second line in this example:

    function multiply(a, b) {
      b = typeof b !== 'undefined' ?  b : 1;
    
      return a*b;
    }
    
    multiply(5); // 5
    

With default parameters, the check in the function body is no longer necessary. Now, you can simply put `1` as the default value for `b` in the function head:

    function multiply(a, b = 1) {
      return a*b;
    }
    
    multiply(5); // 5

### Examples

### Passing `undefined`

In the second call here, even if the second argument is set explicitly to `undefined` when calling, the value of the `color` argument is the default one.

    function setBackgroundColor(element, color = 'rosybrown') {
      element.style.backgroundColor = color;
    }
    
    setBackgroundColor(someDiv);            // color set to 'rosybrown'
    setBackgroundColor(someDiv, undefined); // color set to 'rosybrown' too
    setBackgroundColor(someDiv, 'blue');    // color set to 'blue' 
    

### Evaluated at call time

The default argument gets evaluated at call time, so unlike e.g. in Python, a new object is created each time the function is called.

    function append(value, array = []) {
      array.push(value);
      return array;
    }
    
    append(1); //[1]
    append(2); //[2], not [1, 2]
    
    

This even applies to functions and variables:

    function callSomething(thing = something()) { return thing }
    
    callSomething(); //throws a ReferenceError
    
    let (something = function() "sth") {
      callSomething(); //"sth"
    }
    

### Default parameters are available to later default parameters

Parameters already encountered are available to later default parameters:

    function singularAutoPlural(singular, plural = singular+"s", 
                                rallyingCry = plural + " ATTACK!!!") {
      return [singular, plural, rallyingCry ]; 
    }
    
    //["Gecko","Geckos", "Geckos ATTACK!!!"]
    singularAutoPlural("Gecko");
    
    //["Fox","Foxes", "Foxes ATTACK!!!"]
    singularAutoPlural("Fox","Foxes");
    
    //["Deer", "Deer", "Deer ... change."]
    singularAutoPlural("Deer", "Deer", "Deer peaceably and respectfully
       petition the government for positive change.")
    

This functionality is approximated in a straight forward fashion and demonstrates how many edge case are handled.

    function go() {
      return ":P"
    }
    
    function withDefaults(a, b = 5, c = b, d = go(), e = this, 
                          f = arguments, g = this.value) {
      return [a,b,c,d,e,f,g];
    }
    function withoutDefaults(a, b, c, d, e, f, g){
      switch(arguments.length){
        case 0:
          a
        case 1:
          b = 5
        case 2:
          c = b
        case 3:
          d = go();
        case 4:
          e = this
        case 5:
          f = arguments
        case 6:
          g = this.value;
        default:
      }
      return [a,b,c,d,e,f,g];
    }
    
    withDefaults.call({value:"=^_^="});
    // [undefined, 5, 5, ":P", window, arguments, "=^_^="]
    
    
    withoutDefaults.call({value:"=^_^="});
    // [undefined, 5, 5, ":P", window, arguments, "=^_^="]
    

### Functions defined inside function body

Introduced in Gecko 33 (Firefox 33 / Thunderbird 33 / SeaMonkey 2.30). Functions declared in the function body cannot be referred inside default parameters and throw a [`ReferenceError`][1] (currently a [`TypeError`][2] in SpiderMonkey, see [bug 1022967][3]). Default parameters are always executed first, function declarations inside the function body evaluate afterwards.

    // Doesn't work! Throws ReferenceError.
    function f(a = go()) {
      function go(){return ":P"}
    }
    

### Parameters without defaults after default parameters

Prior to Gecko 26 (Firefox 26 / Thunderbird 26 / SeaMonkey 2.23 / Firefox OS 1.2), the follwing code resulted in a [`SyntaxError`][4]. This has been fixed in [bug 777060][5] and works as expected in later versions:

    function f(x=1, y) { 
      return [x, y]; 
    }
    
    f(); // [1, undefined]
    



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "The ReferenceError object represents an error when a non-existent variable is referenced."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type."
[3]: https://bugzilla.mozilla.org/show_bug.cgi?id=1022967 "Separate environment for default parameter and function body if default parameter contains expression"
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "The SyntaxError object represents an error when trying to interpret syntactically invalid code."
[5]: https://bugzilla.mozilla.org/show_bug.cgi?id=777060 "FIXED: Allow parameters without defaults after default parameters"