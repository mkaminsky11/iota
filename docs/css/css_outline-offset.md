## outline-offset

### Summary

The `outline-offset` CSS property is used to set space between an [`outline`][0] and the edge or border of an element. An outline is a line that is drawn around elements, outside the border edge.

* _[Initial value][1]_ `0` 
* _Applies to_ all elements 
* _[Inherited][2]_ no 
* _Media_ [`visual, interactive`][3] 
* _[Computed value][4]_ as specified, but with relative lengths converted into absolute lengths 
* _Animatable_ yes, as a [length][5] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

The space will be transparent (the parent will determine the background).

### Syntax

    [Formal syntax][6]: [<length>][7]
    

    outline-offset: 3px
    outline-offset: 0.2em
    
    outline-offset: inherit
    

### Values

**`<length>`**

> The width of the space. See [`<length>`][8] for possible units. Negative values place the outline inside the element.

### Examples

    p {
      outline: dashed thin;
      /* Move the outline 10px away from the border */
      outline-offset: 10px;
      border:1px solid black;
    }
    

Html

    <p>outline: offset 10px. Border is solid and outline is dashed</p>

The code above produces this effect:

Another example:

outline: multiple offsets;


[0]: https://developer.mozilla.org/en/docs/Web/CSS/outline "The CSS outline property is a shorthand property for setting one or more of the individual outline properties outline-style, outline-width and outline-color in a single declaration. In most cases the use of this shortcut is preferable and more convenient."
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible value: a number followed by 'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'px', like 3px, 1.5cm, -0.5em, 0."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"