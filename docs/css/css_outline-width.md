## outline-width

### Summary

The `outline-width` CSS property is used to set the width of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out:

* _[Initial value][0]_ `medium` 
* _Applies to_ all elements 
* _[Inherited][1]_ no 
* _Media_ [`visual, interactive`][2] 
* _[Computed value][3]_ an absolute length; if the keyword `none` is specified, the computed value is `0` 
* _Animatable_ yes, as a [length][4] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][5]: [<br-width>][6]
    

    outline-width: thin
    outline-width: medium
    outline-width: thick
    
    outline-width: 1px     /* <length> values */
    outline-width: 0.1em
    
    outline-width: inherit
    </length>

### Values

**`thin`**

> Depends on the UA. Typically **1px** in desktop browsers like Firefox.

**`medium`**

> Depends on the UA. Typically **3px** in desktop browsers like Firefox.

**`thick`**

> Depends on the UA. Typically **5px** in desktop browsers like Firefox.

**`<length>`**

> See [`<length>`][7] values.

### Examples

    thin   medium    thick    2px    1ex      2em



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-br-width "<length> | thin | medium | thick"
[7]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"