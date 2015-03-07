## object-fit

### Summary

The `object-fit` CSS property specifies how the contents of a replaced element should be fitted to the box established by its used height and width.

* _[Initial value][0]_ `fill` 
* _Applies to_ replaced elements 
* _[Inherited][1]_ yes 
* _Media_ [`visual`][2] 
* _[Computed value][3]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][4]:  fill [|][5] contain [|][5] cover [|][5] none [|][5] scale-down

    object-fit: fill
    object-fit: contain
    object-fit: cover
    object-fit: none
    object-fit: scale-down
    

### Values

**`fill`**

> The replaced content is sized to fill the element's content box: the object's concrete object size is the element's used width and height.

**`contain`**

> The replaced content is sized to maintain its aspect ratio while fitting within the element's content box: its concrete object size is resolved as a contain constraint against the element's used width and height.

**`cover`**

> The replaced content is sized to maintain its aspect ratio while filling the element's entire content box: its concrete object size is resolved as a cover constraint against the element's used width and height.

**`none`**

> The replaced content is not resized to fit inside the element's content box: the object's concrete object size is determined using the default sizing algorithm with no specified size, and a default object size equal to the replaced element's used width and height.

**`scale-down`**

> The content is sized as if `none` or `contain` were specified, whichever would result in a smaller concrete object size.

### Example

### HTML Content

    <div>
      <h2>object-fit: fill</h2>
      <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" />
    
      <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" />
    
      <h2>object-fit: contain</h2>
      <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" />
    
      <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" />
    
      <h2>object-fit: cover</h2>
      <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" />
    
      <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" />
    
      <h2>object-fit: none</h2>
      <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" />
    
      <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" />
    
      <h2>object-fit: scale-down</h2>
      <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" />
    
      <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" />
    
    </div>

### CSS Content

    h2 {
      font-family: Courier New, monospace;
      font-size: 1em;
      margin: 1em 0 0.3em;
    }
    
    div {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
      height: 940px;
    }
    
    img {
      width: 150px;
      height: 100px;
      border: 1px solid #000;
    }
    
    .narrow {
      width: 100px;
      height: 150px;
      margin-top: 10px;
    }
    
    .fill {
      object-fit: fill;
    }
    
    .contain {
      object-fit: contain;
    }
    
    .cover {
      object-fit: cover;
    }
    
    .none {
      object-fit: none;
    }
    
    .scale-down {
      object-fit: scale-down;
    }
    

### Output



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."