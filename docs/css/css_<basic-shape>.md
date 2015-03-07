## 

### Summary

The **`<basic-shape>`** type can be specified using basic shape functions. When using this syntax to define shapes, the reference box is defined by each property that uses `<basic-shape>` values. The coordinate system for the shape has its origin on the top-left corner of the reference box with the x-axis running to the right and the y-axis running downwards. All the lengths expressed in percentages are resolved from the used dimensions of the reference box.

### Possible shapes

The following shapes are supported. All `<basic-shape>` values use functional notation and are defined here using the [value definition syntax][0].

**`inset()`**

>     inset( <shape-arg>{1,4} [round <border-radius>]? )
> 
> Defines an inset rectangle.
> 
> When all of the first four arguments are supplied they represent the top, right, bottom and left offsets from the reference box inward that define the positions of the edges of the inset rectangle. These arguments follow the syntax of the margin shorthand, that let you set all four insets with one, two or four values.
> 
> The optional [`<border-radius>`][1] argument(s) define rounded corners for the inset rectangle using the border-radius shorthand syntax.
> 
> A pair of insets in either dimension that add up to more than the used dimension (such as left and right insets of 75% apiece) define a shape enclosing no area. For this specification, this results in an empty float area.
> 

**`polygon()`**

>     polygon( [<fill-rule>,]? [<shape-arg> <shape-arg>]# )
> 
> `<fill-rule>` represents the [filling rule][2] used to determine the interior of the polygon. Possible values are `nonzero` and `evenodd`. Default value when omitted is `nonzero`.
> 
> Each pair argument in the list represents _xi_ and _yi_ - the x and y axis coordinates of the ith vertex of the polygon.
> 

**`circle(`)**

>     circle( [<shape-radius>]? [at <position>]? )
> 
> The `<shape-radius>` argument represents _r_, the radius of the circle. Negative values are invalid. A percentage value here is resolved from the used width and height of the reference box as `sqrt(width^2+height^2)/sqrt(2)`.
> 
> The [`<position>`][3] argument defines the center of the circle. This defaults to center if omitted.
> 

**`ellipse()`**

>     ellipse( [<shape-radius>{2}]? [at <position>]? )
> 
> The `<shape-radius>` arguments represent rx and ry, the x-axis and y-axis radii of the ellipse, in that order. Negative values for either radius are invalid. Percentage values here are resolved against the used width (for the rx value) and the used height (for the ry value) of the reference box.
> 
> The position argument defines the center of the ellipse. This defaults to center if omitted.
> 

The arguments not defined above are defined as follows:

    <shape-arg> = <length> | <percentage>
    <shape-radius> = <length> | <percentage> | closest-side | farthest-side

Defines a radius for a circle or ellipse. If omitted it defaults to `closest-side`.

`closest-side` uses the length from the center of the shape to the closest side of the reference box. For circles, this is the closest side in any dimension. For ellipses, this is the closest side in the radius dimension.

`farthest-side` uses the length from the center of the shape to the farthest side of the reference box. For circles, this is the farthest side in any dimension. For ellipses, this is the farthest side in the radius dimension.

### Computed Values of Basic Shapes

The values in a `<basic-shape>` function are computed as specified, with these exceptions:

* Omitted values are included and compute to their defaults.
* A [`<position>`][3] value in `circle()` or  `ellipse()` is computed as a pair of offsets (horizontal then vertical) from the top left origin, each given as a combination of an absolute length and a percentage.
* A [`<border-radius>`][1] value in `inset()` is computed as an expanded list of all eight [`<length>`][4] or percentage values.

### Interpolation of Basic Shapes
For interpolating between one basic shape and a second, the rules below are applied. The values in the shape functions interpolate as a simple list. The list values interpolate as [length][5], [percentage][6], or [calc][7] where possible. If list values are not one of those types but are identical (such as finding nonzero in the same list position in both lists) those values do interpolate.
 

* Both shapes must use the same reference box.
* If both shapes are the same type, that type is `ellipse()` or `circle()`, and none of the radii use the `closest-side` or `farthest-side` keywords, interpolate between each value in the shape functions.
* If both shapes are of type `inset()`, interpolate between each value in the shape functions.
* If both shapes are of type `polygon()`, both polygons have the same number of vertices, and use the same [`<fill-rule>`][2], interpolate between each value in the shape functions.
* In all other cases no interpolation is specified.

### Examples

    TODO



[0]: https://developer.mozilla.org/en/docs/Web/CSS/Value_definition_syntax
[1]: https://developer.mozilla.org/en/docs/Web/CSS/border-radius
[2]: https://developer.mozilla.org/en/docs/Web/SVG/Attribute/fill-rule
[3]: https://developer.mozilla.org/en/docs/Web/CSS/position_value "The documentation about this has not yet been written; please consider contributing!"
[4]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[5]: https://developer.mozilla.org/en/docs/Web/CSS/length
[6]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[7]: https://developer.mozilla.org/en/docs/Web/CSS/calc