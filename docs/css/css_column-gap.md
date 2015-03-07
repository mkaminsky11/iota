## column-gap

### Summary

The `column-gap` CSS property sets the size of the gap between columns for elements which are specified to display as a multi-column element.

* _[Initial value][0]_ `normal` 
* _Applies to_ multicol elements 
* _[Inherited][1]_ no 
* _Media_ [`visual`][2] 
* _[Computed value][3]_ the absolute length or the keyword `normal` 
* _Animatable_ yes, as a [length][4] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][5]: [<length>][6] [|][7] normal
    

    column-gap: 3px
    column-gap: 2.5em
    column-gap: normal
    
    column-gap: inherit
    

### Values

**`normal`**

> Is a keyword indicating to use the browser-defined default spacing between columns. The specification, and most modern browsers follow it, recommends this keyword to be equal to a length of `1em`.

**`<length>`**

> Is a [`<length>`][8] value defining the size of the gap between columns. It must not be negative, but may be equal to `0`.

### Examples

    .content-box {
      border: 10px solid #000000;
      column-count: 3;
      column-gap: 20px;
    }
    



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible values: a number followed by'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc' or 'px', like 3px, 1.5cm, -0.5em or 0"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"