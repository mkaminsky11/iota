## Iterator

**Non-standard.** The `**Iterator**` function is a SpiderMonkey-specific feature, and will be removed at some point. For future-facing usages, consider using [for..of][0] loops and the [iterator protocol][1].

### Summary

The `**Iterator**` function returns an object which implements legacy iterator protocol and iterates over enumerable properties of an object.

### Syntax

    Iterator(_object_)

### Parameters

**`object`**

> Object to iterate over properties.

### Description

An overview of the usage is available on the [Iterators and Generators][2] page.

### Methods

**`**Iterator.prototype.next**`**

> Returns next item in the `[property_name, property_value]` format. It throws `[StopIteration][3]` if there are no more items.

### Examples

### Iterating over properties of an object

    var a = {
      x: 10,
      y: 20,
    };
    var iter = Iterator(a);
    console.log(iter.next()); // ["x", 10]
    console.log(iter.next()); // ["y", 20]
    console.log(iter.next()); // throws StopIteration
    

### Iterating over properties of an object with legacy destructuring `for-in` statement

    var a = {
      x: 10,
      y: 20,
    };
    
    for (var [name, value] in Iterator(a)) {
      console.log(name, value);   // x 10
                                  // y 20
    }
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of "https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of"
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/The_Iterator_protocol
[2]: https://developer.mozilla.org/en/docs/JavaScript/Guide/Iterators_and_Generators "https://developer.mozilla.org/en/docs/JavaScript/Guide/Iterators_and_Generators"
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/StopIteration