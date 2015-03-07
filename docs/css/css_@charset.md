## @charset

### Summary

The `@charset` [CSS][0] [at-rule][1] specifies the character encoding used in the style sheet. It must be the first element in the style sheet and not be preceded by any character; as it is not a [nested statement][2], it cannot be used inside [conditional group at-rules][3]. If several `@charset` at-rules are defined, only the first one is used, and it cannot be used inside a `style` attribute on an HTML element or inside the [`<style>`][4] element where the character set of the HTML page is relevant.

This at-rule is useful when using non-ASCII characters in some CSS properties, like [`content`][5].

As there are several ways to define the character encoding of a style sheet, the browser will try the following methods in the following order (and stop as soon as one yields a result) :

1. The value of the [Unicode byte-order][6] character placed at the beginning of the file.
2. The value given by the `charset` attribute of the `Content-Type:` HTTP header or the equivalent in the protocol used to serve the style sheet.
3. The `@charset` CSS at-rule.
4. Use the character encoding defined by the referring document: the `charset` attribute of the [`<link>`][7] element. This method is obsoleted in HTML5 and must not be used.
5. Assume that the document is UTF-8

### Syntax

    @charset _charset_;
    

where :

**_charset_**

> Is a [`<string>`][8] denoting the character encoding to be used. It must be the name of a web-safe character encoding defined in the [IANA-registry][9]. If several names are associated with an encoding, only the one marked with _preferred_ must be used.

### Examples

    @charset "UTF-8";       /* Set the encoding of the style sheet to Unicode UTF-8 */
    @charset 'iso-8859-15'; /* Set the encoding of the style sheet to Latin-9 (Western European languages, with euro sign) */
     @charset "UTF-8";      /* Invalid, there is a character (a space) before the at-rule */
    @charset UTF-8;         /* Invalid, without ' or ", the charset is not a CSS [<string>][8] */
    



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/CSS/At-rule "At-rule"
[2]: https://developer.mozilla.org/en/CSS/Syntax#nested_statements "en/CSS/Syntax#nested_statements"
[3]: https://developer.mozilla.org/en/CSS/At-rule#Conditional_Group_Rules "en/CSS/At-rule#Conditional_Group_Rules"
[4]: https://developer.mozilla.org/en/docs/Web/HTML/Element/style "The HTML <style> element contains style information for a document, or a part of document. The specific style information is contained inside of this element, usually in the CSS."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/content "The content CSS property is used with the ::before and ::after pseudo-elements to generate content in an element. Objects inserted using the content property are anonymous replaced elements."
[6]: http://en.wikipedia.org/wiki/Byte_order_mark "http://en.wikipedia.org/wiki/Byte_order_mark"
[7]: https://developer.mozilla.org/en/docs/Web/HTML/Element/link "The HTML Link Element (<link>) specifies relationships between the current document and an external resource. Possible uses for this element include defining a relational framework for navigation. This Element is most used to link to style sheets."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/string "The documentation about this has not yet been written; please consider contributing!"
[9]: http://www.iana.org/assignments/character-sets