## overflow-y

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `overflow-y` [CSS][1] property specifies whether to clip content, render a scroll bar, or display overflow content of a block-level element, when it overflows at the top and bottom edges.

* _[Initial value][2]_ `visible` 
* _Applies to_ non-replaced block-level elements and non-replaced inline-block elements 
* _[Inherited][3]_ no 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: visible [|][7] hidden [|][7] scroll [|][7] auto
    

    overflow-y: visible
    overflow-y: hidden
    overflow-y: scroll
    overflow-y: auto
    
    overflow-y: inherit
    

### Values

**`visible`**

> Content is not clipped, it may be rendered outside the content box.

**`hidden`**

> The content is clipped and no scrollbars are provided.

**`scroll`**

> The content is clipped and desktop browsers use scrollbars, whether or not any content is clipped. This avoids any problem with scrollbars appearing and disappearing in a dynamic environment. Printers may print overflowing content.

**`auto`**

> Depends on the user agent. Desktop browsers like Firefox provide scrollbars if content overflows.

### Example

### HTML

    <ul>
      <li><code>overflow-y:hidden</code> — hides the text outside the box
      <div >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </li>
    
      <li><code>overflow-y:scroll</code> — add a scrollbar if needed
      <div >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </li>
    
      <li><code>overflow-y:visible</code> — displays the text outside the box if needed
      <div >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </li>
    
      <li><code>overflow-y:auto</code> — on most browser, equivalent to <code>scroll</code>
      <div >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </li>
    </ul>
      
    

### CSS

    #div1,
    #div2,
    #div3,
    #div4 {
      border: 1px solid black;
      width:  250px;
      height: 100px;
    }
    
    #div1 { overflow-y: hidden; margin-bottom: 12px;}
    #div2 { overflow-y: scroll; margin-bottom: 12px;}
    #div3 { overflow-y: visible; margin-bottom: 120px;}
    #div4 { overflow-y: auto; margin-bottom: 120px;}
    

### Result



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/CSS
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/Web/CSS/Value_definition_syntax
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."