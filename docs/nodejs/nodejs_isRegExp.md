## util.isRegExp(object)

## 

Returns `true` if the given "object" is a `RegExp`. `false` otherwise.

    var util = require('util');
    
    util.isRegExp(/some regexp/)
      // true
    util.isRegExp(new RegExp('another regexp'))
      // true
    util.isRegExp({})
      // false