## margin-top

### Summary

![The effect of the CSS margin-top property on the element box](/files/4101/margin-top.svg)The `margin-top` CSS property of an element sets the margin space required on the top of an element. A negative value is also allowed.

This property has no effect on _non-replaced_ inline elements, like [`<tt>`][0] or [`<span>`][1].

* _[Initial value][2]_ `0` 
* _Applies to_ all elements except elements with table [`display`][3] types other than `table-caption`, `table` and `inline-table` 
* _[Inherited][4]_ no 
* _Percentages_ refer to the width of the containing block 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ the percentage as specified or the absolute length 
* _Animatable_ yes, as a [length][7] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][8]: [<length>][9] [|][10] [<percentage>][11] [|][10] auto
    

    margin-top: 10px;        /* An absolute length */
    margin-top: 1em;         /* A length relative to the text size */
    margin-top: 5%;          /* A margin relative to the nearest block container's width */
    margin-top: auto;
    
    margin-top: inherit;
    

### Values

**`<length>`**

> Specifies a fixed width. See [`<length>`][12] for possible values.

**`<percentage>`**

> A [`<percentage>`][13] always relative to the **width** of the containing block.

**`auto`**

> See [`margin`][14].

### Examples

    .content { margin-top:   5%; }
    .sidebox { margin-top: 10px; }
    .logo    { margin-top: -5px; }
    #footer  { margin-top:  1em; } 
    



[0]: https://developer.mozilla.org/en/docs/Web/HTML/Element/tt "The HTML Teletype Text Element (<tt>) produces an inline element displayed in the browser's default monotype font. This element was intended to style text as it would display on a fixed width display, such as a teletype. It probably is more common to display fixed width type using the <code> element."
[1]: https://developer.mozilla.org/en/docs/Web/HTML/Element/span "The HTML <span> element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline element."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/Web/CSS/display
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/CSS/length "Possible value: a number followed by 'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'px', like 3px, 1.5cm, -0.5em, 0."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[11]: https://developer.mozilla.org/en/docs/CSS/percentage
[12]: https://developer.mozilla.org/en/docs/Web/CSS/length
[13]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[14]: https://developer.mozilla.org/en/docs/Web/CSS/margin