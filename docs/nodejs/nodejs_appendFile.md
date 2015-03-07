## fs.appendFile(filename, data\[, options\], callback)

## 

Asynchronously append data to a file, creating the file if it not yet exists.
`data` can be a string or a buffer.

Example:

    fs.appendFile('message.txt', 'data to append', function (err) {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });