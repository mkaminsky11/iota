## background-image

The [CSS][0] `background-image` property sets one or several background images for an element. The images are drawn on stacking context layers on top of each other. The first layer specified is drawn as if it is closest to the user. The [borders][1] of the element are then drawn on top of them, and the [`background-color`][2] is drawn beneath them.

How the images are drawn relative to the box and its borders is defined by the [`background-clip`][3] and [`background-origin`][4] CSS properties.

If a specified image cannot be drawn (for example, when the file denoted by the specified URI cannot be loaded), browsers handle it as they would a `none` value.

**Note:** Even if the images are opaque and the color won't be displayed in normal circumstances, web developers should always specify a [`background-color`][2]. If the images cannot be loaded---for instance, when the network is down---the background color will be used as a fallback.

* _[Initial value][5]_ `none` 
* _Applies to_ all elements. It also applies to [`::first-letter`][6] and [`::first-line`][7]. 
* _[Inherited][8]_ no 
* _Media_ [`visual`][9] 
* _[Computed value][10]_ as specified, but with URIs made absolute 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][11]: [<bg-image>][12][#][13]
    

    background-image: none
    background-image: url(http://www.example.com/images/bck.png)
    
    background-image: inherit
    

### Values

**`none`**

> Is a keyword denoting the absence of images.

**`<image>`**

> Is an [`<image>`][14] denoting the image to display. There can be several of them, separated by commas, as [multiple backgrounds][15] are supported.

### Examples

### Transparent and opaque images

[View the live example][16]

### Multiple backgrounds and transparency

Note that the star image is partially transparent and is layered over the cat image.

#### HTML Content

    <div>
        <p >
            This paragraph is full of cats<br />and stars.
        </p>
        <p>This paragraph is not.</p>
        <p >
            Here are more cats for you.<br />Look at them!
        </p>
        <p>And no more.</p>
    </div>

#### CSS Content

    pre, p {
        font-size: 1.5em;
        color: #FE7F88;
        background-color: transparent;
    }
    
    div {
      background-image: url("https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png");
    }
    
    p {
      background-image: none;
    }
    
    .catsandstars {
      background-image:  url("https://developer.mozilla.org/samples/cssref/images/startransparent.gif"), 
                         url("https://mdn.mozillademos.org/files/7693/catfront.png");
      background-color: transparent;
    }
    



[0]: https://developer.mozilla.org/en/docs/CSS "https://developer.mozilla.org/en/docs/CSS"
[1]: /cn/CSS/border "border"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element, either through a color value or the keyword transparent."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/background-clip "Technical review completed. Editorial review completed."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/background-origin "The background-origin CSS property determines the background positioning area, that is the position of the origin of an image specified using the background-image CSS property."
[5]: https://developer.mozilla.org/en/docs/CSS/initial_value
[6]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[8]: https://developer.mozilla.org/en/docs/CSS/inheritance
[9]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[10]: https://developer.mozilla.org/en/docs/CSS/computed_value
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[12]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-bg-image "none | <image>"
[13]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: The previous entity may appear 0, 1 or several times, each occurrence being separated from the previous one by a comma."
[14]: https://developer.mozilla.org/en/docs/Web/CSS/image "The documentation about this has not yet been written; please consider contributing!"
[15]: https://developer.mozilla.org/en/docs/CSS/Multiple_backgrounds "Multiple backgrounds"
[16]: /samples/cssref/background-image.html