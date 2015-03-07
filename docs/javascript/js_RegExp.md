## RegExp

### Summary

The **`RegExp`** constructor creates a regular expression object for matching text with a pattern.

For an introduction on what regular expressions are, read the [Regular Expressions chapter in the JavaScript Guide][0].

### Constructor

Literal and constructor notations are possible:

    /_pattern_/_flags_
    new RegExp(_pattern_[, _flags_])
    

### Parameters

**`pattern`**

> The text of the regular expression.

**`flags`**

> If specified, flags can have any combination of the following values:
> 
> **`g`**
> 
> > global match
> 
> **`i`**
> 
> > ignore case
> 
> **`m`**
> 
> > multiline; treat beginning and end characters (^ and $) as working over multiple lines (i.e., match the beginning or end of _each_ line (delimited by \\n or \\r), not only the very beginning or end of the whole input string)
> 
> **`y` __**
> 
> > sticky; matches only from the index indicated by the `lastIndex` property of this regular expression in the target string (and does not attempt to match from any later indexes).
> 
> 

### Description

There are 2 ways to create a `RegExp` object: a literal notation and a constructor. To indicate strings, the parameters to the literal notation do not use quotation marks while the parameters to the constructor function do use quotation marks. So the following expressions create the same regular expression:

    /ab+c/i;
    new RegExp('ab+c', 'i');
    

The literal notation provides compilation of the regular expression when the expression is evaluated. Use literal notation when the regular expression will remain constant. For example, if you use literal notation to construct a regular expression used in a loop, the regular expression won't be recompiled on each iteration.

The constructor of the regular expression object, for example, `new RegExp('ab+c')`, provides runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.

When using the constructor function, the normal string escape rules (preceding special characters with \\ when included in a string) are necessary. For example, the following are equivalent:

    var re = /\w+/;
    var re = new RegExp('\\w+');
    

### Special characters meaning in regular expressions

* [Character Classes][1]
* [Character Sets][2]
* [Boundaries][3]
* [Grouping and back references][4]
* [Quantifiers][5]
Character Classes

Character
Meaning

`.`

(The dot, the decimal point) matches any single character _except_ the newline characters: `\n`, `\r`, `\u2028` or `\u2029`.

Note that the `m` multiline flag doesn't change the dot behavior. So to match a pattern across multiple lines the character set `[^]` can be used (if you don't mean an old version of IE, of course), it will match any character including newlines.

For example, `/.y/` matches "my" and "ay", but not "yes", in "yes make my day".

`\d`

Matches a digit character in the basic Latin alphabet. Equivalent to `[0-9]`.

For example, `/\d/` or `/[0-9]/` matches "2" in "B2 is the suite number".

`\D`

Matches any character that is not a digit in the basic Latin alphabet. Equivalent to `[^0-9]`.

For example, `/\D/` or `/[^0-9]/` matches "B" in "B2 is the suite number".

`\w`

Matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to `[A-Za-z0-9_]`.

For example, `/\w/` matches "a" in "apple", "5" in "$5.28", and "3" in "3D".

`\W`

Matches any character that is not a word character from the basic Latin alphabet. Equivalent to `[^A-Za-z0-9_]`.

For example, `/\W/` or `/[^A-Za-z0-9_]/` matches "%" in "50%".

`\s`

Matches a single white space character, including space, tab, form feed, line feed and other Unicode spaces. Equivalent to `[ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u202f\u205f​\u3000]`.

For example, `/\s\w*/` matches " bar" in "foo bar".

`\S`

Matches a single character other than white space. Equivalent to `[^ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u202f\u205f​\u3000]`.

For example, `/\S\w*/` matches "foo" in "foo bar".

`\t`
Matches a tab.

`\r`
Matches a carriage return.

`\n`
Matches a linefeed.

`\v`
Matches a vertical tab.

`\f`
Matches a form-feed.

`[\b]`
Matches a backspace. (Not to be confused with `\b`)

`\0`
Matches a NUL character. Do not follow this with another digit.

`\c_X_`

Where `_X_` is a letter from A - Z. Matches a control character in a string.

For example, `/\cM/` matches control-M in a string.

`\x_hh_`
Matches the character with the code `_hh_` (two hexadecimal digits).

`\u_hhhh_`
Matches the character with the Unicode value `_hhhh_` (four hexadecimal digits).

