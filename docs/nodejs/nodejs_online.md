## Event: 'online'

## 

Similar to the `cluster.on('online')` event, but specific to this worker.

    cluster.fork().on('online', function() {
      // Worker is online
    });

It is not emitted in the worker.