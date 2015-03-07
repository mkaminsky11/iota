## blend-mode

### Summary

The **`<blend-mode>`** type is a collection of keywords describing blend modes.

A blend mode is a method of calculating the final color value of a pixel when layers overlap. Each blend mode takes the color value of the foreground and the backdrop (top color and bottom color respectively), perfoms its calculation and returns a color value. The final, visible layer is the result of performing the blend mode calculation on every overlapping pixel among the blended layers.

### Syntax

    Formal syntax: normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity

### Possible values

**`normal`**

> The final color is the top color, whatever the bottom color may be.  
> The effect is similar to two opaque pieces of paper overlapping.
> 
> 

**`multiply`**

> The final color is the result of multiplying the top and bottom colors.  
> A black layer leads to a black final layer, and a white layer leads to no change.  
> The effect is similar to two images printed on transparent film overlapping.
> 
> 

**`screen`**

> The final color is the result of inverting the colors, multiplying them and inverting that color value.  
> A black layer leads to no change, and a white layer leads to a white final layer.  
> The effect is similar to two images shone onto a projection screen.
> 
> 

**`overlay`**

> The final color is the result of `multiply` if the bottom color is darker, or `screen` if the bottom color is lighter.  
> This blend mode is equivalent to `hard-light` but with the layers swapped.
> 
> 

**`darken`**

> The final color is a color composed of the darkest values per color channel.
> 
> 

**`lighten`**

> The final color is a color composed of the lightest values per color channel.
> 
> 

**`color-dodge`**

> The final color is the result of dividing the bottom color by the inverse of the top color.  
> A black foreground leads to no change. A foreground with the inverse color of the backdrop leads to a fully lit color.  
> This blend mode is similar to screen, but the foreground need only be as light as the inverse of the backdrop to reach a fully lit color.
> 
> 

**`color-burn`**

> This final color is the result of inverting the bottom color, dividing the value by the top color, and inverting that value.  
> A white foreground leads to no change. A foreground with the inverse color of the backdrop leads to a black final image.  
> This blend mode is similar to multiply, but the foreground need only be as dark as the inverse of the backdrop to make the final image black.
> 
> 

**`hard-light`**

> The final color is the result of `multiply` if the top color is darker, or `screen` if the top color is lighter.  
> This blend mode is equivalent to `overlay` but with the layers swapped.  
> The effect is similar to shining a _harsh_ spotlight on the backdrop.
> 
> 

**`soft-light`**

> The final color is similar to hard-light, but softer.  
> This blend mode behaves similar to `hard-light`.  
> The effect is similar to shining a _diffused_ spotlight on the backdrop_`.`_
> 
> 

**`difference`**

> The final color is the result of subtracting the darker of the two colors from the lighter one.  
> A black layer has no effect, while a white layer inverts the other layer's color.
> 
> 

**`exclusion`**

> The final color is similar to `difference,` but with less contrast.  
> As with `difference`,  a black layer has no effect, while a white layer inverts the other layer's color.
> 
> 

**`hue`**

> The final color has the _hue_ of the top color, while using the _saturation_ and _luminosity_ of the bottom color.
> 
> 

**`saturation`**

> The final color has the _saturation_ of the top color, while using the _hue_ and _luminosity_ of the bottom color.  
> A pure gray backdrop, having no saturation, will have no effect.
> 
> 

**`color`**

> The final color has the__hue__ and __saturation_ _of the top color, while using the _luminosity_ of the bottom color.  
> The effect preserves gray levels and can be used to colorize the foreground.
> 
> 

**`luminosity`**

> The final color has the _luminosity_ of the top color, while using the _hue_ and _saturation_ of the bottom color.  
> This blend mode is equivalent to color, but with the layers swapped.
> 
> 

### Interpolation of Blend modes

Changes between blends mode are not interpolated. Any change occurs abruptly.