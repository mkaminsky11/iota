## cluster.setupMaster(\[settings\])

## 

`setupMaster` is used to change the default 'fork' behavior. Once called,
the settings will be present in `cluster.settings`.

Note that:

* any settings changes only affect future calls to `.fork()` and have no
effect on workers that are already running
* The _only_ attribute of a worker that cannot be set via `.setupMaster()` is
the `env` passed to `.fork()`
* the defaults above apply to the first call only, the defaults for later
calls is the current value at the time of `cluster.setupMaster()` is called

Example:

    var cluster = require('cluster');
    cluster.setupMaster({
      exec: 'worker.js',
      args: ['--use', 'https'],
      silent: true
    });
    cluster.fork(); // https worker
    cluster.setupMaster({
      args: ['--use', 'http']
    });
    cluster.fork(); // http worker

This can only be called from the master process.