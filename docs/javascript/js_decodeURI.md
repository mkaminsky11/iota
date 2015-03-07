## decodeURI

### Summary

The `**decodeURI()**` function decodes a Uniform Resource Identifier (URI) previously created by [`encodeURI`][0] or by a similar routine.

### Syntax

    decodeURI(_encodedURI_)

### Parameters

**`encodedURI`**

> A complete, encoded Uniform Resource Identifier.

### Description

Replaces each escape sequence in the encoded URI with the character that it represents, but does not decode escape sequences that could not have been introduced by [`encodeURI`][0]. The character "`#`" is not decoded from escape sequences.

### Examples

### Decoding a Cyrillic URL

    decodeURI("https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
    // "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURI "The encodeURI() method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters)."