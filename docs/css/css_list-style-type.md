## list-style-type

### Summary

The `list-style-type` CSS property specifies appearance of a list item element. As it is the only one which defaults to `display:list-item`, this is usually a [`<li>`][0] element, but can be any element with this [`display`][1] value.

* _[Initial value][2]_ `disc` 
* _Applies to_ list items 
* _[Inherited][3]_ yes 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

The [color][6] of the marker will be the same as the computed color of the element it applies to.

### Syntax

    [Formal syntax][7]: [<custom-ident>][8] [|][9] symbols)
    

### Values

**[`symbols()`][10]**

> Defines an anonymous style of the list.

**`none`**

> No item marker is shown.

**[`<custom-ident>`][11]**

> A identifier matching the value of a [`@counter-style`][12] or one of the predefined styles:

**`disc`**

> * A filled circle (default value)
> 

**`circle`**

> * A hollow circle
> 

**`square`**

> * A filled square
> 

**`decimal`**

> * Han decimal numbers
> * Beginning with 1\.
> 

**`cjk-decimal` __**

> * Decimal numbers
> * E.g. 一, 二, 三, ..., 九八, 九九, 一〇〇
> 

**`decimal-leading-zero`**

> * Decimal numbers
> * Padded by initial zeros
> * E.g. 01, 02, 03, ... 98, 99
> 

**`lower-roman`**

> * Lowercase roman numerals
> * E.g. i, ii, iii, iv, v...
> 

**`upper-roman`**

> * Uppercase roman numerals
> * E.g. I, II, III, IV, V...
> 

**`lower-greek`**

> * Lowercase classical Greek
> * alpha, beta, gamma...
> * E.g. α, β, γ...
> 

**`lower-alpha`**

**`lower-latin`**

> * Lowercase ASCII letters
> * E.g. a, b, c, ... z
> * `lower-latin` is unsupported in IE7 and earlier
> * See [Browser compatibility][13] section.
> 

**`upper-alpha`**

**`upper-latin`**

> * Uppercase ASCII letters
> * E.g. A, B, C, ... Z
> * `upper-latin` is unsupported in IE7 and earlier
> 

**`arabic-indic`**

**`-moz-arabic-indic`**

> * Example
> 

**`armenian`**

