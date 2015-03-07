## Event: 'SIGINT'

## 

`function () {}`

Emitted whenever the `input` stream receives a `^C`, respectively known as
`SIGINT`. If there is no `SIGINT` event listener present when the `input`
stream receives a `SIGINT`, `pause` will be triggered.

Example of listening for `SIGINT`:

    rl.on('SIGINT', function() {
      rl.question('Are you sure you want to exit?', function(answer) {
        if (answer.match(/^y(es)?$/i)) rl.pause();
      });
    });