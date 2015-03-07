## radial-gradient

The CSS `radial-gradient()`function creates an [`<image>`][0] which represents a gradient of colors radiating from an origin, the _center_ of the gradient. The result of this function is an object of the CSS [`<gradient>`][1] data type.

![](/files/3795/radial%20gradient.png)Radial gradients are defined by their _center_, the _ending shape_ contour and position, and _color stops_. The radial gradient consists, going from its center to its ending shape and potentially beyond, of successive uniformly-scaled concentric shapes, identical to the ending shape. Color stops are positioned on a _virtual gradient ray_ going out horizontally of the center to the right. Percentages positioning of color stops are relative to the intersection between the ending shape and this gradient ray representing `100%`. Each shape is monocolor and defined by the color on the gradient ray it intersects.

Ending shapes can only be `circle` or `ellipse`.

Like any other gradient, a CSS radial gradient is not a CSS [`<color>`][2] but an image with [no intrinsic dimensions][3], i. e. it has no natural or preferred size, nor ratio. Its concrete size will match the one of the element it applies to.

The `radial-gradient` function does not allow repeating gradients. For such a functionality, use the CSS [`repeating-radial-gradient()`][4] function.

### Syntax

    radial-gradient(   [ circle || [<length>][5] ] [ at [<position>][6] ]? ,
                     | [ ellipse || [[<length>][5] | [<percentage>][7] ]{2}] [ at [<position>][6] ]? ,
                     | [ [ circle | ellipse ] || <extent-keyword> ] [ at [<position>][6] ]? ,
                     | at [<position>][6] ,
                     <color-stop> [ , <color-stop> ]+ )
    where <extent-keyword> = closest-corner | closest-side | farthest-corner | farthest-side
      and <color-stop> = <color> [ <percentage> | <length> ]? 
    

    **Definition of the ending shape** 
    radial-gradient( circle, … ) /* Synonym of radial-gradient( circle farthest-corner, …) */ 
    radial-gradient( ellipse, … ) /* Synonym of radial-gradient( ellipse farthest-corner, …) */ 
    radial-gradient( _<extent-keyword>_, … ) /* It draws a circle */ 
    radial-gradient( circle _radius_, … ) /* A centered circle of the given length. It can't be a percentage */ 
    radial-gradient( ellipse _x-axis_ _y-axis_, … ) /* The two semi-major axis are given, horizontal, then vertical */ 
    
    **Definition of the position of the shape** 
    radial-gradient (… at <position>, … ) 
    
    **Definition of the color stops** 
    radial-gradient (…, <color-stop>) 
    radial-gradient (…, <color-stop>, <color-stop>) 

### Values

**`<position>`**

> A [`<position>`][8], interpreted in the same way as [`background-position`][9] or [`transform-origin`][10]. If omitted, the default is `center`.

**`<shape>`**

> The gradient's shape. This is one of `circle` (meaning that the gradient's shape is a circle with constant radius) or `ellipse` (meaning that the shape is an axis-aligned ellipse). The default value is `ellipse`.

**`<size>`**

> The size of the gradient. This is one of the [Size constants][11] listed below.

**`<color-stop>`**

> Representing a fixed color at a precise position, this value is composed by a [`<color>`][12] value, followed by an optional stop position (either a [`<percentage>`][13] or a [`<length>`][14] along the virtual gradient ray). A percentage of `0%`, or a length of `0`, represents the center of the gradient, the value `100%` of the intersection of the ending shape with the virtual gradient ray. Percentage values in-between are linearly positioned on the gradient ray.

**`<extent-keyword>`**

> Keywords describing how big the ending shape must be. The possible keywords are:

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
> Early drafts included other keywords (`cover` and `contain`) as synonyms of the standard `farthest-corner` and `closest-side` respectively. Use the standard keywords only, as some implementations have already dropped those older variants.

### Examples

ellipse farthest-corner

    background-image: radial-gradient(ellipse farthest-corner at 45px 45px , #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%);
    

470px 47px

    background-image: radial-gradient(ellipse farthest-corner at 470px 47px , #FFFF80 20%, rgba(204, 153, 153, 0.4) 30%, #E6E6FF 60%);
    

farthest-corner

    background-image: radial-gradient(farthest-corner at 45px 45px , #FF0000 0%, #0000FF 100%);

16px radius fuzzy circle

    background-image: radial-gradient(16px at 60px 50% , #000000 0%, #000000 14px, rgba(0, 0, 0, 0.3) 18px, rgba(0, 0, 0, 0) 19px);
    



[0]: https://developer.mozilla.org/en/docs/Web/CSS/image "The documentation about this has not yet been written; please consider contributing!"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/gradient "The documentation about this has not yet been written; please consider contributing!"
[2]: color_value
[3]: https://developer.mozilla.org/en/CSS/image#no_intrinsic "en/CSS/image#no_intrinsic"
[4]: https://developer.mozilla.org/en/docs/Web/CSS/repeating-radial-gradient "This works similarly to the standard radial gradients as described by radial-gradient(), but it automatically repeats the color stops infinitely in both directions, with their positions shifted by multiples of the difference between the last color stop's position and the first one's position."
[5]: https://developer.mozilla.org/en/docs/CSS/length "https://developer.mozilla.org/en/docs/CSS/length"
[6]: https://developer.mozilla.org/en/CSS/position_value "https://developer.mozilla.org/en/CSS/position_value"
[7]: https://developer.mozilla.org/en/docs/CSS/percentage "https://developer.mozilla.org/en/docs/CSS/percentage"
[8]: https://developer.mozilla.org/en/docs/Web/CSS/position_value "The documentation about this has not yet been written; please consider contributing!"
[9]: https://developer.mozilla.org/en/docs/Web/CSS/background-position "The background-position CSS property sets the initial position, relative to the background position layer defined by background-origin for each defined background image."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/transform-origin "The transform-origin CSS property lets you modify the origin for transformations of an element. For example, the transform-origin of the rotate() function is the centre of rotation. (This property is applied by first translating the element by the negated value of the property, then applying the element's transform, then translating by the property value.)"
[11]: #Size_constants
[12]: https://developer.mozilla.org/en/docs/Web/CSS/color_value "The documentation about this has not yet been written; please consider contributing!"
[13]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"
[14]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"