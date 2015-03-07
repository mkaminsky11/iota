## querystring.parse(str\[, sep\]\[, eq\]\[, options\])

## 

Deserialize a query string to an object.
Optionally override the default separator (`'&'`) and assignment (`'='`)
characters.

Options object may contain `maxKeys` property (equal to 1000 by default), it'll
be used to limit processed keys. Set it to 0 to remove key count limitation.

Options object may contain `decodeURIComponent` property (`decodeURIComponent` by default),
it can be used to decode `non-utf8` encoding string if necessary.

Example:

    querystring.parse('foo=bar&baz=qux&baz=quux&corge')
    // returns
    { foo: 'bar', baz: ['qux', 'quux'], corge: '' }
    
    // Suppose gbkDecodeURIComponent function already exists,
    // it can decode `gbk` encoding string
    querystring.parse('w=%D6%D0%CE%C4&foo=bar', null, null,
      { decodeURIComponent: gbkDecodeURIComponent })
    // returns
    { w: '中文', foo: 'bar' }