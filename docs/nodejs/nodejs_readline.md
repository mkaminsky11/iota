## Readline

## 

To use this module, do `require('readline')`. Readline allows reading of a
stream (such as `process.stdin`) on a line-by-line basis.

Note that once you've invoked this module, your node program will not
terminate until you've closed the interface. Here's how to allow your
program to gracefully exit:

    var readline = require('readline');
    
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.question("What do you think of node.js? ", function(answer) {
      // TODO: Log the answer in a database
      console.log("Thank you for your valuable feedback:", answer);
    
      rl.close();
    });