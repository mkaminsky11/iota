## shape

### Summary

The `<shape>` [CSS][0] data type denotes the specific form of a region. This region is used to define on which part of an element some properties like [`clip`][1] do apply.

In the current specification, a `<shape>`, though designed to denote any kind of form, can only represent a rectangular region, defined using the `rect()` functional notation.

### The `rect()` function

The `rect()` functional notation produces a region in the form of a rectangle.

### Syntax

    rect(_top_, _right_, _bottom_, _left_)
    

#### Values

![rect.png](/@api/deki/files/5730/=rect.png)

**_top_**

> Is a [`<length>`][2] representing the offset for the top of the rectangle relative to the top border of the element's box.

**_right_**

> Is a [`<length>`][2] representing the offset for the right of the rectangle relative to the left border of the element's box.

**_bottom_**

> Is a [`<length>`][2] representing the offset for the bottom of the rectangle relative to the top border of the element's box.

**_left_**

> Is a [`<length>`][2] representing the offset for the left of the rectangle relative to the left border of the element's box.

### Interpolation

Values of the `<shape>` CSS data type which are rectangles can be interpolated in order to allow animations. In that case they are interpolated over their `top`, `right`, `bottom` and `left` component, each treated as a real, floating-point number. The speed of the interpolation is determined by the [timing function][3] associated with the animation.

### Examples

     img.clip04 { 
       clip: rect(10px, 20px, 20px, 10px);
     }
    



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/clip
[2]: https://developer.mozilla.org/en/docs/Web/CSS/length
[3]: https://developer.mozilla.org/en/CSS/timing-function "timing-function"