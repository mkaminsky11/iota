## border-bottom-width

### Summary

The `border-bottom-width` [CSS][0] property sets the width of the bottom border of a box.

* _[Initial value][1]_ `medium` 
* _Applies to_ all elements. It also applies to [`::first-letter`][2]. 
* _[Inherited][3]_ no 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ the absolute length or `0` if [`border-bottom-style`][6] is `none` or `hidden` 
* _Animatable_ yes, as a [length][7] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][8]: [<br-width>][9]
    

    border-bottom-width: 10em    /* Any <length> value */
    border-bottom-width: 3vmax
    border-bottom-width: 6px
    
    border-bottom-width: thin    /* A keyword */
    border-bottom-width: medium
    border-bottom-width: thick
    
    border-right-width: inherit
    

### Values

**<`br-width>`**

> Is either a non-negative explicit [`<length>`][10] value or a keyword denoting the thickness of the bottom border. The keyword must be one of the following values:
> `thin`
> 
> A thin border
> 
> `medium`
> 
> A medium border
> 
> `thick`
> 
> A thick border
> 
> The specification doesn't precisely define the thickness of each of the keywords, which is therefore implementation specific. Nevertheless, it requests that the thickness does follow the `thin ≤ medium ≤ thick` inequality and that the values are constant on a single document.

**`inherit`**

> Represents the calculated value of the `border-bottom-width` of the parent's element.

### Examples

    element { 
        border-bottom-width: thin;
        border-bottom-style: solid;
        border-bottom-color: #000;
    }
    



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-style "The border-bottom-style CSS property sets the line style of the bottom border of a box."
[7]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-br-width "<length> | thin | medium | thick"
[10]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"