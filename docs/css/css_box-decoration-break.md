## box-decoration-break

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

The **`box-decoration-break`** CSS property specifies how the [`background`][1], [`padding`][2], [`border`][3], [`border-image`][4], [`box-shadow`][5], [`margin`][6] and [`clip`][7] of an element is applied when the box for the element is fragmented.  Fragmentation occurs when an inline box wraps onto multiple lines, or when a block spans more than one column inside a column layout container, or spans a page break when printed.  Each piece of the rendering for the element is called a fragment.

* _[Initial value][8]_ `slice` 
* _Applies to_ all elements 
* _[Inherited][9]_ no 
* _Media_ [`visual`][10] 
* _[Computed value][11]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][12]:  slice [|][13] clone
    

    box-decoration-break: slice;
    box-decoration-break: clone;
    
    box-decoration-break: initial;
    box-decoration-break: inherit;
    box-decoration-break: unset;
    

### Values

**`slice`**

> The element is rendered as if its box were not fragmented, and then the rendering for this hypothetical box is sliced into pieces for each line/column/page. Note that the hypothetical box can be different for each fragment since it uses its own height if the break occurs in the inline direction, and its own width if the break occurs in the block direction. See the CSS specification for details.

**`clone`**

> Each box fragment is rendered independently with the specified border, padding and margin wrapping each fragment. The [`border-radius`][14], [`border-image`][4] and [`box-shadow`][5], are applied to each fragment independently. The background is drawn independently in each fragment which means that a background image with [`background-repeat`][15]: `no-repeat` may be repeated multiple times.

### Examples

### Inline box fragments

An inline element that contains line-breaks styled with:

    .example { 
      background: linear-gradient(to bottom right, yellow, green);
      box-shadow:
        8px 8px 10px 0px deeppink, 
        -5px -5px 5px 0px blue, 
        5px 5px 15px 0px yellow;
      padding: 0em 1em;
      border-radius: 16px;
      border-style: solid;
      margin-left: 10px;
      font: 24px sans-serif;
      line-height: 2;
    }
    
    ...
    <span >The<br>quick<br>orange fox</span>

Results in:

![A screenshot of the rendering of an inline element styled with box-decoration-break:slice and styles given in the example.](https://mdn.mozillademos.org/files/8167/box-decoration-break-inline-slice.png)

Adding `box-decoration-break:clone` to the above styles:

      -webkit-box-decoration-break: clone;
      -o-box-decoration-break: clone;
      box-decoration-break: clone;
    

Results in:

![A screenshot of the rendering of an inline element styled with box-decoration-break:clone and styles given in the example](https://mdn.mozillademos.org/files/8169/box-decoration-break-inline-clone.png)

You can [try the two inline examples above][16] in your browser.

Here's an example of an inline element using a large `border-radius` value. The second `"iM"` has a line-break between the `"i"` and the `"M"`. For comparison, the first `"iM"` is without line-breaks. Note that if you stack the rendering of the two fragments horizontally next to each other it will result in the non-fragmented rendering.

![A screenshot of the rendering of the second inline element example.](https://mdn.mozillademos.org/files/8189/box-decoration-break-slice-inline-2.png)

[Try the above example][17] in your browser.

### Block box fragments

A block element with similar styles as above, first without any fragmentation:

![A screenshot of the rendering of the block element used in the examples without any fragmentation.](https://mdn.mozillademos.org/files/8181/box-decoration-break-block.png)

Fragmenting the above block into three columns results in:

![A screenshot of the rendering of the fragmented block used in the examples styled with box-decoration-break:slice.](https://mdn.mozillademos.org/files/8183/box-decoration-break-block-slice.png)

Note that stacking these pieces vertically will result in the non-fragmented rendering.

Now the same example styled with `box-decoration-break:clone`

![A screenshot of the rendering of the fragmented block used in the examples styled with box-decoration-break:clone.](https://mdn.mozillademos.org/files/8185/box-decoration-break-block-clone.png)

Note here that each fragment has an identical replicated border, box-shadow and background.

You can [try the block examples above][18] in your browser.


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/CSS/background "The background CSS property is a shorthand for setting the individual background values in a single place in the style sheet. background can be used to set the values for one or more of: background-clip, background-color, background-image, background-origin, background-position, background-repeat, background-size, and background-attachment."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/padding "The padding CSS property sets the required padding space on all sides of an element. The padding area is the space between the content of the element and its border. Negative values are not allowed."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/border "The border CSS property is a shorthand property for setting the individual border property values in a single place in the style sheet. border can be used to set the values for one or more of: border-width, border-style, border-color."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/border-image "The border-image CSS property allows drawing an image on the borders of elements. This makes drawing complex looking widgets much simpler than it has been and removes the need for nine boxes in some cases."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/box-shadow "Technical review completed."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/margin "The margin CSS property sets the margin for all four sides. It is a shorthand to avoid setting each side separately with the other margin properties: margin-top, margin-right, margin-bottom and margin-left.
 Negative values are also allowed."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/clip "The clip CSS property defines what portion of an element is visible. The clip property applies only to elements with position:absolute."
[8]: https://developer.mozilla.org/en/docs/CSS/initial_value
[9]: https://developer.mozilla.org/en/docs/CSS/inheritance
[10]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[11]: https://developer.mozilla.org/en/docs/CSS/computed_value
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[13]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[14]: https://developer.mozilla.org/en/docs/Web/CSS/border-radius "The border-radius CSS property allows Web authors to define how rounded border corners are. The curve of each corner is defined using one or two radii, defining its shape: circle or ellipse."
[15]: https://developer.mozilla.org/en/docs/Web/CSS/background-repeat "The background-repeat CSS property defines how background images are repeated. A background image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all."
[16]: https://mdn.mozillademos.org/files/8179/box-decoration-break-inline.html
[17]: https://mdn.mozillademos.org/files/8191/box-decoration-break-inline-extreme.html
[18]: https://mdn.mozillademos.org/files/8187/box-decoration-break-block.html