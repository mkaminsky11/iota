## repeating-linear-gradient

The CSS `repeating-linear-gradient` function creates an [`<image>`][0] of a repeating gradients. It works similarly, and takes the same arguments, to the basic linear gradients, as described by [`linear-gradient()`][1], but it automatically repeats the color stops infinitely in both directions, with their positions shifted by multiples of the length of a basic linear gradient (the difference between the last color stop's position and the first one's position).

The consequence is that an end color of a gradient always coincide with a start color. If both are not identical, this will result in a sharp transition.

Like any other gradient, a repeating CSS linear gradient is not a CSS `[<color>][2]` but an image with [no intrinsic dimensions][3]; that is, it has no natural or preferred size, nor ratio. Its concrete size will match the one of the element it applies to.

### Syntax

    repeating-linear-gradient(  [ [<angle>][4] | to <side-or-corner> ,]? <color-stop> [, <color-stop>]+ )
                                \---------------------------------/ \----------------------------/
                                  Definition of the gradient line         List of color stops  
    
    where <side-or-corner> = [left | right] || [top | bottom]
       and <color-stop>     = <color> [ <percentage> | <length> ]?
    

    repeating-linear-gradient( 45deg, blue, red );           /* A repeating gradient on 45deg axe starting blue and finishing red */
    repeating-linear-gradient( to left top, blue, red);      /* A repeating gradient going from the bottom right to the top left 
                                                                starting blue and finishing red */
    
    repeating-linear-gradient( 0deg, blue, green 40%, red ); /* A repeating gradient going from the bottom to top, starting blue, 
                                                                being green after 40% and finishing red */ 
    

### Values

**`<side-or-corner>`**

> Represents the position of the starting-point of the gradient line. It consists of two keywords: the first one indicates the horizontal side, `left` or `right`, and the second one the vertical side, `top` or `bottom`. The order is not relevant and each of the keyword is optional.  
> The values `to top`, `to bottom`, `to left` and `to right` are translated into the angles `0deg`, `180deg`, `270deg`, `90deg` respectively. The others are translated into an angle that causes the starting-point to be in the same quadrant as the described corner so that the line defined by the starting-point and the corner is perpendicular to the gradient line. That way, the color described by the `<color-stop>` will exactly apply to the corner point. This is sometimes called the "_magic corner_" property. The end-point of the gradient line is the symmetrical point of the starting-point on the other direction of the center box.

**`<angle>`**

> An angle of direction for the gradient. See [`<angle>`][5].

**`<color-stop>`**

> This value is comprised of a [`<color>`][6] value, followed by an optional stop position (either a percentage between 0% and 100% or a [`<length>`][7] along the gradient axis).  
> Rendering of color-stops in CSS gradients follows the same rules as color-stops in SVG gradients.

### Examples

    #grad1 {
      background-image: repeating-linear-gradient(180deg,rgb(26,198,204),rgb(26,198,204) 7%, rgb(100,100,100) 10%);
    }
    
    #grad2 {
      background-image: repeating-linear-gradient(-45deg, transparent, transparent 25px, rgba(255,255,255,1) 25px, rgba(255,255,255,1) 50px);
    }
    

    <ol>
      <li>repeating gradient
        <div ></div>
      </li>
      <li>Zebra pattern	  
        <div ></div>
      </li>	    
    </ol>



[0]: https://developer.mozilla.org/en/docs/Web/CSS/image "The documentation about this has not yet been written; please consider contributing!"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/linear-gradient "{{ CSSRef() }}"
[2]: color_value
[3]: https://developer.mozilla.org/en/CSS/image#no_intrinsic "en/CSS/image#no_intrinsic"
[4]: https://developer.mozilla.org/en/CSS/angle "angle"
[5]: https://developer.mozilla.org/en/docs/Web/CSS/angle "The documentation about this has not yet been written; please consider contributing!"
[6]: https://developer.mozilla.org/en/docs/Web/CSS/color_value "The documentation about this has not yet been written; please consider contributing!"
[7]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"