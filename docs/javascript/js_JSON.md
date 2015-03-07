## JSON

### Summary

The **`JSON`** object contains methods for parsing [JavaScript Object Notation][0] ([JSON][1]) and converting values to JSON. It can't be called or constructed, and aside from its two method properties it has no interesting functionality of its own.

### Description

### JavaScript Object Notation

JSON is a syntax for serializing objects, arrays, numbers, strings, booleans, and [`null`][2]. It is based upon JavaScript syntax but is distinct from it: some JavaScript is not JSON, and some JSON is not JavaScript. See also [JSON: The JavaScript subset that isn't][3].
JavaScript and JSON differences
JavaScript type
JSON differences

Objects and Arrays
Property names must be double-quoted strings; trailing commas are forbidden.

Numbers
Leading zeros are prohibited; a decimal point must be followed by at least one digit.

Strings

Only a limited sets of characters may be escaped; certain control characters are prohibited; the Unicode line separator ([U+2028][4]) and paragraph separator ([U+2029][5]) characters are permitted; strings must be double-quoted. See the following example where [`JSON.parse()`][6] works fine and a [`SyntaxError`][7] is thrown when evaluating the code as JavaScript:

    
    var code = '"\u2028\u2029"';
    JSON.parse(code); // works fine
    eval(code); // fails
    

The full JSON syntax is as follows:

    _JSON_ = **null**
        _or_ **true** _or_ **false**
        _or_ _JSONNumber_
        _or_ _JSONString_
        _or_ _JSONObject_
        _or_ _JSONArray_
    
    _JSONNumber_ = **-** _PositiveNumber_
              _or_ _PositiveNumber_
    _PositiveNumber_ = DecimalNumber
                  _or_ _DecimalNumber_ **.** _Digits_
                  _or_ _DecimalNumber_ **.** _Digits_ _ExponentPart_
                  _or_ _DecimalNumber_ _ExponentPart_
    _DecimalNumber_ = **0**
                 _or_ _OneToNine_ _Digits_
    _ExponentPart_ = **e** _Exponent_
                _or_ **E** _Exponent_
    _Exponent_ = _Digits_
            _or_ **+** _Digits_
            _or_ **-** _Digits_
    _Digits_ = _Digit_
          _or_ _Digits_ _Digit_
    _Digit_ = **0** through **9**
    _OneToNine_ = **1** through **9**
    
    _JSONString_ = **""**
              _or_ **"** _StringCharacters_ **"**
    _StringCharacters_ = _StringCharacter_
                    _or_ _StringCharacters_ _StringCharacter_
    _StringCharacter_ = any character
                      _except_ **"** _or_ **\** _or_ U+0000 through U+001F
                   _or_ _EscapeSequence_
    _EscapeSequence_ = **\"** _or_ **\/** _or_ **\\** _or_ **\b** _or_ **\f** _or_ **\n** _or_ **\r** _or_ **\t**
                  _or_ **\u** _HexDigit_ _HexDigit_ _HexDigit_ _HexDigit_
    _HexDigit_ = **0** through **9**
            _or_ **A** through **F**
            _or_ **a** through **f**
    
    _JSONObject_ = **{** **}**
              _or_ **{** _Members_ **}**
    _Members_ = _JSONString_ **:** _JSON_
           _or_ _Members_ **,** _JSONString_ **:** _JSON_
    
    _JSONArray_ = **[** **]**
             _or_ **[** _ArrayElements_ **]**
    _ArrayElements_ = _JSON_
                 _or_ _ArrayElements_ **,** _JSON_
    

Insignificant whitespace may be present anywhere except within a `_JSONNumber_` (numbers must contain no whitespace) or `_JSONString_` (where it is interpreted as the corresponding character in the string, or would cause an error). The tab character ([U+0009][8]), carriage return ([U+000D][9]), line feed ([U+000A][10]), and space ([U+0020][11]) characters are the only valid whitespace characters.

### Methods

**[`JSON.parse()`][6]**

> Parse a string as JSON, optionally transform the produced value and its properties, and return the value.

**[`JSON.stringify()`][12]**

> Return a JSON string corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner.

### Polyfill

The `JSON` object is not supported in older browsers. You can work around this by inserting the following code at the beginning of your scripts, allowing use of `JSON` object in implementations which do not natively support it (like Internet Explorer 6).

The following algorithm is an imitation of the native `JSON` object:

    if (!window.JSON) {
      window.JSON = {
        parse: function(sJSON) { return eval('(' + sJSON + ')'); },
        stringify: function(vContent) {
          if (vContent instanceof Object) {
            var sOutput = '';
            if (vContent.constructor === Array) {
              for (var nId = 0; nId < vContent.length; sOutput += this.stringify(vContent[nId]) + ',', nId++);
              return '[' + sOutput.substr(0, sOutput.length - 1) + ']';
            }
            if (vContent.toString !== Object.prototype.toString) {
              return '"' + vContent.toString().replace(/"/g, '\\$&') + '"';
            }
            for (var sProp in vContent) {
              sOutput += '"' + sProp.replace(/"/g, '\\$&') + '":' + this.stringify(vContent[sProp]) + ',';
            }
            return '{' + sOutput.substr(0, sOutput.length - 1) + '}';
         }
         return typeof vContent === 'string' ? '"' + vContent.replace(/"/g, '\\$&') + '"' : String(vContent);
        }
      };
    }
    

More complex well-known [polyfills][13] for the `JSON` object are [JSON2][14] and [JSON3][15].


[0]: http://json.org/
[1]: https://developer.mozilla.org/en/docs/Glossary/JSON "JSON: The JavaScript Object Notation (JSON) is a data-interchange format.  It closely resembles a subset of JavaScript syntax, although it is not a strict subset. Even if It is useful when writing any kind of JavaScript-based application, including websites and browser extensions, it is also supported by many other programming language."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/null "The value null is a JavaScript literal representing null or an "empty" value, i.e. no object value is present. It is one of JavaScript's primitive values."
[3]: http://timelessrepo.com/json-isnt-a-javascript-subset
[4]: http://unicode-table.comhttps://developer.mozilla.org/en/2028/
[5]: http://unicode-table.comhttps://developer.mozilla.org/en/2029/
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse "The JSON.parse() method parses a string as JSON, optionally transforming the value produced by parsing."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "The SyntaxError object represents an error when trying to interpret syntactically invalid code."
[8]: http://unicode-table.comhttps://developer.mozilla.org/en/0009/
[9]: http://unicode-table.comhttps://developer.mozilla.org/en/000D/
[10]: http://unicode-table.comhttps://developer.mozilla.org/en/000A/
[11]: http://unicode-table.comhttps://developer.mozilla.org/en/0020/
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify "The JSON.stringify() method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified."
[13]: http://remysharp.com/2010/10/08/what-is-a-polyfill/
[14]: https://github.com/douglascrockford/JSON-js
[15]: http://bestiejs.github.com/json3