## console.log(\[data\]\[, ...\])

## 

Prints to stdout with newline. This function can take multiple arguments in a
`printf()`-like way. Example:

    var count = 5;
    console.log('count: %d', count);
    // prints 'count: 5'

If formatting elements are not found in the first string then `util.inspect`
is used on each argument. See \[util.format()\]\[\] for more information.