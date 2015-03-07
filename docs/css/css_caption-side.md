## caption-side

### Summary

The `caption-side` [CSS][0] property positions the content of a table's [`<caption>`][1] on the specified side.

* _[Initial value][2]_ `top` 
* _Applies to_ table-caption elements 
* _[Inherited][3]_ yes 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: top [|][7] bottom [|][7] block-start [|][7] block-end [|][7] inline-start [|][7] inline-end
    

    caption-side: top
    caption-side: bottom
    caption-side: left     /* Warning: non-standard value */
    caption-side: right    /* Warning: non-standard value */
    caption-side: block-start
    caption-side: block-end
    caption-side: inline-start
    caption-side: inline-end
     
    caption-side: inherit
    

### Values

**`top`**

> Is a keyword indicating that the caption box should be positioned above the table.

**`bottom`**

> Is a keyword indicating that the caption box should be positioned below the table.

**`left` Non-standard**

> Is a keyword indicating that the caption box should be positioned on the left side of the table.  
> 
> **Note:** This value was proposed for CSS 2, but removed from the final CSS 2.1 specification. It is non-standard.

**`right` Non-standard**

> Is a keyword indicating that the caption box should be positioned on the right side of the table.  
> 
> **Note:** This value was proposed for CSS 2, but removed from the final CSS 2.1 specification. It is non-standard.

**block-start __**

> Is a keyword indicating that the caption box should be positioned at the start of the block, which reflects either the top or the bottom of the table depending on the writing mode.

**block-end __**

> Is a keyword indicating that the caption box should be positioned at the end of the block, which reflects either the top or the bottom of the table depending on the writing mode.

**inline-start __**

> Is a keyword indicating that the caption box should be positioned at the inline start, which reflects either the left or the right side of the table depending on the writing mode.

**inline-end __**

> Is a keyword indicating that the caption box should be positioned at the inline end, which reflects either the left or the right side of the table depending on the writing mode.

**`inherit`**

> Is a keyword indicating that the `caption-side` value defined on the parent's element must be used.

### Examples

    .contentbox table-caption {
      caption-side: bottom;
    }
    



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/HTML/Element/caption "The HTML <caption> Element (or HTML Table Caption Element) represents the title of a table. Though it is always the first descendant of a <table>, its styling, using CSS, may place it elsewhere, relative to the table."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."