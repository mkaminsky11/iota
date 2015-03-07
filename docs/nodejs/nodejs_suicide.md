## suicide {Boolean} 

## 

Set by calling `.kill()` or `.disconnect()`, until then it is `undefined`.

The boolean `worker.suicide` lets you distinguish between voluntary and accidental
exit, the master may choose not to respawn a worker based on this value.

    cluster.on('exit', function(worker, code, signal) {
      if (worker.suicide === true) {
        console.log('Oh, it was just suicide\' – no need to worry').
      }
    });
    
    // kill worker
    worker.kill();