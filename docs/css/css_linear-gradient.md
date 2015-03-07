## linear-gradient

The CSS `linear-gradient()` function creates an [`<image>`][0] which represents a linear gradient of colors. The result of this function is an object of the CSS [`<gradient>`][1] data type. Like any other gradient, a CSS linear gradient is not a CSS [`<color>`][2] but an image with [no intrinsic dimensions][3]; that is, it has neither natural or preferred size, nor ratio. Its concrete size will match the one of the element it applies to.

Linear gradients are defined by an axis, the _gradient line_, with each point on it being of a different color. Perpendicular lines to the gradient-line have one single color, the one of the point on the gradient line.

![linear-gradient.png](/files/3537/linear-gradient.png)

The gradient line is defined by the center of the box containing the gradient image and by an angle. The color of the gradient is defined by different points, the starting point, the ending point and, in between, optional stop-color points.

The starting point is the point on the gradient line where the color starts. It is defined by the intersection between the gradient line and a perpendicular passing by the box corner which is in the same quadrant.

Similarly the ending point is the point on the gradient line where the final color is reached. It can also be defined by an intersection between the gradient line and a perpendicular line issued by the nearby corner, but is more easily defined as the symmetric of the starting point, when a point reflection with an origin confounded with the center of the box.

These somewhat complex definitions of the starting and ending points lead to an interesting property sometimes called _magic corners_ : the nearby corners of the starting and ending points also have the same color as the respective starting and ending points.

More than just the starting-point and ending-point colors can be specified.  By defining additional color-stop points on the gradient line, the web developer can create a more customized transition between the starting and ending colors, or provide for a multi-color gradient. 

The linear-gradient syntax does not allow for repeating gradients, but by using color-stop points, a similar effect can be achieved.  For true repeating gradients, use the [`repeating-linear-gradient()`][4] CSS property.

When the position of a color-stop point is implicitly defined, it is placed half-way between the point that precedes it and the one that follows it.  The position can also be explicitly defined by using a [`<length>`][5] or a [`<percentage>`][6] CSS data type.

Gradients are defined as CSS `<image>` data types; they can be used only where an image data type is required. For this reason, `linear-gradient` won't work on [`background-color`][7] and other properties requesting [`<color>`][2].

### Syntax

    linear-gradient(  [ [<angle>][8] | to <side-or-corner> ,]? <color-stop> [, <color-stop>]+ )
                      \---------------------------------/ \----------------------------/
                        Definition of the gradient line        List of color stops  
    
    where <side-or-corner> = [left | right] || [top | bottom]
      and <color-stop>     = <color> [ <percentage> | <length> ]?
    

    linear-gradient( 45deg, blue, red );           /* A gradient on 45deg axis starting blue and finishing red */
    linear-gradient( to left top, blue, red);      /* A gradient going from the bottom right to the top left starting blue and 
                                                      finishing red */
    
    linear-gradient( 0deg, blue, green 40%, red ); /* A gradient going from the bottom to top, starting blue, being green after 40% 
                                                      and finishing red */ 
    

### Values

**`<side-or-corner>`**

> Represents the position of the starting-point of the gradient line. It consists of two keywords: the first one indicates the horizontal side, `left` or `right`, and the second one the vertical side, `top` or `bottom`. The order is not relevant and each of the keyword is optional.  
> The values `to top`, `to bottom`, `to left` and `to right` are translated into the angles `0deg`, `180deg`, `270deg`, `90deg` respectively. The others are translated into an angle that let the starting-point to be in the same quadrant than the described corner and so that the line defined by the starting-point and the corner is perpendicular to the gradient line. That way, the color described by the `<color-stop>` will exactly apply to the corner point. This is sometimes called the "_magic corner_" property. The end-point of the gradient line is the symmetrical point of the starting-point on the other direction of the center box.

**`<angle>`**

> An angle of direction for the gradient. See [`<angle>`][9].

**`<color-stop>`**

> This value is comprised of a [`<color>`][2] value, followed by an optional stop position (either a percentage or a [`<length>`][5] along the gradient axis).  
> Rendering of color-stops in CSS gradients follows the same rules as color-stops in SVG gradients.

### History of the syntax

The syntax of `linear-gradient` has evolved since the [first Apple proposal][10] implemented in 2008:

    -webkit-gradient(<type>, <point> [, <radius>]?, <point> [, <radius>]? [, <stop>]*)
    

In the original syntax, the same function was used to create both linear and radial gradients.  However, the parameters needed in each case were different, resulting in a syntax that varied with the value of the first parameter.  The situation became more complicated if  other types of gradients, like conical gradients, were added, requiring the use of functions and non-standard or inconsistent css value specifications.  No draft was proposed to the W3C.

An alternative syntax was proposed and implemented by Mozilla in 2009\.  In this syntax, two CSS functions would be required; one for linear gradients, and the other for radial gradients. However, this syntax never shipped in a released product.  A third syntax was proposed.  This third syntax simplified the syntax for linear gradients to:

    -moz-linear-gradient([ [ [top | bottom] || [left | right] ],]? <color-stop>[, <color-stop>]+);
    

The new syntax did not require the `to()`, `from()`and `color-stop()` functions, so they were dropped. The order of the `top`/`bottom` and `left`/`right` keywords was also recognized as unimportant, so Mozilla removed the constraint of having `top`/`bottom` defined first. 

But the new syntax had still had one drawback: it allowed only vertical and horizontal gradients.  Finally, the syntax below was proposed to the W3C.  Following two more changes to solve the limitation on the direction of gradients, it was added to the CSS Images Values and Content Replacement Level 3 draft in 2011\.

* The support of an [`<angle>`][9] as an origin, allowing gradients of any direction.
* The definition of the magic corner algorithm which eases the work of Web developers by allowing an easy definition of the exact color at the corners.

The color interpolation is also defined as happening in the pre-multiplied color space, in order to prevent non esthetic grey to appear when using color with different opacity. This syntax was implemented, prefixed, by both Webkit, without dropping the original one, and Trident (IE 10):

    linear-gradient( [ [ [<angle>][9] | [top | bottom] || [left | right] ],]? <color-stop>[, <color-stop>]+);
    

