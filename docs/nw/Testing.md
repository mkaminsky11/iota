## Testing

Now node-webkit's testing works have two parts: automatic tests and manual test. Node-webkit uses [Mocha](http://www.mochajs.org/) to run automatic tests.

## node-webkit tests

[[How to run node-webkit's test cases]]

## How do we test with Mocha

In folder `automatic_tests`, every subdirectory has a file called `mocha_test.js`. In `mocha_test.js`, there are test cases written using mocha. Finally we load these test cases and run them in `index.html`. The structure is:

    node-webkit/
    |-- src/
    `-- tests/
        |-- index.html
        |-- ...
        `-- automatic_tests/
            |-- ...
            `-- node/
                |-- mocha_test.js

## How to write test case for node-webkit

Mocha is easy to use, we can directly write mocha code in `mocha_test.js`. But if we have a simple app and want to use it, there are some traps.

We need to spawn a new process for the app, but there would be a problem with using the communication method of node.js' `child_process` module. So we need to use other method for the data transporting like using socket.

In node-webkit testing system, we have implemented a simple module `nw_test_app` for the job. How to use it:

`mocha_test.js`:

```javascript
var child = app_test.createChildProcess({
  execPath: process.execPath,
  appPath: 'path_to_app',
  end: function(data, app) {
    if (data.ok) {
      done();
    } else {
      done('error');
    }
  }
});
```

`app`:

```javascript
var client = require('nw_test_app').createClient({
  argv: gui.App.argv,
  data: {ok : true},
});
```

