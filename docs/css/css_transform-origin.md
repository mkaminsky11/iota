## transform-origin

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `transform-origin` CSS property lets you modify the origin for transformations of an element. For example, the transform-origin of the `rotate()` function is the centre of rotation. (This property is applied by first translating the element by the negated value of the property, then applying the element's transform, then translating by the property value.)

Not explicitly set values are reset to their corresponding values.

* _[Initial value][1]_ `50% 50% 0` 
* _Applies to_ transformable elements 
* _[Inherited][2]_ no 
* _Percentages_ refer to the size of bounding box 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ for [`<length>`][5] the absolute value, otherwise a percentage 
* _Animatable_ yes, as a simple list of a [length][6], [percentage][7] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ One or two values, with length made absolute and keywords translated to percentages

### Syntax

    [Formal syntax][8]: [ [<percentage>][9] [|][10] [<length>][11] [|][10] left [|][10] center [|][10] right [|][10] top [|][10] bottom] [|][10] [ [ [<percentage>][9] [|][10] [<length>][11] [|][10] left [|][10] center [|][10] right ] [&&][12] [ [<percentage>][9] [|][10] [<length>][11] [|][10] top [|][10] center [|][10] bottom ] ] [<length>][11][?][13]
    

    transform-origin: _x-offset_                                   /* One-value syntax */   E.g.  transform-origin: 2px 
    transform-origin: _offset-keyword_                                                      E.g.  transform-origin: bottom
    
    transform-origin: _x-offset_ _y-offset_                          /* Two-value syntax */   E.g.  transform-origin: 3cm 2px
    transform-origin: _y-offset_ _x-offset-keyword_                                           E.g.  transform-origin: 2px left
    transform-origin: _x-offset-keyword_ _y-offset_                                           E.g.  transform-origin: left 2px
    transform-origin: x-_offset-keyword_ _y-offset-keyword_                                   E.g.  transform-origin: right top
    transform-origin: _y-offset-keyword_ _x-offset-keyword_                                   E.g.  transform-origin: top right
    
    transform-origin: _x-offset_ _y-offset_ _z-offset_                 /* Three-value syntax */ E.g.  transform-origin: 2px 30% 10px
    transform-origin: _y-offset_ _x-offset-keyword_ _z-offset_                                  E.g.  transform-origin: 2px left 10px
    transform-origin: _x-offset-keyword_ _y-offset_ _z-offset_                                  E.g.  transform-origin: left 5px -3px
    transform-origin: x-_offset-keyword_ _y-offset-keyword z-offset_                          E.g.  transform-origin: right bottom 2cm
    transform-origin: _y-offset-keyword_ _x-offset-keyword z-offset_                          E.g.  transform-origin: bottom right 2cm
    

### Values

**_x-offset_**

> Is a [`<length>`][5] or a [`<percentage>`][14] describing how far from the left edge of the box the origin of the transform is set.

**_offset-keyword_**

> Is one of the `left`, `right`, `top`, `bottom` or `center` keyword describing the corresponding offset.

**_y-offset_**

> Is a [`<length>`][5] or a [`<percentage>`][14] describing how far from the top edge of the box the origin of the transform is set.

**_x-offset-keyword_**

> Is one of the `left`, `right` or `center` keyword describing how far from the left edge of the box the origin of the transform is set.

**_y-offset-keyword_**

> Is one of the `top`, `bottom` or `center` keyword describing how far from the top edge of the box the origin of the transform is set.

**_z-offset_**

> Is a [`<length>`][5] (and never a [`<percentage>`][14] which would make the statement invalid) describing how far from the user eye the z=0 origin is set.

The keywords are convenience shorthands and match the following [`<percentage>`][14] values:
keyword
value

`left`
`0%`

`center`
`50%`

`right`
`100%`

`top`
`0%`

`bottom`
`100%`

### Examples

See [Using CSS transforms][15] for examples.

### Live Examples
`transform: none;`

`transform: rotate(30deg);`

`transform: rotate(30deg);  
transform-origin: 0 0;`

`transform: rotate(30deg);  
transform-origin: 100% 100%;`

`transform: rotate(30deg);  
transform-origin: -10em -30em;`

`transform: scale(1.9);`

`transform: scale(1.9);  
transform-origin: 0 0;`

`transform: scale(1.9);  
transform-origin: 100% -30%;`

`transform: skewX(50deg);`

`transform: skewY(50deg);  
transform-origin: 100% -30%;`



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[6]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[7]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[11]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible values: a number followed by'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc' or 'px', like 3px, 1.5cm, -0.5em or 0"
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_ampersand "Double ampersand: The two entities are mandatory, but may appear in any order."
[13]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Question_mark_(.3F) "Question mark multiplier: The previous entity is optional (it may be used once, or not at all)."
[14]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"
[15]: /En/CSS/Using_CSS_transforms "en/CSS/Using CSS transforms"