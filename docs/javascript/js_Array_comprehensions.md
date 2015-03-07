## Array comprehensions

**This is an experimental technology, part of the Harmony (ECMAScript 7) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

The **array comprehension** syntax is a JavaScript expression which allows you to quickly assemble a new array based on an existing one. Comprehensions exist in many programming languages and the upcoming ECMAScript 7 standard defines array comprehensions for JavaScript. 

See [below][1] for differences to the old array comprehension syntax in SpiderMonkey, based on proposals for ECMAScript 4\.

### Syntax

    [for (x of iterable) x]
    [for (x of iterable) if (condition) x]
    [for (x of iterable) for (y of iterable) x + y]
    

### Description

Inside array comprehensions, these two kinds of components are allowed:

* [`for...of`][2] and
* [`if`][3]

The for-of iteration is always the first component. Multiple for-of iterations or if statements are allowed.

### Examples

### Simple array comprehensions

    [for (i of [ 1, 2, 3 ]) i*i ]; 
    // [ 1, 4, 9 ]
    
    var abc = [ "A", "B", "C" ];
    [for (letters of abc) letters.toLowerCase()];
    // [ "a", "b", "c" ]

### Array comprehensions with if statement

    var years = [ 1954, 1974, 1990, 2006, 2010, 2014 ];
    [for (year of years) if (year > 2000) year];
    // [ 2006, 2010, 2014 ]
    [for (year of years) if (year > 2000) if(year < 2010) year];
    // [ 2006], the same as below:
    [for (year of years) if (year > 2000 && year < 2010) year];
    // [ 2006] 
    

### Array comprehensions compared to `map` and `filter`

An easy way to understand array comprehension syntax, is to compare it with the Array [`map`][4] and [`filter`][5] methods:

    var numbers = [ 1, 2, 3 ];
    
    numbers.map(function (i) { return i * i });
    [for (i of numbers) i*i ];
    // both is [ 1, 4, 9 ]
    
    numbers.filter(function (i) { return i < 3 });
    [for (i of numbers) if (i < 3) i];
    // both is [ 1, 2 ]
    

### Array comprehensions with two arrays

Using two for-of iterations to work with two arrays:

    var numbers = [ 1, 2, 3 ];
    var letters = [ "a", "b", "c" ];
    
    var cross = [for (i of numbers) for (j of letters) i+j];
    // [ "1a", "1b", "1c", "2a", "2b", "2c", "3a", "3b", "3c" ]
    
    var grid = [for (i of numbers) [for (j of letters) i+j]];
    // [
    //  ["1a", "1b", "1c"],
    //  ["2a", "2b", "2c"],
    //  ["3a", "3b", "3c"]
    // ]
    
    [for (i of numbers) if (i > 1) for (j of letters) if(j > "a") i+j]
    // ["2b", "2c", "3b", "3c"], the same as below:
    
    [for (i of numbers) for (j of letters) if (i > 1) if(j > "a") i+j]
    // ["2b", "2c", "3b", "3c"]
    
    [for (i of numbers) if (i > 1) [for (j of letters) if(j > "a") i+j]]
    // [["2b", "2c"], ["3b", "3c"]], not the same as below:
    
    [for (i of numbers) [for (j of letters) if (i > 1) if(j > "a") i+j]]
    // [[], ["2b", "2c"], ["3b", "3c"]]
    



[0]: #Browser_compatibility
[1]: #Differences_to_the_older_JS1.7.2FJS1.8_comprehensions
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of "The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/if...else "The if statement executes a statement if a specified condition is true. If the condition is false, another statement can be executed."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map "The map() method creates a new array with the results of calling a provided function on every element in this array."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter "The filter() method creates a new array with all elements that pass the test implemented by the provided function."