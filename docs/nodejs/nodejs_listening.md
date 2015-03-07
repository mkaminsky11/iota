## Event: 'listening'

## 

Similar to the `cluster.on('listening')` event, but specific to this worker.

    cluster.fork().on('listening', function(address) {
      // Worker is listening
    });

It is not emitted in the worker.