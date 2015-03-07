## ::selection

### Summary

The `::selection` CSS pseudo-element applies rules to the portion of a document that has been highlighted (e.g. selected with the mouse or another pointing device) by the user.

Only a small subset of CSS properties can be used in a rule using `::selection` in its selector: [`color`][0], [`background-color`][1], [`cursor`][2], [`outline`][3], [`text-decoration`][4], [`text-emphasis-color`][5] and [`text-shadow`][6]. Note that, in particular, [`background-image`][7] is ignored, like any other property.

`text-shadow` in `::selection` is supported by Chrome, Safari and Firefox 17+.

Though this pseudo-element was in drafts of CSS Selectors Level 3, it was removed during the Candidate Recommendation phase,  as it appeared that its behavior was under-specified, especially with nested elements, and interoperability wasn't achieved [(based on discussion in the W3C Style mailing list)][8].  
  
The `::selection` pseudo-element has been added again in [Pseudo-Elements Level 4][9].

### Examples

Gecko is the only engine requiring the prefix. Due to the fact that the CSS parsing rules require dropping the whole rule when encountering an invalid pseudo-element, two separate rules must be written: `::-moz-selection, ::selection {...}`. The rule would be dropped on non-Gecko browsers as `::-moz-selection` is invalid on them.

    /* draw any selected text yellow on red background */
    ::-moz-selection { color: gold;  background: red; }
    ::selection      { color: gold;  background: red; } 
    
    /* draw selected text in a paragraph white on black */
    p::-moz-selection { color: white;  background: black; }
    p::selection      { color: white;  background: black; }



[0]: https://developer.mozilla.org/en/docs/Web/CSS/color "The CSS color property sets the foreground color of an element's text content, and its decorations. It doesn't affect any other characteristic of the element; it should really be called text-color and would have been named so, save for historical reasons and its appearance in CSS Level 1."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element, either through a color value or the keyword transparent."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/cursor "The cursor CSS property specifies the mouse cursor displayed when the mouse pointer is over an element."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/outline "The CSS outline property is a shorthand property for setting one or more of the individual outline properties outline-style, outline-width and outline-color in a single declaration. In most cases the use of this shortcut is preferable and more convenient."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/text-decoration "The text-decoration CSS property is used to set the text formatting to underline, overline, line-through or blink. Underline and overline decorations are positioned under the text, line-through over it."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/text-emphasis-color "The documentation about this has not yet been written; please consider contributing!"
[6]: https://developer.mozilla.org/en/docs/Web/CSS/text-shadow "The text-shadow CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and text-decorations of the element."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/background-image "Technical review completed."
[8]: http://lists.w3.org/Archives/Public/www-style/2008Oct/0268.html "http://lists.w3.org/Archives/Public/www-style/2008Oct/0268.html"
[9]: http://dev.w3.org/csswg/css-pseudo-4/