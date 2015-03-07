## yield\*

**This is an experimental technology, part of the ECMAScript 6 (Harmony) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

The `yield*` expression is used to delegate to another [`generator`][1] or iterable object.

### Syntax

     yield* [[expression]];

**`expression`**

> The expression which returns an iterable object.

### Description

The `yield*` expression iterates over the operand and yields each value returned by it.

The value of `yield*` expression itself is the value returned by that iterator when it's closed (i.e., when `done` is true).

### Examples

### Example: Delegating to another generator

In following code, values yielded by `g1()` are returned from `next()` calls just like those which are yielded by `g2()`.

    function* g1() {
      yield 2;
      yield 3;
      yield 4;
    }
    
    function* g2() {
      yield 1;
      yield* g1();
      yield 5;
    }
    
    var iterator = g2();
    
    console.log(iterator.next()); // { value: 1, done: false }
    console.log(iterator.next()); // { value: 2, done: false }
    console.log(iterator.next()); // { value: 3, done: false }
    console.log(iterator.next()); // { value: 4, done: false }
    console.log(iterator.next()); // { value: 5, done: false }
    console.log(iterator.next()); // { value: undefined, done: true }
    

### Example: Other Iterable objects

Besides generator objects, `yield*` can also `yield` other kinds of iterables, e.g. arrays, strings or arguments objects.

    function* g3() {
      yield* [1, 2];
      yield* "34";
      yield* arguments;
    }
    
    var iterator = g3(5, 6);
    
    console.log(iterator.next()); // { value: 1, done: false }
    console.log(iterator.next()); // { value: 2, done: false }
    console.log(iterator.next()); // { value: "3", done: false }
    console.log(iterator.next()); // { value: "4", done: false }
    console.log(iterator.next()); // { value: 5, done: false }
    console.log(iterator.next()); // { value: 6, done: false }
    console.log(iterator.next()); // { value: undefined, done: true }
    

### Example: The value of `yield*` expression itself

`yield*` is an expression, not a statement, so it evaluates to a value.

    function* g4() {
      yield* [1, 2, 3];
      return "foo";
    }
    
    var result;
    
    function* g5() {
      result = yield* g4();
    }
    
    var iterator = g5();
    
    console.log(iterator.next()); // { value: 1, done: false }
    console.log(iterator.next()); // { value: 2, done: false }
    console.log(iterator.next()); // { value: 3, done: false }
    console.log(iterator.next()); // { value: undefined, done: true }, 
                                  // g4() returned { value: "foo", done: true } at this point
    
    console.log(result);          // "foo"
    



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function* "The function* declaration (function keyword followed by an asterisk) defines a generator function."