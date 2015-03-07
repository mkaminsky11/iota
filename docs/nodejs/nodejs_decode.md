## punycode.decode(string)

## 

Converts a Punycode string of ASCII-only symbols to a string of Unicode symbols.

    // decode domain name parts
    punycode.decode('maana-pta'); // 'mañana'
    punycode.decode('--dqo34k'); // '☃-⌘'