Unfortunately, the addition of the [`<angle>`][9] values to the syntax introduced an incoherence: the angle indicates a destination, but the keywords indicate a starting point.[\# ][11]This was fixed by a new syntax where the keyword are directions too, and preceded by the `to` keyword.

    linear-gradient([ [ [ [<angle>][9] | to [top | bottom] || [left | right] ],]? <color-stop>[, <color-stop>]+);
    

This should be the final syntax.

A last semantic curiosity still exists between the prefixed variants and the unprefixed proposal. Following the initial Apple proposal, the prefixed variants of the syntax all uses the an [`<angle>`][9] defined like polar angles, that is with `0deg` representing the East. To be coherent with the rest of CSS, the specification defines an angle with `0deg` representing the North. To prevent sites using prefixed version of the property to get suddenly broken, even when adapting to the otherwise forward-compatible final syntax, they keep the original angle definition (`0deg` = East`)`. They will switch to the correct spec when unprefixing the property. Also, as they aren't incompatible, Gecko supports, prefixed, both the syntax with the `to` keyword and without. Here again, the syntax without the keyword will be dropped when unprefixing.

### Examples

### Gradient at a 45 degree angle

Positions can be specified along the gradient axis with a color for each of them, called "color-stops", and the areas between every color-stop smoothly transition between each other. Any one color in the gradient forms a straight line that is perpendicular to the gradient axis. In the below image, the gradient's axis starts from the top-left corner of the div, and is directed at a 45 degree angle. Two color-stops are specified, red and blue.

    <div style="width: 200px; height: 200px;"></div>

    div {
      background: linear-gradient(135deg, red, blue);
    }

#### Result:

### Gradient that starts at 60% of the gradient line

Sometimes we don't want a gradient that starts at the beginning of the line, but later. To reach this, add a color stop with same color where you want the gradient to start.

    <div style="width: 200px; height: 200px;"></div>

    div {
      background: linear-gradient(135deg, red, red 60%, blue);
    }

#### Result:

### Gradient with multiple color stops

If the first color-stop does not have a `<length>` or `<percentage>`, it defaults to 0%. If the last color-stop does not have a `<length>` or `<percentage>`, it defaults to 100%. If a color-stop doesn't have a specified position and it isn't the first or last stop, then it is assigned the position that is half way between the previous stop and next stop.

Color-stops must be specified in order. After assigning default values to the first and last stops if necessary, if a color-stop has a specified position that is less than the specified position of any color-stop before it in the list, its position is changed to be equal to the largest specified position of any color-stop before it.

    <div>A rainbow made from a gradient</div>

    div {
      background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
    }
    

#### Result:

### Repeating a linear gradient

The `linear-gradient` does not allow repeating gradients. By default, the gradient will stretch to fill the element it is defined on. For this functionality, see [`repeating-linear-gradient()`][4].

### Using transparency

    <div>Linear with transparency</div>

    div {
      background: linear-gradient(to bottom right, red, rgba(255,0,0,0));
    }

#### Result:

Gradient backgrounds are not affected by [`background-size`][12] if all points and lengths are specified using fixed units (as opposed to percentages or keywords, which are relative to the value of `background-size`).

### Notes

If you set the [`background-image`][13] property of the [`<body>`][14] tag to a `linear-gradient`, the gradient [won't fill the browser screen unless ][15]you also set the [`min-height`][16] property of the document root (e.g. the [`<html>`][17] tag) to 100%.


[0]: https://developer.mozilla.org/en/docs/Web/CSS/image "The documentation about this has not yet been written; please consider contributing!"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/gradient "The documentation about this has not yet been written; please consider contributing!"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/color_value "The documentation about this has not yet been written; please consider contributing!"
[3]: https://developer.mozilla.org/en/CSS/image#no_intrinsic "en/CSS/image#no_intrinsic"
[4]: https://developer.mozilla.org/en/docs/Web/CSS/repeating-linear-gradient "The CSS repeating-linear-gradient function creates an <image> of a repeating gradients. It works similarly, and takes the same arguments, to the basic linear gradients, as described by linear-gradient(), but it automatically repeats the color stops infinitely in both directions, with their positions shifted by multiples of the length of a basic linear gradient (the difference between the last color stop's position and the first one's position)."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[6]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"
[7]: https://developer.mozilla.org/en/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element, either through a color value or the keyword transparent."
[8]: https://developer.mozilla.org/en/CSS/angle "angle"
[9]: https://developer.mozilla.org/en/docs/Web/CSS/angle "The documentation about this has not yet been written; please consider contributing!"
[10]: http://www.webkit.org/blog/175/introducing-css-gradients/ "http://www.webkit.org/blog/175/introducing-css-gradients/"
[11]: http://lists.w3.org/Archives/Public/www-style/2011Jun/0377.html "http://lists.w3.org/Archives/Public/www-style/2011Jun/0377.html"
[12]: https://developer.mozilla.org/en/docs/Web/CSS/background-size "The background-size CSS property specifies the size of the background images. The size of the image can be fully constrained or only partially in order to preserve its intrinsic ratio."
[13]: https://developer.mozilla.org/en/docs/Web/CSS/background-image "The CSS background-image property sets one or several background images for an element. The images are drawn on stacking context layers on top of each other. The first layer specified is drawn as if it is closest to the user. The borders of the element are then drawn on top of them, and the background-color is drawn beneath them."
[14]: https://developer.mozilla.org/en/docs/Web/HTML/Element/body "The HTML <body> element represents the content of an HTML document. There is only one <body> element in a document."
[15]: http://richard.milewski.org/archives/1014 "http://richard.milewski.org/archives/1014"
[16]: https://developer.mozilla.org/en/docs/Web/CSS/min-height "The min-height CSS property is used to set the minimum height of a given element. It prevents the used value of the height property from becoming smaller than the value specified for min-height."
[17]: https://developer.mozilla.org/en/docs/Web/HTML/Element/html "The HTML root element (<html>) represents the root of an HTML document. All other elements must be descendants of this element."