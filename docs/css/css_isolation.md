## isolation

### Summary

The `isolation` CSS property defines if the element must create a new [stacking context][0].

This especially useful in conjunction with [`background-blend-mode`][1] that only blend background in a given stacking context: it allows to isolate groups of elements from their deeper background and to blend their background color together.

* _[Initial value][2]_ `auto` 
* _Applies to_ all elements. In SVG, it applies to container elements, graphics elements, and graphics referencing elements 
* _[Inherited][3]_ no 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    Formal syntax:  auto [|][6] isolate

    isolation: auto;
    isolation: isolate;
    
    isolation: initial;
    isolation: inherit;
    isolation: unset;
    

### Values

**`auto`**

> Is a keyword indicating that a new stacking context has to be created only if one properties applied to the element requires it.

**`isolate`**

> Is a keyword indicating that a new stacking context must be created.

### Examples

    <div  >
      <div >
        <div >auto</div>
      </div>
      <div >
        <div >isolate</div>
      </div>
    </div>
    

    .a {
      background-color: rgb(0,255,0);
    }
    #b {
      width: 200px;
      height: 210px;
    }
    .c {
      width: 100px;
      height: 100px;
      border: 1px solid black;
      padding: 2px;
      mix-blend-mode: difference;
    }
    #d {
      isolation: auto;
    }
    #e {
      isolation: isolate;
    }



[0]: https://developer.mozilla.org/en/docs/Glossary/stacking_context "The definition of that term (stacking context) has not been written yet; please consider contributing it!"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/background-blend-mode "The background-blend-mode CSS property describes how the element's background images should blend with each other and the element's background color."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."