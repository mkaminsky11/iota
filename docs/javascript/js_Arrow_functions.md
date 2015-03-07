## Arrow functions

**This is an experimental technology, part of the ECMAScript 6 (Harmony) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

An **arrow function expression** (also known as **fat arrow function**) has a shorter syntax compared to function expressions and lexically binds the `this` value. Arrow functions are always anonymous.

### Syntax

    ([param] [, param]) => {
       statements
    }
    
    param => expression

Detailed syntax examples can be seen [here][1].

### Parameters

**`param`**

> The name of an argument. Zero arguments need to be indicated with `()`. For only one argument the parentheses are not required. (like `foo => 1`)

**`statements or expression`**

> Multiple statements need to be enclosed in braces, {}. A single expression, however, requires no braces. The expression is also the implicit return value of that function.

### Description

Two factors influenced the introduction of arrow functions: shorter functions and lexical this.

### Shorter functions

In some functional patterns, shorter functions are welcome. Compare:

    var a = [
      "Hydrogen",
      "Helium",
      "Lithium",
      "Beryl­lium"
    ];
    
    var a2 = a.map(function(s){ return s.length });
    
    var a3 = a.map( s => s.length );

### Lexical `this`

Until arrow functions, every new function defined its own [this][2] value (a new object in case of a constructor, undefined in strict mode function calls, the context object if the function is called as an "object method", etc.). This proved to be annoying with an object-oriented style of programming.

    function Person() {
      // The Person() constructor defines `this` as itself.
      this.age = 0;
    
      setInterval(function growUp() {
        // In nonstrict mode, the growUp() function defines `this` 
        // as the global object, which is different from the `this`
        // defined by the Person() constructor.
        this.age++;
      }, 1000);
    }
    
    var p = new Person();

In ECMAScript 3/5, this issue was fixed by assigning the value in `this` to a variable that could be closed over.

    function Person() {
      var self = this; // Some choose `that` instead of `self`. 
                       // Choose one and be consistent.
      self.age = 0;
    
      setInterval(function growUp() {
        // The callback refers to the `self` variable of which
        // the value is the expected object.
        self.age++;
      }, 1000);
    }

Alternatively, a [bound function][3] could be created so that the proper `this` value would be passed to the `growUp` function.

Arrow functions capture the `this` value of the enclosing context, so the following code works as expected.

    function Person(){
      this.age = 0;
    
      setInterval(() => {
        this.age++; // |this| properly refers to the person object
      }, 1000);
    }
    
    var p = new Person();

#### Relation with strict mode

Given that `this` is lexical, [strict mode][4] rules with regard to `this` are just ignored.

    var f = () => {'use strict'; return this};
    f() === window; // or the global object

The rest of strict mode rules apply normally.

### Examples

    // An empty arrow function returns undefined
    let empty = () => {};
    
    (() => "foobar")() // returns "foobar" 
    
    var simple = a => a > 15 ? 15 : a; 
    simple(16); // 15
    simple(10); // 10
    
    let max = (a, b) => a > b ? a : b; 



[0]: #Browser_compatibility
[1]: http://wiki.ecmascript.org/doku.php?id=harmony:arrow_function_syntax "http://wiki.ecmascript.org/doku.php?id=harmony:arrow_function_syntax"
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Strict_mode