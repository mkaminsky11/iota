## border-radius

### Summary

The `border-radius` CSS property allows Web authors to define how rounded border corners are. The curve of each corner is defined using one or two radii, defining its shape: circle or ellipse.

![Images of CSS3 rounded corners: no rounding, rounding w/ an arc of circle, rounding w/ an arc of ellipse](/files/3638/border-radius-sh.png)

The radius applies to the whole [`background`][0], even if the element has no border; the exact position of the clipping is defined by the [`background-clip`][1] property.

This property is a [shorthand][2] to set the four properties [`border-top-left-radius`][3], [`border-top-right-radius`][4], [`border-bottom-right-radius`][5] and [`border-bottom-left-radius`][6].

As with any shorthand property, individual inherited values are not possible, that is `border-radius:0 0 inherit inherit`, which would override existing definitions partially. In that case, the individual longhand properties have to be used.

* _[Initial value][7]_ the concatenation of the initial values of its longhand properties:
  * `border-top-left-radius`: `0`
  * `border-top-right-radius`: `0`
  * `border-bottom-right-radius`: `0`
  * `border-bottom-left-radius`: `0` 
* _Applies to_ all elements; but UA are not required to apply to `table` and `inline-table` elements when [`border-collapse`][8] is `collapse`. The behavior on internal table elements is undefined for the moment.. It also applies to [`::first-letter`][9]. 
* _[Inherited][10]_ no 
* _Percentages_ refer to the corresponding dimension of the border box 
* _Media_ [`visual`][11] 
* _[Computed value][12]_ as each of the properties of the shorthand:
  * `border-bottom-left-radius`: two absolute length or percentages
  * `border-bottom-right-radius`: two absolute length or percentages
  * `border-top-left-radius`: two absolute length or percentages
  * `border-top-right-radius`: two absolute length or percentages 
* _Animatable_ as each of the properties of the shorthand:
  * `border-top-left-radius`: yes, as a [length][13], [percentage][14] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
  * `border-top-right-radius`: yes, as a [length][13], [percentage][14] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
  * `border-bottom-right-radius`: yes, as a [length][13], [percentage][14] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
  * `border-bottom-left-radius`: yes, as a [length][13], [percentage][14] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][15]: [ [<length>][16] [|][17] [<percentage>][18] ]{1,4} [ / [ [<length>][16] [|][17] [<percentage>][18] ]{1,4} ][?][19]

    **The syntax of the first radius allows one to four values:**
    border-radius: _radius_             
    border-radius: _top-left-and-bottom-right_ _top-right-and-bottom-left_ 
    border-radius: _top-left_ _top-right-and-bottom-left_ _bottom-right_ 
    border-radius: _top-left_ _top-right_ _bottom-right_ _bottom-left_ 
    
    **The syntax of the second radius also allows one to four values**
    border-radius: (first radius values) / _radius_             
    border-radius: (first radius values) / _top-left-and-bottom-right_ _top-right-and-bottom-left_ 
    border-radius: (first radius values) / _top-left_ _top-right-and-bottom-left_ _bottom-right_ 
    border-radius: (first radius values) / _top-left_ _top-right_ _bottom-right_ _bottom-left_ 
    
    border-radius: inherit
    

### Values
_radius_
![all-corner.png](/@api/deki/files/6138/=all-corner.png)
Is a [`<length>`][20] or a [`<percentage>`][21] denoting a radius to use for the border in each corner of the border. It is used only in the one-value syntax.

_top-left-and-bottom-right_
![top-left-bottom-right.png](/@api/deki/files/6141/=top-left-bottom-right.png)
Is a [`<length>`][20] or a [`<percentage>`][21] denoting a radius to use for the border in the top-left and bottom-right corners of the element's box. It is used only in the two-value syntax.

_top-right-and-bottom-left_
![top-right-bottom-left.png](/@api/deki/files/6143/=top-right-bottom-left.png)
Is a [`<length>`][20] or a [`<percentage>`][21] denoting a radius to use for the border in the top-right and bottom-left corners of the element's box. It is used only in the two- and three-value syntaxes.

_top-left_
![top-left.png](/@api/deki/files/6142/=top-left.png)
Is a [`<length>`][20] or a [`<percentage>`][21] denoting a radius to use for the border in the top-left corner of the element's box. It is used only in the three- and four-value syntaxes.

_top-right_
![top-right.png](/@api/deki/files/6144/=top-right.png)
Is a [`<length>`][20] or a [`<percentage>`][21] denoting a radius to use for the border in the top-right corner of the element's box. It is used only in the four-value syntax.

_bottom-right_
![bottom-rigth.png](/@api/deki/files/6140/=bottom-rigth.png)
Is a [`<length>`][20] or a [`<percentage>`][21] denoting a radius to use for the border in the bottom-right corner of the element's box. It is used only in the three- and four-value syntaxes.

