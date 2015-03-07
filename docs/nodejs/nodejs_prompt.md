## rl.prompt(\[preserveCursor\])

## 

Readies readline for input from the user, putting the current `setPrompt`
options on a new line, giving the user a new spot to write. Set `preserveCursor`
to `true` to prevent the cursor placement being reset to `0`.

This will also resume the `input` stream used with `createInterface` if it has
been paused.

If `output` is set to `null` or `undefined` when calling `createInterface`, the
prompt is not written.