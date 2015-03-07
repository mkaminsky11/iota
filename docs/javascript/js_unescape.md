## unescape

**Deprecated**  
This feature has been removed from the Web standards. Though some browsers may still support it, it is in the process of being dropped. Do not use it in old or new projects. Pages or Web apps using it may break at any time.

### Summary

The deprecated `**unescape()**` method computes a new string in which hexadecimal escape sequences are replaced with the character that it represents. The escape sequences might be introduced by a function like [`escape`][0]. Because `unescape` is deprecated, use [`decodeURI`][1] or [`decodeURIComponent`][2] instead.

**Note:** Do not use `unescape` to decode URIs, use `decodeURI` instead.

### Syntax

    unescape(str)

### Parameters

**`str`**

> A string to be decoded.

### Description

The `unescape` function is a property of the _global object_.

### Examples

    unescape("abc123");     // "abc123"
    unescape("%E4%F6%FC");  // "äöü"
    unescape("%u0107");     // "ć"
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/escape "The deprecated escape() method computes a new string in which certain characters have been replaced by a hexadecimal escape sequence. Use encodeURI or encodeURIComponent instead."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/decodeURI "The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent "The decodeURIComponent() method decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine."