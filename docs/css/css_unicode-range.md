## unicode-range

The `unicode-range` CSS descriptor sets the specific range of characters to be downloaded from a font defined by [`@font-face`][0] and made available for use on the current page.

This descriptor can be used to make a custom [`@font-face`][0] contain only the characters that need to be downloaded, saving bandwidth.

**Note:** Web developers should always include a fallback font that is acceptable in case the `unicode-range` descriptor [`@font-face`][0] is not supported and the whole at-rule being invalid.

* _Initial value_`U+0-10FFFF`
* _Usage_in a [`@font-face`][0] [at-rule][1]
* _Media_`[visual][2]`
* _CSSOM property_[`CSSFontFaceRule.unicodeRange`][3]

### Syntax

    Formal syntax: <urange>#
            where: <urange> = _single_codepoint_ | _codepoint_range_ | _wildcard_range_
    

    unicode-range: U+26               /* single_codepoint */
    unicode-range: U+0025-00FF        /* codepoint_range */
    unicode-range: U+4??              /* wildcard_range */
    unicode-range: U+0025-00FF, U+4?? /* multiple values can be separated by commas */

### Values

**_**single\_codepoint**_**

> A single Unicode character code point, for example `U+26`.

**_**codepoint\_range**_**

> A range of Unicode code points. So for example, `U+0025-00FF` means _include all characters in the range `U+0025` to `U+00FF`_.

**_**wildcard\_range**_**

> A range of Unicode code points containing wildcard characters, that is using the `'?'` character, so for example `U+4??` means _include all characters in the range `U+400` to `U+4FF`_.

### Examples

We create a simple HTML containing a single [`<div>`][4] element, including an ampersand, that we want to style with a different font. To make it obvious, we will use a sans-serif font, _Helvetica_, for the text, and a serif font, _Times New Roman_, for the ampersand.

    <div>Me & You = Us</div>

In the CSS, you can see that we are in effect defining a completely separate [`@font-face`][0] that only includes a single character in it, meaning that we don't need to download the entire font to get what we want if it is a hosted font, and if it is a local font as in this example, we can at least cut down on extra markup and styles. We could also have done this by wrapping the ampersand in a [`<span>`][5] and applying a different font just to that, but that is an extra element and rule set.

    @font-face {
      font-family: 'Ampersand';
      src: local('Times New Roman');
      unicode-range: U+26;
    }
    
    div {
      font-size: 4em;
      font-family: Ampersand, Helvetica, sans-serif;	
    }

### Reference result

![What the example should looks like if your browser supports it.](https://mdn.mozillademos.org/files/6043/Refresult.png)

### Live result



[0]: https://developer.mozilla.org/en/docs/Web/CSS/@font-face "The @font-face CSS at-rule allows authors to specify online fonts to display text on their web pages. By allowing authors to provide their own fonts, @font-face eliminates the need to depend on the limited number of fonts users have installed on their computers. The @font-face at-rule may be used not only at the top level of a CSS, but also inside any CSS conditional-group at-rule."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/At-rule "https://developer.mozilla.org/en/docs/Web/CSS/At-rule"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/media/visual "https://developer.mozilla.org/en/docs/Web/CSS/media/visual"
[3]: https://developer.mozilla.org/en/docs/Web/API/CSSFontFaceRule.unicodeRange "The documentation about this has not yet been written; please consider contributing!"
[4]: https://developer.mozilla.org/en/docs/Web/HTML/Element/div "The HTML <div> element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as <article> or <nav>) is appropriate."
[5]: https://developer.mozilla.org/en/docs/Web/HTML/Element/span "The HTML <span> element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline element."