## rl.write(data\[, key\])

## 

Writes `data` to `output` stream, unless `output` is set to `null` or
`undefined` when calling `createInterface`. `key` is an object literal to
represent a key sequence; available if the terminal is a TTY.

This will also resume the `input` stream if it has been paused.

Example:

    rl.write('Delete me!');
    // Simulate ctrl+u to delete the line written previously
    rl.write(null, {ctrl: true, name: 'u'});