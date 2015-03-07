## decodeURIComponent

### Summary

The `**decodeURIComponent()**` method decodes a Uniform Resource Identifier (URI) component previously created by [`encodeURIComponent`][0] or by a similar routine.

### Syntax

    decodeURIComponent(_encodedURI_)

### Parameters

**`encodedURI`**

> An encoded component of a Uniform Resource Identifier.

### Description

Replaces each escape sequence in the encoded URI component with the character that it represents.

### Examples

### Decoding a Cyrillic URL component

    decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
    // "JavaScript_шеллы"
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent "The encodeURIComponent() method encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters)."