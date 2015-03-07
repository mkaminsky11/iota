## this

### Summary

A function's `this` keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between [strict mode][0] and non-strict mode.

In most cases, the value of `this` is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the `[bind][1]` method to [set the value of a function's `this` regardless of how it's called][2].

### Syntax

    this

### Global context

In the global execution context (outside of any function), `this` refers to the global object, whether in strict mode or not.

    console.log(this.document === document); // true
    
    // In web browsers, the window object is also the global object:
    console.log(this === window); // true
    
    this.a = 37;
    console.log(window.a); // 37
    

### Function context

Inside a function, the value of `this` depends on how the function is called.

### Simple call

    function f1(){
      return this;
    }
    
    f1() === window; // global object
    

In this case, the value of `this` is not set by the call. Since the code is not in strict mode, the value of `this` must always be an object so it defaults to the global object.

    function f2(){
      "use strict"; // see strict mode
      return this;
    }
    
    f2() === undefined;
    

In strict mode, the value of `this` remains at whatever it's set to when entering the execution context. If it's not defined, it remains undefined. It can also be set to any value, such as `null` or `42` or `"I am not this"`.

**Note:** In the second example, `this` should be [`undefined`][3], because `f2` was called without providing any base (e.g. `window.f2()`). This feature wasn't implemented in some browsers when they first started to support [strict mode][4]. As a result, they incorrectly returned the `window` object.

### As an object method

When a function is called as a method of an object, its `this` is set to the object the method is called on.

In the following example, when `o.f()` is invoked, inside the function `this` is bound to the `o` object.

    var o = {
      prop: 37,
      f: function() {
        return this.prop;
      }
    };
    
    console.log(o.f()); // logs 37
    

Note that this behavior is not at all affected by how or where the function was defined. In the previous example, we defined the function inline as the `f` member during the definition of `o`. However, we could have just as easily defined the function first and later attached it to `o.f`. Doing so results in the same behavior:

    var o = {prop: 37};
    
    function independent() {
      return this.prop;
    }
    
    o.f = independent;
    
    console.log(o.f()); // logs 37
    

This demonstrates that it matters only that the function was invoked from the `f` member of `o`.

Similarly, the `this` binding is only affected by the most immediate member reference. In the following example, when we invoke the function, we call it as a method `g` of the object `o.b`. This time during execution, `this` inside the function will refer to `o.b`. The fact that the object is itself a member of `o` has no consequence; the most immediate reference is all that matters.

    o.b = {g: independent, prop: 42};
    console.log(o.b.g()); // logs 42
    

#### `this` on the object's prototype chain

The same notion holds true for methods defined somewhere on the object's prototype chain. If the method is on an object's prototype chain, `this` refers to the object the method was called on, as if the method was on the object.

    var o = {f:function(){ return this.a + this.b; }};
    var p = Object.create(o);
    p.a = 1;
    p.b = 4;
    
    console.log(p.f()); // 5
    

In this example, the object assigned to the variable `p` doesn't have its own `f` property, it inherits it from its prototype. But it doesn't matter that the lookup for `f` eventually finds a member with that name on `o`; the lookup began as a reference to `p.f`, so `this` inside the function takes the value of the object referred to as `p`. That is, since `f` is called as a method of `p`, its `this` refers to `p`. This is an interesting feature of JavaScript's prototype inheritance.

#### `this` with a getter or setter

Again, the same notion holds true when a function is invoked from a getter or a setter. A function used as getter or setter has its `this` bound to the object from which the property is being set or gotten.

    function modulus(){
      return Math.sqrt(this.re * this.re + this.im * this.im);
    }
    
    var o = {
      re: 1,
      im: -1,
      get phase(){
        return Math.atan2(this.im, this.re);
      }
    };
    
    Object.defineProperty(o, 'modulus', {
        get: modulus, enumerable:true, configurable:true});
    
    console.log(o.phase, o.modulus); // logs -0.78 1.4142
    

### As a constructor

When a function is used as a constructor (with the `[new][5]` keyword), its `this` is bound to new object being constructed.

