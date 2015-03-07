## custom-ident

### Summary

The `<custom-ident>` [CSS][0] data value denotes an arbitrary user-defined string used as an identifier. It is case-sensitive and in each context, several values are excluded to prevent misinterpretations.

### Syntax

Its syntax is similar to the CSS identifier one, except that it is case-sensitive: a `<custom-ident>` is a sequence of characters where characters can be:

* any alphanumeric character (`'A'` to `'Z'`, or `'a'` to `'z'`),
* any decimal digit (`'0'` to `'9'`),
* a dash (`'-'`)
* an underscore (`'_'`),
* a escaped character (with a backslash, `'\'`),
* or a [Unicode][1] character (in the format of a backslash followed by one to six hexadecimal digits, its Unicode code point).

The first character must not be a decimal digit nor a dash (`'-'`) followed by a decimal digit or another dash. A `<custom-ident>` must not be placed between single or double quotes as it would be identical to a [`<string>`][2].

Note that `id1`, `Id1`, `iD1` and `ID1` are all different identifiers as they are [case-sensitive][3]. In the opposite, as they are several way to escape a character, `toto\?` and `toto\3F` are the same identifiers.

### Lists of excluded values

In order to prevent ambiguity, each property using `<custom-ident>` also defined a specific list of forbidden values:

**[`animation-name`][4]**

> Forbids the global CSS values, `unset`, `initial`, and `inherit`, and the value `none`.

**[`counter-reset`][5]**

**[`counter-increment`][6]**

> Forbids the global CSS values, `unset`, `initial`, and `inherit`, and the value `none`.

**[`@counter-style`][7]**

**[`list-style-type`][8]**

> Forbibs the global CSS values, `unset`, `initial`, and `inherit`, as well as the value `none`, `inline`, `outside`. Also quite a few predefined values are implemented by the different browsers: `disc`, `circle`, `square`, `decimal`, `cjk-decimal`, `decimal-leading-zero`, `lower-roman`, `upper-roman`, `lower-greek`, `lower-alpha`, `lower-latin`, `upper-alpha`, `upper-latin`, `arabic-indic`, `armenian`, `bengali`, `cambodian`, `cjk-earthly-branch`, `cjk-heavenly-stem`, `cjk-ideographic`, `devanagari`, `ethiopic-numeric`, `georgian`, `gujarati`, `gurmukhi`, `hebrew`, `hiragana`, `hiragana-iroha`, `japanese-formal`, `japanese-informal`, `kannada`, `katakana`, `katakana-iroha`, `khmer`, `korean-hangul-formal`, `korean-hanja-formal`, `korean-hanja-informal`, `lao`, `lower-armenian`, `malayalam`, `mongolian`, `myanmar`, `oriya`, `persian`, `simp-chinese-formal`, `simp-chinese-informal`, `tamil`, `telugu`, `thai`, `tibetan`, `trad-chinese-formal`, `trad-chinese-informal`, `upper-armenian`, `disclosure-open`, and `disclosure-close`.

**[`will-change`][9]**

> Forbids the global CSS values, `unset`, `initial`, `inherit`, as well as the values `will-change`, `auto`, `scroll-position`, and `contents`.

### Examples

These are valid identifiers:

    nono79            A mix of alphanumeric characters and numbers
    ground-level      A mix of alphanumeric characters and a dash
    -test             A dash followed by an alphabetic character
    _internal         An underscore followed by alphanumeric characters
    \22 toto          A Unicode character followed by a sequence of alphanumeric character
    bili\.bob         The period is correctly escaped
    

These are invalid identifiers:

    34rem             It must not start with a decimal digit.
    -12rad            It must not start with a dash followed by a decimal digit.
    bili.bob          Only alphanumeric characters, _ and - need not being escaped.
    --toto            It must not start with two dashes.
    'bilibob'         It isn't an <user-ident>, it is a [<string>][2].
    "bilibob"         It isn't an <user-ident>, it is a [<string>][2].
    



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: http://en.wikipedia.org/wiki/Unicode "http://en.wikipedia.org/wiki/Unicode"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/string "The documentation about this has not yet been written; please consider contributing!"
[3]: http://en.wikipedia.org/wiki/Case_sensitivity "http://en.wikipedia.org/wiki/Case_sensitivity"
[4]: https://developer.mozilla.org/en/docs/Web/CSS/animation-name "The animation-name CSS property specifies a list of animations that should be applied to the selected element. Each name indicates a @keyframes at-rule that defines the property values for the animation sequence."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/counter-reset "The counter-reset CSS property is used to reset CSS Counters to a given value."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/counter-increment "The counter-increment CSS property is used to increase the value of CSS Counters by a given value. The counter's value can be reset using the counter-reset CSS property."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/@counter-style "The @counter-style CSS at-rule defines a specific counter style that are not part of the predefined set of styles. A @counter-style rule defines how to convert a counter value into a string representation."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/list-style-type "The list-style-type CSS property specifies appearance of a list item element. As it is the only one which defaults to display:list-item, this is usually a <li> element, but can be any element with this display value."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/will-change "The will-change CSS property provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can setup appropriate optimizations ahead of time before the element is actually changed."