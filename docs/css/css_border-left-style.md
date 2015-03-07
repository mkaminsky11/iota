## border-left-style

### Summary

The `border-left-style` [CSS][0] property sets the line style of the left border of a box.

**Note:** The specification doesn't define how borders of different styles connect in the corners.

* _[Initial value][1]_ `none` 
* _Applies to_ all elements. It also applies to [`::first-letter`][2]. 
* _[Inherited][3]_ no 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: [<br-style>][7]
    

    border-left-style: none
    border-left-style: hidden
    border-left-style: dotted
    border-left-style: dashed
    border-left-style: solid
    border-left-style: double
    border-left-style: groove
    border-left-style: ridge
    border-left-style: inset
    border-left-style: outset
    _
    _border-left-style: inherit
    

### Values

**`<br-style>`**

> Is a keyword describing the style of the left border. It can have the following values:
> `none`
> 
> Like for the `hidden` keyword, displays no border. In that case, except if a background image is set, the calculated values of [`border-left-width`][8] will be `0`, even if specified otherwise through the property. In case of table cell and border collapsing, the `none` value has the lowest priority: it means that if any other conflicting border is set, it will be displayed.
> 
> `hidden`
> 
> Like for the `none` keyword, displays no border. In that case, except if a background image is set, the calculated values of [`border-left-width`][8] will be `0`, even if specified otherwise through the property. In case of table cell and border collapsing, the `hidden` value has the highest priority: it means that if any other conflicting border is set, it won't be displayed.
> 
> `dotted`
> 
> Displays a series of rounded dots. The spacing of the dots are not defined by the specification and are implementation-specific. The radius of the dots is half the calculated [`border-left-width`][8].
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
> Displays two straight lines that add up to the pixel amount defined as [`border-width`][9] or [`border-left-width`][8].
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

**inherit**

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
    
    /* border-left-style example classes */
    .b1 {border-left-style:none;}
    .b2 {border-left-style:hidden;}
    .b3 {border-left-style:dotted;}
    .b4 {border-left-style:dashed;}
    .b5 {border-left-style:solid;}
    .b6 {border-left-style:double;}
    .b7 {border-left-style:groove;}
    .b8 {border-left-style:ridge;}
    .b9 {border-left-style:inset;}
    .b10 {border-left-style:outset;}

#### Output



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-br-style "none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset"
[8]: https://developer.mozilla.org/en/docs/Web/CSS/border-left-width "The border-left-width CSS property sets the width of the left border of a box."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/border-width "Technical review completed."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/border-collapse "The border-collapse CSS property selects a table's border model. This has a big influence on the look and style of the table cells."