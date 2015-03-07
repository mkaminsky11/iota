## bottom

### Summary

The `bottom` [CSS][0] property participates in specifying the position of **positioned elements**.

For **absolutely positioned elements**, that is, those whose [`position`][1] property is set to `absolute` or `fixed`, the `bottom` property specifies the distance between the bottom margin edge of the element and the bottom edge of the block containing the element.

For **relatively positioned elements**, that is, those with whose [`position`][1] property is set to `relative`, the `bottom` property specifies the distance the element's bottom edge is moved above its normal position.

When both [`top`][2] and `bottom` are specified, **and** [`height`][3] is unspecified or either `auto` or `100%`, both the [`top`][2] and `bottom` distances are respected. In all other situations, if [`height`][3] is constrained in any way, the [`top`][2] property takes precedence and the `bottom` property is ignored.

* _[Initial value][4]_ `auto` 
* _Applies to_ positioned elements 
* _[Inherited][5]_ no 
* _Percentages_ refer to the height of the containing block 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ if specified as a length, the corresponding absolute length; if specified as a percentage, the specified value; otherwise, `auto` 
* _Animatable_ yes, as a [length][8], [percentage][9] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][10]: [<length>][11] [|][12] [<percentage>][13] [|][12] auto
    

    bottom: 3px         /* <length> values */
    bottom: 2.4em
    
    bottom: 10%         /* <percentages> of the height of the containing block */
    
    bottom: auto
    
    bottom: inherit
    

### Values

**`<length>`**

> A negative, `null`, or positive [`<length>`][14] that represents:
> 
> * for **absolutely positioned elements**, the distance to the bottom edge of the containing block;
> * for **relatively positioned elements**, the offset that the element is moved above its position in the normal flow if it wasn't positioned.
> 

**`<percentage>`**

> A [`<percentage>`][15] of the containing block's height, used as described in the [summary][16].

**`auto`**

> Specifies that:
> 
> * for **absolutely positioned elements**, the position of the element is based on the [`top`][2] property, and `height: auto` is treated as a height based on the content.
> * for **relatively positioned elements**, the offset the element from its original position is based on the [`top`][2] property, or if `top` is also `auto`, the element is not moved vertically at all.
> 

**`inherit`**

> Indicates that the value is the same as the computed value from its parent element (which may not be its containing block). This computed value is then handled as if it were a [`<length>`][14], [`<percentage>`][15], or the `auto` keyword.

### Examples

    element { 
        position: absolute;
        bottom: 20px; 
        height: 200px;
        border: 1px solid #000;
    }
    

The following sample demonstrates the difference in behavior of the `bottom` property when [`position`][1] is `absolute` versus `fixed`. When the regular text becomes taller than the viewable portion of the page (that is, the browser window's viewport), blocks positioned with `position:absolute` scroll with the page, while blocks positioned with `position:fixed` don't.

    <!DOCTYPE html>
    <html>
    <head>
    <title>Position at bottom, absolute or fixed</title>
    <style type="text/css">
    p {font-size:30px; line-height:3em;}
    div.pos {width:49%; text-align:center; border:2px solid #00f;}
    div#abs {position:absolute; bottom:0; left:0;}
    div#fix {position:fixed; bottom:0; right:0;}
    </style>
    </head>
    <body>
      <p>This<br>is<br>some<br>tall,<br>tall,
        <br>tall,<br>tall,<br>tall<br>content.</p>
      <div  ><p>Fixed</p></div>
      <div  ><p>Absolute</p></div>
    </body>
    </html>
    



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/position "The position CSS property chooses alternative rules for positioning elements, designed to be useful for scripted animation effects."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/top "The top CSS property specifies part of the position of positioned elements. It has no effect on non-positioned elements."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/height "The height CSS property specifies the height of the content area of an element. The content area is inside the padding, border, and margin of the element."
[4]: https://developer.mozilla.org/en/docs/CSS/initial_value
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[9]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[11]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible values: a number followed by'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc' or 'px', like 3px, 1.5cm, -0.5em or 0"
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[13]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[14]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[15]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"
[16]: #Summary