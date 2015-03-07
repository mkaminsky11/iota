## worker.send(message\[, sendHandle\])

## 

This function is equal to the send methods provided by
`child_process.fork()`. In the master you should use this function to
send a message to a specific worker.

In a worker you can also use `process.send(message)`, it is the same function.

This example will echo back all messages from the master:

    if (cluster.isMaster) {
      var worker = cluster.fork();
      worker.send('hi there');
    
    } else if (cluster.isWorker) {
      process.on('message', function(msg) {
        process.send(msg);
      });
    }