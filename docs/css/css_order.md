## order

### Summary

The [CSS][0] `order` property specifies the order used to lay out flex items in their flex container. Elements are laid out by ascending order of the `order` value. Elements with the same `order` value are laid out in the order they appear in the source code.

**Note**: `order` is only meant to affect the **visual order**, not the logical order, or the tab order, of elements. It must not be used on non-visual media such as speech.

* _[Initial value][1]_ `0` 
* _Applies to_ flex items and absolutely-positioned flex container children 
* _[Inherited][2]_ no 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ as specified 
* _Animatable_ yes, as an [integer][5] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

See [Using CSS flexible boxes][6] for more properties and information.

### Syntax

    [Formal syntax][7]: [<integer>][8]
    

    order: 5
    
    order: inherit
    

### Values

**`<integer>`**

> Represents the ordinal group the flex item has been assigned.

### Examples

Here is a basic HTML chunk:

    <!DOCTYPE html>
    <header>…</header>
    <div id='main'>
       <article>…</article>
       <nav>…</nav>
       <aside>…</aside>
    </div>
    <footer>…</footer>

The following CSS code should create a classic two-sidebar layout surrounding a content block. The Flexible Box Layout Module automatically creates blocks of equal vertical size and uses as much horizontal space as available.

    #main { display: flex; }
    #main > article { flex:1;         order: 2; }
    #main > nav     { width: 200px;   order: 1; }
    #main > aside   { width: 200px;   order: 3; }



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/integer#Interpolation "Values of the <integer> CSS data type are interpolated via integer discrete steps. The calculation is done as if they were real, floating-point numbers and the discrete value is obtained using the floor function."
[6]: https://developer.mozilla.org/en/docs/CSS/Using_CSS_flexible_boxes "CSS/Using_CSS_flexible_boxes"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/Web/CSS/integer