> * Traditional Armenian numbering
> * (ayb/ayp, ben/pen, gim/keem...
> 

**`bengali`**

**`-moz-bengali`**

> * Example
> 

**`cambodian` __\***

> * Example
> * Is a synonym for `khmer`
> 

**`cjk-earthly-branch`**

**`-moz-cjk-earthly-branch`**

> * Example
> 

**`cjk-heavenly-stem`**

**`-moz-cjk-heavenly-stem`**

> * Example
> 

**`cjk-ideographic`__**

> * Identical to `simp-chinese-informal`
> * E.g. 一万一千一百一十一
> 

**`devanagari`**

**`-moz-devanagari`**

> * Example
> 

**`ethiopic-numeric` __**

> * Example
> 

**`georgian`**

> * Traditional Georgian numbering
> * E.g. an, ban, gan, ... he, tan, in...
> 

**`gujarati`**

**`-moz-gujarati`**

> * Example
> 

**`gurmukhi`**

**`-moz-gurmukhi`**

> * Example
> 

**`hebrew` __**

> * Traditional Hebrew numbering
> 

**`hiragana` __**

> * a, i, u, e, o, ka, ki, ...
> * (Japanese)
> 

**`hiragana-iroha` __**

> * i, ro, ha, ni, ho, he, to, ...
> * [Iroha][14] is the old japanese ordering of syllabs.
> 

**`japanese-formal` __**

> * Japanese formal numbering to be used in legal or financial document.
> * E.g., 壱萬壱阡壱百壱拾壱
> * The kanjis are designed so that they can't be modified to look like another correct one
> 

**`japanese-informal` __**

> * Japanese informal numbering
> 

**`kannada`**

**`-moz-kannada`**

> * Example
> 

**`katakana` __**

> * A, I, U, E, O, KA, KI, ...
> * (Japanese)
> 

**`katakana-iroha` __**

> * I, RO, HA, NI, HO, HE, TO, ...
> * [Iroha][14] is the old japanese ordering of syllabs.
> 

**`khmer`**

**`-moz-khmer`**

> * Example
> 

**`korean-hangul-formal` __**

> * Korean hangul numbering.
> * E.g., 일만 일천일백일십일
> 

**`korean-hanja-formal` __**

> * Formal Korean Han numbering.
> * E.g. 壹萬 壹仟壹百壹拾壹
> 

**`korean-hanja-informal` __**

> * Korean hanja numbering.
> * E.g., 萬 一千百十一
> 

**`lao`**

**`-moz-lao`**

> * Example
> 

**`lower-armenian` __\***

> * Example
> 

**`malayalam`**

**`-moz-malayalam`**

> * Example
> 

**`mongolian` __**

> * Example
> 

**`myanmar`**

**`-moz-myanmar`**

> * Example
> 

**`oriya`**

**`-moz-oriya`**

> * Example
> 

**`persian` __**

**`-moz-persian`**

> * Example
> 

**`simp-chinese-formal` __**

> * Simplified Chinese formal numbering.
> * E.g. 壹万壹仟壹佰壹拾壹
> 

**`simp-chinese-informal` __**

> * Simplified Chinese informal numbering.
> * E.g. 一万一千一百一十一
> 

**`tamil` __**

**`-moz-tamil`**

> * Example
> 

**`telugu`**

**`-moz-telugu`**

> * Example
> 

**`thai`**

**`-moz-thai`**

> * Example
> 

**`tibetan` __\***

> * Example
> 

**`trad-chinese-formal` __**

> * Traditional Chinese formal numbering.
> * E.g. 壹萬壹仟壹佰壹拾壹
> 

**`trad-chinese-informal` __**

> * Traditional Chinese informal numbering.
> * E.g. 一萬一千一百一十一
> 

**`upper-armenian` __\***

> * Example
> 

**`disclosure-open` __**

> * Symbol indicating that a disclosure widget, like [`<details>`][15] is opened.
> 

**`disclosure-closed` __**

> * Symbol indicating that a disclosure widget, like [`<details>`][15] is closed.
> 

### Non-standard extensions

A few more predefined types are provided by Mozilla (Firefox), Blink (Chrome and Opera) and WebKit (Safari) to support list types in other languages. See the compatibility table to check which browsers supports which extension.

**`-moz-ethiopic-halehame`**

> * Example
> 

**`-moz-ethiopic-halehame-am`**

> * Example
> 

**`ethiopic-halehame-ti-er`**

**`-moz-ethiopic-halehame-ti-er`**

> * Example
> 

**`ethiopic-halehame-ti-et`**

**`-moz-ethiopic-halehame-ti-et`**

> * Example
> 

**`hangul`**

**`-moz-hangul`**

> * Example
> * Example
> * Example
> 

**`hangul-consonant`**

**`-moz-hangul-consonant`**

> * Example
> * Example
> * Example
> 

**`urdu`**

**`-moz-urdu`**

> * Example
> 

### Examples

[View the live example][16]

    ol { list-style-type: upper-alpha; }
    
    /* or use the shortcut "list-style": */
    ol { list-style: upper-alpha; }

### Notes

* Some types require a suitable font installed to display as expected.
* The `cjk-ideographic` is identical to `trad-chinese-informal`; it exists for legacy reasons.)


[0]: https://developer.mozilla.org/en/docs/Web/HTML/Element/li "The HTML List item element (<li>) is used to represent a list item. It should be contained in an ordered list (<ol>), an unordered list (<ul>) or a menu (<menu>), where it represents a single entity in that list. In menus and unordered lists, list items are ordinarily displayed using bullet points. In ordered lists, they are usually displayed with some ascending counter on the left such as a number or letter"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/display "The display CSS property specifies the type of rendering box used for an element. In HTML, default display property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is inline."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/color_value "color"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-custom-ident "Tooltip not found in DB."
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/symbols() "The documentation about this has not yet been written; please consider contributing!"
[11]: https://developer.mozilla.org/en/docs/Web/CSS/custom-ident "The documentation about this has not yet been written; please consider contributing!"
[12]: https://developer.mozilla.org/en/docs/Web/CSS/@counter-style "The @counter-style CSS at-rule lets authors define specific counter styles that are not part of the predefined set of styles. A @counter-style rule defines how to convert a counter value into a string representation."
[13]: #Browser_compatibility
[14]: http://en.wikipedia.org/wiki/Iroha "Iroha"
[15]: https://developer.mozilla.org/en/docs/Web/HTML/Element/details "The HTML <details> Element is used as a disclosure widget from which the user can retrieve additional information."
[16]: /samples/cssref/list-style