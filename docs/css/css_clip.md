## clip

**Deprecated**  
This feature has been removed from the Web standards. Though some browsers may still support it, it is in the process of being dropped. Do not use it in old or new projects. Pages or Web apps using it may break at any time.

### Summary

The `clip` [CSS][0] property defines what portion of an element is visible. The `clip` property applies only to absolutely positioned elements, that is elements with [`position:absolute`][1] or [`position:fixed`][1].

**Warning:** This property is deprecated. Use [`clip-path`][2] instead.

* _[Initial value][3]_ `auto` 
* _Applies to_ absolutely positioned elements 
* _[Inherited][4]_ no 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ `auto` if specified as `auto`, otherwise a rectangle with four values, each of which is `auto` if specified as `auto` or the computed length otherwise 
* _Animatable_ yes, as a [rectangle][7] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][8]: [<shape>][9] [|][10] auto
    

    clip: rect(1px, 10em, 3rem, 2ch)
    clip: auto
    
    clip: inherit

### Values

**`<shape>`**

> A rectangular [`<shape>`][11] of the form
> 
>     rect(<top>, <right>, <bottom>, <left>)   /* standard syntax */
>     
> 
> or
> 
>     rect(<top> <right> <bottom> <left>)      /* backwards compatible syntax */
> 
> where `<top>` and `<bottom>` specify offsets from the _inside top border edge_ of the box, and `<right>`, and `<left>` specify offsets from the _inside left border edge_ of the box --- that is, the extent of the padding box.

> `<top>`, `<right>`, `<bottom>`, and `<left>` may either have a [`<length>`][12] value or` auto`. If any side's value is `auto`, the element is clipped to that side's _inside border edge_.

**`auto`**

> The element does not clip (default value). Note that this is distinct from `rect(auto, auto, auto, auto)`, which does clip to the inside border edges of the element.

### Examples

    .dotted-border { 
       border: dotted;  
       position: relative; 
       width: 536px;
       height: 350px;
    }
    
    #top-left, #middle, #bottom-right {
       position: absolute;
       top: 0px;
    }
    
    #top-left {
       left: 360px;
       clip: rect(0px, 175px, 113px, 0px); 
    }
    
    
    #middle {
       left: 280px;
       clip: rect(119px, 255px, 229px, 80px); 
       /* standard syntax, unsupported by Internet Explorer 4-7 */
    }
    
    #bottom-right {
       left: 200px;
       clip: rect(235px 335px 345px 160px);
       /* non-standard syntax, but supported by all major browsers*/
    }

    <p >
       <img src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Original Graphic" /> 
       <img  src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped to upper left"> 
       <img  src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped towards middle"> 
       <img  src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped to bottom right">
    </p>



[0]: https://developer.mozilla.org/en/docs/Web/CSS
[1]: https://developer.mozilla.org/en/docs/Web/CSS/position "The documentation about this has not yet been written; please consider contributing!"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/clip-path "The clip-path property prevents a portion of an element from drawing by defining a clipping region."
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/shape#Interpolation "Values of the <shape> CSS data type which are rectangles are interpolated over their top, right, bottom and left component, each treated as a real, floating-point number."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-shape "rect(<top>, <right>, <bottom>, <left>)"
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[11]: https://developer.mozilla.org/en/docs/Web/CSS/shape "The documentation about this has not yet been written; please consider contributing!"
[12]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"