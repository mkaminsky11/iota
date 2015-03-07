## util.isArray(object)

## 

Internal alias for Array.isArray.

Returns `true` if the given "object" is an `Array`. `false` otherwise.

    var util = require('util');
    
    util.isArray([])
      // true
    util.isArray(new Array)
      // true
    util.isArray({})
      // false