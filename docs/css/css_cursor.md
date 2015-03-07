## cursor

### Summary

The `cursor` CSS property specifies the mouse cursor displayed when the mouse pointer is over an element.

* _[Initial value][0]_ `auto` 
* _Applies to_ all elements 
* _[Inherited][1]_ yes 
* _Media_ [`visual, interactive`][2] 
* _[Computed value][3]_ as specified, but with relative URI converted into absolute URI 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][4]: [ [ [<uri>][5] [[<x>][6] [<y>][7]][?][8],][*][9] [ auto [|][10] default [|][10] none [|][10] context-menu [|][10] help [|][10] pointer [|][10] progress [|][10] wait [|][10] cell [|][10] crosshair [|][10] text [|][10] vertical-text [|][10] alias [|][10] copy [|][10] move [|][10] no-drop [|][10] not-allowed [|][10] e-resize [|][10] n-resize [|][10] ne-resize [|][10] nw-resize [|][10] s-resize [|][10] se-resize [|][10] sw-resize [|][10] w-resize [|][10] ew-resize [|][10] ns-resize [|][10] nesw-resize [|][10] nwse-resize [|][10] col-resize [|][10] row-resize [|][10] all-scroll [|][10] zoom-in [|][10] zoom-out [|][10] grab [|][10] grabbing ] ]
    

### Values

**<`uri`\>**

> A `url(…)` or a comma separated list `url(…), url(…), …`, pointing to an image file. More than one [`<uri>`][11] may be provided as fallback, in case some cursor image types are not supported. A non-URL fallback (one ore more of the other values) **must** be at the end of the fallback list. See [Using URL values for the cursor property][12] for more details.

**`<x>` `<y>` __**

> Optional x- and y-coordinates. Two unit-less non-negative numbers less than 32\.

**Keyword values**

