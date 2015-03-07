## position

### Summary

The `position` [CSS][0] property chooses alternative rules for positioning elements, designed to be useful for scripted animation effects.

* _[Initial value][1]_ `static` 
* _Applies to_ all elements 
* _[Inherited][2]_ no 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

A **positioned element** is an element whose [computed][5] position property is `relative`, `absolute`,` fixed` or `sticky`.

A **relatively positioned element** is an element whose [computed][5] position property is `relative`.

An **absolutely positioned element** is an element whose [computed][5] position property is `absolute` or `fixed.`

A **stickily positioned element** is an element whose [computed][5] position property is `sticky`.

The [`top`][6], [`right`][7], [`bottom`][8], and [`left`][9] properties specify the position of positioned elements.

### Syntax

    [Formal syntax][10]: static [|][11] relative [|][11] absolute [|][11] sticky [|][11] fixed

    position: static
    position: relative
    position: absolute
    position: fixed
    position: sticky
    
    position: inherit
    

### Values

**`static`**

> This keyword lets the element use the normal behavior, that is it is laid out in its current position in the flow.  The` top`,` right`,` bottom`, `left` and `z-index` properties do not apply.

**`relative`**

> This keyword lays out all elements as though the element were not positioned, and then adjust the element's position, without changing layout (and thus leaving a gap for the element where it would have been had it not been positioned). The effect of `position:relative` on `table-*-group`, `table-row`, `table-column`, `table-cell`, and `table-caption` elements is undefined.

**`absolute`**

> Do not leave space for the element. Instead, position it at a specified position relative to its closest positioned ancestor or to the containing block. Absolutely positioned boxes can have margins, they do not collapse with any other margins.

**fixed**

> Do not leave space for the element. Instead, position it at a specified position relative to the screen's viewport and don't move it when scrolled. When printing, position it at that fixed position on _every page_.

**`sticky` __**

> The box position is calculated according to the normal flow (this is called the position in normal flow). Then the box is offset relative to its flow root and containing block and in all cases, including `table` elements, does not affect the position of any following boxes. When a box B is stickily positioned, the position of the following box is calculated as though B were not offset. The effect of '`position: sticky`' on `table` elements is the same as for '`position: relative`'.

### Examples

### Relative positioning

To position an element relatively `20px` from the top and left of its normal position, the following CSS is used.

    #two { position: relative; top: 20px; left: 20px; }
    

Note how the other elements are displayed as if "Two" were in its normal position and taking up space.

![](/@api/deki/files/4922/=relative-positioning.png)

### Absolute positioning

Elements that are positioned relatively are still considered to be in the normal flow of elements in the document. In contrast, an element that is positioned absolutely is taken out of the flow and thus takes up no space when placing other elements. The absolutely positioned element is positioned relative to _nearest positioned ancestor_. If a positioned ancestor doesn't exist, the initial container is used.

In the example below, the ancestor div (box One) is positioned relative (so it becomes the nearest positioned ancestor) and box Two is positioned absolutely:

    #ancestor { position: relative; width: 500px; }
    #two { position: absolute; top: 20px; left: 20px; }
    

![](/@api/deki/files/4923/=absolute-positioning.png)

If \#ancestor had not been positioned relative, box Two would have appeared relative to the upper left corner of the page.

### Fixed positioning

Fixed positioning is similar to absolute positioning, with the exception that the element's containing block is the viewport. This is often used to create a floating element that stays in the same position even after scrolling the page. In the example below the "One" box is fixed 80px from the top of the page and 20px from the left:

    #one { position: fixed; top: 80px; left: 20px; }
    

When viewing the top of the page, the position box appears in the upper left, and after scrolling, it remains in the same place relative to the viewport:

![fixed-1.png](/@api/deki/files/4924/=fixed-1.png?size=thumb)

![fixed-2.png](/@api/deki/files/4925/=fixed-2.png?size=thumb)

### Sticky positioning

Sticky positioning is a hybrid of relative and fixed positioning.  The element is treated as relative positioned until it crosses a specified threshold, at which point it is treated as fixed positioned.  For instance:

    #one { position: sticky; top: 10px; }
    

will behave just like a relatively positioned element until the viewport scrolls such that the element would be less than 10px from the top.  Then, it will be fixed to 10px from the top until the viewport is scrolled back passed this threshold.
 
Sticky positioning is commonly used for the headings in an alphabetized listing.  The B heading will appear just below the items that begin with A until they are scrolled offscreen.  Rather than sliding offscreen with the rest of the content, the B heading will then remain fixed to the top of the viewport until all the B items have scrolled offscreen, at which point it will be covered up by the C heading.
 
[`Demo`][12]
You must specify a threshold with at least one of [`top`][6], [`right`][7], [`bottom`][8], or [`left`][9] for sticky positioning to behave as expected.  Otherwise, it will be indistinguishable from relative positioning.

### Notes

For relatively positioned elements, the [`top`][6] or [`bottom`][8] property specifies the vertical offset from the normal position and the [`left`][9] or [`right`][7] property specifies the horizontal offset.

For absolutely positioned elements, the [`top`][6], [`right`][7], [`bottom`][8], and [`left`][9] properties specify offsets from the edge of the element's containing block (what the element is positioned relative to). The margin of the element is then positioned inside these offsets.

Most of the time, absolutely positioned elements have `auto` values of [`height`][13] and [`width`][14] computed to fit the contents of the element. However, non-replaced absolutely positioned elements can be made to fill the available space by specifying (as other than `auto`) both [`top`][6] and [`bottom`][8] and leaving [`height`][13] unspecified (that is, `auto`). Likewise for [`left`][9], [`right`][7], and [`width`][14].

Except for the case just described of absolutely positioned elements filling the available space:

* If both [`top`][6] and [`bottom`][8] are specified (technically, not `auto`), [`top`][6] wins.
* If both [`left`][9] and [`right`][7] are specified, [`left`][9] wins when [`direction`][15] is `ltr` (English, horizontal Japanese, etc.) and [`right`][7] wins when [`direction`][15] is `rtl` (Persian, Arabic, Hebrew, etc.).


[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value "CSS/computed_value"
[6]: https://developer.mozilla.org/en/docs/Web/CSS/top "The top CSS property specifies part of the position of positioned elements. It has no effect on non-positioned elements."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/right "The right CSS property specifies part of the position of positioned elements."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/bottom "The bottom CSS property participates in specifying the position of positioned elements."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/left "The left CSS property specifies part of the position of positioned elements."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[12]: http://jsfiddle.net/daker/ecpTw/light/
[13]: https://developer.mozilla.org/en/docs/Web/CSS/height "The height CSS property specifies the height of the content area of an element. The content area is inside the padding, border, and margin of the element."
[14]: https://developer.mozilla.org/en/docs/Web/CSS/width "The width CSS property specifies the width of the content area of an element. The content area is inside the padding, border, and margin of the element."
[15]: https://developer.mozilla.org/en/docs/Web/CSS/direction "Set the direction CSS property to match the direction of the text: rtl for languages written from right-to-left (like Hebrew or Arabic) text and ltr for other scripts. This is typically done as part of the document (e.g., using the dir attribute in HTML) rather than through direct use of CSS."