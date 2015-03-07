## flex-basis

### Summary

The [CSS][0] `flex-basis` property specifies the flex basis which is the initial **main size** of a flex item. `The property` determines the size of the content-box unless specified otherwise using [`box-sizing`][1].

* _[Initial value][2]_ `auto` 
* _Applies to_ flex items, including in-flow pseudo-elements 
* _[Inherited][3]_ no 
* _Percentages_ refer to the flex container's inner main size 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified, with lengths made absolute 
* _Animatable_ yes, as a [length][6], [percentage][7] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ the length or percentage before the keyword, if both are present

### Syntax

    [Formal syntax][8]: content [|][9] [<'width'>][10]
    

    flex-basis: 10em      /* <'width'> */
    flex-basis: 3px       /* <'width'> */
    flex-basis: auto      /* <'width'> */
    flex-basis: content
    
    flex-basis: inherit
    

### Values

**`<'width'>`**

> Defined as a number followed by a absolute unit such as `px`, `mm` or `pt`, or a percentage of the parent flex container main size property. Negative values are invalid.

### Examples

    element { 
      flex-basis: 18em;
    }
    



[0]: https://developer.mozilla.org/en/docs/Web/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/box-sizing "The box-sizing CSS property is used to alter the default CSS box model used to calculate widths and heights of elements. It is possible to use this property to emulate the behavior of browsers that do not correctly support the CSS box model specification."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[7]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[10]: https://developer.mozilla.org/en/docs/CSS/width "[<length> | <percentage>] && [border-box | content-box]? | available | min-content | max-content | fit-content | auto"