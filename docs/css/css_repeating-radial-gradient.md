## repeating-radial-gradient

This works similarly to the standard radial gradients as described by [`radial-gradient()`][0], but it automatically repeats the color stops infinitely in both directions, with their positions shifted by multiples of the difference between the last color stop's position and the first one's position.

Like any other gradient, a repeating CSS radial gradient is not a CSS `[<color>][1]` but an image with [no intrinsic dimensions][2]; that is, it has no natural or preferred size, nor ratio. Its concrete size will match the one of the element it applies to.

### Syntax

    repeating-radial-gradient( 
           [[ circle  || [<length>][3] ]                     [at [<position>][4]]? , | 
            [ ellipse || [[<length>][3] | [<percentage>][5] ]{2}] [at [<position>][4]]? , |
            [[ circle | ellipse ] || <extent-keyword> ] [at [<position>][4]]? , |
                                                         at [<position>][4]   ,    <color-stop> [ , <color-stop> ]+ )
            \---------------------------------------------------------------/\--------------------------------/
                      Contour, size and position of the ending shape               List of color stops  
        
    where <extent-keyword> = closest-corner | closest-side | farthest-corner | farthest-side
      and <color-stop> = <color> [ <percentage> | <length> ]?

    **Definition of the ending shape**
    repeating-radial-gradient( circle, … )                /* Synonym of repeating-radial-gradient( circle farthest-corner, …) */
    repeating-radial-gradient( ellipse, … )               /* Synonym of repeating-radial-gradient( ellipse farthest-corner, …) */
    repeating-radial-gradient( _<extent-keyword>_, … )      /* It draws concentric circles */
    repeating-radial-gradient( circle _radius_, … )         /* Concentrinc centered circles of the given length. It can't be in %. */
    repeating-radial-gradient( ellipse _x-axis_ _y-axis_, … ) /* The two semi-major axis are given, horizontal, then vertical */
    
    **Definition of the position of the shape**
    repeating-radial-gradient (… at <position>, … )
    
    **Definition of the color stops
    **repeating-radial-gradient (…, <color-stop>)
    repeating-radial-gradient (…, <color-stop>, <color-stop>)
    
    

### Values

**`<position>`**

> A [`<position>`][6], interpreted in the same way as [`background-position`][7] or [`transform-origin`][8]. If omitted, the default is `center`.

**<`angle`\>**

> An angle establishing the gradient line, which extends from the starting point at this angle; this is `0deg` by default.

**`<shape>`**

> The gradient's shape. This is one of `circle` (meaning that the gradient's shape is a circle with constant radius) or `ellipse` (meaning that the shape is an axis-aligned ellipse). The default value is `ellipse`.

**`<size>`**

> The size of the gradient. This is one of the [Size constants][9] listed below.

**`<color-stop>`**

> Representing a fixed color at a precise position, this value is composed by a [`<color>`][10] value, followed by an optional stop position (either a [`<percentage>`][11] or a [`<length>`][12] along the virtual gradient ray). A percentage of `0%`, or a length of `0`, represents the center of the gradient, the value `100%` the intersection of the ending shape with the virtual gradient ray. Percentage values in-between. are linearily positioned on the gradient ray.

**`<extent-keyword>`**

> Are keywords describing how big the ending shape must be. The possible keywords are:

> Constant
> Description
> 
> `closest-side`
> The gradient's ending shape meets the side of the box closest to its center (for circles) or meets both the vertical and horizontal sides closest to the center (for ellipses).
> 
> `closest-corner`
> The gradient's ending shape is sized so it exactly meets the closest corner of the box from its center.
> 
> `farthest-side`
> Similar to closest-side, except the ending shape is sized to meet the side of the box farthest from its center (or vertical and horizontal sides).
> 
> `farthest-corner`
> The gradient's ending shape is sized so it exactly meets the farthest corner of the box from its center.
> 
> Early drafts were defining to other keywords, `cover` and `contain`, synonyms of the standard `farthest-corner` and `closest-side` respectively. Do exclusively use the standard keyword as some implementations have dropped to older variants.

### Size constants
Constant
Description

`closest-side`
The gradient's shape meets the side of the box closest to its center (for circles) or meets both the vertical and horizontal sides closest to the center (for ellipses).

`closest-corner`
The gradient's shape is sized so it exactly meets the closest corner of the box from its center.

`farthest-side`
Similar to closest-side, except the shape is sized to meet the side of the box farthest from its center (or vertical and horizontal sides).

`farthest-corner`
The gradient's shape is sized so it exactly meets the farthest corner of the box from its center.

`contain`
A synonym for `closest-side`.

`cover`
A synonym for `farthest-corner`.

### Usage

Radial gradients also run along an axis. At each end point of the axis, a radius is specified. This can be imagined as creating two "circles", where for each circle the center is specified by the point and the radius is specified by the radius length. The gradient runs outwards from the circumference of the inner circle to the circumference of the outer circle.

### Black & white

    background: repeating-radial-gradient(black, black 5px, white 5px, white 10px);

### Farthest-corner

    background: repeating-radial-gradient(ellipse farthest-corner, red, black 5%, blue 5%, green 10%);



[0]: https://developer.mozilla.org/en/docs/Web/CSS/radial-gradient "The CSS radial-gradient()function creates an <image> which represents a gradient of colors radiating from an origin, the center of the gradient. The result of this function is an object of the CSS <gradient> data type."
[1]: color_value
[2]: https://developer.mozilla.org/en/CSS/image#no_intrinsic "en/CSS/image#no_intrinsic"
[3]: https://developer.mozilla.org/en/docs/CSS/length "https://developer.mozilla.org/en/docs/CSS/length"
[4]: https://developer.mozilla.org/en/CSS/position_value "https://developer.mozilla.org/en/CSS/position_value"
[5]: https://developer.mozilla.org/en/docs/CSS/percentage "https://developer.mozilla.org/en/docs/CSS/percentage"
[6]: https://developer.mozilla.org/en/docs/Web/CSS/position_value "The documentation about this has not yet been written; please consider contributing!"
[7]: https://developer.mozilla.org/en/docs/Web/CSS/background-position "The background-position CSS property sets the initial position, relative to the background position layer defined by background-origin for each defined background image."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/transform-origin "The transform-origin CSS property lets you modify the origin for transformations of an element. For example, the transform-origin of the rotate() function is the centre of rotation. (This property is applied by first translating the element by the negated value of the property, then applying the element's transform, then translating by the property value.)"
[9]: #Size_constants
[10]: https://developer.mozilla.org/en/docs/Web/CSS/color_value "The documentation about this has not yet been written; please consider contributing!"
[11]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"
[12]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"