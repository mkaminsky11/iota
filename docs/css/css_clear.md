## clear

### Summary

The `clear` [CSS][0] property specifies whether an element can be next to [floating][1] elements that precede it or must be moved down (cleared) below them.

The `clear` property applies to both floating and non-floating elements.

When applied to non-floating blocks, it moves the [border edge][2] of the element down until it is below the [margin edge][2] of all relevant floats. This movement (when it happens) causes [margin collapsing][3] not to occur.

When applied to floating elements, it moves the [margin edge][2] of the element below the [margin edge][2] of all relevant floats. This affects the position of later floats, since later floats cannot be positioned higher than earlier ones.

The floats that are relevant to be cleared are the earlier floats within the same [block formatting context][4].

**Note: **If you want an element to contain all floating elements inside it, you can either float the container as well, or use `clear` on a replaced [`::after`][5] [pseudo-element][6] on it.

    #container:after { 
       content: "";
       display: block; 
       clear: both;
    }
    

* _[Initial value][7]_ `none` 
* _Applies to_ block-level elements 
* _[Inherited][8]_ no 
* _Media_ [`visual`][9] 
* _[Computed value][10]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][11]: none [|][12] left [|][12] right [|][12] both

    clear: none
    clear: left
    clear: right
    clear: both
    
    clear: inherit
    

### Values

**`none`**

> The element is _not_ moved down to clear past floating elements.

**`left`**

> The element is moved down to clear past _left_ floats.

**`right`**

> The element is moved down to clear past _right_ floats.

**`both`**

> The element is moved down to clear past _both_ left and right floats.

### Examples

[View Live Examples][13]

    h1 { clear: none }
    h2 { clear: right }



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/float "CSS/float"
[2]: https://developer.mozilla.org/en/docs/CSS/box_model "CSS/box_model"
[3]: https://developer.mozilla.org/en/docs/CSS/margin_collapsing "CSS/margin_collapsing"
[4]: https://developer.mozilla.org/en/docs/CSS/block_formatting_context "CSS/block_formatting_context"
[5]: https://developer.mozilla.org/en/docs/Web/CSS/::after
[6]: https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-elements
[7]: https://developer.mozilla.org/en/docs/CSS/initial_value
[8]: https://developer.mozilla.org/en/docs/CSS/inheritance
[9]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[10]: https://developer.mozilla.org/en/docs/CSS/computed_value
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[13]: /samples/cssref/clear.html