## exports {Object} 

## 

The `module.exports` object is created by the Module system. Sometimes this is not
acceptable; many want their module to be an instance of some class. To do this,
assign the desired export object to `module.exports`. Note that assigning the
desired object to `exports` will simply rebind the local `exports` variable,
which is probably not what you want to do.

For example suppose we were making a module called `a.js`

    var EventEmitter = require('events').EventEmitter;
    
    module.exports = new EventEmitter();
    
    // Do some work, and after some time emit
    // the 'ready' event from the module itself.
    setTimeout(function() {
      module.exports.emit('ready');
    }, 1000);

Then in another file we could do

    var a = require('./a');
    a.on('ready', function() {
      console.log('module a is ready');
    });

Note that assignment to `module.exports` must be done immediately. It cannot be
done in any callbacks. This does not work:

x.js:

    setTimeout(function() {
      module.exports = { a: "hello" };
    }, 0);

y.js:

    var x = require('./x');
    console.log(x.a);