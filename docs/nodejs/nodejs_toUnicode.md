## punycode.toUnicode(domain)

## 

Converts a Punycode string representing a domain name to Unicode. Only the
Punycoded parts of the domain name will be converted, i.e. it doesn't matter if
you call it on a string that has already been converted to Unicode.

    // decode domain names
    punycode.toUnicode('xn--maana-pta.com'); // 'mañana.com'
    punycode.toUnicode('xn----dqo34k.com'); // '☃-⌘.com'