## transform

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The CSS `transform` property lets you modify the coordinate space of the CSS visual formatting model. Using it, elements can be translated, rotated, scaled, and skewed according to the values set.

If the property has a value different than `none`, a [stacking context][1] will be created. In that case the object will act as a containing block for `position``: fixed` elements that it contains.

* _[Initial value][2]_ `none` 
* _Applies to_ transformable elements 
* _[Inherited][3]_ no 
* _Percentages_ refer to the size of bounding box 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified, but with relative lengths converted into absolute lengths 
* _Animatable_ yes, as a transform 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: none [|][7] [<transform-function>][8][+][9]
    

    transform: none
    transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0)
    transform: translate(12px, 50%)
    transform: translateX(2em)
    transform: translateY(3in)
    transform: scale(2, 0.5)
    transform: scaleX(2)
    transform: scaleY(0.5)
    transform: rotate(0.5turn)
    transform: skewX(30deg)
    transform: skewY(1.07rad)
    transform: matrix3d(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0)
    transform: translate3d(12px, 50%, 3em)
    transform: translateZ(2px)
    transform: scale3d(2.5, 1.2, 0.3)
    transform: scaleZ(0.3)
    transform: rotate3d(1, 2.0, 3.0, 10deg)
    transform: rotateX(10deg)
    transform: rotateY(10deg)
    transform: rotateZ(10deg)
    transform: perspective(17px)
    
    transform: translateX(10px) rotate(10deg) translateY(5px)
    

### Values

**`<transform-function>`**

> One or more of the [CSS transform functions][10] to be applied, see below.

**`none`**

> Specifies that no transform should be applied.

### Examples

See [Using CSS transforms][11].

### Live Example

    pre {
         width: 33em;
         border: solid red;
    
        -webkit-transform: translate(100px) rotate(20deg);
        -webkit-transform-origin: 60% 100%;
    
        -o-transform:translate(100px) rotate(20deg); 
        -o-transform-origin:60% 100%;
    
        transform: translate(100px) rotate(20deg);
        transform-origin: 60% 100%;
    }
    

### CSS transform functions

The `transform` CSS property allows the coordinate system used by an element to be manipulated using **transform functions**. These functions are described below.

### matrix

    transform:  matrix(a, c, b, d, tx, ty)
    

Specifies a 2D transformation matrix comprised of the specified six values. This is the equivalent to applying the transformation matrix (abtxcdty001) \\begin{pmatrix} a & b & \\mathrm{tx} \\\\ c & d & \\mathrm{ty} \\\\ 0 & 0 & 1 \\end{pmatrix} which maps coordinates from a new coordinate system into a previous coordinate system by the following matrix equalities: (xprevCoordSysyprevCoordSys1)=(abtxcdty001)(xnewCoordSysynewCoordSys1)=(axnewCoordSys+bynewCoordSys+txcxnewCoordSys+dynewCoordSys+ty1) \\begin{pmatrix} x\_{\\mathrm{prevCoordSys}} \\\\ y\_{\\mathrm{prevCoordSys}} \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} a & b & \\mathrm{tx} \\\\ c & d & \\mathrm{ty} \\\\ 0 & 0 & 1 \\end{pmatrix} \\begin{pmatrix} x\_{\\mathrm{newCoordSys}} \\\\ y\_{\\mathrm{newCoordSys}} \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} a x\_{\\mathrm{newCoordSys}} + b y\_{\\mathrm{newCoordSys}} + \\mathrm{tx} \\\\ c x\_{\\mathrm{newCoordSys}} + d y\_{\\mathrm{newCoordSys}} + \\mathrm{ty} \\\\ 1 \\end{pmatrix} 

**Note:** Old versions of Gecko (Firefox), before Firefox 16, accepted a [`<length>`][12] value for **tx** and **ty**. Current Gecko, along with Webkit (Safari, Chrome) and Opera, supports a unitless [`<number>`][13] for **tx** and **ty**.

#### Live examples

    
     background: gold;  width: 30em;
    
     -webkit-transform: matrix(1, -0.2, 0, 1, 0, 0);
          -o-transform: matrix(1, -0.2, 0, 1, 0, 0);
             transform: matrix(1, -0.2, 0, 1, 0, 0);
    

    
     background: wheat;
     max-width: intrinsic;
    
     -webkit-transform: matrix(1, 0, 0.6, 1,  250, 0);
          -o-transform: matrix(1, 0, 0.6, 1,  250, 0);
             transform: matrix(1, 0, 0.6, 1,  250, 0);
    

#### Further knowledge

