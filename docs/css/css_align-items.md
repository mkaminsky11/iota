## align-items

### Summary

The [CSS][0] `align-items` property aligns flex items of the current flex line the same way as [`justify-content`][1] but in the perpendicular direction.

* _[Initial value][2]_ `stretch` 
* _Applies to_ flex containers 
* _[Inherited][3]_ no 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

See [Using CSS flexible boxes][6] for more properties and information.

### Syntax

    [Formal syntax][7]: flex-start [|][8] flex-end [|][8] center [|][8] baseline [|][8] stretch
    

    align-items: flex-start
    align-items: flex-end
    align-items: center
    align-items: baseline
    align-items: stretch
    
    align-items: inherit
    

### Values

**`flex-start`**

> The cross-start margin edge of the flex item is flushed with the cross-start edge of the line.

**`flex-end`**

> The cross-end margin edge of the flex item is flushed with the cross-end edge of the line.

**`center`**

> The flex item's margin box is centered within the line on the cross-axis. If the cross-size of the item is larger than the flex container, it will overflow equally in both directions.

**`baseline`**

> All flex items are aligned such that their baselines align. The item with the largest distance between its cross-start margin edge and its baseline is flushed with the cross-start edge of the line.

**`stretch`**

> Flex items are stretched such as the cross-size of the item's margin box is the same as the line while respecting width and height constraints.

### Examples

     



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/CSS/justify-content "en/CSS/justify-content"
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/CSS/Using_CSS_flexible_boxes "https://developer.mozilla.org/en/CSS/Using_CSS_flexible_boxes"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/"
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."