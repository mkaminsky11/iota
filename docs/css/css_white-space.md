## white-space

### Summary

The `white-space` CSS property is used to to describe how white spaces inside the element is handled.

* _[Initial value][0]_ `normal` 
* _Applies to_ all elements 
* _[Inherited][1]_ yes 
* _Media_ [`visual`][2] 
* _[Computed value][3]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][4]: normal [|][5] pre [|][5] nowrap [|][5] pre-wrap [|][5] pre-line

    white-space: normal
    white-space: nowrap
    white-space: pre
    white-space: pre-wrap
    white-space: pre-line
    
    white-space: inherit
    

### Values

**`normal`**

> Sequences of whitespace are collapsed. Newline characters in the source are handled as other whitespace. Breaks lines as necessary to fill line boxes.

**`nowrap`**

> Collapses whitespace as for `normal`, but suppresses line breaks (text wrapping) within text.

**`pre`**

> Sequences of whitespace are preserved, lines are only broken at newline characters in the source and at [`<br>`][6] elements.

**`pre-wrap`**

> Sequences of whitespace are preserved. Lines are broken at newline characters, at [`<br>`][6], and as necessary to fill line boxes.

**`pre-line`**

> Sequences of whitespace are collapsed. Lines are broken at newline characters, at [`<br>`][6], and as necessary to fill line boxes.

The following table summarizes the behavior of various `white-space` values:
New lines
Spaces and tabs
Text wrapping

`normal`
Collapse
Collapse
Wrap

`nowrap`
Collapse
Collapse
No wrap

`pre`
Preserve
Preserve
No wrap

`pre-wrap`
Preserve
Preserve
Wrap

`pre-line`
Preserve
Collapse
Wrap

### Examples

    code { 
      white-space: pre; 
    }



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[6]: https://developer.mozilla.org/en/docs/Web/HTML/Element/br "The HTML <br> Element (or HTML Line Break Element) produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant."