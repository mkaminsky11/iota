## flex-wrap

### Summary

The [CSS][0] `flex-wrap` property specifies whether the children are forced into a single line or if the items can be flowed on multiple lines.

* _[Initial value][1]_ `nowrap` 
* _Applies to_ flex containers 
* _[Inherited][2]_ no 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

See [Using CSS flexible boxes][5] for more properties and information.

### Syntax

    [Formal syntax][6]: nowrap [|][7] wrap [|][7] wrap-reverse
    

    flex-wrap: nowrap
    flex-wrap: wrap
    flex-wrap: wrap-reverse
    
    flex-wrap: inherit
    

### Values

The following values are accepted:

**`nowrap`**

> The flex items are laid out in a single line which may cause the flex container to overflow. The **cross-start** is either equivalent to **start** or **before** depending [`flex-direction`][8] value.

**`wrap`**

> The flex items break into multiple lines. The **cross-start** is either equivalent to **start** or **before** depending `flex-direction` value and the **cross-end** is the opposite of the specified **cross-start**.

**`wrap-reverse`**

> Behaves the same as `wrap` but **cross-start** and **cross-end** are permuted.

### Examples

    element {
      flex-wrap: nowrap;
    }
    



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/CSS/Using_CSS_flexible_boxes "https://developer.mozilla.org/en/CSS/Using_CSS_flexible_boxes"
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/flex-direction