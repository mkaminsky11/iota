## Class Method: Buffer.byteLength(string\[, encoding\])

## 

Gives the actual byte length of a string. `encoding` defaults to `'utf8'`.
This is not the same as `String.prototype.length` since that returns the
number of _characters_ in a string.

Example:

    str = '\u00bd + \u00bc = \u00be';
    
    console.log(str + ": " + str.length + " characters, " +
      Buffer.byteLength(str, 'utf8') + " bytes");
    
    // ½ + ¼ = ¾: 9 characters, 12 bytes