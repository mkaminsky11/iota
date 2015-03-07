## punycode.encode(string)

## 

Converts a string of Unicode symbols to a Punycode string of ASCII-only symbols.

    // encode domain name parts
    punycode.encode('mañana'); // 'maana-pta'
    punycode.encode('☃-⌘'); // '--dqo34k'