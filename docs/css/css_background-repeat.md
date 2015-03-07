## background-repeat

### Summary

The `background-repeat` [CSS][0] property defines how background images are repeated. A background image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all. 

By default, the repeated images are clipped to the size of the element, but they can be scaled to fit (using `round`) or evenly distributed from end to end (using `space`).

* _[Initial value][1]_ `repeat` 
* _Applies to_ all elements. It also applies to [`::first-letter`][2] and [`::first-line`][3]. 
* _[Inherited][4]_ no 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ a list, each item consisting of two keywords, one per dimension 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: [<repeat-style>][8][#][9]
    

    background-repeat: repeat-x     /* One-value syntax */
    background-repeat: repeat-y
    background-repeat: repeat
    background-repeat: space
    background-repeat: round
    background-repeat: no-repeat
    
    background-repeat: repeat space   /* Two-value syntax */
    background-repeat: repeat repeat
    background-repeat: round space
    background-repeat: no-repeat round
    
    background-repeat: inherit
    

### Values

**`<repeat-style>`**

> The one-value syntax is a shorthand for the full two-value syntax:

> **Single value**
> **Two-value equivalent**
> 
> `repeat-x`
> `repeat no-repeat`
> 
> `repeat-y`
> `no-repeat repeat`
> 
> `repeat`
> `repeat repeat`
> 
> `space`
> `space space`
> 
> `round`
> `round round`
> 
> `no-repeat`
> `no-repeat no-repeat`
> 
> In the two-value syntax, the first value represents the horizontal repetition behavior and the second value represents the vertical behavior. Here is an explanation of how each option works for either direction:

> `repeat`
> The image is repeated as much as needed to cover the whole background image painting area. The last image will be clipped if it doesn't fit.
> 
> `space`
> The image is repeated as much as possible without clipping. The first and last images are pinned to either side of the element, and whitespace is distributed evenly between the images. The [`background-position`][10] property is ignored unless only one image can be displayed without clipping. The only case where clipping happens using `space` is when there isn't enough room to display one image.
> 
> `round`
> As the allowed space increases in size, the repeated images will stretch (leaving no gaps) until there is room for another one to be added. When the next image is added, all of the current ones compress to allow room. Example: An image with an original width of 260px, repeated three times, might stretch until each repetition is 300px wide, and then another image will be added. They will then compress to 225px.
> 
> `no-repeat`
> The image is not repeated (and hence the background image painting area will not necessarily be entirely covered). The position of the non-repeated background image is defined by the [`background-position`][10] CSS property.
> 
> 

### Examples

### Live page example

[View the live example][11]

### Example in a list

#### HTML

    <ol>
        <li>no-repeat
            <div >&nbsp;</div>
        </li>
        <li>repeat
            <div >&nbsp;</div>
        </li>
        <li>repeat-x
            <div >&nbsp;</div>
        </li>
        <li>repeat-y
            <div >&nbsp;</div>
        </li>
        <li>repeat-x, repeat-y (multiple images)
            <div >&nbsp;</div>
        </li>
    </ol>

#### CSS

    /* Shared for all DIVS in example */
    li {margin-bottom: 12px;}
    div {
        background-image: url(https://developer.mozilla.org/samples/cssref/background-repeat/starsolid.gif);
        width: 144px;
        height: 84px;
    }
    
    /* background repeat CSS */
    .one {
        background-repeat: no-repeat;
    }
    .two {
        background-repeat: repeat;
    }
    .three {
        background-repeat: repeat-x;
    }
    .four {
        background-repeat: repeat-y;
    }
    
    /* Multiple images */
    .five {
        background-image:  url(https://developer.mozilla.org/samples/cssref/background-repeat/starsolid.gif),
                           url(https://developer.cdn.mozilla.net/media/redesign/img/favicon32.png);
        background-repeat: repeat-x,
                           repeat-y;
        height: 144px;
    }

In this example, each list item is matched with a different value of `background-repeat`.



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-repeat-style "repeat-x | repeat-y | [repeat | space | round | no-repeat]{1,2}"
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: the previous entity may appear 0, 1 or several times, each occurence being separated from the previous one by a comma"
[10]: https://developer.mozilla.org/en/docs/Web/CSS/background-position "The background-position CSS property sets the initial position, relative to the background position layer defined by background-origin for each defined background image."
[11]: /samples/cssref/background-repeat