## border-image-slice

### Summary

The `border-image-slice` CSS property divides the image specified by [`border-image-source`][0] in nine regions: the four corners, the four edges and the middle. It does this by specifying 4 inwards offsets.

[![The nine slices defined by the CSS border-image shorthand or border-image-slice longhand properties](/files/3814/border-image-slice.png)][1]Four values control the position of the slice lines. If some are not specified, they are inferred from the other with the usual 4-value syntax of CSS.

The middle is not used by the border itself but is used as a background-image if the keyword `fill` is set. The keyword can be set at any position in the property (before, after or between the other values).

The [`border-image-repeat`][2], [`border-image-width`][3], [`border-image-outset`][4] properties define how these images will be used.

The shorthand CSS property [`border-image`][5] may reset this property to its default value.

* _[Initial value][6]_ `100%` 
* _Applies to_ all elements, except internal table elements when [`border-collapse`][7] is `collapse`. It also applies to [`::first-letter`][8]. 
* _[Inherited][9]_ no 
* _Percentages_ refer to the size of the border image 
* _Media_ [`visual`][10] 
* _[Computed value][11]_ one to four percentage(s) (as specified) or absolute length(s), plus the keyword `fill` if specified 
* _Animatable_ no 
* _Canonical order_ the percentages or lengths, eventually followed by the keyword `fill`

### Syntax

    [Formal syntax][12]: [[<number>][13] [|][14] [<percentage>][15]]{1,4} [&&][16] fill[?][17]  

    border-image-slice: _slice_ _                 /* One-value syntax   */_  E.g. border-image-slice: 30%; 
    border-image-slice: _horizontal_ _vertical_ _   /* Two-value syntax   */ _ E.g. border-image-slice: 10% 30%; 
    border-image-slice: _top_ _vertical_ _bottom __   /* Three-value syntax */ _ E.g. border-image-slice: 30 30% 45; 
    border-image-slice: _top_ _right_ _bottom_ _left __ /* Four-value syntax  */ _ E.g. border-image-slice: 7 12 14 5; 
    
    border-image-slice: … fill /* The fill value can be placed between any value */ E.g. border-image-slice: 10% fill 7 12;
    
    border-image-slice: inherit
    

### Values

**`_slice_`**

> Is a [`<number>`][18] or a [`<percentage>`][19] of the offset for the four slicing lines. Note that a [`<length>`][20] value is not allowed, and therefore invalid. The [`<number>`][18] represents _pixels_ for raster images and _coordinates_ for vector images. Also, [`<percentage>`][19] values are relative to the height or width of the image, whichever is adequate. Negative values are invalid and values greater than the relevant size, height or width, are clamped to `100%`.

**_horizontal_**

> Is a [`<number>`][18] or a [`<percentage>`][19] of the offset for the two horizontal slicing lines, the top and the bottom ones. Note that a [`<length>`][20] value is not allowed, and therefore invalid. The [`<number>`][18] represents _pixels_ for raster images and _coordinates_ for vector images. Also, [`<percentage>`][19] values are relative to the height or width of the image, whichever is adequate. Negative values are invalid and values greater than the relevant size, height or width, are clamped to `100%`.

**_vertical_**

> Is a [`<number>`][18] or a [`<percentage>`][19] of the offset for the two vertical slicing lines, the right and the left ones. Note that a [`<length>`][20] value is not allowed, and therefore invalid. The [`<number>`][18] represents _pixels_ for raster images and _coordinates_ for vector images. Also, [`<percentage>`][19] values are relative to the height or width of the image, whichever is adequate. Negative values are invalid and values greater than the relevant size, height or width, are clamped to `100%`.

**_top_**

> Is a [`<number>`][18] or a [`<percentage>`][19] of the offset for the top slicing line. Note that a [`<length>`][20] value is not allowed, and therefore invalid. The [`<number>`][18] represents _pixels_ for raster images and _coordinates_ for vector images. Also, [`<percentage>`][19] values are relative to the height or width of the image, whichever is adequate. Negative values are invalid and values greater than the relevant size, height or width, are clamped to `100%`.

**_bottom_**

> Is a [`<number>`][18] or a [`<percentage>`][19] of the offset for the bottom slicing line. Note that a [`<length>`][20] value is not allowed, and therefore invalid. The [`<number>`][18] represents _pixels_ for raster images and _coordinates_ for vector images. Also, [`<percentage>`][19] values are relative to the height or width of the image, whichever is adequate. Negative values are invalid and values greater than the relevant size, height or width, are clamped to `100%`.

**_right_**

> Is a [`<number>`][18] or a [`<percentage>`][19] of the offset for the right slicing line. Note that a [`<length>`][20] value is not allowed, and therefore invalid. The [`<number>`][18] represents _pixels_ for raster images and _coordinates_ for vector images. Also, [`<percentage>`][19] values are relative to the height or width of the image, whichever is adequate. Negative values are invalid and values greater than the relevant size, height or width, are clamped to `100%`.

**_left_**

> Is a [`<number>`][18] or a [`<percentage>`][19] of the offset for the left slicing line. Note that a [`<length>`][20] value is not allowed, and therefore invalid. The [`<number>`][18] represents _pixels_ for raster images and _coordinates_ for vector images. Also, [`<percentage>`][19] values are relative to the height or width of the image, whichever is adequate. Negative values are invalid and values greater than the relevant size, height or width, are clamped to `100%`.

**`fill`**

> Is a keyword whose presence forces the use of the middle image slice to be displayed over the background image, its size and height are resized like those of the top and left image slices, respectively.

**`inherit`**

> Is a keyword indicating that all four values are inherited from their parent's element calculated value.



[0]: https://developer.mozilla.org/en/docs/Web/CSS/border-image-source "The border-image-source CSS property defines the <image> to use instead of the style of the border. If this property is set to none, the style defined by border-style is used instead."
[1]: /files/3814/border-image-slice.png
[2]: https://developer.mozilla.org/en/docs/Web/CSS/border-image-repeat "The border-image-repeat CSS property defines how the middle part of a border image is handled so that it can match the size of the border. It has a one-value syntax that describes the behavior of all the sides, and a two-value syntax that sets a different value for the horizontal and vertical behavior."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/border-image-width "The border-image-width CSS property defines the width of the border. If specified, it overrides the border-width property."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/border-image-outset "The border-image-outset property describes by which amount the border image area extends beyond the border box."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/border-image "The border-image CSS property allows drawing an image on the borders of elements. This makes drawing complex looking widgets much simpler than it has been and removes the need for nine boxes in some cases."
[6]: https://developer.mozilla.org/en/docs/CSS/initial_value
[7]: https://developer.mozilla.org/en/docs/Web/CSS/border-collapse "The border-collapse CSS property selects a table's border model. This has a big influence on the look and style of the table cells."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[9]: https://developer.mozilla.org/en/docs/CSS/inheritance
[10]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[11]: https://developer.mozilla.org/en/docs/CSS/computed_value
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[13]: https://developer.mozilla.org/en/docs/Web/CSS/number
[14]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[15]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[16]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_ampersand "Double ampersand: the two entities are mandatory, but may appear in any order."
[17]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Question_mark_(.3F) "Question mark multiplier: the previous entity is optional (it may be used once, or not at all)."
[18]: https://developer.mozilla.org/en/docs/Web/CSS/number "The documentation about this has not yet been written; please consider contributing!"
[19]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"
[20]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"