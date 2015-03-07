## border-style

### Summary

The `border-style` [CSS][0] property is a shorthand property for setting the line style for all four sides of the elements border.

**Note:** The default value of `border-style` is `none`. This means that if you change the [`border-width`][1] and the [`border-color`][2], you will not see the border unless you change this property to something other than `none` or `hidden`.

* _[Initial value][3]_ the concatenation of the initial values of its longhand properties:
  * `border-top-style`: `none`
  * `border-right-style`: `none`
  * `border-bottom-style`: `none`
  * `border-left-style`: `none` 
* _Applies to_ all elements. It also applies to [`::first-letter`][4]. 
* _[Inherited][5]_ no 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ as each of the properties of the shorthand:
  * `border-bottom-style`: as specified
  * `border-left-style`: as specified
  * `border-right-style`: as specified
  * `border-top-style`: as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][8]: [<br-style>][9]{1,4}
    

    border-style: _style_ _                 /* One-value syntax   */_  E.g. border-style: dashed; 
    border-style: horizontal _vertical_  _  /* Two-value syntax   */ _ E.g. border-style: dotted solid; 
    border-style: _top_ _horizontal_ _bottom __ /* Three-value syntax */ _ E.g. border-style: hidden double dashed; 
    border-style: _top_ _right_ _bottom_ _left __ /* Four-value syntax  */ _ E.g. border-style: none solid dotted dashed; 
    
    border-style: inherit

### Values

**`<br-style>`**

> Is a keyword describing the style of the bottom border. It can have the following values:
> `none`
> 
> Like for the `hidden` keyword, displays no border. In that case, except if a background image is set, the calculated values of [`border-width`][1] will be `0`, even if specified otherwise through the property. In case of table cell and border collapsing, the `none` value has the lowest priority: it means that if any other conflicting border is set, it will be displayed.
> 
> `hidden`
> 
> Like for the `none` keyword, displays no border. In that case, except if a background image is set, the calculated values of [`border-width`][1] will be `0`, even if specified otherwise through the property. In case of table cell and border collapsing, the `hidden` value has the highest priority: it means that if any other conflicting border is set, it won't be displayed.
> 
> `dotted`
> 
> Displays a series of rounded dots. The spacing of the dots are not defined by the specification and are implementation-specific. The radius of the dots is half the calculated [`border-width`][1].
> 
> `dashed`
> 
> Displays a series of short square-ended dashes or line segments. The exact size and length of the segments are not defined by the specification and are implementation-specific.
> 
> `solid`
> 
> Displays a single, straight, solid line.
> 
> `double`
> 
> Displays two straight lines that add up to the pixel amount defined as [`border-width`][1] .
> 
> `groove`
> 
> Displays a border leading to a carved effect. It is the opposite of `ridge`.
> 
> `ridge`
> 
> Displays a border with a 3D effect, like if it is coming out of the page. It is the opposite of `groove`.
> 
> `inset`
> 
> Displays a border that makes the box appear embedded. It is the opposite of `outset`. When applied to a table cell with [`border-collapse`][10] set to `collapsed`, this value behaves like `groove`.
> 
> `outset`
> 
> Displays a border that makes the box appear in 3D, embossed. It is the opposite of `inset`. When applied to a table cell with [`border-collapse`][10] set to `collapsed`, this value behaves like `ridge`.
> 
> 

### Examples

### Table with all property values

Here is an example of all the property values

#### HTML Content

    <table>
        <tr>
            <td >none</td>
            <td >hidden</td>
            <td >dotted</td>
            <td >dashed</td>
        </tr>
        <tr>
            <td >solid</td>
            <td >double</td>
            <td >groove</td>
            <td >ridge</td>
        </tr>
        <tr>
            <td >inset</td>
            <td >outset</td>
        </tr>
    </table>

#### CSS Content

    /* Define look of the table */
    table {
        border-width: 3px;
        background-color: #52E396;
    }
    tr, td {
        padding: 2px;
    }
    
    /* border-style example classes */
    .b1 {border-style:none;}
    .b2 {border-style:hidden;}
    .b3 {border-style:dotted;}
    .b4 {border-style:dashed;}
    .b5 {border-style:solid;}
    .b6 {border-style:double;}
    .b7 {border-style:groove;}
    .b8 {border-style:ridge;}
    .b9 {border-style:inset;}
    .b10 {border-style:outset;}

#### Output

### Specific​ations
Specification
Status
Comment

[CSS Backgrounds and Borders Module Level 3  
The definition of 'border-style' in that specification.][11]
Candidate Recommendation
No change

[CSS Level 2 (Revision 1)  
The definition of 'border-style' in that specification.][12]
Recommendation
Added the 2-, 3- and 4-value syntaxes

[CSS Level 1  
The definition of 'border-style' in that specification.][13]
Recommendation

### Browser compatibility

* Desktop
* Mobile

Feature
Chrome
Firefox (Gecko)
Internet Explorer
Opera
Safari

Basic support
1.0
1.0 (1.7 or earlier)
4.0
3.5
1.0

Feature
Android
Firefox Mobile (Gecko)
IE Phone
Opera Mobile
Safari Mobile

Basic support
2.6
1.0 (1.9.2)
7.0
(Yes)
3.0

### See also

* The border-related shorthand CSS properties: [`border`][14], [`border-width`][1], [`border-color`][2], [`border-radius`][15]


[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/border-width "The border-width CSS property sets the width of the border of a box. Using the shorthand property border is often more convenient."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/border-color "The border-color CSS property is a shorthand for setting the color of the four sides of an element's border: border-top-color, border-right-color, border-bottom-color, border-left-color"
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-br-style "none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset"
[10]: https://developer.mozilla.org/en/docs/Web/CSS/border-collapse "The border-collapse CSS property selects a table's border model. This has a big influence on the look and style of the table cells."
[11]: http://dev.w3.org/csswg/css3-background/#border-style
[12]: http://www.w3.org/TR/CSS2/box.html#propdef-border-style
[13]: http://www.w3.org/TR/CSS1/#border-style
[14]: https://developer.mozilla.org/en/docs/Web/CSS/border "The border CSS property is a shorthand property for setting the individual border property values in a single place in the style sheet. border can be used to set the values for one or more of: border-width, border-style, border-color."
[15]: https://developer.mozilla.org/en/docs/Web/CSS/border-radius "The border-radius CSS property allows Web authors to define how rounded border corners are. The curve of each corner is defined using one or two radii, defining its shape: circle or ellipse."