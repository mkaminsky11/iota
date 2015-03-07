## Event: 'line'

## 

`function (line) {}`

Emitted whenever the `input` stream receives a `\n`, usually received when the
user hits enter, or return. This is a good hook to listen for user input.

Example of listening for `line`:

    rl.on('line', function (cmd) {
      console.log('You just typed: '+cmd);
    });