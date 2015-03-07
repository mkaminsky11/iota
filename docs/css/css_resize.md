## resize

### Summary

The `resize` CSS property lets you control the resizability of an element.

* _[Initial value][0]_ `none` 
* _Applies to_ elements with overflow other than visible 
* _[Inherited][1]_ no 
* _Media_ [`visual`][2] 
* _[Computed value][3]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][4]: none [|][5] both [|][5] horizontal [|][5] vertical

    resize: none
    resize: both
    resize: horizontal
    resize: vertical
    
    resize: inherit
    

### Values

**`none`**

> The element offers no user-controllable method for resizing the element.

**`both`**

> The element displays a mechanism for allowing the user to resize the element, which may be resized both horizontally and vertically.

**`horizontal`**

> The element displays a mechanism for allowing the user to resize the element, which may only be resized horizontally.

**`vertical`**

> The element displays a mechanism for allowing the user to resize the element, which may only be resized vertically.

**Note:** `resize` does not apply to blocks for which the [`overflow`][6] property is set to `visible`.

### Examples

### Disabling resizability of textareas

By default, [`<textarea>`][7] elements are resizable in Gecko 2.0 (Firefox 4). You may override this behavior with the CSS shown below:

    textarea.example {
      resize: none; /* disables resizability */
    }
    

### Using resize with arbitrary elements

You can use the resize property to make any element resizable. In the example below, a resizable [`<div>`][8] box contains a resizable paragraph ([`<p>`][9] element):

    <div style="resize:both; overflow:scroll; width:300px; height:300px; border:1px solid black">
      <p style="resize:both; overflow:scroll; width:200px; height:200px; border:1px solid black">
        This paragraph is resizable, because the CSS resize property is set to 'both' on this
        element.
      </p>
    </div>
    

![arbitrary.png](/@api/deki/files/4966/=arbitrary.png)

[View the live example][10]


[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/overflow
[7]: https://developer.mozilla.org/en/docs/Web/HTML/Element/textarea "The HTML <textarea> element represents a multi-line plain-text editing control."
[8]: https://developer.mozilla.org/en/docs/Web/HTML/Element/div "The HTML <div> element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as <article> or <nav>) is appropriate."
[9]: https://developer.mozilla.org/en/docs/Web/HTML/Element/p "The HTML <p> element (or HTML Paragraph Element) represents a paragraph of text."
[10]: /samples/cssref/resize.html