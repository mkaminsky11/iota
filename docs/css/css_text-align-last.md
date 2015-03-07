## text-align-last

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `text-align-last` CSS property describes how the last line of a block or a line, right before a forced line break, is aligned.

* _[Initial value][1]_ `auto` 
* _Applies to_ block containers 
* _[Inherited][2]_ yes 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][5]: auto [|][6] start [|][6] end [|][6] left [|][6] right [|][6] center [|][6] justify

    text-align-last: auto
    text-align-last: start
    text-align-last: end
    text-align-last: left
    text-align-last: right
    text-align-last: center
    text-align-last: justify
    
    text-align-last: inherit
    

### Values

**`auto`**

> The affected line is aligned per the value of [`text-align`][7], unless [`text-align`][7] is `justify`, in which case the effect is the same as setting `text-align-last` to `left`.

**`start`**

> The same as `left` if direction is left-to-right and `right` if direction is right-to-left.

**`end`**

> The same as `right` if direction is left-to-right and `left` if direction is right-to-left.

**`left`**

> The inline contents are aligned to the left edge of the line box.

**`right`**

> The inline contents are aligned to the right edge of the line box.

**`center`**

> The inline contents are centered within the line box.

**`justify`**

> The text is justified. Text should line up their left and right edges to the left and right content edges of the paragraph.

### Examples

    div {
      text-align: justify;
      -moz-text-align-last: center;
      text-align-last: center;
    }
    



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/text-align "The text-align CSS property describes how inline content like text is aligned in its parent block element. text-align does not control the alignment of block elements itself, only their inline content."