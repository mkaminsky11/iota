## for each...in

The `for each...in` statement is deprecated as the part of ECMA-357 ([E4X][0]) standard. E4X support has been removed, but for each...in will not be disabled and removed because of backward compatibility considerations. Consider using [for...of][1] instead. (Please refer to [bug 791343][2].)

### Summary

The` **for each...in**`**statement** iterates a specified variable over all values of object's properties. For each distinct property, a specified statement is executed.

### Syntax

    for each (_variable_ in _object_) {
      _statement_
    }

**`variable`**

> Variable to iterate over property values, optionally declared with the `var` keyword. This variable is local to the function, not to the loop.

**`object`**

> Object for which the properties are iterated.

**`statement`**

> A statement to execute for each property. To execute multiple statements within the loop, use a [block][3] statement (`{ ... }`) to group those statements.

### Description

Some built-in properties are not iterated over. These include all built-in methods of objects, e.g. `String`'s `indexOf` method. However, all user-defined properties are iterated over.

### Examples

### Example: Using `for each...in`

**Warning:** Never use a loop like this on arrays. Only use it on objects. See [`for...in`][4] for more details.

The following snippet iterates over an object's properties, calculating their sum:

    var sum = 0;
    var obj = {prop1: 5, prop2: 13, prop3: 8};
    
    for each (var item in obj) {
      sum += item;
    }
    
    console.log(sum); // logs "26", which is 5+13+8



[0]: https://developer.mozilla.org/en/docs/Archive/Web/E4X "https://developer.mozilla.org/en/docs/E4X"
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of "https://developer.mozilla.org/en/docs/JavaScript/Reference/Statements/for...of"
[2]: https://bugzilla.mozilla.org/show_bug.cgi?id=791343 "disable for-each statement on javascript.options.xml.{content|chrome} = false"
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/block "JavaScript/Reference/Statements/block"
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...in