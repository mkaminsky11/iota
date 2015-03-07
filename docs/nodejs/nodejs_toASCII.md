## punycode.toASCII(domain)

## 

Converts a Unicode string representing a domain name to Punycode. Only the
non-ASCII parts of the domain name will be converted, i.e. it doesn't matter if
you call it with a domain that's already in ASCII.

    // encode domain names
    punycode.toASCII('mañana.com'); // 'xn--maana-pta.com'
    punycode.toASCII('☃-⌘.com'); // 'xn----dqo34k.com'