## path.relative(from, to)

## 

Solve the relative path from `from` to `to`.

At times we have two absolute paths, and we need to derive the relative
path from one to the other. This is actually the reverse transform of
`path.resolve`, which means we see that:

    path.resolve(from, path.relative(from, to)) == path.resolve(to)

Examples:

    path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb')
    // returns
    '..\\..\\impl\\bbb'
    
    path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')
    // returns
    '../../impl/bbb'