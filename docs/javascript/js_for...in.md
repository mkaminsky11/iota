## for...in

### Summary

The **`for..in` statement** iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.

### Syntax

    for (_variable_ in _object_) {_..._
    }

**`variable`**

> A different property name is assigned to _variable_ on each iteration.

**`object`**

> Object whose enumerable properties are iterated.

### Description

A `for...in` loop only iterates over enumerable properties. Objects created from built--in constructors like `Array` and `Object` have inherited non--enumerable properties from `Object.prototype` and `String.prototype`, such as [`String`][0]'s [`indexOf()`][1] method or [`Object`][2]'s [`toString()`][3] method. The loop will iterate over all enumerable properties of the object itself and those the object inherits from its constructor's prototype (properties closer to the object in the prototype chain override prototypes' properties).

### Deleted, added or modified properties

A `for...in` loop iterates over the properties of an object in an arbitrary order (see the [`delete` operator][4] for more on why one cannot depend on the seeming orderliness of iteration, at least in a cross-browser setting). If a property is modified in one iteration and then visited at a later time, its value in the loop is its value at that later time. A property that is deleted before it has been visited will not be visited later. Properties added to the object over which iteration is occurring may either be visited or omitted from iteration. In general it is best not to add, modify or remove properties from the object during iteration, other than the property currently being visited. There is no guarantee whether or not an added property will be visited, whether a modified property (other than the current one) will be visited before or after it is modified, or whether a deleted property will be visited before it is deleted.

### Array iteration and `for...in`

**Note:** **`for..in` should not be used to iterate over an [`Array`][5] where index order is important.**

Array indexes are just enumerable properties with integer names and are otherwise identical to general Object properties. There is no guarantee that `for...in` will return the indexes in any particular order and it will return all enumerable properties, including those with non--integer names and those that are inherited.

Because the order of iteration is implementation dependent, iterating over an array may not visit elements in a consistent order. Therefore it is better to use a `[for][6]` loop with a numeric index (or `[Array.forEach][7]` or the `[for...of][8]` loop) when iterating over arrays where the order of access is important.

### Iterating over own properties only

If you only want to consider properties attached to the object itself, and not its prototypes, use `[getOwnPropertyNames][9]` or perform a `[hasOwnProperty][10]` check (`[propertyIsEnumerable][11]` can also be used). Alternatively, if you know there won't be any outside code interference, you can extend built-in prototypes with a check method.

### Examples

The following function takes as its argument an object. It then iterates over all the object's enumerable properties and returns a string of the property names and their values.

    var obj = {a:1, b:2, c:3};
        
    for (var prop in obj) {
      console.log("o." + prop + " = " + obj[prop]);
    }
    
    // Output:
    // "o.a = 1"
    // "o.b = 2"
    // "o.c = 3"

The following function illustrates the use of [`hasOwnProperty()`][12]: the inherited properties are not displayed.

    var triangle = {a:1, b:2, c:3};
    
    function ColoredTriangle() {
      this.color = "red";
    }
    
    ColoredTriangle.prototype = triangle;
    
    var obj = new ColoredTriangle();
    
    for (var prop in obj) {
      if( obj.hasOwnProperty( prop ) ) {
        console.log("o." + prop + " = " + obj[prop]);
      } 
    }
    
    // Output:
    // "o.color = red"
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String "The String global object is a constructor for strings, or a sequence of characters."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf "The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object "The Object constructor creates an object wrapper."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "The toString() method returns a string representing object."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/delete
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array "The JavaScript Array global object is a constructor for arrays, which are high-level, list-like objects."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty "The hasOwnProperty() method returns a boolean indicating whether the object has the specified property."