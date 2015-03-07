## transform-function

The `<transform-function>` CSS data type denotes a function to apply to an element's representation in order to modify it. Usually such transform may be expressed by matrices and the resulting images can be determined using matrix multiplication on each point.

### Coordinates for 2D graphics

There are several coordinate models used when describing transformation. The most usual are the Cartesian coordinates and the homogeneous coordinates.

### Cartesian coordinates

[![](/files/3438/coord_in_R2.png)][0]

In [Cartesian coordinates][1] each point of the [Euclidian space][2] is described using two values, the abscissa and the ordinate. The origin, the `(0, 0)` is the top-left corner of the element. Unlike the usual geometric convention, and like most cases in computer graphics, the y-axis goes to the bottom. Each point is mathematically described using the vector notation `(x,y)`.

Each linear function is described using a 2x2 matrix like:

ac bd 

Applying the transformation consists in doing, for each point, the matrix multiplication between both:

[![](/@api/deki/files/5799/=transform_functions_generic_transformation_cart.png?size=webview)][3].

It is possible to apply several transformations in a row:

[![](/@api/deki/files/5800/=transform_functions_transform_composition_cart.png?size=webview)][4].

With this notation, it is possible to describe, and therefore composite, most usual transformations: rotations, scaling, or skewing. In fact all transformations that are linear functions can be described. One major transformation is not linear and therefore must be special-cased when using this notation: translation. The translation vector (tx, ty) must be expressed separately, as two more parameters.

[Möbius][5]' [homogeneous coordinates][6] in [projective geometry][7] leading to 3x3 transformation matrices, though more complex and unusual for non-specialists, doesn't suffer from the translation limitation as these can be expressed as linear functions in this algebra, removing the need for special cases.

### Coordinates for 3D graphics

### Functions defining transformations

### `matrix()`

The `matrix()` CSS function specifies a homogeneous 2D transformation matrix comprised of the specified six values. The constant values of such matrices are implied and not passed as parameters; the other parameters are described in the column-major order.

`matrix(a, b, c, d, tx, ty)` is a shorthand for `matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)`.

**Note:** Until Firefox 16, Gecko accepted a [`<length>`][8] value for **tx** and **ty**.

#### Syntax

    
    matrix(_a_, _b_, _c_, _d_, _tx_, _ty_)
    

#### Values

**_a_ _b_ _c_ _d_**

> Are [`<number>`][9] describing the linear transformation.

**_tx_ _ty_**

> Are [`<number>`][9] describing the translation to apply.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

ac bd actybdtx001 actybdtx001 ac0txbd0ty00100001 

`[a b c d tx ty]`

### `matrix3d()`

The `matrix3d()` CSS function describes a 3D transform as a 4x4 homogeneous matrix. The 16 parameters are described in the column-major order.

**Note:** Until Firefox 16, Gecko accepted a [`<length>`][8] value for **a4**, **b4** and **c4**.

#### Syntax

    matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)

#### Values

**_a1 b1 c1 d1_ _a2 b2 c2 d2 __a3 b3 c3 d3_ _d4_**

> Are [`<number>`][9] describing the linear transformation.

**_a4_ _b4 c4_**

> Are [`<number>`][9] describing the translation to apply.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

This transform applies to the 3D space and cannot be represented on the plan.
Cartesian-coordinate matrix doesn't allow to represent a generic 3d affine transforms as translations are not linear transforms.
a1a2a3a4b1b2b3b4c1c2c3c4d1d2d3d4 

### `perspective()`

The `perspective()` CSS function defines the distance between the z=0 plane and the user in order to give to the 3D-positioned element some perspective. Each 3D element with z\>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.

#### Syntax

    perspective(l)
    

#### Values

**_l_**

> Is a [`<length>`][8] giving the distance from the user to the z=0 plane. It is used to apply a perspective transform to the element. If it is 0 or a negative value, no perspective transform is applied.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

This transform applies to the 3D space and cannot be represented on the plan.
A perspective is not a linear transform in ℝ3 and cannot be represented using a matrix in the Cartesian coordinates system.
10000100001000−1/d1 

### `rotate()`

![](/@api/deki/files/5976/=transform-functions-rotate_19.5.png)The `rotate()` CSS function defines a transformation that moves the element around a fixed point (as specified by the [`transform-origin`][10] property) without deforming it. The amount of movement is defined by the specified angle; if positive, the movement will be clockwise, if negative, it will be counter-clockwise. A rotation by 180° is called _point reflection_.