Note: while the default for a constructor is to return the object referenced by `this`, it can instead return some other object (if the return value isn't an object, then the `this` object is returned).

    /*
     * Constructors work like this:
     *
     * function MyConstructor(){
     *   // Actual function body code goes here.  
     *   // Create properties on |this| as
     *   // desired by assigning to them.  E.g.,
     *   this.fum = "nom";
     *   // et cetera...
     *
     *   // If the function has a return statement that
     *   // returns an object, that object will be the
     *   // result of the |new| expression.  Otherwise,
     *   // the result of the expression is the object
     *   // currently bound to |this|
     *   // (i.e., the common case most usually seen).
     * }
     */
    
    function C(){
      this.a = 37;
    }
    
    var o = new C();
    console.log(o.a); // logs 37
    
    
    function C2(){
      this.a = 37;
      return {a:38};
    }
    
    o = new C2();
    console.log(o.a); // logs 38
    

In the last example (`C2`), because an object was returned during construction, the new object that `this` was bound to simply gets discarded. (This essentially makes the statement "`this.a = 37;`" dead code. It's not exactly dead, because it gets executed, but it can be eliminated with no outside effects.)

### `call` and `apply`

Where a function uses the `this` keyword in its body, its value can be bound to a particular object in the call using the `[call][6]` or `[apply][7]` methods that all functions inherit from `Function.prototype`.

    function add(c, d){
      return this.a + this.b + c + d;
    }
    
    var o = {a:1, b:3};
    
    // The first parameter is the object to use as
    // 'this', subsequent parameters are passed as 
    // arguments in the function call
    add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16
    
    // The first parameter is the object to use as
    // 'this', the second is an array whose
    // members are used as the arguments in the function call
    add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34
    

Note that with `call` and `apply`, if the value passed as `this` is not an object, an attempt will be made to convert it to an object using the internal `ToObject` operation. So if the value passed is a primitive like `7` or `'foo'`, it will be converted to an Object using the related constructor, so the primitive number `7` is converted to an object as if by `new Number(7)` and the string `'foo'` to an object as if by `new String('foo'), e.g.`

    function bar() {
      console.log(Object.prototype.toString.call(this));
    }
    
    bar.call(7); // [object Number]
    

### The `bind` method

ECMAScript 5 introduced `[Function.prototype.bind][1]`. Calling `f.bind(someObject)` creates a new function with the same body and scope as `f`, but where `this` occurs in the original function, in the new function it is permanently bound to the first argument of `bind`, regardless of how the function is being used.

    function f(){
      return this.a;
    }
    
    var g = f.bind({a:"azerty"});
    console.log(g()); // azerty
    
    var o = {a:37, f:f, g:g};
    console.log(o.f(), o.g()); // 37, azerty
    

### As a DOM event handler

When a function is used as an event handler, its `this` is set to the element the event fired from (some browsers do not follow this convention for listeners added dynamically with methods other than `addEventListener`).

    // When called as a listener, turns the related element blue
    function bluify(e){
      // Always true
      console.log(this === e.currentTarget); 
      // true when currentTarget and target are the same object
      console.log(this === e.target);
      this.style.backgroundColor = '#A5D9F3';
    }
    
    // Get a list of every element in the document
    var elements = document.getElementsByTagName('*');
    
    // Add bluify as a click listener so when the
    // element is clicked on, it turns blue
    for(var i=0 ; i<elements.length ; i++){
      elements[i].addEventListener('click', bluify, false);
    }

### In an in--line event handler

When code is called from an in--line handler, its `this` is set to the DOM element on which the listener is placed:

    <button onclick="alert(this.tagName.toLowerCase());">
      Show this
    </button>
    

The above alert shows `button`. Note however that only the outer code has its `this` set this way:

    <button onclick="alert((function(){return this}()));">
      Show inner this
    </button>
    

In this case, the inner function's `this` isn't set so it returns the global/window object (i.e. the default object in non--strict mode where `this` isn't set by the call).


[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
[2]: #The_bind_method
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/undefined
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode "Strict mode"
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/new
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/call
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/apply