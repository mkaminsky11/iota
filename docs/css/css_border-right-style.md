## border-right-style

### Summary

The `border-right-style` [CSS][0] property sets the line style of the right border of a box.

The specification doesn't define how borders of different styles connect in the corners.

* _[Initial value][1]_ `none` 
* _Applies to_ all elements 
* _[Inherited][2]_ no 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][5]: [<br-style>][6]
    

    border-right-style: none
    border-right-style: hidden
    border-right-style: dotted
    border-right-style: dashed
    border-right-style: solid
    border-right-style: double
    border-right-style: groove
    border-right-style: ridge
    border-right-style: inset
    border-right-style: outset
    _
    _border-right-style: inherit
    

### Values

**`<br-style>`**

> Is a keyword describing the style of the bottom border. It can have the following values:
> `none`
> 
> Like for the `hidden` keyword, displays no border. In that case, except if a background image is set, the calculated values of [`border-right-width`][7] will be `0`, even if specified otherwise through the property. In case of table cell and border collapsing, the `none` value has the lowest priority: it means that if any other conflicting border is set, it will be displayed.
> 
> `hidden`
> 
> Like for the `none` keyword, displays no border. In that case, except if a background image is set, the calculated values of [`border-right-width`][7] will be `0`, even if specified otherwise through the property. In case of table cell and border collapsing, the `hidden` value has the highest priority: it means that if any other conflicting border is set, it won't be displayed.
> 
> `dotted`
> 
> Displays a series of rounded dots. The spacing of the dots are not defined by the specification and are implementation-specific. The radius of the dots is half the calculated [`border-right-width`][7].
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
> Displays two straight lines that add up to the pixel amount defined as [`border-width`][8] or [`border-right-width`][7].
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
> Displays a border that makes the box appear embedded. It is the opposite of `outset`. When applied to a table cell with [`border-collapse`][9] set to `collapsed`, this value behaves like `groove`.
> 
> `outset`
> 
> Displays a border that makes the box appear in 3D, embossed. It is the opposite of `inset`. When applied to a table cell with [`border-collapse`][9] set to `collapsed`, this value behaves like `ridge`.
> 
> 

**`inherit`**

> Represents the border style used by the parent of the current element.

### Examples

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
        border-width: 2px;
        background-color: #52E385;
    }
    tr, td {
        padding: 3px;
    }
    
    /* border-right-style example classes */
    .b1 {border-right-style:none;}
    .b2 {border-right-style:hidden;}
    .b3 {border-right-style:dotted;}
    .b4 {border-right-style:dashed;}
    .b5 {border-right-style:solid;}
    .b6 {border-right-style:double;}
    .b7 {border-right-style:groove;}
    .b8 {border-right-style:ridge;}
    .b9 {border-right-style:inset;}
    .b10 {border-right-style:outset;}

#### Output



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-br-style "none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset"
[7]: https://developer.mozilla.org/en/docs/Web/CSS/border-right-width
[8]: https://developer.mozilla.org/en/docs/Web/CSS/border-width
[9]: https://developer.mozilla.org/en/docs/Web/CSS/border-collapse