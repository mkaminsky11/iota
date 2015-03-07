## path.delimiter

## 

The platform-specific path delimiter, `;` or `':'`.

An example on \*nix:

    console.log(process.env.PATH)
    // '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'
    
    process.env.PATH.split(path.delimiter)
    // returns
    ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']

An example on Windows:

    console.log(process.env.PATH)
    // 'C:\Windows\system32;C:\Windows;C:\Program Files\nodejs\'
    
    process.env.PATH.split(path.delimiter)
    // returns
    ['C:\Windows\system32', 'C:\Windows', 'C:\Program Files\nodejs\']