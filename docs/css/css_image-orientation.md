## image-orientation

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `image-orientation` [CSS][1] property describes how to correct the default orientation of an image.

**Note:**

* This property is not intended to perform arbitrary rotation on an image, but to correct erroneous orientation. That's why it is rounded to the nearest quarter of a turn.
* Similarly this property is not intended to handle the layout -\> portrait changing. As `image-orientation` affects only images, it won't work: the changes must happen at the layout-level.

* _[Initial value][2]_ `0deg` 
* _Applies to_ all elements 
* _[Inherited][3]_ yes 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ an [`<angle>`][6], rounded to the next quarter turn from `0deg` and normalized, that is moduloing the value by `1turn` 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: from-image [|][8] [<angle>][9] [|][8] [[<angle>][9][?][10] flip]
    

    image-orientation: 0deg
    image-orientation: 6.4deg     /* Rounded to 0deg */
    image-orientation: -90deg     /* Equivalent to 270deg, its normalized computed value */
    image-orientation: from-image /* Use EXIF data from the image */
    image-orientation: 90deg flip /* Rotate 90deg, and flip it horizontally */
    image-orientation: flip       /* No rotation, only applies a horizontal flip */
    
    image-orientation: inherit
    

### Values

**`from-image`**

> The EXIF information contained in the image will be used to rotate the image appropriately.

**`<angle>`**

> The [`<angle>`][6] of rotation to apply to the image. It is rounded to the nearest `90deg` (`0.25turn`).

**`flip`**

> The image is flipped horizontally, that is reflected, after the rotation given by the [`<angle>`][6] value. If no [`<angle>`][6] is given, `0deg` is used.

### Examples


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/CSS
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/Web/CSS/angle "The documentation about this has not yet been written; please consider contributing!"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/angle "Possible values: a number followed by 'deg', 'grad', 'rad' or 'turn' like 2turn, 1.3rad, -60deg, or 0grad."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Question_mark_(.3F) "Question mark multiplier: the previous entity is optional (it may be used once, or not at all)."