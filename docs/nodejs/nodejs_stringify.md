## querystring.stringify(obj\[, sep\]\[, eq\]\[, options\])

## 

Serialize an object to a query string.
Optionally override the default separator (`'&'`) and assignment (`'='`)
characters.

Options object may contain `encodeURIComponent` property (`querystring.escape` by default),
it can be used to encode string with `non-utf8` encoding if necessary.

Example:

    querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })
    // returns
    'foo=bar&baz=qux&baz=quux&corge='
    
    querystring.stringify({foo: 'bar', baz: 'qux'}, ';', ':')
    // returns
    'foo:bar;baz:qux'
    
    // Suppose gbkEncodeURIComponent function already exists,
    // it can encode string with `gbk` encoding
    querystring.stringify({ w: '中文', foo: 'bar' }, null, null,
      { encodeURIComponent: gbkEncodeURIComponent })
    // returns
    'w=%D6%D0%CE%C4&foo=bar'