_bottom-left_
![bottom-left.png](/@api/deki/files/6139/=bottom-left.png)
Is a [`<length>`][20] or a [`<percentage>`][21] denoting a radius to use for the border in the bottom-left corner of the element's box. It is used only in the four-value syntax.

`inherit`
Is a keyword indicating that all four values are inherited from their parent's element calculated value.

### Values

**<length\>**

> Denotes the size of the circle radius or the semi-major and semi-minor axes of the ellipsis. It can be expressed in any unit allowed by the CSS [`<length>`][20] data types. Negative values are invalid.

**<percentage\>**

> Denotes the size of the circle radius, or the semi-major and semi-minor axes of the ellipsis, using percentage values. Percentages for the horizontal axis refer to the width of the box, percentages for the vertical axis refer to the height of the box. Negative values are invalid.

For example:

    border-radius: 1em/5em;
    
    /* is equivalent to */
    
    border-top-left-radius:     1em 5em;
    border-top-right-radius:    1em 5em;
    border-bottom-right-radius: 1em 5em;
    border-bottom-left-radius:  1em 5em;
    

    border-radius: 4px 3px 6px / 2px 4px;
    
    /* is equivalent to: */
    
    border-top-left-radius:     4px 2px;
    border-top-right-radius:    3px 4px;
    border-bottom-right-radius: 6px 2px;
    border-bottom-left-radius:  3px 4px;
    

### Examples

      border: solid 10px;
      /* the border will curve into a 'D' */  
      border-radius: 10px 40px 40px 10px;
      
    

      border: groove 1em red;  
      border-radius: 2em;
    

      background: gold;
      border: ridge gold;
      border-radius: 13em/3em; 
    

      border: none;
      border-radius: 40px 10px;  
    

      border: none;
      border-radius: 50%; 
    

### Live Samples

Sample 1 : [http://jsfiddle.net/Tripad/qnGKj/2/][22]

Sample 2 : [http://jsfiddle.net/Tripad/qnGKj/3/][23]

Sample 3 : [http://jsfiddle.net/Tripad/qnGKj/4/][24]

Sample 4 : [http://jsfiddle.net/Tripad/qnGKj/5/][25]

Sample 5 : [http://jsfiddle.net/Tripad/qnGKj/6/][26]

### Notes

* Dotted and dashed rounded border corners are rendered as solid in Gecko; see [bug 382721][27].
* `border-radius` does not apply to table elements when [`border-collapse`][8] is `collapse`.
* Old versions of WebKit handle multiple values differently, see below.


[0]: https://developer.mozilla.org/en/docs/Web/CSS/background "The background CSS property is a shorthand for setting the individual background values in a single place in the style sheet. background can be used to set the values for one or more of: background-clip, background-color, background-image, background-origin, background-position, background-repeat, background-size, and background-attachment."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/background-clip "Technical review completed. Editorial review completed."
[2]: https://developer.mozilla.org/en/CSS/Shorthand_properties "en/CSS/Shorthand_properties"
[3]: https://developer.mozilla.org/en/docs/Web/CSS/border-top-left-radius "The border-top-left-radius CSS property sets the rounding of the top-left corner of the element. The rounding can be a circle or an ellipse, or if one of the value is 0,no rounding is done and the corner is square."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/border-top-right-radius "The border-top-right-radius CSS property sets the rounding of the top-right corner of the element. The rounding can be a circle or an ellipse, or if one of the value is 0 no rounding is done and the corner is square."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-right-radius "The border-bottom-right-radius CSS property sets the rounding of the bottom-right corner of the element. The rounding can be a circle or an ellipse, or if one of the value is 0 no rounding is done and the corner is square."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-left-radius "The border-bottom-left-radius CSS property sets the rounding of the bottom-left corner of the element. The rounding can be a circle or an ellipse, or if one of the value is 0 no rounding is done and the corner is square."
[7]: https://developer.mozilla.org/en/docs/CSS/initial_value
[8]: https://developer.mozilla.org/en/docs/Web/CSS/border-collapse "The border-collapse CSS property selects a table's border model. This has a big influence on the look and style of the table cells."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[10]: https://developer.mozilla.org/en/docs/CSS/inheritance
[11]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[12]: https://developer.mozilla.org/en/docs/CSS/computed_value
[13]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[14]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[15]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[16]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible values: a number followed by'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc' or 'px', like 3px, 1.5cm, -0.5em or 0"
[17]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[18]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[19]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Question_mark_(.3F) "Question mark multiplier: The previous entity is optional (it may be used once, or not at all)."
[20]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[21]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"
[22]: http://jsfiddle.net/Tripad/qnGKj/2/
[23]: http://jsfiddle.net/Tripad/qnGKj/3/
[24]: http://jsfiddle.net/Tripad/qnGKj/4/
[25]: http://jsfiddle.net/Tripad/qnGKj/5/
[26]: http://jsfiddle.net/Tripad/qnGKj/6/
[27]: https://bugzilla.mozilla.org/show_bug.cgi?id=382721 "Dotted/dashed border-radiused corners are rendered as solid (no border-style support)"