## StopIteration

**Non-standard.** The `**StopIteration**` object is a SpiderMonkey-specific feature. For future-facing usages, consider using [for..of][0] loops and the [iterator protocol][1].

### Summary

The `**StopIteration**` object is used to tell the end of the iteration in the legacy iterator protocol.

### Syntax

    StopIteration

### Description

An overview of the usage is available on the [Iterators and Generators][2] page.

### Examples

`StopIteration` is thrown by [`Iterator`][3].

    var a = {
      x: 10,
      y: 20,
    };
    var iter = Iterator(a);
    console.log(iter.next()); // ["x", 10]
    console.log(iter.next()); // ["y", 20]
    console.log(iter.next()); // throws StopIteration
    

Throwing `StopIteration`.

    function f() {
      yield 1;
      yield 2;
      throw StopIteration;
      yield 3; // this is not executed.
    }
    
    for (var n in f()) {
      console.log(n);   // 1
                        // 2
    }
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of "https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of"
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/The_Iterator_protocol
[2]: https://developer.mozilla.org/en/docs/JavaScript/Guide/Iterators_and_Generators "https://developer.mozilla.org/en/docs/JavaScript/Guide/Iterators_and_Generators"
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Iterator