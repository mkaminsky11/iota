## overflow

### Summary

The `overflow` CSS property specifies whether to clip content, render scrollbars or just display content when it overflows its block level container.

Using the `overflow` property with a value different to `visible` (its default) will create a new [block formatting context][0]. This is technically necessary --- if a float intersected with the scrolling element it would forcibly rewrap the content. The rewrap would happen after each scroll step, leading to a slow scrolling experience.

**Note**: When programmatically setting `scrollTop` on the relevant HTML element, even when `overflow` has the `hidden` value an element may still need to scroll.

* _[Initial value][1]_ `visible` 
* _Applies to_ non-replaced block-level elements and non-replaced inline-block elements 
* _[Inherited][2]_ no 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][5]: visible [|][6] hidden [|][6] scroll [|][6] auto

    overflow: visible
    overflow: hidden
    overflow: scroll
    overflow: auto
    
    overflow: inherit
    

### Values

**`visible`**

> Default value. Content is not clipped, it may be rendered outside the content box.

**`hidden`**

> The content is clipped and no scrollbars are provided.

**`scroll`**

> The content is clipped and desktop browsers use scrollbars, whether or not any content is clipped. This avoids any problem with scrollbars appearing and disappearing in a dynamic environment. Printers may print overflowing content.

**`auto`**

> Depends on the user agent. Desktop browsers like Firefox provide scrollbars if content overflows.

#### Mozilla Extensions

**`-moz-scrollbars-none `__**

> Use `overflow:hidden` instead.

**`-moz-scrollbars-horizontal `__**

> Use of [`overflow-x`][7] and [`overflow-y`][8] is preferred.

**`-moz-scrollbars-vertical `__**

> Use of [`overflow-x`][7] and [`overflow-y`][8] is preferred.

**-moz-hidden-unscrollable Non-standard**

> Is intended mainly for internal use and by themes. Disables scrolling of XML root elements and `<html>`, ` <body>` by arrow keys and mouse wheel.

### Examples

    p {  
         width: 12em;
         height: 6em;
         border: dotted;
         overflow: visible; /* content is not clipped */ 
    }
    

`visible` (default)  
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

    p { overflow: hidden; /* no scrollbars are provided */ }
    

`overflow: hidden`  
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

    p { overflow: scroll; /* always show scrollbars */ }
    

`overflow: scroll`  
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

    p { overflow: auto; /* append scrollbars if necessary */ }
    

`overflow: auto`  
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.


[0]: https://developer.mozilla.org/en/docs/CSS/block_formatting_context "CSS/block_formatting_context"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/overflow-x "The overflow-x CSS property specifies whether to clip content, render a scroll bar or display overflow content of a block-level element, when it overflows at the left and right edges."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/overflow-y "The overflow-y CSS property specifies whether to clip content, render a scroll bar, or display overflow content of a block-level element, when it overflows at the top and bottom edges."