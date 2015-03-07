## Event: 'pause'

## 

`function () {}`

Emitted whenever the `input` stream is paused.

Also emitted whenever the `input` stream is not paused and receives the
`SIGCONT` event. (See events `SIGTSTP` and `SIGCONT`)

Example of listening for `pause`:

    rl.on('pause', function() {
      console.log('Readline paused.');
    });