`\`

For characters that are usually treated literally, indicates that the next character is special and not to be interpreted literally.

For example, `/b/` matches the character "b". By placing a backslash in front of "b", that is by using `/\b/`, the character becomes special to mean match a word boundary.

_or_

For characters that are usually treated specially, indicates that the next character is not special and should be interpreted literally.

For example, "\*" is a special character that means 0 or more occurrences of the preceding character should be matched; for example, `/a*/` means match 0 or more "a"s. To match `*` literally, precede it with a backslash; for example, `/a\*/` matches "a\*".

Character Sets

Character
Meaning

`[xyz]`

A character set. Matches any one of the enclosed characters. You can specify a range of characters by using a hyphen.

For example, `[abcd]` is the same as `[a-d]`. They match the "b" in "brisket" and the "c" in "chop".

`[^xyz]`

A negated or complemented character set. That is, it matches anything that is not enclosed in the brackets. You can specify a range of characters by using a hyphen.

For example, `[^abc]` is the same as `[^a-c]`. They initially match "o" in "bacon" and "h" in "chop".

Boundaries

Character
Meaning

`^`

Matches beginning of input. If the multiline flag is set to true, also matches immediately after a line break character.

For example, `/^A/` does not match the "A" in "an A", but does match the first "A" in "An A".

`$`

Matches end of input. If the multiline flag is set to true, also matches immediately before a line break character.

For example, `/t$/` does not match the "t" in "eater", but does match it in "eat".

`\b`

Matches a zero-width word boundary, such as between a letter and a space. (Not to be confused with `[\b]`)

For example, `/\bno/` matches the "no" in "at noon"; `/ly\b/` matches the "ly" in "possibly yesterday".

`\B`

Matches a zero-width non-word boundary, such as between two letters or between two spaces.

For example, `/\Bon/` matches "on" in "at noon", and `/ye\B/` matches "ye" in "possibly yesterday".

Grouping and back references

Character
Meaning

`(_x_)`

Matches `_x_` and remembers the match. These are called capturing parentheses.

For example, `/(foo)/` matches and remembers "foo" in "foo bar". The matched substring can be recalled from the resulting array's elements `[1], ..., [n]` or from the predefined `RegExp` object's properties `$1, ..., $9`.

Capturing groups have a performance penalty. If you don't need the matched substring to be recalled, prefer non-capturing parentheses (see below).

`\_n_`

Where `_n_` is a positive integer. A back reference to the last substring matching the n parenthetical in the regular expression (counting left parentheses).

For example, `/apple(,)\sorange\1/` matches "apple, orange," in "apple, orange, cherry, peach". A more complete example follows this table.

`(?:_x_)`
Matches `_x_` but does not remember the match. These are called non-capturing parentheses. The matched substring can not be recalled from the resulting array's elements `[1], ..., [n]` or from the predefined `RegExp` object's properties `$1, ..., $9`.

Quantifiers

Character
Meaning

`_x_*`

Matches the preceding item _x_ 0 or more times.

For example, `/bo*/` matches "boooo" in "A ghost booooed" and "b" in "A bird warbled", but nothing in "A goat grunted".

`_x_+`

Matches the preceding item _x_ 1 or more times. Equivalent to `{1,}`.

For example, `/a+/` matches the "a" in "candy" and all the "a"'s in "caaaaaaandy".

`_x_*?`  
`_x_+?`

Matches the preceding item _x_ like `*` and `+` from above, however the match is the smallest possible match.

For example, `/".*?"/` matches '"foo"' in '"foo" "bar"' and does not match '"foo" "bar"' as without the `?` behind the `*`.

`_x_?`

Matches the preceding item _x_ 0 or 1 time.

For example, `/e?le?/` matches the "el" in "angel" and the "le" in "angle."

If used immediately after any of the quantifiers `*`, `+`, `?`, or `{}`, makes the quantifier non-greedy (matching the minimum number of times), as opposed to the default, which is greedy (matching the maximum number of times).

Also used in lookahead assertions, described under `(?=) and ``(?!)` in this table.

`_x_(?=_y_)`
Matches `_x_` only if `_x_` is followed by `_y_`. For example, `/Jack(?=Sprat)/` matches "Jack" only if it is followed by "Sprat". `/Jack(?=Sprat|Frost)/` matches "Jack" only if it is followed by "Sprat" or "Frost". However, neither "Sprat" nor "Frost" is part of the match results.

`_x_(?!_y_)`

Matches `_x_` only if `_x_` is not followed by `_y_`. For example, `/\d+(?!\.)/` matches a number only if it is not followed by a decimal point.

`/\d+(?!\.)/.exec('3.141')` matches "141" but not "3.141".

`_x_|_y_`

Matches either `_x_` or `_y_`.

For example, `/green|red/` matches "green" in "green apple" and "red" in "red apple".

`_x_{_n_}`

Where `_n_` is a positive integer. Matches exactly `_n_` occurrences of the preceding item _x_.

For example, `/a{2}/` doesn't match the "a" in "candy", but it matches all of the "a"'s in "caandy", and the first two "a"'s in "caaandy".

`_x_{_n_,}`

Where `_n_` is a positive integer. Matches at least `_n_` occurrences of the preceding item _x_.

For example, `/a{2,}/` doesn't match the "a" in "candy", but matches all of the a's in "caandy" and in "caaaaaaandy".

`_x_{_n_,_m_}`

Where `_n_` and `_m_` are positive integers. Matches at least `_n_` and at most `_m_` occurrences of the preceding item _x_.

For example, `/a{1,3}/` matches nothing in "cndy", the "a" in "candy", the two "a"'s in "caandy", and the first three "a"'s in "caaaaaaandy". Notice that when matching "caaaaaaandy", the match is "aaa", even though the original string had more "a"'s in it.

### Properties
_For properties available on `RegExp` instances, see [Properties of RegExp instances][6]._

**[`RegExp.prototype`][7]**

> Allows the addition of properties to all objects.

**`RegExp.length`**

> The value of `RegExp.length` is 2\.

**[`RegExp.lastIndex`][8]**

> The index at which to start the next match.

### Methods
_For methods available on `RegExp` instances, see [Methods of RegExp instances][9]._

The global `RegExp` object has no methods of its own, however, it does inherit some methods through the prototype chain.

### `RegExp` prototype objects and instances

### Properties

See also [deprecated `RegExp` properties.][10]

Note that several of the [`RegExp`][11] properties have both long and short (Perl-like) names. Both names always refer to the same value. Perl is the programming language from which JavaScript modeled its regular expressions.

**`RegExp.prototype.constructor`**

> Specifies the function that creates an object's prototype.

**[`RegExp.prototype.flags`][12] __**

> A string that contains the flags of the `RegExp` object.

**[`RegExp.prototype.global`][13]**

> Whether to test the regular expression against all possible matches in a string, or only against the first.

**[`RegExp.prototype.ignoreCase`][14]**

> Whether to ignore case while attempting a match in a string.

**[`RegExp.prototype.multiline`][15]**

> Whether or not to search in strings across multiple lines.

**[`RegExp.prototype.source`][16]**

> The text of the pattern.

**[`RegExp.prototype.sticky`][17] __**

> Whether or not the search is sticky.

**[`RegExp.prototype.unicode`][18] __**

> Whether or not Unicode features are enabled.

### Methods

**[`RegExp.prototype.compile()`][19] __**

> (Re-)compiles a regular expression during execution of a script.

**[`RegExp.prototype.exec()`][20]**

> Executes a search for a match in its string parameter.

**[`RegExp.prototype.test()`][21]**

> Tests for a match in its string parameter.

**[`RegExp.prototype.toSource()`][22] __**

> Returns an object literal representing the specified object; you can use this value to create a new object. Overrides the [`Object.prototype.toSource()`][23] method.

**[`RegExp.prototype.toString()`][24]**

> Returns a string representing the specified object. Overrides the [`Object.prototype.toString()`][25] method.

### Examples

### Example: Using a regular expression to change data format

The following script uses the [`replace()`][26] method of the [`String`][27] instance to match a name in the format _first last_ and output it in the format _last, first_. In the replacement text, the script uses `$1` and `$2` to indicate the results of the corresponding matching parentheses in the regular expression pattern.

    var re = /(\w+)\s(\w+)/;
    var str = 'John Smith';
    var newstr = str.replace(re, '$2, $1');
    console.log(newstr);
    

This displays "Smith, John".

### Example: Using regular expression to split lines with different **line endings/ends of line/line breaks**

The default line ending varies depending on the platform (Unix, Windows, etc.). The line splitting provided in this example works on all platforms.

    var text = 'Some text\nAnd some more\r\nAnd yet\rThis is the end';
    var lines = text.split(/\r\n|\r|\n/);
    console.log(lines); // prints [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
    

Note that the order of the patterns in the regular expression matters.

### Example: Using regular expression on multiple lines

    var s = 'Please yes\nmake my day!';
    s.match(/yes.*day/);
    // Returns null
    s.match(/yes[^]*day/);
    // Returns 'yes\nmake my day'
    

### Example: Using a regular expression with the "sticky" flag

This example demonstrates how one could use the sticky flag on regular expressions to match individual lines of multiline input.

    var text = 'First line\nSecond line';
    var regex = /(\S+) line\n?/y;
    
    var match = regex.exec(text);
    console.log(match[1]);        // prints 'First'
    console.log(regex.lastIndex); // prints '11'
    
    var match2 = regex.exec(text);
    console.log(match2[1]);       // prints 'Second'
    console.log(regex.lastIndex); // prints '22'
    
    var match3 = regex.exec(text);
    console.log(match3 === null); // prints 'true'
    

One can test at run-time whether the sticky flag is supported, using `try { … } catch { … }`. For this, either an `eval(…)` expression or the `RegExp(_regex-string_, _flags-string_)` syntax must be used (since the `/_regex_/_flags_` notation is processed at compile-time, so throws an exception before the `catch` block is encountered). For example:

    var supports_sticky;
    try { RegExp('', 'y'); supports_sticky = true; }
    catch(e) { supports_sticky = false; }
    console.log(supports_sticky); // prints 'true'
    

### Example: Regular expression and Unicode characters

As mentioned above, `\w` or `\W` only matches ASCII based characters; for example, "a" to "z", "A" to "Z", "0" to "9" and "\_". To match characters from other languages such as Cyrillic or Hebrew, use `\uhhhh`, where "hhhh" is the character's Unicode value in hexadecimal. This example demonstrates how one can separate out Unicode characters from a word.

    var text = 'Образец text на русском языке';
    var regex = /[\u0400-\u04FF]+/g;
    
    var match = regex.exec(text);
    console.log(match[0]);        // prints 'Образец'
    console.log(regex.lastIndex); // prints '7'
    
    var match2 = regex.exec(text);
    console.log(match2[0]);       // prints 'на' [did not print 'text']
    console.log(regex.lastIndex); // prints '15'
    
    // and so on
    

Here's an external resource for getting the complete Unicode block range for different scripts: [Regexp-unicode-block][28].

### Example: Extracting subdomain name from URL

    var url = 'http://xxx.domain.com';
    console.log(/[^.]+/.exec(url)[0].substr(7)); // prints 'xxx'
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions
[1]: #character-classes
[2]: #character-sets
[3]: #boundaries
[4]: #grouping-back-references
[5]: #quantifiers
[6]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/prototype#Properties
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/prototype "The RegExp.prototype property represents the prototype object for the RegExp constructor."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "The lastIndex is a read/write integer property of regular expressions that specifies the index at which to start the next match."
[9]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/prototype#Methods
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#RegExp_Properties
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp "The RegExp constructor creates a regular expression object for matching text with a pattern."
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags "The flags property returns a string consisting of the flags of the current regular expression object."
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global "The global property indicates whether or not the "g" flag is used with the regular expression. global is a read-only property of an individual regular expression instance."
[14]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase "The ignoreCase property indicates whether or not the "i" flag is used with the regular expression. ignoreCase is a read-only property of an individual regular expression instance."
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline "The multiline property indicates whether or not the "m" flag is used with the regular expression. multiline is a read-only property of an individual regular expression instance."
[16]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source "The source property returns a String containing the source text of the regexp object, and it doesn't contain the two forward slashes on both sides and any flags."
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky "The sticky property reflects whether or not the search is sticky (searches in strings only from the index indicated by the lastIndex property of this regular expression). sticky is a read-only property of an individual regular expression object."
[18]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode "The unicode property indicates whether or not the "u" flag is used with the regular expression. unicode is a read-only property of an individual regular expression instance."
[19]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/compile "The deprecated compile() method is used to (re-)compile a regular expression during execution of a script. It is basically the same as the RegExp constructor."
[20]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec "The exec() method executes a search for a match in a specified string. Returns a result array, or null."
[21]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test "The test() method executes a search for a match between a regular expression and a specified string. Returns true or false."
[22]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toSource "The toSource() method returns a string representing the source code of the object."
[23]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "The toSource() method returns a string representing the source code of the object."
[24]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString "The toString() method returns a string representing the regular expression."
[25]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "The toString() method returns a string representing object."
[26]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/replace "The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match."
[27]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String "The String global object is a constructor for strings, or a sequence of characters."
[28]: http://kourge.net/projects/regexp-unicode-block