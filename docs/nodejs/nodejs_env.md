## process.env

## 

An object containing the user environment. See environ(7).

An example of this object looks like:

    { TERM: 'xterm-256color',
      SHELL: '/usr/local/bin/bash',
      USER: 'maciej',
      PATH: '~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin',
      PWD: '/Users/maciej',
      EDITOR: 'vim',
      SHLVL: '1',
      HOME: '/Users/maciej',
      LOGNAME: 'maciej',
      _: '/usr/local/bin/node' }

You can write to this object, but changes won't be reflected outside of your
process. That means that the following won't work:

    node -e 'process.env.foo = "bar"' && echo $foo

But this will:

    process.env.foo = 'bar';
    console.log(process.env.foo);