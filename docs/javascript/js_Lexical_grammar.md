## Lexical grammar

This section describes JavaScript's lexical grammar. The source text of ECMAScript scripts gets scanned from left to right and is converted into a sequence of input elements which are tokens, control characters, line terminators, comments or white space. ECMAScript also defines certain keywords and literals and has rules for automatic insertion of semicolons to end statements.

### Control characters

Control characters have no visual representation but are used to control the interpretation of the text.
Unicode format-control characters
Code point
Name
Abbreviation
Description

`U+200C`
Zero width non-joiner
<ZWNJ\>
Placed between characters to prevent being connected into ligatures in certain languages ([Wikipedia][0]).

`U+200D`
Zero width joiner
<ZWJ\>
Placed between characters that would not normally be connected in order to cause the characters to be rendered using their connected form in certain languages ([Wikipedia][1]).

`U+FEFF`
Byte order mark
<BOM\>
Used at the start of the script to mark it as Unicode and the text's byte order ([Wikipedia][2]).

### White space

White space characters improve the readability of source text and separate tokens from each other. These characters are usually unnecessary for the functionality of the code. [Minification tools][3] are often used to remove whitespace in order to reduce the amount of data that needs to be transferred.
White space characters
Code point
Name
Abbreviation
Description
Escape sequence

U+0009
Character tabulation
<HT\>
Horizontal tabulation
\\t

U+000B
Line tabulation
<VT\>
Vertical tabulation
\\v

U+000C
Form feed
<FF\>
Page breaking control character ([Wikipedia][4]).
\\f

U+0020
Space
<SP\>
Normal space

U+00A0
No-break space
<NBSP\>
Normal space, but no point at which a line may break

Others
Other Unicode space characters
<USP\>
[Spaces in Unicode on Wikipedia][5]

### Line terminators

In addition to white space characters, line terminator characters are used to improve the readability of the source text. However, in some cases, line terminators can influence the the execution of JavaScript code as there are a few places where they are forbidden. Line terminators also affect the process of [automatic semicolon insertion][6]. Line terminators are matched by the **\\s** class in [regular expressions][7].

Only the following Unicode code points are treated as line terminators in ECMAScript, other line breaking characters are treated as white space (for example, Next Line, NEL, U+0085 is considered as white space).
Line terminator characters
Code point
Name
Abbreviation
Description
Escape sequence

U+000A
Line Feed
<LF\>
New line character in UNIX systems.
\\n

U+000D
Carriage Return
<CR\>
New line character in Commodore and early Mac systems.
\\r

U+2028
Line Separator
<LS\>
[Wikipedia][8]

U+2029
Paragraph Separator
<PS\>
[Wikipedia][8]

### Comments

Comments are used to add hints, notes, suggestions, or warnings to JavaScript code. This can make it easier to read and understand. They can also be used to disable code to prevent it from being executed; this can be a valuable debugging tool.

JavaScript has two ways of assigning comments in its code.

The first way is the `//` comment; this makes all text following it on the same line into a comment. For example:

    function comment() {
      // This is a one line JavaScript comment
      console.log("Hello world!");
    }
    comment();
    

The second way is the `/* */` style, which is much more flexible.

For example, you can use it on a single line:

    function comment() {
      /* This is a one line JavaScript comment */
      console.log("Hello world!");
    }
    comment();

You can also make multiple-line comments, like this:

    function comment() {
      /* This comment spans multiple lines. Notice
         that we don't need to end the comment until we're done. */
      console.log("Hello world!");
    }
    comment();

You can also use it in the middle of a line, if you wish, although this can make your code harder to read so it should be used with caution:

    function comment(x) {
      console.log("Hello " + x /* insert the value of x */ + " !");
    }
    comment("world");

In addition, you can use it to disable code to prevent it from running, by wrapping code in a comment, like this:

    function comment() {
      /* console.log("Hello world!"); */
    }
    comment();

In this case, the `console.log()` call is never issued, since it's inside a comment. Any number of lines of code can be disabled this way.

### Keywords

### Reserved keywords as of ECMAScript 6

* [`break`][9]
* [`case`][10]
* `class`
* [`catch`][11]
* [`const`][12]
* [`continue`][13]
* [`debugger`][14]
* [`default`][10]
* [`delete`][15]
* [`do`][16]
* [`else`][17]
* [`export`][18]
* `extends`
* [`finally`][11]
* [`for`][19]
* [`function`][20]
* [`if`][17]
* [`import`][21]
* [`in`][22]
* [`instanceof`][23]
* [`let`][24]
* [`new`][25]
* [`return`][26]
* [`super`][27]
* [`switch`][10]
* [`this`][28]
* [`throw`][29]
* [`try`][11]
* [`typeof`][30]
* [`var`][31]
* [`void`][32]
* [`while`][16]
* [`with`][33]
* `yield`

