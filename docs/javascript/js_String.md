## String

### Summary

The **`String`** global object is a constructor for strings, or a sequence of characters.

### Syntax

String literals take the forms:

    'string text'
    "string text"
    "中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어 தமிழ்"
    

Beside regular, printable characters, special characters can be encoded using escape notation:
Code
Output

`\0`
the NUL character

`\'`
single quote

`\"`
double quote

`\\`
backslash

`\n`
new line

`\r`
carriage return

`\v`
vertical tab

`\t`
tab

`\b`
backspace

`\f`
form feed

`\uXXXX`
unicode codepoint

`\xXX`
the Latin-1 character

Or, using the `String` global object directly:

    String(thing)
    new String(thing)
    

### Parameters

**`thing`**

> Anything to be converted to a string.

### Description

Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their [`length`][0], to build and concatenate them using the [+ and += string operators][1], checking for the existence or location of substrings with the [`indexOf()`][2] method, or extracting substrings with the [`substring()`][3] method.

### Character access

There are two ways to access an individual character in a string. The first is the [`charAt()`][4] method:

    return 'cat'.charAt(1); // returns "a"
    

The other way (introduced in ECMAScript 5) is to treat the string as an array-like object, where individual characters correspond to a numerical index:

    return 'cat'[1]; // returns "a"
    

For character access using bracket notation, attempting to delete or assign a value to these properties will not succeed. The properties involved are neither writable nor configurable. (See [`Object.defineProperty()`][5] for more information.)

### Comparing strings

C developers have the `strcmp()` function for comparing strings. In JavaScript, you just use the [less-than and greater-than operators][6]:

    var a = 'a';
    var b = 'b';
    if (a < b) { // true
      print(a + ' is less than ' + b);
    } else if (a > b) {
      print(a + ' is greater than ' + b);
    } else {
      print(a + ' and ' + b + ' are equal.');
    }
    

A similar result can be achieved using the [`localeCompare()`][7] method inherited by `String` instances.

### Distinction between string primitives and `String` objects

Note that JavaScript distinguishes between `String` objects and primitive string values. (The same is true of [`Boolean`][8] and [`Numbers`][9].)

String literals (denoted by double or single quotes) and strings returned from `String` calls in a non-constructor context (i.e., without using the [`new`][10] keyword) are primitive strings. JavaScript automatically converts primitives to `String` objects, so that it's possible to use `String` object methods for primitive strings. In contexts where a method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap the string primitive and call the method or perform the property lookup.

    var s_prim = 'foo';
    var s_obj = new String(s_prim);
    
    console.log(typeof s_prim); // Logs "string"
    console.log(typeof s_obj);  // Logs "object"
    

String primitives and `String` objects also give different results when using [`eval()`][11]. Primitives passed to `eval` are treated as source code; `String` objects are treated as all other objects are, by returning the object. For example:

    var s1 = '2 + 2';             // creates a string primitive
    var s2 = new String('2 + 2'); // creates a String object
    console.log(eval(s1));        // returns the number 4
    console.log(eval(s2));        // returns the string "2 + 2"
    

For these reasons, code may break when it encounters `String` objects when it expects a primitive string instead, although generally authors need not worry about the distinction.

A `String` object can always be converted to its primitive counterpart with the [`valueOf()`][12] method.

    console.log(eval(s2.valueOf())); // returns the number 4
    

**Note:** For another possible approach to strings in JavaScript, please read the article about [`StringView` --- a C-like representation of strings based on typed arrays][13].

### Properties
_For properties available on `String` instances, see [Properties of String instances][14]._

**[`String.prototype`][15]**

> Allows the addition of properties to a `String` object.

Properties inherited from [`Function`][16]:
[`arity`][17], [`caller`][18], [`constructor`][19], [`length`][20], [`name`][21]

### Methods
_For methods available on `String` instances, see [Methods of String instances][22]._

**[`String.fromCharCode()`][23]**

