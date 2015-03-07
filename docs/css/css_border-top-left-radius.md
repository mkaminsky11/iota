## border-top-left-radius

### Summary

The `border-top-left-radius` CSS property sets the rounding of the top-left corner of the element. The rounding can be a circle or an ellipse, or if one of the value is `0,`no rounding is done and the corner is square.

![border-radius.png](/@api/deki/files/6132/=border-radius.png)

A background, being an image or a color, is clipped at the border, even a rounded one; the exact location of the clipping is defined by the value of the [`background-clip`][0] property.

If the value of this property is not set in a [`border-radius`][1] shorthand property that is applied to the element after the `border-top-left-radius` CSS property, the value of this property is then reset to its initial value by the [shorthand property][2].

* _[Initial value][3]_ `0` 
* _Applies to_ all elements; but UA are not required to apply to `table` and `inline-table` elements when [`border-collapse`][4] is `collapse`. The behavior on internal table elements is undefined for the moment.. It also applies to [`::first-letter`][5]. 
* _[Inherited][6]_ no 
* _Percentages_ refer to the corresponding dimension of the border box 
* _Media_ [`visual`][7] 
* _[Computed value][8]_ two absolute length or percentages 
* _Animatable_ yes, as a [length][9], [percentage][10] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][11]: [ [<length>][12] [|][13] [<percentage>][14] ]{1,2}  

    border-top-left-radius: _radius_               /* the corner is a circle    */  E.g. border-top-left-radius: 3px
    border-top-left-radius: _horizontal_ _vertical_  /* the corner is an ellipsis */  E.g. border-top-left-radius: 0.5em 1em
    
    border-top-left-radius: inherit
    

where:

**_radius_**

> Is a [`<length>`][15] or a [`<percentage>`][16] denoting the radius of the circle to use for the border in that corner.

**_horizontal_**

> Is a [`<length>`][15] or a [`<percentage>`][16] denoting the horizontal semi-major axis of the ellipsis to use for the border in that corner.

**_vertical_**

> Is a [`<length>`][15] or a [`<percentage>`][16] denoting the vertical semi-major axis of the ellipsis to use for the border in that corner.

### Values

**`<length>`**

> Denotes the size of the circle radius or the semi-major and semi-minor axes of the ellipsis. It can be expressed in any unit allowed by the CSS [`<length>`][15] data types. Negative values are invalid.

**`<percentage>`**

> Denotes the size of the circle radius, or the semi-major and semi-minor axes of the ellipsis, using percentage values. Percentages for the horizontal axis refer to the width of the box, percentages for the vertical axis refer to the height of the box. Negative values are invalid.

### Examples

Live example
Code

An arc of ellipse is used as the border

    
    div {
      border-top-left-radius: 40px 40px;
    }
    

An arc of ellipse is used as the border

    
    div {
      border-top-left-radius: 40px 20px;
    }
    

The box is a square: an arc of circle is used as the border

    
    div 
      border-top-left-radius: 40%;
    }
    

The box is not a square: an arc of ellipse is used as the border

    
    div {
      border-top-left-radius: 40%;
    }
    

The background color is clipped at the border

    
    div {
      border-top-left-radius:40%;
      border-style: black 3px double;
      background-color: rgb(250,20,70);
      background-clip: content-box;
    }
    



[0]: https://developer.mozilla.org/en/docs/Web/CSS/background-clip "Technical review completed. Editorial review completed."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/border-radius "The border-radius CSS property allows Web authors to define how rounded border corners are. The curve of each corner is defined using one or two radii, defining its shape: circle or ellipse."
[2]: https://developer.mozilla.org/en/CSS/Shorthand_properties "en/CSS/Shorthand_properties"
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/Web/CSS/border-collapse "The border-collapse CSS property selects a table's border model. This has a big influence on the look and style of the table cells."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[6]: https://developer.mozilla.org/en/docs/CSS/inheritance
[7]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[8]: https://developer.mozilla.org/en/docs/CSS/computed_value
[9]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[10]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[12]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible values: a number followed by'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc' or 'px', like 3px, 1.5cm, -0.5em or 0"
[13]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[14]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[15]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[16]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"