## line-height

### Summary

On block level elements, the `line-height` CSS property specifies the minimal height of line boxes within the element.

On non-replaced inline elements, `line-height` specifies the height that is used in the calculation of the line box height.

On replaced inline elements, like buttons or other input element, `line-height` has no effect. \[1\]

* _[Initial value][0]_ `normal` 
* _Applies to_ all elements. It also applies to [`::first-letter`][1] and [`::first-line`][2]. 
* _[Inherited][3]_ yes 
* _Percentages_ refer to the font size of the element itself 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ for percentage and length values, the absolute length, otherwise as specified 
* _Animatable_ yes, as a [number][6], a [length][7] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][8]: normal [|][9] [<number>][10] [|][9] [<length>][11] [|][9] [<percentage>][12]
    

    line-height: normal 
    line-height: 3.5    /* <number> values */
    line-height: 3em    /* <length> values */
    line-height: 34%    /* <percentage> values */
    
    line-height: inherit
    

### Values

**`normal`**

> Depends on the user agent. Desktop browsers (including Firefox) use a default value of roughly**` 1.2`**, depending on the element's` font-family`.

**`<number>`**

> The used value is this unitless [`<number>`][13] multiplied by the element's font size. The computed value is the same as the specified` <number>`. In most cases **this is the preferred way** to set `line-height` with no unexpected results in case of inheritance.

**`<length>`**

> The specified [`<length>`][14] is used in the calculation of the line box height. See [`<length>`][14] values for possible units.

**`<percentage>`**

> Relative to the font size of the element itself. The computed value is this percentage multiplied by the element's computed font size.  
> **Percentage** and **em** values may have unexpected results, see "Notes" section.

### Examples

    /* All rules below have the same resultant line height */
    
    div { line-height: 1.2;   font-size: 10pt }   /* number */ 
    div { line-height: 1.2em; font-size: 10pt }   /* length */ 
    div { line-height: 120%;  font-size: 10pt }   /* percentage */
    div { line-height: 12pt;  font-size: 10pt }   /* length */
    div { font: 10pt/1.2  Georgia,"Bitstream Charter",serif }

### Notes

* It is often more convenient to set` line-height `by using the [`font`][15] shortcut as stated in the "Examples" section above.

### Prefer unitless numbers for line-height values

This example shows why it is better to prefer [`<number>`][13] values for line-height instead of a [`<length>`][14].

We will use two [`<div>`][16] elements. The first, with the green border, will use a unitless line-height value. The second, with the red border, has a length line-height value.

    .green {
      line-height: 1.1;
      border: solid limegreen;
    }
    .red {
      line-height: 1.1em;
      border: solid red;
    }
    h1 {
      font-size: 30px;
    }
    .box {
      width: 18em;
      display: inline-block;
      vertical-align: top;
      font-size: 15px;
    }
    

The HTML, with our two boxes:

    <div >
     <h1>Avoid unexpected results by using unitless line-height</h1>
      length and percentage line-heights have poor inheritance behavior ...
    </div>
    
    <div >
     <h1>Avoid unexpected results by using unitless line-height</h1>
      length and percentage line-heights have poor inheritance behavior ...
    </div>
    
    <!-- The first <h1> line-height is calculated from its own font-size   (30px × 1.1) = **33px**  --> 
    <!-- The second <h1> line-height results from the red div's font-size  (15px × 1.1) = **16.5px**,  probably not what you want -->
    

Result:



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/number#Interpolation "Values of the <number> CSS data type are interpolated as real, floating-point, numbers."
[7]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/number
[11]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible values: a number followed by'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc' or 'px', like 3px, 1.5cm, -0.5em or 0"
[12]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[13]: https://developer.mozilla.org/en/docs/Web/CSS/number "The documentation about this has not yet been written; please consider contributing!"
[14]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[15]: https://developer.mozilla.org/en/docs/Web/CSS/font "The font CSS property is either a shorthand property for setting font-style, font-variant, font-weight, font-size, line-height and font-family, or a way to set the element's font to a system font, using specific keywords."
[16]: https://developer.mozilla.org/en/docs/Web/HTML/Element/div "The HTML <div> element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as <article> or <nav>) is appropriate."