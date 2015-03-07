## background-position

### Summary

The `background-position` CSS property sets the initial position, relative to the background position layer defined by [`background-origin`][0] for each defined background image.

**Note:** If the value of this property is not set in a [`background`][1] shorthand property that is applied to the element after the `background-position` CSS property, the value of this property is then reset to its initial value by the shorthand property.

* _[Initial value][2]_ `0% 0%` 
* _Applies to_ all elements. It also applies to [`::first-letter`][3] and [`::first-line`][4]. 
* _[Inherited][5]_ no 
* _Percentages_ refer to the size of the background positioning area minus size of background image; size refers to the width for horizontal offsets and to the height for vertical offsets 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ a list, each item consisting of two keywords representing the origin and two offsets from that origin, each given as an absolute length (if given a [`<length>`][8]), otherwise as a percentage 
* _Animatable_ yes, as a repeatable list of a simple list of a [length][9], [percentage][10] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][11]:  [<position>][12][#][13]

### Values

**`<position>`**

> Is a [`<position>`][14], that is one to four values representing a 2D position regarding the edges of the element's box. Relative or absolute offsets can be given. Note that the position can be set outside of the element's box.

### Examples

### Demo page with basic examples

[View the live example][15]

### Examples using CSS [background][16] and multiple images

There should be seven yellow elements, each with a star in a different position. The final rectangle has two background images, each with a different background-position.

#### HTML Content

    <div >Example One</div>
    <div >Example Two</div>
    <div >Example Three</div>

#### CSS Content

    /* Shared among all DIVS */
    div {
        background-color: #FFEE99;
        background-repeat: no-repeat;
        width: 300px;
        height: 80px;
        margin-bottom: 12px;
    }
    
    /* background-position examples */
    
    /* These examples use the background shorthand CSS property */
    .exampleone {
        background: url("https://developer.mozilla.org/samples/cssref/images/startransparent.gif") #FFEE99 2.5cm bottom no-repeat;
    }
    .exampletwo {
        background: url("https://developer.mozilla.org/samples/cssref/images/startransparent.gif") #FFEE99 3em 50% no-repeat;
    }
    
    /*
    Multiple background images: Each image is matched with the
    corresponding position style, from first specified to last.
    */
    .examplethree {
        background-image:    url("https://developer.mozilla.org/samples/cssref/images/startransparent.gif"), 
                             url("https://mdn.mozillademos.org/files/7693/catfront.png");
        background-position: 0px 0px,
                             center;
    }

#### Output



[0]: https://developer.mozilla.org/en/docs/Web/CSS/background-origin "The background-origin CSS property determines the background positioning area, that is the position of the origin of an image specified using the background-image CSS property."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/background "The background CSS property is a shorthand for setting the individual background values in a single place in the style sheet. background can be used to set the values for one or more of: background-clip, background-color, background-image, background-origin, background-position, background-repeat, background-size, and background-attachment."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[9]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[10]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[12]: https://developer.mozilla.org/en/docs/Web/CSS/position
[13]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: the previous entity may appear 0, 1 or several times, each occurence being separated from the previous one by a comma"
[14]: https://developer.mozilla.org/en/docs/Web/CSS/position_value "The documentation about this has not yet been written; please consider contributing!"
[15]: /samples/cssref/background-position
[16]: https://developer.mozilla.org/en/docs/Web/CSS/background