> Returns a string created by using the specified sequence of Unicode values.

**[`String.fromCodePoint()`][24] __**

> Returns a string created by using the specified sequence of code points.

**[`String.raw()`][25] __**

> Returns a string created from a raw template string.

Methods inherited from [`Function`][16]:
[`apply`][26], [`call`][27], [`toSource`][28], [`toString`][29]

### `String` generic methods

The `String` instance methods are also available in Firefox as of JavaScript 1.6 (though not part of the ECMAScript standard) on the `String` object for applying `String` methods to any object:

    var num = 15;
    console.log(String.replace(num, /5/, '2'));
    

[Generics][30] are also available on [`Array`][31] methods.

The following is a shim to provide support to non-supporting browsers:

    /*globals define*/
    // Assumes all supplied String instance methods already present
    // (one may use shims for these if not available)
    (function() {
      'use strict';
    
      var i,
        // We could also build the array of methods with the following, but the
        //   getOwnPropertyNames() method is non-shimable:
        // Object.getOwnPropertyNames(String).filter(function(methodName) {
        //   return typeof String[methodName] === 'function';
        // });
        methods = [
          'quote', 'substring', 'toLowerCase', 'toUpperCase', 'charAt',
          'charCodeAt', 'indexOf', 'lastIndexOf', 'startsWith', 'endsWith',
          'trim', 'trimLeft', 'trimRight', 'toLocaleLowerCase',
          'toLocaleUpperCase', 'localeCompare', 'match', 'search',
          'replace', 'split', 'substr', 'concat', 'slice'
        ],
        methodCount = methods.length,
        assignStringGeneric = function(methodName) {
          var method = String.prototype[methodName];
          String[methodName] = function(arg1) {
            return method.apply(arg1, Array.prototype.slice.call(arguments, 1));
          };
        };
    
      for (i = 0; i < methodCount; i++) {
        assignStringGeneric(methods[i]);
      }
    }());
    

### `String` instances

### Properties

**`String.prototype.constructor`**

> Specifies the function that creates an object's prototype.

**[`String.prototype.length`][0]**

> Reflects the length of the string.

**`_N_`**

> Used to access the character in the _N_th position where _N_ is a positive integer between 0 and one less than the value of [`length`][0]. These properties are read-only.

### Methods

#### Methods unrelated to HTML

**[`String.prototype.charAt()`][4]**

> Returns the character at the specified index.

**[`String.prototype.charCodeAt()`][32]**

> Returns a number indicating the Unicode value of the character at the given index.

**[`String.prototype.codePointAt()`][33] __**

> Returns a non-negative integer that is the UTF-16 encoded code point value at the given position.

**[`String.prototype.concat()`][34]**

> Combines the text of two strings and returns a new string.

**[`String.prototype.includes()`][35] __**

> Determines whether one string may be found within another string.

**[`String.prototype.endsWith()`][36] __**

> Determines whether a string ends with the characters of another string.

**[`String.prototype.indexOf()`][2]**

> Returns the index within the calling [`String`][37] object of the first occurrence of the specified value, or -1 if not found.

**[`String.prototype.lastIndexOf()`][38]**

> Returns the index within the calling [`String`][37] object of the last occurrence of the specified value, or -1 if not found.

**[`String.prototype.localeCompare()`][7]**

> Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.

**[`String.prototype.match()`][39]**

> Used to match a regular expression against a string.

**[`String.prototype.normalize()`][40] __**

> Returns the Unicode Normalization Form of the calling string value.

**[`String.prototype.quote()`][41] __**