### Future reserved keywords

The following are reserved as future keywords by the ECMAScript specification. They have no special functionality at present, but they might at some future time, so they cannot be used as identifiers. These keywords may not be used in either strict or non-strict mode.

* `enum`
* `await`

The following are reserved as future keywords when they are found in strict mode code:

* `implements`
* `package`
* `protected`
* `static`
* `interface`
* `private`
* `public`

#### Future reserved keywords in older standards

The following are reserved as future keywords by older ECMAScript specifications (ECMAScript 1 till 3).

* `abstract`
* `boolean`
* `byte`
* `char`
* `double`
* `final`
* `float`
* `goto`
* `int`
* `long`
* `native`
* `short`
* `synchronized`
* `transient`
* `volatile`

Additionally, the literals `null`, `true`, and `false` are reserved in ECMAScript for their normal uses.

### Reserved word usage

Reserved words actually only apply to Identifiers (vs. `IdentifierNames`) . As described in [es5.github.com/\#A.1][34], these are all `IdentifierNames` which do not exclude `ReservedWords`.

    a.import
    a["import"]
    a = { import: "test" }.
    

On the other hand the following is illegal because it's an Identifier, which is an `IdentifierName` without the reserved words. Identifiers are used for `FunctionDeclaration` and `FunctionExpression`.

    function import() {} // Illegal.

### Literals

### Null literal

See also [`null`][35] for more information.

    null

### Boolean literal

See also [`Boolean`][36] for more information.

    true
    false

### Numeric literals

#### Decimal

    1234567890
    42
    
    // Caution when using leading zeros:
    
    0888 // 888 parsed as decimal
    0777 // parsed as octal, 511 in decimal
    

Note that decimal literals can start with a zero (`0`) followed by another decimal digit, but If the next digit after the leading `0` is smaller than 8, the number gets parsed as an octal number. This won't throw in JavaScript, see [bug 957513][37]. See also the page about [`parseInt()`][38].

#### Binary

Binary number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "B" (`0b` or `0B`). Because this syntax is new in ECMAScript 6, see the browser compatibility table, below. If the digits after the `0b` are not 0 or 1, the following `[SyntaxError][39]` is thrown: "Missing binary digits after 0b".

    var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
    var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
    var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607

#### Octal

Octal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "O" (`0o` or `0O)`. Because this syntax is new in ECMAScript 6, see the browser compatibility table, below. If the digits after the `0o` are outside the range (01234567), the following `[SyntaxError][39]` is thrown:  "Missing octal digits after 0o".

    var n = 0O755; // 493
    var m = 0o644; // 420
    
    // Also possible with leading zeros (see note about decimals above)
    0755
    0644
    

#### Hexadecimal

Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "X" (`0x` or `0X)`. If the digits after 0x are outside the range (0123456789ABCDEF),  the following `[SyntaxError][39]` is thrown: "Identifier starts immediately after numeric literal".

    0xFFFFFFFFFFFFFFFFF // 295147905179352830000
    0x123456789ABCDEF   // 81985529216486900
    0XA                 // 10
    

### Object literals

See also [`Object`][40] and [Object initializer][41] for more information.

    var o = { a: "foo", b: "bar", c: 42 };
    
    // shorthand notation. New in ES6
    var a = "foo", b = "bar", c = 42;
    var o = {a, b, c};
    // instead of
    var o = { a: a, b: b, c: c };
    

### Array literals

See also [`Array`][42] for more information.

    [1954, 1974, 1990, 2014]

### String literals

    'foo'
    "bar"

#### Hexadecimal escape sequences

    '\xA9' // "©"
    

#### Unicode escape sequences

The Unicode escape sequences require at least four characters following `\u`.

    '\u00A9' // "©"

#### Unicode code point escapes

New in ECMAScript 6\. With Unicode code point escapes, any character can be escaped using hexadecimal numbers so that it is possible to use Unicode code points up to `0x10FFFF`. With simple Unicode escapes it is often necessary to write the surrogate halves separately to achieve the same.

See also [`String.fromCodePoint()`][43] or [`String.prototype.codePointAt()`][44].

    '\u{2F804}'
    
    // the same with simple Unicode escapes
    '\uD87E\uDC04'

### Regular expression literals

See also [`RegExp`][45] for more information.

    /ab+c/g
    
    // An "empty" regular expression literal
    // The empty non-capturing group is necessary 
    // to avoid ambiguity with single-line comments.
    /(?:)/

### Template literals

See also [template strings][46] for more information.

    `string text`
    
    `string text line 1
     string text line 2`
    
    `string text ${expression} string text`
    
    tag `string text ${expression} string text`

### Automatic semicolon insertion

Some [JavaScript statements][47] must be terminated with semicolons and are therefore affected by automatic semicolon insertion (ASI):

* Empty statement
* `let`, `const`, variable statement
* `import`, `export`, module declaration
* Expression statement
* `debugger`
* `continue`, `break`, `throw`
* `return`

The ECMAScript specification mentions[three rules of semicolon insertion][48].

1\.  A semicolon is inserted before, when a [Line terminator][49] or "}" is encountered that is not allowed by the grammar.

    { 1 2 } 3 
    
    // is transformed by ASI into 
    
    { 1 2 ;} 3;

2\.  A semicolon is inserted at the end, when the end of the input stream of tokens is detected and the the parser is unable to parse the single input stream as a complete program.

Here `++` is not treated as a [postfix operator][50] applying to variable `b`, because a line terminator occurs between `b` and `++`.

    a = b
    ++c
    
    // is transformend by ASI into
    
    a = b;
    ++c;
    

3\. A semicolon is inserted at the end, when a statement with restricted productions in the grammar is followed by a line terminator. These statements with "no LineTerminator here" rules are:

* PostfixExpressions (`++` and `--`)
* `continue`
* `break`
* `return`
* `yield`, `yield*`
* `module`

    return
    a + b
    
    // is transformed by ASI into
    
    return;
    a + b;
    



[0]: http://en.wikipedia.org/wiki/Zero-width_non-joiner
[1]: http://en.wikipedia.org/wiki/Zero-width_joiner
[2]: http://en.wikipedia.org/wiki/Byte_order_mark
[3]: http://en.wikipedia.org/wiki/Minification_%28programming%29
[4]: http://en.wikipedia.org/wiki/Page_break#Form_feed
[5]: http://en.wikipedia.org/wiki/Space_%28punctuation%29#Spaces_in_Unicode
[6]: #Automatic_semicolon_insertion
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions
[8]: http://en.wikipedia.org/wiki/Newline
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/break "The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement."
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/switch "The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case."
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/try...catch
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const "The const declaration creates a read-only named constant."
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/continue "The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration."
[14]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/debugger "The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect."
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/delete "The delete operator removes a property from an object."
[16]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while "The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement."
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/if...else
[18]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/export "The export statement is used to allow a signed script to provide properties, functions, and objects to other signed or unsigned scripts. It is an ancient Netscape 4 feature that has been removed in Firefox 3.5 (bug 447713). In the future, a new export declaration will be specified by ECMAScript 6 modules."
[19]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for "The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement or a set of statements executed in the loop."
[20]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function "The function declaration defines a function with the specified parameters."
[21]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/import "The import statement is used to import functions exported from an external module, another script."
[22]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...in
[23]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/instanceof "The instanceof operator tests whether an object has in its prototype chain the prototype property of a constructor."
[24]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let "The let statement declares a block scope local variable, optionally initializing it to a value."
[25]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/new "The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function."
[26]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/return "The return statement ends function execution and specifies a value to be returned to the function caller."
[27]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/super "The documentation about this has not yet been written; please consider contributing!"
[28]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this "A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode."
[29]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/throw "The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate."
[30]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/typeof "The typeof operator returns a string indicating the type of the unevaluated operand."
[31]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/var "The variable statement declares a variable, optionally initializing it to a value."
[32]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/void "The void operator evaluates the given expression and then returns undefined."
[33]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/with "The with statement extends the scope chain for a statement."
[34]: http://es5.github.com/#A.1
[35]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/null
[36]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[37]: https://bugzilla.mozilla.org/show_bug.cgi?id=957513 "`DecimalIntegerLiteral` can never be `0` directly followed by `8` or `9`"
[38]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/parseInt#Octal_interpretations_with_no_radix
[39]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError
[40]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object "The Object constructor creates an object wrapper."
[41]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer
[42]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array "The JavaScript Array global object is a constructor for arrays, which are high-level, list-like objects."
[43]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint "The static String.fromCodePoint() method returns a string created by using the specified sequence of code points."
[44]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt "The codePointAt() method returns a non-negative integer that is the UTF-16 encoded code point value."
[45]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[46]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings
[47]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements
[48]: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-rules-of-automatic-semicolon-insertion
[49]: #Line_terminators
[50]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment