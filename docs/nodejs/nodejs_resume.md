## Event: 'resume'

## 

`function () {}`

Emitted whenever the `input` stream is resumed.

Example of listening for `resume`:

    rl.on('resume', function() {
      console.log('Readline resumed.');
    });