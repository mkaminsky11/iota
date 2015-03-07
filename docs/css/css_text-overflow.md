## text-overflow

### Summary

The `text-overflow` [CSS][0] property determines how overflowed content that is not displayed is signaled to the users. It can be clipped, or display an ellipsis ('`…`', `U+2026 Horizontal Ellipsis`) or a Web author-defined string.

![text-overflow.png](/@api/deki/files/5846/=text-overflow.png)

Clipping happens at the border of the box; to clip at the character limit an empty custom string can be used (`''`).

This property only affects content that is overflowing a block container element in its _inline_ progression direction (not text overflowing at the bottom of a box, for example). Text can overflow when it is prevented from wrapping (e.g., due to '``white-space:nowrap``') or a single word being too long to fit.

This CSS property doesn't force an overflow to occur; to do so and make `text-overflow` to be applied, the author must apply some additional properties on the element, like setting [`overflow`][1] to `hidden`.

* _[Initial value][2]_ `clip` 
* _Applies to_ block container elements 
* _[Inherited][3]_ no 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: [ clip [|][7] ellipsis [|][7] [<string>][8] ]{1,2}

    /* One-value syntax: the value describes the overflow performed at the end of the line (right end if ltr, left end if rtl) */
    text-overflow: clip
    text-overflow: ellipsis
    text-overflow: "…"
    
    /* Two-value syntax: the first value describes the overflow at the left end of the line, 
                         the second at the right end. Directionality has no influence */
    
    text-overflow: clip ellipsis
    text-overflow: "…" "…"
    
    text-overflow: inherit

### Values

**`clip`**

> This keyword value indicates to truncate the text at the limit of the [content area][9], therefore the truncation can happen in the middle of a character. To truncate at the transition between two characters, the empty string value (`''`) must be used. The value `clip` is the default for this property.

**`ellipsis`**

> This keyword value indicates to display an ellipsis (`'…'`, `U+2026 Horizontal Ellipsis`) to represent clipped text. The ellipsis is displayed inside the [content area][9], decreasing the amount of text displayed. If there is not enough space to display the ellipsis, it is clipped.

**`<string>` __**

> The [`<string>`][10] to be used to represent clipped text. The string is displayed inside the [content area][9], shortening more the size of the displayed text. If there is not enough place to display the string itself, it is clipped.

### Examples

    p {
      white-space: nowrap;
      width: 100%;                   
      overflow: hidden;              /* "overflow" value must be different from "visible" */ 
    
      text-overflow:    ellipsis;
    }
    

CSS value
`direction: ltr`
`direction: rtl`

Expected Result
Live result
Expected Result
Live result

_visible overflow_
1234567890

1234567890
0987654321

1234567890

`text-overflow: clip`
![t-o_clip.png](/@api/deki/files/6056/=t-o_clip.png)

123456
![t-o_clip_rtl.png](/@api/deki/files/6057/=t-o_clip_rtl.png)

1234567890

`text-overflow: ''`
12345

123456
54321

1234567890

`text-overflow: ellipsis`
1234...

1234567890
...4321

1234567890

`text-overflow: '.'`
1234\.

1234567890
.4321

1234567890

`text-overflow: clip clip`
123456

1234567890
654321

1234567890

`text-overflow: clip ellipsis`
1234...

1234567890
6543...

1234567890

`text-overflow: clip '.'`
1234\.

1234567890
6543\.

1234567890

`text-overflow: ellipsis clip`
...3456

1234567890
...4321

1234567890

`text-overflow: ellipsis ellipsis`
...34...

1234567890
...43...

1234567890

`text-overflow: ellipsis '.'`
...34\.

1234567890
...43\.

1234567890

`text-overflow: ',' clip`
,3456

1234567890
,4321

1234567890

`text-overflow: ',' ellipsis`
,34...

1234567890
,43...

1234567890

`text-overflow: ',' '.'`
,34\.

1234567890
,53\.

1234567890



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/overflow
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[8]: https://developer.mozilla.org/en/docs/CSS/string
[9]: https://developer.mozilla.org/en/CSS/box_model "en/CSS/Box_model"
[10]: https://developer.mozilla.org/en/docs/Web/CSS/string