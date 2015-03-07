## :dir

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `:dir` CSS [pseudo-class][1] matches elements based on the directionality of the text contained in it. In HTML, the direction is determined by the `[dir][2]` attribute. For other document types there may be other document methods for determining the language.

Note that the usage of the pseudo-class `:dir()` is not equivalent of using the `[dir=…]` attribute selectors. The latter matches a value of the `[dir][2]` and doesn't match when no attribute is set, even if in that case the element inherits the value of its parent; similarly `[dir=rtl]` or `[dir=ltr]` won't match the `auto` value that can be used on the `dir` attribute. In the opposite, `:dir()` will match the value calculated by the UA, being inherited or the `auto` value.

Also `:dir()` considers only the _semantic_ value of the directionality, the one defined in the document, most of the time in HTML. It won't consider _styling_ directionality, the one set by CSS properties like [`direction`][3] which are purely stylistic.

### Syntax

    element:dir(_directionality_) { _style properties_ } where _directionality_ is ltr or rtl.
    

### Examples

    <div dir="rtl">
      <span>test1</span>
      <div dir="ltr">test2
        <div dir="auto">עִבְרִית</div>
      </div>
    </div>
    

In this example `:dir(rtl)` will match the top level div, span containing `test1`, and the div with the hebrew characters. `:dir(ltr)` will match the div containing `test2.`


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"
[2]: https://developer.mozilla.org/en/docs/Web/HTML/Element/html#attr-dir
[3]: https://developer.mozilla.org/en/docs/Web/CSS/direction "Set the direction CSS property to match the direction of the text: rtl for languages written from right-to-left (like Hebrew or Arabic) text and ltr for other scripts. This is typically done as part of the document (e.g., using the dir attribute in HTML) rather than through direct use of CSS."