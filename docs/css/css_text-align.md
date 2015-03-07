## text-align

### Summary

The `text-align` CSS property describes how inline content like text is aligned in its parent block element. `text-align` does not control the alignment of block elements itself, only their inline content.

* _[Initial value][0]_ `start`, or a nameless value that acts as `left` if [`direction`][1] is `ltr`, `right` if [`direction`][1] is `rtl` if `start` is not supported by the browser. 
* _Applies to_ block containers 
* _[Inherited][2]_ yes 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ as specified, except for the `match-parent` value which is calculated against its parent's direction value and results in a computed value of either `left` or `right` 
* _Animatable_ no 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][5]: start [|][6] end [|][6] left [|][6] right [|][6] center [|][6] justify [|][6] match-parent [|][6] start end
    

    text-align: left
    text-align: right
    text-align: center
    text-align: justify
    text-align: start
    text-align: end
    text-align: match-parent
    text-align: start end
    text-align: "."
    text-align: start "."
    text-align: "." end
    
    text-align: inherit
    

### Values

**`start` __**

> The same as `left` if direction is left-to-right and `right` if direction is right-to-left.

**`end` __**

> The same as `right` if direction is left-to-right and `left` if direction is right-to-left.

**`left`**

> The inline contents are aligned to the left edge of the line box.

**`right`**

> The inline contents are aligned to the right edge of the line box.

**`center`**

> The inline contents are centered within the line box.

**`<string>` __**

> The first occurrence of the one-char string is the element used for alignment. the keyword that follows or precedes it indicates how it is aligned. This allows to align numeric values on the decimal point, for instance.

**`justify`**

> The text is justified. Text should line up their left and right edges to the left and right content edges of the paragraph.

**`match-parent` __**

> Similar to `inherit` with the difference that the value `start` and `end` are calculated according the parent's [`direction`][1] and are replaced by the adequate `left` or `right` value.

### Examples

[View Live Examples][7]

### Live Examples

div { **text-align: center**; border:solid; }

p { background:gold; width:22em; }
some more inline content...

div { **text-align: center**; border:solid; }

p { background:gold; width:22em; **margin: 1em auto**; }
some more inline content...

div { **text-align:-moz-center**; text-align:-webkit-center; border:solid; }

p { background:gold; width:22em; }
some more inline content...

### Notes

The standard-compatible way to center a block itself without centering its inline content is setting the left and right` margin `to auto, e.g.:  
`margin:auto;` or `margin:0 auto;` or ` margin-left:auto; margin-right:auto;`


[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/Web/CSS/direction "Set the direction CSS property to match the direction of the text: rtl for languages written from right-to-left (like Hebrew or Arabic) text and ltr for other scripts. This is typically done as part of the document (e.g., using the dir attribute in HTML) rather than through direct use of CSS."
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[7]: /samples/cssref/text-align.html