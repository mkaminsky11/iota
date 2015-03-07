## Deprecated and obsolete features

This page lists features of JavaScript that are deprecated (that is, still available but planned for removal) and obsolete (that is, no longer usable).

### Deprecated features

These deprecated features can still be used, but should be used with caution because they are expected to be removed entirely sometime in the future. You should work to remove their use from your code.

### RegExp properties

The following properties are deprecated. This does not affect their use in [replacement strings][0]:
Property
Description

[`$1-$9`][1]

Parenthesized substring matches, if any.  
**Warning:** Using these properties can result in problems, since browser extensions can modify them. Avoid them!

[`$_`][2]
See `input`.

[`$*`][3]
See `multiline`.

[`$&`][4]
See `lastMatch`.

[`$+`][5]
See `lastParen`.

[`$\``][6]
See `leftContext`.

[`$'`][7]
See `rightContext`.

[`input`][2]
The string against which a regular expression is matched.

[`lastMatch`][4]
The last matched characters.

[`lastParen`][5]
The last parenthesized substring match, if any.

[`leftContext`][6]
The substring preceding the most recent match.

[`rightContext`][7]
The substring following the most recent match.

The following are now properties of `RegExp` instances, no longer of the `RegExp` object:
Property
Description

[`global`][8]
Whether or not to test the regular expression against all possible matches in a string, or only against the first.

[`ignoreCase`][9]
Whether or not to ignore case while attempting a match in a string.

[`lastIndex`][10]
The index at which to start the next match.

[`multiline`][3]
Whether or not to search in strings across multiple lines.

[`source`][11]
The text of the pattern.

### RegExp methods

* The [`compile()`][12] method is deprecated.
* The `valueOf` method is no longer specialized for `RegExp`. Use [`Object.valueOf()`][13].

### Function properties

* The [`caller`][14] and [`arguments`][15] properties are deprecated, because they leak the function caller. Instead of the arguments property, you should use the [`arguments`][16] object inside function closures.

### Legacy generator

* [`Legacy generator function statement`][17] and [`Legacy generator function expression`][18] are deprecated. Use [`function* statement`][19] and [`function* expression`][20] instead.
* [`JS1.7/JS1.8 Array comprehension`][21] and [`JS1.7/JS1.8 Generator comprehension`][22] are deprecated.

### Iterator

* [`StopIteration`][23] is deprecated.
* [`Iterator`][24] is deprecated.

### Object methods

* [`watch`][25] and [`unwatch`][26] are deprecated. Use [`Proxy`][27] instead.
* `__iterator__` is deprecated.
* [`__noSuchMethod__`][28] is deprecated. Use [`Proxy`][27] instead.

### Date methods

* [`getYear`][29] and [`setYear`][30] are affected by the Year-2000-Problem and have been subsumed by [`getFullYear`][31] and [`setFullYear`][32].
* You should use [`toISOString`][33] instead of the deprecated [`toGMTString`][34] method in new code.
* [`toLocaleFormat`][35] is deprecated.

### Functions

* [Expression closures][36] are deprecated. Use regular [`functions`][37] or [arrow functions][38] instead.

### Proxy

* [Proxy.create][39] and [Proxy.createFunction][39] are deprecated. Use [`Proxy`][27] instead.
* The following traps are obsolete:
  * `hasOwn` ([bug 980565][40], Firefox 33).
  * `getEnumerablePropertyKeys` ([bug 783829][41], Firefox 37)
  * `getOwnPropertyNames` ([bug 1007334][42], Firefox 33)
  * `keys` ([bug 1007334][42], Firefox 33)

### let

* [`let blocks`][43] and [`let expressions`][44] are deprecated.

### Escape sequences

* Octal escape sequences (\\ followed by one, two, or three octal digits) are deprecated in string and regular expression literals.
* The [`escape`][45] and [`unescape`][46] functions are deprecated. Use [`encodeURI`][47], [`encodeURIComponent`][48], [`decodeURI`][49] or [`decodeURIComponent`][50] to encode and decode escape sequences for special characters.

### String methods

* [HTML wrapper methods][51] like [`String.prototype.fontsize`][52] and [`String.prototype.big`][53].
* [`String.prototype.quote`][54] is removed from Firefox 37\.
* non standard `flags` parameter in [`String.prototype.search`][55], [`String.prototype.match`][56], and [`String.prototype.replace`][0] are deprecated.

### Obsolete features

These obsolete features have been entirely removed from JavaScript and can no longer be used as of the indicated version of JavaScript.