> **Move mouse over value for testing:**
> Category
> CSS value
> Description
> 
> General
> `auto`
> The browser determines the cursor to display based on the current context.  
> E.g. equivalent to `text` when hovering text.
> 
> `default`
> ![default.gif](/@api/deki/files/3438/=default.gif)
> Default cursor, typically an arrow.
> 
> `none`
> No cursor is rendered.
> 
> Links & status
> `context-menu`
> ![context-menu.png](/@api/deki/files/3461/=context-menu.png)
> A context menu is available under the cursor.  
> Only IE 10 and up have implemented this on Windows: [bug 258960][13].
> 
> `help`
> ![help.gif](/@api/deki/files/3442/=help.gif)
> Indicating help is available.
> 
> `pointer`
> ![pointer.gif](/@api/deki/files/3449/=pointer.gif)
> E.g. used when hovering over links, typically a hand.
> 
> `progress`
> ![progress.gif](/@api/deki/files/3450/=progress.gif)
> The program is busy in the background but the user can still interact with the interface (unlike for `wait`).
> 
> `wait`
> ![wait.gif](/@api/deki/files/3457/=wait.gif)
> The program is busy (sometimes an hourglass or a watch).
> 
> Selection
> `cell`
> ![cell.gif](/@api/deki/files/3434/=cell.gif)
> Indicating that cells can be selected.
> 
> `crosshair`
> ![crosshair.gif](/@api/deki/files/3437/=crosshair.gif)
> Cross cursor, often used to indicate selection in a bitmap.
> 
> `text`
> ![text.gif](/files/3809/text.gif)
> Indicating text can be selected, typically an I-beam.
> 
> `vertical-text`
> ![vertical-text.gif](/@api/deki/files/3456/=vertical-text.gif)
> Indicating that vertical text can be selected, typically a sideways I-beam.
> 
> Drag and drop
> `alias`
> ![alias.gif](/@api/deki/files/3432/=alias.gif)
> Indicating an alias or shortcut is to be created.
> 
> `copy`
> ![copy.gif](/@api/deki/files/3436/=copy.gif)
> Indicating that something can be copied.
> 
> `move`
> ![move.gif](/@api/deki/files/3443/=move.gif)
> The hovered object may be moved.
> 
> `no-drop`
> ![no-drop.gif](/@api/deki/files/3445/=no-drop.gif)
> Cursor showing that a drop is not allowed at the current location.  
> [bug 275173][14] on Windows and Mac OS X, "no-drop is the same as not-allowed".
> 
> `not-allowed`
> ![not-allowed.gif](/@api/deki/files/3446/=not-allowed.gif)
> Cursor showing that something cannot be done.
> 
> Resize & scrolling
> `all-scroll`
> ![all-scroll.gif](/@api/deki/files/3433/=all-scroll.gif)
> Cursor showing that something can be scrolled in any direction (panned).  
> [bug 275174][15] on Windows, "_all-scroll_ is the same as _move_".
> 
> `col-resize`
> ![col-resize.gif](/@api/deki/files/3435/=col-resize.gif)
> The item/column can be resized horizontally. Often rendered as arrows pointing left and right with a vertical bar separating.
> 
> `row-resize`
> ![row-resize.gif](/@api/deki/files/3451/=row-resize.gif)
> The item/row can be resized vertically. Often rendered as arrows pointing up and down with a horizontal bar separating them.
> 
> `n-resize`
> ![Example of a resize towards the top cursor](/files/4083/n-resize.gif)
> Some edge is to be moved. For example, the `se-resize` cursor is used when the movement starts from the _south-east_ corner of the box.
> 
> `e-resize`
> ![Example of a resize towards the right cursor](/files/4085/e-resize.gif)
> 
> `s-resize`
> ![Example of a resize towards the bottom cursor ](/files/4087/s-resize.gif)
> 
> `w-resize`
> ![Example of a resize towards the left cursor](/files/4089/w-resize.gif)
> 
> `ne-resize`
> ![Example of a resize towards the top-right corner cursor](/files/4091/ne-resize.gif)
> 
> `nw-resize`
> ![Example of a resize towards the top-left corner cursor](/files/4093/nw-resize.gif)
> 
> `se-resize`
> ![Example of a resize towards the bottom-right corner cursor](/files/4097/se-resize.gif)
> 
> `sw-resize`
> ![Example of a resize towards the bottom-left corner cursor](/files/4095/sw-resize.gif)
> 
> `ew-resize`
> ![3-resize.gif](/files/3806/3-resize.gif)
> Indicates a bidirectional resize cursor.
> 
> `ns-resize`
> ![6-resize.gif](/files/3808/6-resize.gif)
> 
> `nesw-resize`
> ![1-resize.gif](/files/3805/1-resize.gif)
> 
> `nwse-resize`
> ![4-resize.gif](/files/3807/4-resize.gif)
> 
> Zoom
> `zoom-in`
> ![zoom-in.gif](/@api/deki/files/3459/=zoom-in.gif)
> 
> Indicates that something can be zoomed (magnified) in or out.
> 
> `zoom-out`
> ![zoom-out.gif](/@api/deki/files/3460/=zoom-out.gif)
> 
> Grab
> `grab`
> ![grab.gif](/@api/deki/files/3440/=grab.gif)
> 
> Indicates that something can be grabbed (dragged to be moved).
> 
> `grabbing`
> ![grabbing.gif](/@api/deki/files/3441/=grabbing.gif)
> 
> 

### Examples

    .foo { cursor: crosshair; }
    
    /* use prefixed-value if "zoom-in" isn't supported */
    .bar { cursor: -webkit-zoom-in;  cursor: zoom-in; } 
    
    /* standard cursor value as fallback for url() _must_ be provided (doesn't work without) */
    .baz { cursor: url(hyper.cur), auto }
    



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[5]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-uri "Tooltip not found in DB."
[6]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-x "Tooltip not found in DB."
[7]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-y "Tooltip not found in DB."
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Question_mark_(.3F) "Question mark multiplier: The previous entity is optional (it may be used once, or not at all)."
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Asterisk_(*) "Asterisk multiplier: The previous entity may appear 0, 1 or several times."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[11]: https://developer.mozilla.org/en/docs/Web/CSS/uri "The documentation about this has not yet been written; please consider contributing!"
[12]: https://developer.mozilla.org/en/docs/CSS/Using_URL_values_for_the_cursor_property "Using_URL_values_for_the_cursor_property"
[13]: https://bugzilla.mozilla.org/show_bug.cgi?id=258960 "'context-menu' cursor glyph missing for Windows"
[14]: https://bugzilla.mozilla.org/show_bug.cgi?id=275173 "Cursor glyph for CSS3 'no-drop' is the same as for 'not-allowed'"
[15]: https://bugzilla.mozilla.org/show_bug.cgi?id=275174 "Cursor glyph for CSS3 'all-scroll' is the same as for 'move'"