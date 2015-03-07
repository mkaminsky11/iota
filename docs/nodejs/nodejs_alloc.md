## smalloc.alloc(length\[, receiver\]\[, type\])

## 

Returns `receiver` with allocated external array data. If no `receiver` is
passed then a new Object will be created and returned.

This can be used to create your own Buffer-like classes. No other properties are
set, so the user will need to keep track of other necessary information (e.g.
`length` of the allocation).

    function SimpleData(n) {
      this.length = n;
      smalloc.alloc(this.length, this);
    }
    
    SimpleData.prototype = { /* ... */ };

It only checks if the `receiver` is an Object, and also not an Array. Because of
this it is possible to allocate external array data to more than a plain Object.

    function allocMe() { }
    smalloc.alloc(3, allocMe);
    
    // { [Function allocMe] '0': 0, '1': 0, '2': 0 }

v8 does not support allocating external array data to an Array, and if passed
will throw.

It's possible is to specify the type of external array data you would like. All
possible options are listed in `smalloc.Types`. Example usage:

    var doubleArr = smalloc.alloc(3, smalloc.Types.Double);
    
    for (var i = 0; i < 3; i++)
      doubleArr = i / 10;
    
    // { '0': 0, '1': 0.1, '2': 0.2 }

It is not possible to freeze, seal and prevent extensions of objects with
external data using `Object.freeze`, `Object.seal` and
`Object.preventExtensions` respectively.