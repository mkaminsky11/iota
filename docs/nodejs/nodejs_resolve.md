## url.resolve(from, to)

## 

Take a base URL, and a href URL, and resolve them as a browser would for
an anchor tag. Examples:

    url.resolve('/one/two/three', 'four')         // '/one/two/four'
    url.resolve('http://example.com/', '/one')    // 'http://example.com/one'
    url.resolve('http://example.com/one', '/two') // 'http://example.com/two'