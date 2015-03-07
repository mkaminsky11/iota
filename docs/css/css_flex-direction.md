## flex-direction

### Summary

The [CSS][0] `flex-direction` property specifies how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

Note that the value `row` and `row-reverse` are affected by the directionality of the flex container. If its `dir` attribute is `ltr`, `row` represents the horizontal axis oriented from the left to the right, and `row-reverse` from the right to the left; if the `dir` attribute is `rtl`, `row` represents the axis oriented from the right to the left, and `row-reverse` from the left to the right.

* _[Initial value][1]_ `row` 
* _Applies to_ flex containers 
* _[Inherited][2]_ no 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

See [Using CSS flexible boxes][5] for more properties and information.

### Syntax

    [Formal syntax][6]: row [|][7] row-reverse [|][7] column [|][7] column-reverse
    

    flex-direction: row
    flex-direction: row-reverse
    flex-direction: column
    flex-direction: column-reverse
    
    flex-direction: inherit
    

### Values

The following values are accepted:

**`row`**

> The flex container's main-axis is defined to be the same as the text direction. The **main-start** and **main-end** points are the same as the content direction.

**`row-reverse`**

> Behaves the same as `row` but the **main-start** and **main-end** points are permuted.

**`column`**

> The flex container's main-axis is the same as the block-axis. The **main-start** and **main-end** points are the same as the **before** and **after** points of the writing-mode.

**`column-reverse`**

> Behaves the same as `column` but the **main-start** and **main-end** are permuted.

### Examples

    element { 
      flex-direction: row-reverse;
    }
    



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/Web/Guide/CSS/Flexible_boxes "https://developer.mozilla.org/en/CSS/Using_CSS_flexible_boxes"
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."