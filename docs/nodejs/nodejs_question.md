## rl.question(query, callback)

## 

Prepends the prompt with `query` and invokes `callback` with the user's
response. Displays the query to the user, and then invokes `callback`
with the user's response after it has been typed.

This will also resume the `input` stream used with `createInterface` if
it has been paused.

If `output` is set to `null` or `undefined` when calling `createInterface`,
nothing is displayed.

Example usage:

    interface.question('What is your favorite food?', function(answer) {
      console.log('Oh, so your favorite food is ' + answer);
    });