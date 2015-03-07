## touch-action

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `touch-action` CSS property specifies whether and how a given region can be manipulated by the user (for instance, by panning or zooming).

* _[Initial value][1]_ `auto` 
* _Applies to_ all elements except: non-replaced inline elements, table rows, row groups, table columns, and column groups 
* _[Inherited][2]_ no 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][5]:  auto [|][6] none [|][6] [ pan-x [||][7] pan-y ] [|][6] manipulation

### Values

**`auto`**

> The user agent may determine any permitted touch behaviors, such as panning and zooming manipulations of the viewport, for touches that begin on the element.

**`none`**

> Touches that begin on the element must not trigger default touch behaviors.

**`pan-x`**

> The user agent may consider touches that begin on the element only for the purposes of horizontally scrolling the element's nearest ancestor with horizontally scrollable content.

**`pan-y`**

> The user agent may consider touches that begin on the element only for the purposes of vertically scrolling the element's nearest ancestor with vertically scrollable content.

**`manipulation`**

> The user agent may consider touches that begin on the element only for the purposes of scrolling and continuous zooming. Any additional behaviors supported by auto are out of scope for this specification.

### Example

    .list {
      width: 200px;
      height: 50px;
      overflow-x: scroll;
    }
    
    .list > .entry {
      touch-action: pan-x;
    }
    



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: The two entities are optional, and may appear in any order."