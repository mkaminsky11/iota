## right

### Summary

The `right` [CSS][0] property specifies part of the position of positioned elements.

For absolutely positioned elements (those with [`position`][1]`:` `absolute` or `position:` `fixed`), it specifies the distance between the right margin edge of the element and the right edge of its containing block.

The `right` property has no effect on non-positioned elements.

When both the `right` CSS property and the [`left`][2] CSS property are defined, the position of the element is_overspecified_. In that case, the [`left`][2] value has precedence when the container is left-to-right (that is that the `right` computed value is set to `-left`), and the `right` value has precedence when the container is right-to-left (that is that the [`left`][2] computed value is set to `-right`).

* _[Initial value][3]_ `auto` 
* _Applies to_ positioned elements 
* _[Inherited][4]_ no 
* _Percentages_ refer to the width of the containing block 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ if specified as a length, the corresponding absolute length; if specified as a percentage, the specified value; otherwise, `auto` 
* _Animatable_ yes, as a [length][7], [percentage][8] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][9]: [<length>][10] [|][11] [<percentage>][12] [|][11] auto
    

    right: 3px         /* <length> values */
    right: 2.4em
    
    right: 10%         /* <percentages> of the width of the containing block */
    
    right: auto
    
    right: inherit
    

### Values

**`<length>`**

> Is a negative, null or positive [`<length>`][13] that represents:
> 
> * for _absolutely positioned elements_, the distance to the right edge of the containing block;
> * for _relatively positioned elements_, the offset that the element is moved right from its position in the normal flow if it wasn't positioned.
> 

**`<percentage>`**

> Is a [`<percentage>`][14] of the containing block's width, used as described in the [summary][15].

**`auto`**

> Is a keyword that represents:
> 
> * for absolutely positioned elements, the position the element based on the [`left`][2] property and treat `width: auto` as a width based on the content.
> * for relatively positioned elements, the right offset the element from its original position based on the [`left`][2] property, or if `left` is also `auto`, do not offset it at all.
> 

**`inherit`**

> Is a keyword indicating that the value is the same than the computed value from its parent element (which may not be its containing block). This computed value is then handled like it was a [`<length>`][13], [`<percentage>`][14] or the `auto` keyword.

### Examples

    #example_3 {
      width: 600px;
      height: 400px;
      background-color: #FFC7E4;
      position: relative;
      top: 20px;
      left: 20px;
    }
    
    #example_4 {
      width:200px;
      height:200px;
      background-color: #FFD7C2;
      position:absolute;
      bottom:10px;
      right: 20px;
    }

     <div >Example 3</div>
     <div >Example 4</div>
    

[Example Demo Link][16]


[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/position "The position CSS property chooses alternative rules for positioning elements, designed to be useful for scripted animation effects."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/left "The left CSS property specifies part of the position of positioned elements."
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[8]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[10]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible values: a number followed by'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc' or 'px', like 3px, 1.5cm, -0.5em or 0"
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[12]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[13]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[14]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"
[15]: #Summary
[16]: https://mdn.mozillademos.orghttps://developer.mozilla.org/en/docs/Web/CSS/right$samples/Examples?revision=618467