#### Syntax

    rotate(_a_)
    

#### Values

**_a_**

> Is an [`<angle>`][11] representing the angle of the rotation. A positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

cos(a)-sin(a) sin(a)cos(a)
cos(a)-sin(a)0sin(a)cos(a)0001 cos(a)-sin(a)0sin(a)cos(a)0001 cos(a)-sin(a)00sin(a)cos(a)0000100001 

`[cos(a) `sin(_a_)` -sin(a) cos(_a_) 0 0]`

### `rotate3d()`

The `rotate3d()`CSS function defines a transformation that moves the element around a fixed axis without deforming it. The amount of movement is defined by the specified angle; if positive, the movement will be clockwise, if negative, it will be counter-clockwise.

In the 3D space, rotations have three degrees of liberty, describing an axis of rotation. The axis of rotation is defined by an \[x, y, z\] vector and pass by the origin (as defined by the [`transform-origin`][10] CSS property. If the vector is not _normalized_, that is the sum of the square of its three coordinates is not 1, it will be normalized internally. A non-normalizable vector, like the null vector, \[0, 0, 0\], will cause the rotation not to be applied, without invaliding the whole CSS property.

In opposition to rotations in the plane, the composition of 3D rotations is usually not commutative; it means that the order in which the rotations are applied is crucial.

#### Syntax

    rotate3d(_x_, _y_, _z_, _a_)
    

#### Values

**_x_**

> Is a [`<number>`][9] describing the x-coordinate of the vector denoting the axis of rotation.

**_y_**

> Is a [`<number>`][9] describing the y-coordinate of the vector denoting the axis of rotation.

**_z_**

> Is a [`<number>`][9] describing the z-coordinate of the vector denoting the axis of rotation.

**_a_**

> Is an [`<angle>`][11] representing the angle of the rotation. A positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

This transform applies to the 3D space and cannot be represented on the plane.
[![](/@api/deki/files/5987/=transform-functions-rotate3d_cart.png?size=webview)][12] 1+(1-cos(a))(x2-1)z\*sin(a)+xy(1-cos(a))-y\*sin(a)+xz\*(1-cos(a))-z\*sin(a)+xy\*(1-cos(a))1+(1-cos(a))(y2-1)x\*sin(a)+yz\*(1-cos(a))ysin(a) + xz(1-cos(a))-xsin(a)+yz(1-cos(a))1+(1-cos(a))(z2-1)t0001 [![](/@api/deki/files/5986/=transform-functions-rotate3d_hom4.png?size=webview)][13]

### `rotateX()`

The `rotateX()`CSS function defines a transformation that moves the element around the abscissa without deforming it. The amount of movement is defined by the specified angle; if positive, the movement will be clockwise, if negative, it will be counter-clockwise.

The axis of rotation passes by the origin, defined by [`transform-origin`][10] CSS property.

`rotateX(a)`is a shorthand for `rotate3D(1, 0, 0, a)`.

In opposition to rotations in the plane, the composition of 3D rotations is usually not commutative; it means that the order in which the rotations are applied is crucial.

#### Syntax

    rotateX(_a_)
    

#### Values

**_a_**

> Is an [`<angle>`][11] representing the angle of the rotation. A positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

This transform applies to the 3D space and cannot be represented on the plane.
1000cos(a)-sin(a)0sin(a)cos(a) 10000cos(a)-sin(a)00sin(a)cos(a)00001 

### `rotateY()`

The `rotateY()`CSS function defines a transformation that moves the element around the ordinate without deforming it. The amount of movement is defined by the specified angle; if positive, the movement will be clockwise, if negative, it will be counter-clockwise.

The axis of rotation passes by the origin, defined by [`transform-origin`][10] CSS property.

`rotateY(a)`is a shorthand for `rotate3D(0, 1, 0, a)`.

In opposition to rotations in the plane, the composition of 3D rotations is usually not commutative; it means that the order in which the rotations are applied is crucial.

#### Syntax

    rotateY(_a_)
    

#### Values

**_a_**

> Is an [`<angle>`][11] representing the angle of the rotation. A positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

This transform applies to the 3D space and cannot be represented on the plane.
cos(a)0sin(a)010-sin(a)0cos(a) cos(a)0sin(a)00100-sin(a)0cos(a)00001 

### `rotateZ()`

The `rotateZ()`CSS function defines a transformation that moves the element around the z-axis without deforming it. The amount of movement is defined by the specified angle; if positive, the movement will be clockwise, if negative, it will be counter-clockwise.

The axis of rotation passes by the origin, defined by [`transform-origin`][10] CSS property.

`rotateZ(a)`is a shorthand for `rotate3D(0, 0, 1, a)`.

In opposition to rotations in the plane, the composition of 3D rotations is usually not commutative; it means that the order in which the rotations are applied is crucial.

#### Syntax

    rotateZ(_a_)
    

#### Values

**_a_**

> Is an [`<angle>`][11] representing the angle of the rotation. A positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

This transform applies to the 3D space and cannot be represented on the plane.
cos(a)-sin(a)0sin(a)cos(a)0001 cos(a)-sin(a)00sin(a)cos(a)0000000001 

### `scale()`

![](/@api/deki/files/5804/=transform-functions-scale_2_2.png?size=webview)

The `scale()` CSS function modifies the size of the element. It can either augment or decrease its size and as the amount of scaling is defined by a vector, it can do so more in one direction than in another one.

This transformation is characterized by a vector whose coordinates define how much scaling is done in each direction. If both coordinates of the vector are equal, the scaling is uniform, or isotropic, and the shape of the element is preserved. In that case, the scaling function defines a homothetic transformation.

When outside the `]-1, 1[` range, the scaling enlarges the element in the direction of the coordinate; when inside the range, it shrinks the element in that direction. When equal to `1` it does nothing and when negative it performs a _point reflection_ and the size modification.

The `scale``()` function only applies the transformation in the Euclidian plane (in 2D). To scale in the space, the `scale3D()` function has to be used.

#### Syntax

    scale(_sx_) or
    scale(_sx_, _sy_)
    

#### Values

**_sx_**

> Is a [`<number>`][9] representing the abscissa of the scaling vector.

**_sy_**

> Is a [`<number>`][9] representing the ordinate of the scaling vector. If not present, its default value is _**sx**_, leading to a uniform scaling preserving the shape of the element.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

sx0 0sy sx000sy0001 sx000sy0001 sx0000sy0000100001 

`[sx 0 0 sy 0 0]`

### `scale3d()`

The `scale3d()` CSS function modifies the size of an element. Because the amount of scaling is defined by a vector, it can resize different dimensions at different scales.

This transformation is characterized by a vector whose coordinates define how much scaling is done in each direction. If all three coordinates of the vector are equal, the scaling is uniform, or isotropic, and the shape of the element is preserved. In that case, the scaling function defines a homothetic transformation.

When outside the `[-1, 1]` range, the scaling enlarges the element in the direction of the coordinate; when inside the range, it shrinks the element in that direction. When equal to `1` it does nothing and when negative it performs a _point reflection_ and the size modification.

#### Syntax

    scale3d(_sx_, _sy_, _sz_)
    

#### Values

**_sx_**

> Is a [`<number>`][9] representing the abscissa of the scaling vector.

**_sy_**

> Is a [`<number>`][9] representing the ordinate of the scaling vector.

**_sz_**

> Is a [`<number>`][9] representing the z-component of the scaling vector.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

This transform applies to the 3D space and cannot be represented on the plane.
sx000sy000sz sx0000sy0000sz00001 

### `scaleX()`

![](/@api/deki/files/5807/=transform-functions-scaleX_2.png?size=webview)The `scaleX()` CSS function modifies the abscissa of each element point by a constant factor, except if this scale factor is `1`, in which case the function is the identity transform. The scaling is not isotropic and the angles of the element are not conserved.

`scaleX(sx)` is a shorthand for `scale(sx, 1)` or for `scale3d(sx, 1, 1)`.

`scaleX(-1)` defines an [axial symmetry][14] with a vertical axis passing by the origin (as specified by the `[transform-origin][15]` property).

#### Syntax

    scaleX(_s_)
    

#### Values

**_s_**

> Is a [`<number>`][9] representing the scaling factor to apply on the abscissa of each point of the element.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

s0 01 s00010001 s00010001 s000010000100001 

`[s 0 0 1 0 0]`

### `scaleY()`

![](/@api/deki/files/5967/=transform-functions-scaleY_2.png)

The `scaleY()` CSS function modifies the ordinate of each element point by a constant factor except if this scale factor is `1`, in which case the function is the identity transform. The scaling is not isotropic and the angles of the element are not conserved.

`scaleY(sy)` is a shorthand for `scale(1, sy)` or for `scale3d(1, sy, 1)`.

`scaleY(-1)` defines an [axial symmetry][14] with a horizontal axis passing by the origin (as specified by the `[transform-origin][15]` property).

#### Syntax

    scaleY(s)
    

#### Values

**_s_**

> Is a [`<number>`][9] representing the scaling factor to apply on the ordinate of each point of the element.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

10 0s 1000s0001 1000s0001 10000s0000100001 

`[1 0 0 s 0 0]`

### `scaleZ()`

The `scaleZ()` CSS function modifies the z-coordinate of each element point by a constant factor, except if this scale factor is `1`, in which case the function is the identity transform. The scaling is not isotropic and the angles of the element are not conserved.

`scaleZ(sz)` is a shorthand for `scale3d(1, 1, sz)`.

`scaleZ(-1)` defines an [axial symmetry][14] along the z-axis passing by the origin (as specified by the `[transform-origin][15]` property).

#### Syntax

    scaleZ(s)
    

#### Values

**_s_**

> Is a [`<number>`][9] representing the scaling factor to apply on the z-coordinate of each point of the element.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

This transform applies to the 3D space and cannot be represented on the plane.
10001000s 1000010000s00001 

### `skew()`

The `skew()` CSS function is a shear mapping, or transvection, distorting each point of an element by a certain angle in each direction. It is done by increasing each coordinate by a value proportionate to the specified angle and to the distance to the origin. The more far from the origin, the more away the point is, the greater will be the value added to it.

#### Syntax

    skew(_ax_)       _or_
    skew(_ax_, _ay_)
    

#### Values

**_ax_**

> Is an [`<angle>`][11] representing the angle to use to distort the element along the abscissa.

**_ay_**

> Is an [`<angle>`][11] representing the angle to use to distort the element along the ordinate.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

1tan(ax)tan(ay)1 1tan(ax)0tan(ay)10001 1tan(ax)0tan(ay)10001 1tan(ax)00tan(ay)10000100001 

`[1 tan(ay) tan(ax) 1 0 0]`

### `skewX()`

The `skewX()` CSS function is a horizontal shear mapping distorting each point of an element by a certain angle in the horizontal direction. It is done by increasing the abscissa coordinate by a value proportionate to the specified angle and to the distance to the origin. The more far from the origin, the more away the point is, the greater will be the value added to it.

#### Syntax

    skewX(a)
    

#### Values

**_a_**

> Is an [`<angle>`][11] representing the angle to use to distort the element along the abscissa.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

1tan(ay)01 1tan(ay)0010001 1tan(ay)0010001 1tan(ay)00010000100001 

`[1 0 tan(a) 1 0 0]`

### `skewY()`

The `skewY()` CSS function is a vertical shear mapping distorting each point of an element by a certain angle in the vertical direction. It is done by increasing the ordinate coordinate by a value proportionate to the specified angle and to the distance to the origin. The more far from the origin, the more away the point is, the greater will be the value added to it.

#### Syntax

    skewY(a)
    

#### Values

**_a_**

> Is an [`<angle>`][11] representing the angle to use to distort the element along the ordinate.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

10tan(ax)1 100tan(ax)10001 100tan(ax)10001 1000tan(ax)10000100001 

`[1 tan(a) 0 1 0 0]`

### `translate()`

![](/@api/deki/files/5970/=transform-functions-translate_2.png)The `translate()` CSS function moves the position of the element on the plane. This transformation is characterized by a vector whose coordinates define how much it moves in each direction.

#### Syntax

    translate(tx)       _or_
    translate(tx, ty)
    

#### Values

**_tx_**

> Is a [`<length>`][8] representing the abscissa of the translating vector.

**_ty_**

> Is a [`<length>`][8] representing the ordinate of the translating vector. If missing, it is assumed to be equals to **tx** :  `translate(2)` means `translate(2, 2)`.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

A translation is not a linear transform in ℝ2 and cannot be represented using a matrix in the cartesian coordinates system.
10tx01ty001 10tx01ty001 100tx010ty00100001 

`[1 0 0 1 tx ty]`

### `translate3d()`

The `translate3d()` CSS function moves the position of the element in the 3D space. This transformation is characterized by a 3-dimension vector whose coordinates define how much it moves in each direction.

#### Syntax

    translate3d(tx, ty, tz)
    

#### Values

**_tx_**

> Is a [`<length>`][8] representing the abscissa of the translating vector.

**_ty_**

> Is a [`<length>`][8] representing the ordinate of the translating vector.

**_tz_**

> Is a [`<length>`][8] representing the z component of the translating vector. It can't be a [`<percentage>`][16] value; in that case the property containing the transform is considered invalid.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

This transform applies to the 3D space and cannot be represented on the plane.
A translation is not a linear transform in ℝ3 and cannot be represented using a matrix in the Cartesian coordinates system.
100tx010ty001tz0001 

### `translateX()`

![](/@api/deki/files/5972/=transform-functions-translateX_2.png)The `translateX()` CSS function moves the element horizontally on the plane. This transformation is characterized by a [`<length>`][8] defining how much it moves horizontally.

`translateX(tx)` is a shortcut for `translate(tx, 0)`.

#### Syntax

    translateX(t)
    

#### Values

**_t_**

> Is a [`<length>`][8] representing the abscissa of the translating vector.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

A translation is not a linear transform in ℝ2 and cannot be represented using a matrix in the cartesian coordinates system.
10t010001 10t010001 100t010000100001 

`[1 0 0 1 t 0]`

### `translateY()`

![](/@api/deki/files/5971/=transform-functions-translateY_2.png)The `translateY()` CSS function moves the element vertically on the plane. This transformation is characterized by a [`<length>`][8] defining how much it moves vertically.

`translateY(ty)` is a shortcut for `translate(0, ty)`.

#### Syntax

    translateY(t)
    

#### Values

**_t_**

> Is a [`<length>`][8] representing the z-component of the translating vector. It can't be a [`<percentage>`][16] value; in that case the property containing the transform is considered invalid.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

A translation is not a linear transform in ℝ2 and cannot be represented using a matrix in the cartesian coordinates system.
10001t001 10001t001 1000010t00100001 

`[1 0 0 1 0 t]`

### `translateZ()`

The `translateZ()` CSS function moves the element along the z-axis of the 3D space. This transformation is characterized by a [`<length>`][8] defining how much it moves.

`translateZ(tz)` is a shorthand for `translate3d(0, 0, tz)`.

#### Syntax

    translateZ(t)
    

#### Values

**_t_**

> Is a [`<length>`][8] representing the ordinate of the translating vector.

Cartesian coordinates on ℝ2
Homogeneous coordinates on ℝℙ2
Cartesian coordinates on ℝ3
Homogeneous coordinates on ℝℙ3

This transform applies to the 3D space and cannot be represented on the plane.
A translation is not a linear transform in ℝ3 and cannot be represented using a matrix in the Cartesian coordinates system.
10000100001t0001 



[0]: /@api/deki/files/5796/=coord_in_R2.png
[1]: http://en.wikipedia.org/wiki/Cartesian_coordinate_system
[2]: http://en.wikipedia.org/wiki/Euclidean_geometry
[3]: /@api/deki/files/5799/=transform_functions_generic_transformation_cart.png
[4]: /@api/deki/files/5800/=transform_functions_transform_composition_cart.png
[5]: http://en.wikipedia.org/wiki/August_Ferdinand_M%C3%B6bius
[6]: http://en.wikipedia.org/wiki/Homogeneous_coordinates
[7]: http://en.wikipedia.org/wiki/Projective_geometry
[8]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[9]: https://developer.mozilla.org/en/docs/Web/CSS/number "The documentation about this has not yet been written; please consider contributing!"
[10]: https://developer.mozilla.org/en/docs/Web/CSS/transform-origin "The transform-origin CSS property lets you modify the origin for transformations of an element. For example, the transform-origin of the rotate() function is the centre of rotation. (This property is applied by first translating the element by the negated value of the property, then applying the element's transform, then translating by the property value.)"
[11]: https://developer.mozilla.org/en/docs/Web/CSS/angle "The documentation about this has not yet been written; please consider contributing!"
[12]: /@api/deki/files/5987/=transform-functions-rotate3d_cart.png
[13]: /@api/deki/files/5986/=transform-functions-rotate3d_hom4.png
[14]: http://en.wikipedia.org/wiki/Axial_symmetry
[15]: transform-origin
[16]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"