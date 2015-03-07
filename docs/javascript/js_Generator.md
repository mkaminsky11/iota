## Generator

**This is an experimental technology, part of the ECMAScript 6 (Harmony) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

The `**Generator**` object is returned by a [generator function][1] and it conforms to both the [iterator and the Iterable protocol][2].

### Syntax

    function* gen() { 
      yield 1;
      yield 2;
      yield 3;
    }
    
    var g = gen(); // "Generator { }"

### Methods

**[`Generator.prototype.next()`][3]**

> Returns a value yielded by the [`yield`][4] expression.

**[`Generator.prototype.return()`][5]**

> Returns the given value and finishes the generator.

**[`Generator.prototype.throw()`][6]**

> Throws an error to a generator.

### Example

### Example: An infinite iterator

    function* idMaker(){
        var index = 0;
        while(true)
            yield index++;
    }
    
    var gen = idMaker(); // "Generator { }"
    
    console.log(gen.next().value); // 0
    console.log(gen.next().value); // 1
    console.log(gen.next().value); // 2
    // ...

### Legacy generator objects

Firefox (SpiderMonkey) also implements an earlier version of generators in [JavaScript 1.7][7]. There is no need for the star (\*) in the function declaration, you just use the `yield` keyword in the function body. However, legacy generators are deprecated. Do not use them; they are going to be removed ([bug 1083482][8]).

### Legacy generator methods

**`Generator.prototype.next() `__**

> Returns a value yielded by the [`yield`][4] expression. This corresponds to `next()` in the ES6 generator object.

**`Generator.prototype.close()` __**

> Closes the generator, so that when calling `next()` an [`StopIteration`][9] error will be thrown. This corresponds to the `return()` method in the ES6 generator object.

**`Generator.prototype.send()` __**

> Used to send a value to a generator. The value is returned from the [`yield`][4] expression, and returns a value yielded by the next [`yield`][4] expression. `send(x)` corresponds to `next(x)` in the ES6 generator object.

****`Generator.`**`prototype.`**`throw()` ** __**

> Throws an error to a generator. This corresponds to the `throw()` method in the ES6 generator object.

### Legacy generator example

    function fibonacci() {
      var a = yield 1;
      yield a * 2;
    }
    
    var it = fibonacci();
    console.log(it);          // "Generator {  }"
    console.log(it.next());   // 1
    console.log(it.send(10)); // 20
    console.log(it.close());  // undefined
    console.log(it.next());   // throws StopIteration (as the generator is now closed)
    



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function*
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/The_Iterator_protocol
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Generator/next "The next() method returns an object with two properties done and value. You can also provide a parameter to the next method to send a value to the generator."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/yield "The yield keyword is used to pause and resume a generator function (function* or legacy generator function)."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Generator/return "The return() method returns the given value and finishes the generator."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw "The throw() method throws an error to a generator."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/New_in_JavaScript/1.7
[8]: https://bugzilla.mozilla.org/show_bug.cgi?id=1083482 "Remove SpiderMonkey support for JS1.7 legacy generators"
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/StopIteration "The StopIteration object is used to tell the end of the iteration in the legacy iterator protocol."