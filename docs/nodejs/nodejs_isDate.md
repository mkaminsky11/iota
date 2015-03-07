## util.isDate(object)

## 

Returns `true` if the given "object" is a `Date`. `false` otherwise.

    var util = require('util');
    
    util.isDate(new Date())
      // true
    util.isDate(Date())
      // false (without 'new' returns a String)
    util.isDate({})
      // false