## Event: 'disconnect'

## 

Similar to the `cluster.on('disconnect')` event, but specfic to this worker.

    cluster.fork().on('disconnect', function() {
      // Worker has disconnected
    });