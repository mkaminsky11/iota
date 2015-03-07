## path.basename(p\[, ext\])

## 

Return the last portion of a path. Similar to the Unix `basename` command.

Example:

    path.basename('/foo/bar/baz/asdf/quux.html')
    // returns
    'quux.html'
    
    path.basename('/foo/bar/baz/asdf/quux.html', '.html')
    // returns
    'quux'