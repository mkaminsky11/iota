## for...of

**This is an experimental technology, part of the ECMAScript 6 (Harmony) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

The `for...of` statement creates a loop Iterating over [iterable objects][1] (including [`Array`][2], [`Map`][3], [`Set`][4], [arguments][5] object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

### Syntax

    for (_variable_ of _object_) {
      _statement
    _}
    

**`variable`**

> On each iteration a value of a different property is assigned to _variable_.

**`object`**

> Object whose enumerable properties are iterated.

### Examples

### Difference between `for...of` and `for...in`

The following example shows the difference between a `for...of` loop and a `[for...in][6]` loop. While `for...in` iterates over property names, `for...of` iterates over property values:

    let arr = [3, 5, 7];
    arr.foo = "hello";
    
    for (let i in arr) {
       console.log(i); // logs "0", "1", "2", "foo"
    }
    
    for (let i of arr) {
       console.log(i); // logs "3", "5", "7"
    }
    

### Using `Array.prototype.forEach()`

To get the same property values the `for...of` loop would return, you can also use the [`Array.prototype.forEach()`][7] method:

    let arr = [3, 5, 7];
    arr.foo = "hello";
    
    arr.forEach(function (element, index) {
        console.log(element); // logs "3", "5", "7"
        console.log(index);   // logs "0", "1", "2"
    });
    
    // or with Object.keys()
    
    Object.keys(arr).forEach(function (element, index) {
        console.log(arr[element]); // logs "3", "5", "7", "hello"
        console.log(arr[index]);   // logs "3", "5", "7"
    });

### Iterating over DOM collections

Iterating over DOM collections like [`NodeList`][8]: the following example adds a `read` class to paragraphs that are direct descendants of an article:

    // Note: This will only work in platforms that have
    // implemented NodeList.prototype[Symbol.iterator]
    let articleParagraphs = document.querySelectorAll("article > p");
    
    for (let paragraph of articleParagraphs) {
      paragraph.classList.add("read");
    }
    

### Iterating over generators

You can also iterate over [generators][9]:

    function* fibonacci() { // a generator function
        let [prev, curr] = [0, 1];
        for (;;) {
            [prev, curr] = [curr, prev + curr];
            yield curr;
        }
    }
    
    for (let n of fibonacci()) {
        // truncate the sequence at 1000
        if (n > 1000)
            break;
        print(n);
    }
    



[0]: #Browser_compatibility
[1]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Guide/iterable
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array "The JavaScript Array global object is a constructor for arrays, which are high-level, list-like objects."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map "The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set "The Set object lets you store unique values of any type, whether primitive values or object references."
[5]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...in "en-US/docs/JavaScript/Reference/Statements/for...in"
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "The forEach() method executes a provided function once per array element."
[8]: https://developer.mozilla.org/en/docs/Web/API/NodeList "NodeList objects are collections of nodes such as those returned by Node.childNodes and the document.querySelectorAll method."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function*