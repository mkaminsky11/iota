## encodeURI

### Summary

The `**encodeURI()**` method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).

### Syntax

    encodeURI(_URI_)

### Parameters

**`URI`**

> A complete Uniform Resource Identifier.

### Description

Assumes that the URI is a complete URI, so does not encode reserved characters that have special meaning in the URI.

`encodeURI` replaces all characters except the following with the appropriate UTF-8 escape sequences:
Type
Includes

Reserved characters
`;` `,` `/` `?` `:` `@` `&` `=` `+` `$`

Unescaped characters
alphabetic, decimal digits, `-` `_` `.` `!` `~` `*` `'` `(` `)`

Score
`#`

Note that `encodeURI` by itself _cannot_ form proper HTTP GET and POST requests, such as for XMLHTTPRequests, because "&", "+", and "=" are not encoded, which are treated as special characters in GET and POST requests. [`encodeURIComponent`][0], however, does encode these characters.

Note that an [`URIError`][1] will be thrown if one attempts to encode a surrogate which is not part of a high-low pair, e.g.,

    // high-low pair ok
    alert(encodeURI('\uD800\uDFFF'));
    
    // lone high surrogate throws "URIError: malformed URI sequence"
    alert(encodeURI('\uD800'));
    
    // lone low surrogate throws "URIError: malformed URI sequence"
    alert(encodeURI('\uDFFF')); 

Also note that if one wishes to follow the more recent [RFC3986][2] for URLs, which makes square brackets reserved (for IPv6) and thus not encoded when forming something which could be part of a URL (such as a host), the following code snippet may help:

    function fixedEncodeURI (str) {
        return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
    }



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent "The encodeURIComponent() method encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters)."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/URIError "The URIError object represents an error when a global URI handling function was used in a wrong way."
[2]: http://tools.ietf.org/html/rfc3986