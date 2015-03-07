## util.isError(object)

## 

Returns `true` if the given "object" is an `Error`. `false` otherwise.

    var util = require('util');
    
    util.isError(new Error())
      // true
    util.isError(new TypeError())
      // true
    util.isError({ name: 'Error', message: 'an error occurred' })
      // false