## text-underline-position

### Summary

The [CSS][0] `text-underline-position` property specifies the position of the underline which is set using the [`text-decoration`][1] property `underline` value.

This property inherits and is not reset by the [`text-decoration`][1] shorthand, allowing to easily set it globally for a given document:

    :root { text-underline-position: under; } /* Better default for document with a lot of chemical formulas */

* _[Initial value][2]_ `auto` 
* _Applies to_ all elements 
* _[Inherited][3]_ yes 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][6]: auto [|][7] [ under [||][8] [ left [|][7] right ] ]
    

    text-underline-position: auto
    text-underline-position: under
    text-underline-position: left
    text-underline-position: right
    text-underline-position: under left
    text-underline-position: right under
    
    text-underline-position: inherit
    

### Values

**`auto`**

> This keyword allows the browser to use an algorithm to choose between `under` and `alphabetic`.

**`under`**

> This keyword forces the line to be set below the _alphabetic baseline_, at a position where it won't cross any descender. This is useful to prevent chemical or mathematical formulas, which make a large use of subscripts, to be illegible.

**`left`**

> In vertical writing-modes, this keyword forces the line to be placed on the _left_ of the characters. In horizontal writing-modes, it is a synonym of `under.`

**`right`**

> In vertical writing-modes, this keyword forces the line to be placed on the _right_ of the characters. In horizontal writing-modes, it is a synonym of `under.`

**`auto-pos`__**

> This keyword is a synonym of `auto` which must be used instead

**`above`__**

> This keyword forces the line to be above the text. When used with East-Asian text, using the `auto` keyword will lead to a similar effect.

**`below`__**

> This keyword forces the line to be under the text. When used with alphabetic text, using the `auto` keyword will lead to a similar effect.



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/text-decoration "The text-decoration CSS property is used to set the text formatting to underline, overline, line-through or blink."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: the two entities are optional, and may appear in any order."