> Wraps the string in double quotes ("`"`").

**[`String.prototype.repeat()`][42] __**

> Returns a string consisting of the elements of the object repeated the given times.

**[`String.prototype.replace()`][43]**

> Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.

**[`String.prototype.search()`][44]**

> Executes the search for a match between a regular expression and a specified string.

**[`String.prototype.slice()`][45]**

> Extracts a section of a string and returns a new string.

**[`String.prototype.split()`][46]**

> Splits a [`String`][37] object into an array of strings by separating the string into substrings.

**[`String.prototype.startsWith()`][47] __**

> Determines whether a string begins with the characters of another string.

**[`String.prototype.substr()`][48]**

> Returns the characters in a string beginning at the specified location through the specified number of characters.

**[`String.prototype.substring()`][3]**

> Returns the characters in a string between two indexes into the string.

**[`String.prototype.toLocaleLowerCase()`][49]**

> The characters within a string are converted to lower case while respecting the current locale. For most languages, this will return the same as [`toLowerCase()`][50].

**[`String.prototype.toLocaleUpperCase()`][51]**

> The characters within a string are converted to upper case while respecting the current locale. For most languages, this will return the same as [`toUpperCase()`][52].

**[`String.prototype.toLowerCase()`][50]**

> Returns the calling string value converted to lower case.

**[`String.prototype.toSource()`][53] __**

> Returns an object literal representing the specified object; you can use this value to create a new object. Overrides the [`Object.prototype.toSource()`][54] method.

**[`String.prototype.toString()`][55]**

> Returns a string representing the specified object. Overrides the [`Object.prototype.toString()`][56] method.

**[`String.prototype.toUpperCase()`][52]**

> Returns the calling string value converted to uppercase.

**[`String.prototype.trim()`][57]**

> Trims whitespace from the beginning and end of the string. Part of the ECMAScript 5 standard.

**[`String.prototype.trimLeft()`][58] __**

> Trims whitespace from the left side of the string.

**[`String.prototype.trimRight()`][59] __**

> Trims whitespace from the right side of the string.

**[`String.prototype.valueOf()`][12]**

> Returns the primitive value of the specified object. Overrides the [`Object.prototype.valueOf()`][60] method.

**[`String.prototype[@@iterator]()`][61] __**

> Returns a new `Iterator` object that iterates over the code points of a String value, returning each code point as a String value.

#### HTML wrapper methods

These methods are of limited use, as they provide only a subset of the available HTML tags and attributes.

**[`String.prototype.anchor()`][62]**

> `[<a name="_name_">][63]` (hypertext target)

**[`String.prototype.big()`][64] __**

> [`<big>`][65]

**[`String.prototype.blink()`][66] __**

> [`<blink>`][67]

**[`String.prototype.bold()`][68] __**

> [`<b>`][69]

**[`String.prototype.fixed()`][70] __**

> [`<tt>`][71]

**[`String.prototype.fontcolor()`][72] __**

> [`<font color="_color_">`][73]

**[`String.prototype.fontsize()`][74] __**

> [`<font size="_size_">`][75]

**[`String.prototype.italics()`][76] __**

> [`<i>`][77]

**[`String.prototype.link()`][78]**

> [`<a href="_url_">`][79] (link to URL)

**[`String.prototype.small()`][80] __**

> [`<small>`][81]

**[`String.prototype.strike()`][82] __**

> [`<strike>`][83]

**[`String.prototype.sub()`][84] __**

> [`<sub>`][85]

**[`String.prototype.sup()`][86] __**

> [`<sup>`][87]

### Examples

### Example: String conversion

It's possible to use `String` as a "safer" [`toString()`][55] alternative, as although it still normally calls the underlying `toString()`, it also works for [`null`][88] and [`undefined`][89]. For example:

    var outputStrings = [];
    for (var i = 0, n = inputValues.length; i < n; ++i) {
      outputStrings.push(String(inputValues[i]));
    }
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/length "The length property represents the length of a string."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/String_Operators
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf "The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/substring "The substring() method returns a subset of a string between one index and another, or through the end of the string."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/charAt "The charAt() method returns the specified character from a string."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare "The localeCompare() method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Boolean "The Boolean object is an object wrapper for a boolean value."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number "The Number JavaScript object is a wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor."
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/new "The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function."
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/eval "The eval() method evaluates JavaScript code represented as a string."
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf "The valueOf() method returns the primitive value of a String object."
[13]: https://developer.mozilla.org/en/Add-ons/Code_snippets/StringView
[14]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/prototype#Properties
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/prototype "The String.prototype property represents the String prototype object."
[16]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function
[17]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Arity
[18]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Caller
[19]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Constructor
[20]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Length
[21]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Name
[22]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/prototype#Methods
[23]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode "The static String.fromCharCode() method returns a string created by using the specified sequence of Unicode values."
[24]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint "The static String.fromCodePoint() method returns a string created by using the specified sequence of code points."
[25]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/raw "The static String.raw() method is a tag function of template strings, like the r prefix in Python or the @ prefix in C# for string literals, this function is used to get the raw string form of template strings."
[26]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Apply
[27]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Call
[28]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/ToSource
[29]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/ToString
[30]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array#Array_generic_methods "The JavaScript Array global object is a constructor for arrays, which are high-level, list-like objects."
[31]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array "The JavaScript Array global object is a constructor for arrays, which are high-level, list-like objects."
[32]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt "The charCodeAt() method returns the numeric Unicode value of the character at the given index (except for unicode codepoints > 0x10000)."
[33]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt "The codePointAt() method returns a non-negative integer that is the UTF-16 encoded code point value."
[34]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/concat "The concat() method combines the text of two or more strings and returns a new string."
[35]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/includes "The includes() method determines whether one string may be found within another string, returning true or false as appropriate."
[36]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith "The endsWith() method determines whether a string ends with the characters of another string, returning true or false as appropriate."
[37]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String "The String global object is a constructor for strings, or a sequence of characters."
[38]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf "The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found. The calling string is searched backward, starting at fromIndex."
[39]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/match "The match() method retrieves the matches when matching a string against a regular expression."
[40]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/normalize "The normalize() method returns the Unicode Normalization Form of a given string (if the value isn't a string, it will be converted to one first)."
[41]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/quote "The non-standard quote() method returns a copy of the string, replacing various special characters in the string with their escape sequences and wrapping the result in double-quotes (")."
[42]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/repeat "The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together."
[43]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/replace "The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match."
[44]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/search "The search() method executes a search for a match between a regular expression and this String object."
[45]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/slice "The slice() method extracts a section of a string and returns a new string."
[46]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/split "The split() method splits a String object into an array of strings by separating the string into substrings."
[47]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith "The startsWith() method determines whether a string begins with the characters of another string, returning true or false as appropriate."
[48]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/substr "The substr() method returns the characters in a string beginning at the specified location through the specified number of characters."
[49]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase "The toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings."
[50]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase "The toLowerCase() method returns the calling string value converted to lowercase."
[51]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase "The toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings."
[52]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase "The toUpperCase() method returns the calling string value converted to uppercase."
[53]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toSource "The toSource() method returns a string representing the source code of the object."
[54]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "The toSource() method returns a string representing the source code of the object."
[55]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toString "The toString() method returns a string representing the specified object."
[56]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "The toString() method returns a string representing object."
[57]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/trim "The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.)."
[58]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/trimLeft "The trimLeft() removes whitespace from the left end of the string."
[59]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/trimRight "The trimRight() method removes whitespace from the right end of the string."
[60]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf "The valueOf() method returns the primitive value of the specified object."
[61]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator "The [@@iterator]() method returns a new Iterator object that iterates over the code points of a String value, returning each code point as a String value."
[62]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/anchor "The anchor() method creates an <a> HTML anchor element that is used as a hypertext target."
[63]: https://developer.mozilla.org/en/docs/Web/HTML/Element/a#attr-name
[64]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/big "The big() method creates a <big> HTML element that causes a string to be displayed in a big font."
[65]: https://developer.mozilla.org/en/docs/Web/HTML/Element/big "The HTML Big Element (<big>) makes the text font size one size bigger (for example, from small to medium, or from large to x-large) up to the browser's maximum font size."
[66]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/blink "The blink() method creates a <blink> HTML element that causes a string to blink."
[67]: https://developer.mozilla.org/en/docs/Web/HTML/Element/blink "The HTML Blink Element (<blink>) is a non-standard element causing the enclosed text to flash slowly."
[68]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/bold "The bold() method creates a <b> HTML element that causes a string to be displayed as bold."
[69]: https://developer.mozilla.org/en/docs/Web/HTML/Element/b "The HTML <b> Element represents a span of text stylistically different from normal text, without conveying any special importance or relevance. It is typically used for keywords in a summary, product names in a review, or other spans of text whose typical presentation would be boldfaced. Another example of its use is to mark the lead sentence of each paragraph of an article."
[70]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/fixed "The fixed() method creates a <tt> HTML element that causes a string to be displayed in fixed-pitch font."
[71]: https://developer.mozilla.org/en/docs/Web/HTML/Element/tt "The HTML Teletype Text Element (<tt>) produces an inline element displayed in the browser's default monotype font. This element was intended to style text as it would display on a fixed width display, such as a teletype. It probably is more common to display fixed width type using the <code> element."
[72]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/fontcolor "The fontcolor() method creates a <font> HTML element that causes a string to be displayed in the specified font color."
[73]: https://developer.mozilla.org/en/docs/Web/HTML/Element/font#attr-color
[74]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/fontsize "The fontsize() method creates a <font> HTML element that causes a string to be displayed in the specified font size."
[75]: https://developer.mozilla.org/en/docs/Web/HTML/Element/font#attr-size
[76]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/italics "The italics() method creates an <i> HTML element that causes a string to be italic."
[77]: https://developer.mozilla.org/en/docs/Web/HTML/Element/i "The HTML <i> Element represents a range of text that is set off from the normal text for some reason, for example, technical terms, foreign language phrases, or fictional character thoughts. It is typically displayed in italic type."
[78]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/link "The link() method creates an <a> HTML element that causes a string to be displayed as a hypertext link to another URL."
[79]: https://developer.mozilla.org/en/docs/Web/HTML/Element/a#attr-href
[80]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/small "The small() method creates a <small> HTML element that causes a string to be displayed in a small font."
[81]: https://developer.mozilla.org/en/docs/Web/HTML/Element/small "The HTML Small Element (<small>) makes the text font size one size smaller (for example, from large to medium, or from small to x-small) down to the browser's minimum font size.  In HTML5, this element is repurposed to represent side-comments and small print, including copyright and legal text, independent of its styled presentation."
[82]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/strike "The strike() method creates a <strike> HTML element that causes a string to be displayed as struck-out text."
[83]: https://developer.mozilla.org/en/docs/Web/HTML/Element/strike "The HTML Strikethrough Element (<strike>) renders text with a strikethrough, or a line through it."
[84]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/sub "The sub() method creates a <sub> HTML element that causes a string to be displayed as subscript."
[85]: https://developer.mozilla.org/en/docs/Web/HTML/Element/sub "The HTML Subscript Element (<sub>) defines a span of text that should be displayed, for typographic reasons, lower, and often smaller, than the main span of text."
[86]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/sup "The sup() method creates a <sup> HTML element that causes a string to be displayed as superscript."
[87]: https://developer.mozilla.org/en/docs/Web/HTML/Element/sup "The HTML Superscript Element (<sup>) defines a span of text that should be displayed, for typographic reasons, higher, and often smaller, than the main span of text."
[88]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/null "The value null is a JavaScript literal representing null or an "empty" value, i.e. no object value is present. It is one of JavaScript's primitive values."
[89]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/undefined "The global undefined value property represents the value undefined. It is one of JavaScript's primitive types."