## Event: 'SIGCONT'

## 

`function () {}`

**This does not work on Windows.**

Emitted whenever the `input` stream is sent to the background with `^Z`,
respectively known as `SIGTSTP`, and then continued with `fg(1)`. This event
only emits if the stream was not paused before sending the program to the
background.

Example of listening for `SIGCONT`:

    rl.on('SIGCONT', function() {
      // `prompt` will automatically resume the stream
      rl.prompt();
    });

## Example: Tiny CLI

Here's an example of how to use all these together to craft a tiny command
line interface:

    var readline = require('readline'),
        rl = readline.createInterface(process.stdin, process.stdout);
    
    rl.setPrompt('OHAI> ');
    rl.prompt();
    
    rl.on('line', function(line) {
      switch(line.trim()) {
        case 'hello':
          console.log('world!');
          break;
        default:
          console.log('Say what? I might have heard `' + line.trim() + '`');
          break;
      }
      rl.prompt();
    }).on('close', function() {
      console.log('Have a great day!');
      process.exit(0);
    });