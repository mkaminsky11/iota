## opacity

### Summary

The `opacity` CSS property specifies the transparency of an element, that is, the degree to which the background behind the element is overlaid.

The value applies to the element as a whole, including its contents, even though the value is not inherited by child elements. Thus, an element and its contained children all have the same opacity relative to the element's background, even if the element and its children have different opacities relative to one another.

Using this property with a value different than `1` places the element in a new [stacking context][0].

* _[Initial value][1]_ `1.0` 
* _Applies to_ all elements 
* _[Inherited][2]_ no 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ the specified value, clipped in the range `[0,1]` 
* _Animatable_ yes, as a [number][5] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: [<number>][7]

    opacity: 1
    opacity: 1.0
    opacity: 0.6
    opacity: 0.0
    opacity: 0
    
    opacity: inherit
    

### Values

**`<number>`**

> Is a [`<number>`][8] in the range `0.0` to `1.0`, both included, representing the opacity of the channel, that is the value of its alpha channel. Any value outside the interval, though valid, is clamped to the nearest limit in the range.
> Value
> Meaning
> 
> `0`
> The element is fully transparent (that is, invisible).
> 
> Any [`<number>`][8] strictly between `0` and `1`
> The element is translucent (that is, background can be seen).
> 
> `1`
> The element is fully opaque (solid).
> 
> 

### Examples

### Basic example

    div { background-color: yellow; }
    .light {
      opacity: 0.2; /* Barely see the text over the background */
    }
    .medium {
      opacity: 0.5; /* See the text more clearly over the background */
    }
    .heavy {
      opacity: 0.9; /* See the text very clearly over the background */
    }
    

    <div >You can barely see this.</div>
    <div >This is easier to see.</div>
    <div >This is very easy to see.</div>
    

    

### Different opacity with :hover

    img.opacity {
      opacity: 1;
      filter: alpha(opacity=100); /* IE8 and lower */
      zoom: 1; /* Triggers "hasLayout" in IE 7 and lower */
    }
     
    img.opacity:hover {
      opacity: 0.5;
      filter: alpha(opacity=50);
      zoom: 1;
    }

    <img src="//developer.mozilla.org/media/img/mdn-logo.png"
         alt="MDN logo" width="128" height="146"
         >
    

    



[0]: https://developer.mozilla.org/en/docs/CSS/Understanding_z-index/The_stacking_context "CSS/Understanding_z-index/The_stacking_context"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/number#Interpolation "Values of the <number> CSS data type are interpolated as real, floating-point, numbers."
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/Web/CSS/number
[8]: https://developer.mozilla.org/en/docs/Web/CSS/number "The documentation about this has not yet been written; please consider contributing!"