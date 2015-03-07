## escape

**Deprecated**  
This feature has been removed from the Web standards. Though some browsers may still support it, it is in the process of being dropped. Do not use it in old or new projects. Pages or Web apps using it may break at any time.

### Summary

The deprecated `**escape()**` method computes a new string in which certain characters have been replaced by a hexadecimal escape sequence. Use [`encodeURI`][0] or [`encodeURIComponent`][1] instead.

### Syntax

    escape(str)

### Parameters

**`str`**

> A string to be encoded.

### Description

The `escape` function is a property of the _global object_. Special characteres are encoded with the exception of: @\*\_+-./

The hexadecimal form for characters, whose code unit value is 0xFF or less, is a two-digit escape sequence: %xx. For characters with a greater code unit, the four-digit format %**u**xxxx is used.

### Examples

    escape("abc123");     // "abc123"
    escape("äöü");        // "%E4%F6%FC"
    escape("ć");          // "%u0107"
    
    // special characters
    escape("@*_+-./");    // "@*_+-./"



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURI "The encodeURI() method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters)."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent "The encodeURIComponent() method encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters)."