* [Example of a general SVG transform][14]
* [Examples of linear transformation matrices][15] Wikipedia
* [Coordinate transformation matrices][16] mathamazement.com
* [Microsoft's matrix filter][17] MSDN

### rotate

    
    transform:  rotate(angle);       /* an <angle>, e.g., rotate(30deg) */

### Live Example

### HTML Content

    
    <div >
    <pre>
        height:100px;
        background-color: yellow;
        -moz-transform: rotate(5deg);
        -ms-transform: rotate(5deg); 
        -webkit-transform: rotate(5deg);
        transform: rotate(5deg);
    </pre>
    </div>
    
    

### CSS Content

    
    #rotate1
    {
        height:100px;
        background-color: yellow;
        -moz-transform: rotate(5deg);
        -ms-transform: rotate(5deg); /* IE 9 */
        -webkit-transform: rotate(5deg); /* Chrome, Safari, Opera */
        transform: rotate(5deg);
    }
    

Rotates the element clockwise around its origin (as specified by the [`transform-origin`][18] property) by the specified `angle`. The operation corresponds to the matrix **\[cos(angle) sin(angle) -sin(angle) cos(angle) 0 0\]**.

### scale

    
    transform:  scale(sx[, sy]);     /* one or two unitless <number>s, e.g., scale(2.1,4) */

Specifies a 2D scaling operation described by **\[sx, sy\]**. If `sy` isn't specified, it is assumed to be equal to `sx`.

### scaleX

    
    transform:  scaleX(sx);          /* a unitless <number>, e.g., scaleX(2.7) */

Specifies a scale operation using the vector **\[sx, 1\]**.

### scaleY

    
    transform:  scaleY(sy)           /* a unitless <number>, e.g., scaleY(0.3) */

Specifies a scale operation using the vector **\[1, sy\]**.

### skew

    
    transform:  skew(ax[, ay])       /* one or two <angle>s, e.g., skew(30deg,-10deg) */

Skews the element along the X and Y axes by the specified angles. If `ay` isn't provided, no skew is performed on the Y axis.

**Note:** The `skew()` function was present in early drafts. It has been removed but is still present in some implementations. Do not use it.  
  
To achieve the same effect, use `skewX()` if you were using `skew()` with one parameter or `matrix(1, _tan(_ay_)_`_, _`_tan(_ax_)_, 1, 0, 0)` for the general way. Note that _tan()_ isn't a CSS function and you have to precalculate it yourself.

### skewX

    
    transform:  skewX(angle)         /* an <angle>, e.g., skewX(-30deg) */

Skews the element along the X axis by the given `angle`.

### skewY

    
    transform:  skewY(angle)         /* an <angle>, e.g., skewY(4deg) */

Skews the element along the Y axis by the given `angle`.

### translate

    
    transform:  translate(tx[, ty])  /* one or two <translation-value> values */

Specifies a 2D translation by the vector **\[tx, ty\]**. If `ty` isn't specified, its value is assumed to be zero.

Each [`<translation-value>`][19] arguments may be either a `[<length>][20]` value or a `[<percentage>][21]` value.

### translateX

    
    transform:  translateX(tx)       /* <translation-value> */

Translates the element by the given amount along the X axis.

### translateY

    
    transform:  translateY(ty)       /* <translation-value> */

Translates the element by the given amount along the Y axis.


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/CSS/Understanding_z-index/The_stacking_context "https://developer.mozilla.org/en/docs/CSS/Understanding_z-index/The_stacking_context"
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/transform-function "Possible values: matrix(), matrix3d(), rotate(), rotate3d(), rotateX(), rotateY(), rotateZ(), scale(), scale3d(), scaleX(), scaleY(), scaleZ(), skewX(), skewY(), translate(), translate3d(), translateX(), translateY(), translateZ()"
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Plus_(.2B) "Plus multiplier: The previous entity may appear 1 or several times."
[10]: #CSS_transform_functions
[11]: /En/CSS/Using_CSS_transforms "En/CSS/Using_CSS_transforms"
[12]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[13]: https://developer.mozilla.org/en/docs/Web/CSS/number "The documentation about this has not yet been written; please consider contributing!"
[14]: https://developer.mozilla.org/en/docs/Web/SVG/Attribute/transform#General_Transformation
[15]: http://en.wikipedia.org/wiki/Linear_transformation#Examples_of_linear_transformation_matrices
[16]: http://www.mathamazement.com/Lessons/Pre-Calculus/08_Matrices-and-Determinants/coordinate-transformation-matrices.html
[17]: http://msdn.microsoft.com/en-us/library/ms533014(VS.85,loband).aspx
[18]: https://developer.mozilla.org/en/docs/Web/CSS/transform-origin "The transform-origin CSS property lets you modify the origin for transformations of an element. For example, the transform-origin of the rotate() function is the centre of rotation. (This property is applied by first translating the element by the negated value of the property, then applying the element's transform, then translating by the property value.)"
[19]: https://developer.mozilla.org/en/docs/translation-value "https://developer.mozilla.org/en/docs/translation-value"
[20]: https://developer.mozilla.org/en/docs/CSS/length "https://developer.mozilla.org/en/docs/CSS/length"
[21]: https://developer.mozilla.org/en/docs/CSS/percentage "https://developer.mozilla.org/en/docs/CSS/percentage"