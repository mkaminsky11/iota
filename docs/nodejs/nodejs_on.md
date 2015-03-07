## emitter.on(event, listener)

## 

Adds a listener to the end of the listeners array for the specified `event`.
No checks are made to see if the `listener` has already been added. Multiple
calls passing the same combination of `event` and `listener` will result in the
`listener` being added multiple times.

    server.on('connection', function (stream) {
      console.log('someone connected!');
    });

Returns emitter, so calls can be chained.