### Object
Property
Description

[`__count__`][57]
Returns the number of enumerable properties directly on a user-defined object.

[`__parent__`][58]
Points to an object's context.

Method
Description

[`Object.prototype.eval()`][59]
Evaluates a string of JavaScript code in the context of the specified object.

### Function
Property
Description

[`arity`][60]
Number of formal arguments.

### Number

* [`Number.toInteger()`][61]

### ParallelArray

* [`ParallelArray`][62]

### Statements

* [`for each...in`][63] is deprecated. Use [`for...of`][64] instead.
* Destructuring [`for...in`][65] is deprecated. Use [`for...of`][64] instead.

### E4X

See [E4X][66] for more information.

### Sharp variables

See [Sharp variables in JavaScript][67] for more information.


[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/replace "The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n "The non-standard $1, $2, $3, $4, $5, $6, $7, $8, $9 properties are static and read-only properties of regular expressions that contain parenthesized substring matches."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input "The non-standard input property is a static property of regular expressions that contains the string against which a regular expression is matched. RegExp.$_ is an alias for this property."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline "The multiline property indicates whether or not the "m" flag is used with the regular expression. multiline is a read-only property of an individual regular expression instance."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch "The non-standard lastMatch property is a static and read-only property of regular expressions that contains the last matched characters. RegExp.$& is an alias for this property."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen "The non-standard lastParen property is a static and read-only property of regular expressions that contains the last parenthesized substring match, if any. RegExp.$+ is an alias for this property."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext "The non-standard leftContext property is a static and read-only property of regular expressions that contains the substring preceding the most recent match. RegExp.$` is an alias for this property."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext "The non-standard rightContext property is a static and read-only property of regular expressions that contains the substring following the most recent match. RegExp.$' is an alias for this property."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global "The global property indicates whether or not the "g" flag is used with the regular expression. global is a read-only property of an individual regular expression instance."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase "The ignoreCase property indicates whether or not the "i" flag is used with the regular expression. ignoreCase is a read-only property of an individual regular expression instance."
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "The lastIndex is a read/write integer property of regular expressions that specifies the index at which to start the next match."
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source "The source property returns a String containing the source text of the regexp object, and it doesn't contain the two forward slashes on both sides and any flags."
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/compile "The deprecated compile() method is used to (re-)compile a regular expression during execution of a script. It is basically the same as the RegExp constructor."
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf "The valueOf() method returns the primitive value of the specified object."
[14]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/caller "The function.caller property returns the function that invoked the specified function."
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments "The function.arguments property refers to an an array-like object corresponding to the arguments passed to a function. Use the simple variable arguments instead."
[16]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/arguments "The arguments object is an Array-like object corresponding to the arguments passed to a function."
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function "The legacy generator function statement declares legacy generator functions with the specified parameters."
[18]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Legacy_generator_function "The function keyword can be used to define a legacy generator function inside an expression. To make the function a legacy generator, the function body should contain at least one yield expression."
[19]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function* "The function* declaration (function keyword followed by an asterisk) defines a generator function."
[20]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/function* "The function* keyword can be used to define a generator function inside an expression."
[21]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Array_comprehensions#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions "The array comprehension syntax is a JavaScript expression which allows you to quickly assemble a new array based on an existing one. Comprehensions exist in many programming languages and the upcoming ECMAScript 7 standard defines array comprehensions for JavaScript. "
[22]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Generator_comprehensions#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions "The generator comprehension syntax is a JavaScript expression which allows you to quickly assemble a new generator function based on an existing iterable object. Comprehensions exist in many programming languages and the upcoming ECMAScript 7 standard defines array comprehensions for JavaScript. "
[23]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/StopIteration "The StopIteration object is used to tell the end of the iteration in the legacy iterator protocol."
[24]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Iterator "The Iterator function returns an object which implements legacy iterator protocol and iterates over enumerable properties of an object."
[25]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/watch "The watch() method watches for a property to be assigned a value and runs a function when that occurs."
[26]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/unwatch "The unwatch() method removes a watchpoint set with the watch() method."
[27]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy "The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc)."
[28]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/noSuchMethod "The __noSuchMethod__ property references a function to be executed when a non-existent method is called on an object."
[29]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getYear "The getYear() method returns the year in the specified date according to local time. Because getYear() does not return full years ("year 2000 problem"), it is no longer used and has been replaced by the getFullYear() method."
[30]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/setYear "The setYear() method sets the year for a specified date according to local time. Because setYear() does not set full years ("year 2000 problem"), it is no longer used and has been replaced by the setFullYear() method."
[31]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear "The getFullYear() method returns the year of the specified date according to local time."
[32]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear "The setFullYear() method sets the full year for a specified date according to local time."
[33]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString "The toISOString() method returns a string in extended ISO format (ISO 8601), which is always 24 characters long: YYYY-MM-DDTHH:mm:ss.sssZ. The timezone is always zero UTC offset, as denoted by the suffix "Z"."
[34]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toGMTString "The toGMTString() method converts a date to a string, using Internet Greenwich Mean Time (GMT) conventions. The exact format of the value returned by toGMTString() varies according to the platform and browser, in general it should represent a human readable date string."
[35]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleFormat "The non-standard toLocaleFormat() method converts a date to a string using the specified formatting. Intl.DateTimeFormat is an alternative to format dates in a standards-compliant way. See also the newer version of Date.prototype.toLocaleDateString()."
[36]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Expression_closures "Expression closures are a shorthand function syntax for writing simple functions."
[37]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/function "The function keyword can be used to define a function inside an expression."
[38]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions "An arrow function expression (also known as fat arrow function) has a shorter syntax compared to function expressions and lexically binds the this value. Arrow functions are always anonymous."
[39]: https://developer.mozilla.org/en/docs/Archive/Web/Old_Proxy_API
[40]: https://bugzilla.mozilla.org/show_bug.cgi?id=980565 "FIXED: ES6 Proxies: There's no such thing as [[HasOwnProperty]]"
[41]: https://bugzilla.mozilla.org/show_bug.cgi?id=783829 "FIXED: Using for-in on a proxy should call the enumerate trap, not the iterate trap"
[42]: https://bugzilla.mozilla.org/show_bug.cgi?id=1007334 "FIXED: ES6 Proxies: There's no such thing as [[GetOwnPropertyNames]]"
[43]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let#let_block "The let statement declares a block scope local variable, optionally initializing it to a value."
[44]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let#let_expressions "The let statement declares a block scope local variable, optionally initializing it to a value."
[45]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/escape "The deprecated escape() method computes a new string in which certain characters have been replaced by a hexadecimal escape sequence. Use encodeURI or encodeURIComponent instead."
[46]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/unescape "The deprecated unescape() method computes a new string in which hexadecimal escape sequences are replaced with the character that it represents. The escape sequences might be introduced by a function like escape. Because unescape is deprecated, use decodeURI or decodeURIComponent instead."
[47]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURI "The encodeURI() method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters)."
[48]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent "The encodeURIComponent() method encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters)."
[49]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/decodeURI "The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine."
[50]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent "The decodeURIComponent() method decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine."
[51]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/tag/HTML%20wrapper%20methods
[52]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/fontsize "The fontsize() method creates a <font> HTML element that causes a string to be displayed in the specified font size."
[53]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/big "The big() method creates a <big> HTML element that causes a string to be displayed in a big font."
[54]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/quote "The non-standard quote() method returns a copy of the string, replacing various special characters in the string with their escape sequences and wrapping the result in double-quotes (")."
[55]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/search "The search() method executes a search for a match between a regular expression and this String object."
[56]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/match "The match() method retrieves the matches when matching a string against a regular expression."
[57]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/count "The __count__ property used to store the count of enumerable properties on the object, but it has been removed."
[58]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/Parent "The __parent__ property used to point to an object's context, but it has been removed."
[59]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/eval "The Object.eval() method used to evaluate a string of JavaScript code in the context of an object, however, this method has been removed."
[60]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/arity "The arity property used to return the number of arguments expected by the function, however, it no longer exists and has been replaced by the Function.prototype.length property."
[61]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toInteger "The Number.toInteger() method used to evaluate the passed value and convert it to an integer, but its implementation has been removed."
[62]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/ParallelArray "The goal of ParallelArray was to enable data-parallelism in web applications. The higher-order functions available on ParallelArray attempted to execute in parallel, though they may fall back to sequential execution if necessary. To ensure that your code executes in parallel, it is suggested that the functions should be limited to the parallelizable subset of JS that Firefox supports."
[63]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for_each...in "The for each...in statement iterates a specified variable over all values of object's properties. For each distinct property, a specified statement is executed."
[64]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of "The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property."
[65]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...in "The for..in statement iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed."
[66]: https://developer.mozilla.org/en/docs/Archive/Web/E4X
[67]: https://developer.mozilla.org/en/docs/Archive/Web/Sharp_variables_in_JavaScript