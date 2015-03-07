## background-clip

### Summary

The `background-clip` CSS property specifies whether an element's background, either the color or image, extends underneath its border.

If no background image or color is set, this property will only have a visual effect when the border has transparent regions or partially opaque regions (due to [`border-style`][0] or [`border-image`][1]); otherwise the border covers up the difference.

* _[Initial value][2]_ `border-box` 
* _Applies to_ all elements. It also applies to [`::first-letter`][3] and [`::first-line`][4]. 
* _[Inherited][5]_ no 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][8]: [<box>][9][#][10]

    background-clip: border-box
    background-clip: padding-box
    background-clip: content-box
    
    background-clip: inherit
    

### Values

**`border-box`**

> The background extends to the outside edge of the border (but underneath the border in z-ordering).

**`padding-box`**

> No background is drawn below the border (background extends to the outside edge of the padding).

**`content-box`**

> The background is painted within (clipped to) the content box.

### Examples

### Using `padding-box`

#### HTML content

    <p>The yellow background extends to the inside edge of the border.</p>

#### CSS content

    p {
       border: 5px navy;
       border-style: dotted double;
       margin: 2em;
       padding: 2em;
    
       /* The yellow background extends to the inside edge of the border. */ 
       background: #F8D575;
       background-clip: padding-box;
     }

#### Output

### Using `border-box`

#### HTML content

    <p>The yellow background extends behind the border.</p>

#### CSS content

    p {
       border: 5px navy;
       border-style: dotted double;
       margin: 2em;
       padding: 2em;
    
       /* The yellow background WILL go behind the border. */
       background: #F8D575;
       background-clip: border-box;
     }

#### Output

### Using `content-box`

#### HTML content

    <p>The yellow background extends only to the edge of the content box.</p>

#### CSS content

    p {
       border: 5px navy;
       border-style: dotted double;
       margin: 2em;
       padding: 2em;
    
       /* The yellow background extends only to the edge of the content box. */
       background: #F8D575;
       background-clip: content-box;
     }

#### Output



[0]: https://developer.mozilla.org/en/docs/Web/CSS/border-style "Technical review completed."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/border-image "The border-image CSS property allows drawing an image on the borders of elements. This makes drawing complex looking widgets much simpler than it has been and removes the need for nine boxes in some cases."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-box "border-box | padding-box | content-box"
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: the previous entity may appear 0, 1 or several times, each occurence being separated from the previous one by a comma"