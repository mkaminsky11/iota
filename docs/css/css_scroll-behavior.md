## scroll-behavior

### Summary

The `scroll-behavior` CSS property specifies the scrolling behavior for a scrolling box, when scrolling happens due to navigation or CSSOM scrolling APIs. Any other scrolls, e.g. those that are performed by the user, are not affected by this property. When this property is specified on the root element, it applies to the viewport instead.

User agents may ignore this property.

* _[Initial value][0]_ `auto` 
* _Applies to_ scrolling boxes 
* _[Inherited][1]_ no 
* _Media_ [`visual`][2] 
* _[Computed value][3]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][4]:  auto [|][5] smooth

    scroll-behavior: auto
    scroll-behavior: smooth
    
    scroll-behavior: initial
    scroll-behavior: inherit
    scroll-behavior: unset
    

### Values

**`auto`**

> The scrolling box is scrolled in an instant fashion.

**`smooth`**

> The scrolling box is scrolled in a smooth fashion using a user-agent-defined timing function over a user-agent-defined period of time. User agents should follow platform conventions, if any.

### Example

### HTML

    <div >
      This is some long text, which is used to demonstrate the effect of the <code>scroll-behavior</code> CSS property.
    </div>
    <button >auto</button>
    <button >smooth</button>

### CSS

    div {
      width: 100px;
      height: 100px;
      overflow-y: scroll;
    }
    
    .auto {
      scroll-behavior: auto;
    }
    
    .smooth {
      scroll-behavior: smooth;
    }
    

### JavaScript

    function scrollElement(behavior) {
      var scrollContainer = document.getElementById("scrollContainer");
      scrollContainer.className = behavior;
      var scrollPosition = scrollContainer.scrollTop === 0 ? scrollContainer.scrollHeight : 0;
      scrollContainer.scrollTo(0, scrollPosition);
    }
    
    // Adding event listeners to the buttons.
    document.querySelector(".scroll-auto").addEventListener(
      "click",
      function () {
       scrollElement("auto");
      });
    document.querySelector(".scroll-smooth").addEventListener(
      "click",
      function () {
       scrollElement("smooth");
      });
    

### Output



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."