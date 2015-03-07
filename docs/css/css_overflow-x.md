## overflow-x

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `overflow-x` [CSS][1] property specifies whether to clip content, render a scroll bar or display overflow content of a block-level element, when it overflows at the left and right edges.

* _[Initial value][2]_ `visible` 
* _Applies to_ non-replaced block-level elements and non-replaced inline-block elements 
* _[Inherited][3]_ no 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: visible [|][7] hidden [|][7] scroll [|][7] auto
    

    overflow-x: visible
    overflow-x: hidden
    overflow-x: scroll
    overflow-x: auto
    
    overflow-x: inherit
    

### Values

**`visible`**

> Content is not clipped, it may be rendered outside the content box.

**`hidden`**

> The content is clipped and no scrollbars are provided.

**`scroll`**

> The content is clipped and desktop browsers use scrollbars, whether or not any content is clipped. This avoids any problem with scrollbars appearing and disappearing in a dynamic environment. Printers may print overflowing content.

**`auto`**

> Depends on the user agent. Desktop browsers like Firefox provide scrollbars if content overflows.

### Examples

### HTML

    <ul>
      <li><code>overflow-x:hidden</code> — hides the text outside the box
        <div >
          ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
        </div>
      </li>
    
      <li><code>overflow-x:scroll</code> — add a scrollbar if needed
        <div >
          ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
        </div>
      </li>
    
      <li><code>overflow-x:visible</code> — displays the text outside the box if needed
        <div >
          ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
        </div>
      </li>
    
      <li><code>overflow-x:auto</code> — on most browser, equivalent to <code>scroll</code>
        <div >
          ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
        </div>
      </li>
    </ul>
      
    

### CSS

    #div1, #div2, #div3, #div4 {
      border: 1px solid black;
      width:  250px;
      margin-bottom: 12px;
    }
    
    #div1 { overflow-x: hidden;}
    #div2 { overflow-x: scroll;}
    #div3 { overflow-x: visible;}
    #div4 { overflow-x: auto;}
    

### Result



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."