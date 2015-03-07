## filter

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The CSS `filter` property provides for effects like blurring or color shifting on an element's rendering before the element is displayed. Filters are commonly used to adjust the rendering of an image, a background, or a border.

Included in the CSS standard are several functions that achieve predefined effects. You can also reference a filter specified in SVG with a URL to an [SVG filter element][1].

**Note:** Older versions (4.0 through 9.0) of the Windows Internet Explorer browser supported a non-standard ["filter"][2] that has since been deprecated.

* _[Initial value][3]_ `none`
* _Applies to_ graphics and container elements
* _[Inherited][4]_ no
* _Media_ [`visual`][5]
* _[Computed value][6]_ as specified
* _Animatable_ yes

### Syntax

With a function, use the following:

    filter: <filter-function> [<filter-function>]* | none
    

For a reference to an SVG [`<filter>`][7] element, use the following:

    filter: url(svg-url#element-id) 
    

### Examples

Examples of using the predefined functions are shown below. See each function for a specific example.

    .mydiv { filter: grayscale(50%) }
    
    /* gray all images by 50% and blur by 10px */
    img {
      filter: grayscale(0.5) blur(10px);
    }

Examples of using the URL function with an SVG resource are shown below.

    .target { filter: url(#c1); }
    
    .mydiv { filter: url(commonfilters.xml#large-blur) }
    

### Functions

To use the CSS `filter` property, you specify a value for one of the following functions. If the value is invalid, the function returns "none." Except where noted, the functions that take a value expressed with a percent sign (as in 34%) also accept the value expressed as decimal (as in 0.34).

### `url()`

The url() function takes the location of an XML file that specifies an SVG filter, and may include an anchor to a specific filter element.

    filter: url(resources.svg#c1)
    

### `blur()`

Applies a Gaussian blur to the input image. The value of 'radius' defines the value of the standard deviation to the Gaussian function, or how many pixels on the screen blend into each other, so a larger value will create more blur. If no parameter is provided, then a value `0` is used. The parameter is specified as a CSS length, but does not accept percentage values.

    filter: blur(5px)
    



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/SVG/Element/filter "https://developer.mozilla.org/en/SVG/Element/filter"
[2]: http://msdn.microsoft.com/en-us/library/ms532853(v=vs.85).aspx "http://msdn.microsoft.com/en-us/library/ms532853(v=vs.85).aspx"
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/Web/CSS/Media/Visual "The documentation about this has not yet been written; please consider contributing!"
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/Web/SVG/Element/filter "The filter element serves as container for atomic filter operations. It is never rendered directly. A filter is referenced by using the filter attribute on the target SVG element."