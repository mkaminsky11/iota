## margin-bottom

### Summary

![The effect of the CSS margin-bottom property on the element box](/files/4045/margin-bottom.svg)The `margin-bottom` [CSS][0] property of an element sets the margin space required on the bottom of an element. A negative value is also allowed.

This property has no effect on _non-replaced_ inline elements, like [`<tt>`][1] or [`<span>`][2].

* _[Initial value][3]_ `0` 
* _Applies to_ all elements except elements with table [`display`][4] types other than `table-caption`, `table` and `inline-table`. It also applies to [`::first-letter`][5]. 
* _[Inherited][6]_ no 
* _Percentages_ refer to the width of the containing block 
* _Media_ [`visual`][7] 
* _[Computed value][8]_ the percentage as specified or the absolute length 
* _Animatable_ yes, as a [length][9] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][10]: [<length>][11] [|][12] [<percentage>][13] [|][12] auto

    margin-bottom: 10px;        /* An absolute length */
    margin-bottom: 1em;         /* A length relative to the text size */
    margin-bottom: 5%;          /* A margin relative to the nearest block container's width */
    margin-bottom: auto;
    
    margin-bottom: inherit;
    

### Values

**`<length>`**

> Specifies a fixed width. See [`<length>`][14] for possible values.

**`<percentage>`**

> A [`<percentage>`][15] always relative to the **width** of the containing block.

**`auto`**

> See [`margin`][16].

### Example

### HTML

    <div >
    <div >Box 0</div>
    <div >Box 1</div>
    <div >Box one's negative margin pulls me up</div>
    </div>

### CSS

CSS for divs to set margin-bottom and height

    .box0 {
        margin-bottom:1em;
        height:3em;
    }
    .box1 {
        margin-bottom:-1.5em;
        height:4em;
    }
    .box2 {
        border:1px dashed black;
        border-width:1px 0;
        margin-bottom:2em;
    }
    
    

Some definations for container and divs so margins' effects can be seen more clearly

    .container {
        background-color:orange;
        width:320px;
        border:1px solid black;
    }
    div {
        width:320px;
        background-color:gold;
    }



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/HTML/Element/tt "The HTML Teletype Text Element (<tt>) produces an inline element displayed in the browser's default monotype font. This element was intended to style text as it would display on a fixed width display, such as a teletype. It probably is more common to display fixed width type using the <code> element."
[2]: https://developer.mozilla.org/en/docs/Web/HTML/Element/span "The HTML <span> element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline element."
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/Web/CSS/display "The display CSS property specifies the type of rendering box used for an element. In HTML, default display property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is inline."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[6]: https://developer.mozilla.org/en/docs/CSS/inheritance
[7]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[8]: https://developer.mozilla.org/en/docs/CSS/computed_value
[9]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[11]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible value: a number followed by 'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'px', like 3px, 1.5cm, -0.5em, 0."
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[13]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[14]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[15]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"
[16]: https://developer.mozilla.org/en/docs/Web/CSS/margin "The margin CSS property sets the margin for all four sides. It is a shorthand to avoid setting each side separately with the other margin properties: margin-top, margin-right, margin-bottom and margin-left.
 Negative values are also allowed."