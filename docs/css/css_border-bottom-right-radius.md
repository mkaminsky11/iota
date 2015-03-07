## border-bottom-right-radius

### Summary

The `border-bottom-right-radius` CSS property sets the rounding of the bottom-right corner of the element. The rounding can be a circle or an ellipse, or if one of the value is `0` no rounding is done and the corner is square.

![border-bottom-right-radius.png](/@api/deki/files/6134/=border-bottom-right-radius.png)

A background, being an image or a color, is clipped at the border, even a rounded one; the exact location of the clipping is defined by the value of the [`background-clip`][0] property.

If the value of this property is not set in a [`border-radius`][1] shorthand property that is applied to the element after the `border-bottom-right-radius` CSS property, the value of this property is then reset to its initial value by the [shorthand property][2].

* _[Initial value][3]_ `0` 
* _Applies to_ all elements; but UA are not required to apply to `table` and `inline-table` elements when [`border-collapse`][4] is `collapse`. The behavior on internal table elements is undefined for the moment. 
* _[Inherited][5]_ no 
* _Percentages_ refer to the corresponding dimension of the border box 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ two absolute length or percentages 
* _Animatable_ yes, as a [length][8], [percentage][9] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][10]: [ [<length>][11] [|][12] [<percentage>][13] ]{1,2} 

    border-bottom-right-radius: _radius_               /* the corner is a circle    */  E.g. border-bottom-right-radius: 3px
    border-bottom-right-radius: _horizontal_ _vertical_  /* the corner is an ellipsis */  E.g. border-bottom-right-radius: 0.5em 1em
    
    border-bottom-right-radius: inherit
    

where:

**_radius_**

> Is a [`<length>`][14] or a [`<percentage>`][15] denoting the radius of the circle to use for the border in that corner.

**_horizontal_**

> Is a [`<length>`][14] or a [`<percentage>`][15] denoting the horizontal semi-major axis of the ellipsis to use for the border in that corner.

**_vertical_**

> Is a [`<length>`][14] or a [`<percentage>`][15] denoting the vertical semi-major axis of the ellipsis to use for the border in that corner.

### Values

**`<length>`**

> Denotes the size of the circle radius or the semi-major and semi-minor axes of the ellipsis. It can be expressed in any unit allowed by the CSS [`<length>`][14] data types. Negative values are invalid.

**`<percentage>`**

> Denotes the size of the circle radius, or the semi-major and semi-minor axes of the ellipsis, using percentage values. Percentages for the horizontal axe refer to the width of the box, percentages for the vertical axe refer to the height of the box. Negative values are invalid.

### Examples
Live example
Code

An arc of circle is used as the border

    
    div {
      border-bottom-right-radius: 40px 40px;
    }
    

An arc of ellipse is used as the border

    
    div {   
      border-bottom-right-radius: 40px 20px;
    }
    

The box is a square: an arc of circle is used as the border

    
    div {   
      border-bottom-right-radius: 40%;
    }
    

The box is not a square: an arc of ellipse is used as the border

    
    div {   
      border-bottom-right-radius: 40%;
    }
    

The background color is clipped at the border

    
    div {
      border-bottom-right-radius:40%;
      border-style: black 3px double;
      background-color: rgb(250,20,70);
      background-clip: content-box;
    }
    



[0]: https://developer.mozilla.org/en/docs/Web/CSS/background-clip
[1]: https://developer.mozilla.org/en/docs/Web/CSS/border-radius
[2]: https://developer.mozilla.org/en/CSS/Shorthand_properties "en/CSS/Shorthand_properties"
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/Web/CSS/border-collapse
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[9]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[11]: https://developer.mozilla.org/en/docs/CSS/length "Possible value: a number followed by 'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'px', like 3px, 1.5cm, -0.5em, 0."
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[13]: https://developer.mozilla.org/en/docs/CSS/percentage
[14]: https://developer.mozilla.org/en/docs/Web/CSS/length
[15]: https://developer.mozilla.org/en/docs/Web/CSS/percentage