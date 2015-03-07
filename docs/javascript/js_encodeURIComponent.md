## encodeURIComponent

### Summary

The `**encodeURIComponent()**` method encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).

### Syntax

    encodeURIComponent(str);

### Parameters

**`str`**

> String. A component of a URI.

### Description

`encodeURIComponent` escapes all characters except the following: alphabetic, decimal digits, `- _ . ! ~ * ' ( )`

Note that an [`URIError`][0] will be thrown if one attempts to encode a surrogate which is not part of a high-low pair, e.g.,

    // high-low pair ok
    console.log(encodeURIComponent('\uD800\uDFFF'));
    
    // lone high surrogate throws "URIError: malformed URI sequence"
    console.log(encodeURIComponent('\uD800'));
    
    // lone low surrogate throws "URIError: malformed URI sequence"
    console.log(encodeURIComponent('\uDFFF')); 
    

To avoid unexpected requests to the server, you should call `encodeURIComponent` on any user-entered parameters that will be passed as part of a URI. For example, a user could type "`Thyme &time=again`" for a variable `comment`. Not using `encodeURIComponent` on this variable will give `comment=Thyme%20&time=again`. Note that the ampersand and the equal sign mark a new key and value pair. So instead of having a POST `comment` key equal to "`Thyme &time=again`", you have two POST keys, one equal to "`Thyme `" and another (`time`) equal to `again`.

For [`application/x-www-form-urlencoded`][1], spaces are to be replaced by '+', so one may wish to follow a `encodeURIComponent` replacement with an additional replacement of "%20" with "+".

To be more stringent in adhering to [RFC 3986][2] (which reserves !, ', (, ), and \*), even though these characters have no formalized URI delimiting uses, the following can be safely used:

    function fixedEncodeURIComponent (str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
        return '%' + c.charCodeAt(0).toString(16);
      });
    }
    

### Examples

The following example provides the special encoding required within UTF-8 `Content-Disposition` and `Link` server response header parameters (e.g., UTF-8 filenames):

    var fileName = 'my file(2).txt';
    var header = "Content-Disposition: attachment; filename*=UTF-8''" 
                 + encodeRFC5987ValueChars(fileName);
    
    console.log(header); 
    // logs "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"
    
    
    function encodeRFC5987ValueChars (str) {
        return encodeURIComponent(str).
            // Note that although RFC3986 reserves "!", RFC5987 does not,
            // so we do not need to escape it
            replace(/['()]/g, escape). // i.e., %27 %28 %29
            replace(/\*/g, '%2A').
                // The following are not required for percent-encoding per RFC5987, 
                // so we can allow for a little better readability over the wire: |`^
                replace(/%(?:7C|60|5E)/g, unescape);
    }
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/URIError "The URIError object represents an error when a global URI handling function was used in a wrong way."
[1]: http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#application/x-www-form-urlencoded-encoding-algorithm
[2]: http://tools.ietf.org/html/rfc3986