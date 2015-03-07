## Generator comprehensions

**This is an experimental technology, part of the Harmony (ECMAScript 7) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

The **generator comprehension** syntax is a JavaScript expression which allows you to quickly assemble a new generator function based on an existing iterable object. Comprehensions exist in many programming languages and the upcoming ECMAScript 7 standard defines array comprehensions for JavaScript. 

See [below][1] for differences to the old generator expression syntax in SpiderMonkey, based on proposals for ECMAScript 4\.

### Syntax

    (for (x of iterable) x)
    (for (x of iterable) if (condition) x)
    (for (x of iterable) for (y of iterable) x + y)
    

### Description

Inside generator comprehensions, these two kinds of components are allowed:

* [`for...of`][2] and
* [`if`][3]

The `for-of` iteration is always the first component. Multiple `for-of` iterations or if statements are allowed.

### Examples

### Simple generator comprehensions

    (for (i of [ 1, 2, 3 ]) i*i );
    // generator function which yields 1, 4, and 9
    
    [...(for (i of [ 1, 2, 3 ]) i*i )];
    // [1, 4, 9]
    
    var abc = [ "A", "B", "C" ];
    (for (letters of abc) letters.toLowerCase());
    // generator function which yields "a", "b", and "c"
    

### Generator comprehensions with if statement

    var years = [ 1954, 1974, 1990, 2006, 2010, 2014 ];
    
    (for (year of years) if (year > 2000) year);
    // generator function which yields 2006, 2010, and 2014
    
    (for (year of years) if (year > 2000) if(year < 2010) year);
    // generator function which yields 2006, the same as below:
    
    (for (year of years) if (year > 2000 && year < 2010) year);
    // generator function which yields 2006
    

### Generator comprehensions compared to generator function

An easy way to understand generator comprehension syntax, is to compare it with the generator function.

Example 1: Simple generator.

    var numbers = [ 1, 2, 3 ];
    
    // Generator function
    (function*() {
      for (let i of numbers) {
        yield i * i;
      }
    })()
    
    // Generator comprehension
    (for (i of numbers) i*i );
    
    // Result: both return a generator which yields [ 1, 4, 9 ]
    

Example 2: Using `if` in generator.

    var numbers = [ 1, 2, 3 ];
    
    // Generator function
    (function*() {
      for (let i of numbers) {
        if (i < 3) {
          yield i * 1;
        }
      }
    })()
    
    // Generator comprehension
    (for (i of numbers) if (i < 3) i);
    
    // Result: both return a generator which yields [ 1, 2 ]



[0]: #Browser_compatibility
[1]: #Differences_to_the_older_JS1.7.2FJS1.8_comprehensions
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of "The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/if...else "The if statement executes a statement if a specified condition is true. If the condition is false, another statement can be executed."