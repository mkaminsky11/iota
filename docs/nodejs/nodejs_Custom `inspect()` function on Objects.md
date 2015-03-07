## Custom inspect() function on Objects

## 

Objects also may define their own `inspect(depth)` function which `util.inspect()`
will invoke and use the result of when inspecting the object:

    var util = require('util');
    
    var obj = { name: 'nate' };
    obj.inspect = function(depth) {
      return '{' + this.name + '}';
    };
    
    util.inspect(obj);
      // "{nate}"

You may also return another Object entirely, and the returned String will be
formatted according to the returned Object. This is similar to how
`JSON.stringify()` works:

    var obj = { foo: 'this will not show up in the inspect() output' };
    obj.inspect = function(depth) {
      return { bar: 'baz' };
    };
    
    util.inspect(obj);
      // "{ bar: 'baz' }"