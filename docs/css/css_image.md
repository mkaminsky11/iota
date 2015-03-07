## image

### Summary

The `<image>` [CSS][0] data type represents a 2D image. There are two kinds of images in CSS: plain static images, often referenced using a URL, and dynamically-generated images like gradients or representations of parts of the tree.

CSS can handle different kinds of images:

* images with _intrinsic dimensions_, that is a natural size, like a jpeg image which has a fixed dimensions.
* images with _several intrinsic dimensions_, that exist in several versions inside a file, like some .ico formats. In that case, the intrinsic dimension will be the one of the bigger image, in surface, and with the closest ratio to the one of the containing box.
* images with no intrinsic dimensions but with _an intrinsic aspect ratio_, between its width and height, like some vectorized images, in the SVG format for example.
* images with _neither intrinsic dimensions, nor an intrinsic aspect ratio_, like a CSS gradient for example.

CSS determines the _concrete object size_ using these _intrinsic dimensions_, the _specified size _defined by CSS properties like [`width`][1], [`height`][2] or [`background-size`][3], and the _default object size_ defined by the kind of property the image is used with:
Kind of object
Default object size

[`background-image`][4]
The size of the element's background positioning area

[`list-style-image`][5]
The size of a character of `1em`

[`border-image`][6]
The size of the element's border image area

[`cursor`][7]
A browser-defined size matching the usual size of a cursor on the used system

Replaced content  
like with the combination of the CSS [`content`][8] property  
in combination with the CSS pseudo-elements [`::after`][9] and [`::before`][10]
A `300px`` × 150px` rectangle

The concrete object size is calculated using the following algorithm:

* If the specified size defines both the width and the height, these values are used as the concrete object size.
* If the specified size defines one of both the width and the height, the missing value is determined using the intrinsic ratio, if there is any, the intrinsic dimensions if the specified value matches, or using the default object size for that missing value.
* If the specified size do not define the width and the height, the concrete object size will be calculated so that it matches the intrinsic aspect ratio of the images but do not exceed the default object size in any dimension. If the image has no intrinsic aspect ratio, the intrinsic aspect ratio of the object it applies to is used; if this object has none, the missing width or height are taken from the default object size.

Images can be used with numerous CSS properties like [`background-image`][4], [`border-image`][6], [`content`][8], [`list-style-image`][5] or [`cursor`][7].

**Note:** Not all browsers support any type of images on any property. See the [browser compatibility section][11] for a comprehensive list.

### Syntax

An `<image>` CSS data type represents may be one of the following:

* An image denoted by a CSS [`<uri>`][12] data type and the `url()` function;
* A CSS [`<gradient>`][13];
* A part of the page, defined by the [`element()`][14] function.

### Examples

These are valid image values:

    url(test.jpg)                          The url() function, as long as test.jpg is an image
    linear-gradient(to bottom, blue, red)  A <gradient>
    element(#colonne3)                     A part of the page, used with the element() function,
                                           if colonne3 is an existing CSS id on the page.
    

These are invalid image values:

    cervin.jpg                             An image file must be defined using the url() function.
    url(report.pdf)                        The file pointed by the url() function must be an image.
    element(#fakeid)                       If fakeid is not an existing CSS id on the page
    



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/width
[2]: https://developer.mozilla.org/en/docs/Web/CSS/height
[3]: https://developer.mozilla.org/en/docs/Web/CSS/background-size
[4]: https://developer.mozilla.org/en/docs/Web/CSS/background-image
[5]: https://developer.mozilla.org/en/docs/Web/CSS/list-style-image
[6]: https://developer.mozilla.org/en/docs/Web/CSS/border-image
[7]: https://developer.mozilla.org/en/docs/Web/CSS/cursor
[8]: https://developer.mozilla.org/en/docs/Web/CSS/content
[9]: https://developer.mozilla.org/en/docs/Web/CSS/::after
[10]: https://developer.mozilla.org/en/docs/Web/CSS/::before
[11]: https://developer.mozilla.org/en/docs/Web/CSS/image#Browser_compatibility "https://developer.mozilla.orghttps://developer.mozilla.org/en/CSS/image#Browser_compatibility"
[12]: https://developer.mozilla.org/en/docs/Web/CSS/uri
[13]: https://developer.mozilla.org/en/docs/Web/CSS/gradient
[14]: https://developer.mozilla.org/en/docs/Web/CSS/element