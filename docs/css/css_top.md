## top

### Summary

The `top` CSS property specifies part of the position of positioned elements. It has no effect on non-positioned elements.

For absolutely positioned elements (those with [`position`][0]`: absolute` or [`position`][0]`: fixed`), it specifies the distance between the top margin edge of the element and the top edge of its containing block.

For relatively positioned elements (those with [`position`][0]`: relative`), it specifies the amount the element is moved below its normal position.

When both `top` and [`bottom`][1] are specified, as long as [`height`][2] is unspecified, `auto` or `100%`, both `top` and [`bottom`][1] distances will be respected. Otherwise, if [`height`][2] is constrained in any way, the `top` property takes precedence and the [`bottom`][1] property is ignored.

* _[Initial value][3]_ `auto` 
* _Applies to_ positioned elements 
* _[Inherited][4]_ no 
* _Percentages_ refer to the height of the containing block 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ if specified as a length, the corresponding absolute length; if specified as a percentage, the specified value; otherwise, `auto` 
* _Animatable_ yes, as a [length][7], [percentage][8] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][9]: [<length>][10] [|][11] [<percentage>][12] [|][11] auto
    

    top: 3px         /* <length> values */
    top: 2.4em
    
    top: 10%         /* <percentages> of the height of the containing block */
    
    top: auto
    
    top: inherit
    

### Values

**`<length>`**

> Is a negative, null or positive [`<length>`][13] that represents:
> 
> * for _absolutely positioned elements_, the distance to the top edge of the containing block;
> * for _relatively positioned elements_, the offset that the element is moved below its position in the normal flow if it wasn't positioned.
> 

**`<percentage>`**

> Is a [`<percentage>`][14] of the containing block's height, used as described in the [summary][15].

**`auto`**

> Is a keyword that represents:
> 
> * for absolutely positioned elements, the position the element based on the [`bottom`][1] property and treat `height: auto` as a height based on the content.
> * for relatively positioned elements, the offset the element from its original position based on the [`bottom`][1] property, or if `bottom` is also `auto`, do not offset it at all.
> 

**`inherit`**

> Is a keyword indicating that the value is the same than the computed value from its parent element (which may not be its containing block). This computed value is then handled like it was a [`<length>`][13], [`<percentage>`][14] or the `auto` keyword.

### Examples

    /* The body could be set using px unit also for the div to operate */
    body{
      width: 100%;
      height: 100%;
    }
    
    /* The div can now operate the settings with % unit (body w and h are set) */
    div {
      position: absolute;
      left: 15%;
      top: 30%;
      bottom: 30%;
      width: 70%;
      height: 40%;
      text-align: left;
      border: 3px rgb(0,0,0) solid;
    }

     <?xml version="1.0" encoding="utf-8"?>
     <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
               "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
     <html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
       <head>
         <meta http-equiv="Content-Type" content="application/xhtml+xml" />
         <title>Mozilla.org height top left width percentage CSS</title>
         <style type="text/css">
           /* The body could be set using px unit also for the div to operate */
           body {
             width: 100%;
             height: 100%;
           }
           /* The div can now operate the settings with % unit (body w and h are set) */
           div {
             position: absolute;
             left: 15%;
             top: 30%;
             bottom: 30%;
             width: 70%;
             height: 40%;
             text-align: left;
             border: 3px rgb(0,0,0) solid;
           }
         </style>
       </head>
       <body>
          <center>
            <div>
                 ...Some content...
            </div>
          </center>
    
       </body>
     </html>



[0]: https://developer.mozilla.org/en/docs/Web/CSS/position
[1]: https://developer.mozilla.org/en/docs/Web/CSS/bottom
[2]: https://developer.mozilla.org/en/docs/Web/CSS/height
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[8]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[10]: https://developer.mozilla.org/en/docs/CSS/length "Possible value: a number followed by 'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'px', like 3px, 1.5cm, -0.5em, 0."
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[12]: https://developer.mozilla.org/en/docs/CSS/percentage
[13]: https://developer.mozilla.org/en/docs/Web/CSS/length
[14]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[15]: #Summary