## emitter.listeners(event)

## 

Returns an array of listeners for the specified event.

    server.on('connection', function (stream) {
      console.log('someone connected!');
    });
    console.log(util.inspect(server.listeners('connection'))); // [ [Function] ]