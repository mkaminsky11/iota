## buf.toJSON()

## 

Returns a JSON-representation of the Buffer instance. `JSON.stringify`
implicitly calls this function when stringifying a Buffer instance.

Example:

    var buf = new Buffer('test');
    var json = JSON.stringify(buf);
    
    console.log(json);
    // '{"type":"Buffer","data":[116,101,115,116]}'
    
    var copy = JSON.parse(json, function(key, value) {
        return value && value.type === 'Buffer'
          ? new Buffer(value.data)
          : value;
      });
    
    console.log(copy);
    // <Buffer 74 65 73 74>