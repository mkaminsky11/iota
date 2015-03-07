## border-left-width

### Summary

The `border-left-width` [CSS][0] property sets the width of the left border of a box.

* _[Initial value][1]_ `medium` 
* _Applies to_ all elements 
* _[Inherited][2]_ no 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ the absolute length or `0` if [`border-left-style`][5] is `none` or `hidden` 
* _Animatable_ yes, as a [length][6] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: [<br-width>][8]
    

    border-left-width: 10em    /* Any <length> value */
    border-left-width: 3vmax
    border-left-width: 6px
    
    border-left-width: thin    /* A keyword */
    border-left-width: medium
    border-left-width: thick
    
    border-left-width: inherit
    

### Values

**`<br-width>`**

> Is either a non-negative explicit [`<length>`][9] value or a keyword denoting the thickness of the left border. The keyword must be one of the following values:
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
> The specification doesn't define precisely the thickness of each fo the keywords, which is therefore implementation specific. Nevertheless, it requests that the thickness does follow the `thin ≤ medium ≤ thick` pattern and is constant on a single document.

**`inherit`**

> Represents the calculated value of the `border-left-width` of the parent's element.

### Examples

    .left-red-border { 
      border-left-width: thin;
      border-left-style: solid;
      border-left-color: #F00;
      padding: 10px;
    }
    

    <div >
      Example of a border on the left side.
    </div>



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/Web/CSS/border-left-style
[6]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-br-width "<length> | thin | medium | thick"
[9]: https://developer.mozilla.org/en/docs/Web/CSS/length