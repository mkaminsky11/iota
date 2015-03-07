## @namespace

### Summary

The `@namespace` rule is an at-rule that defines the [XML namespaces][0] that will be used in the style sheet. The namespaces defined can be used to restrict the [universal][1], [type][2], and [attribute][3] selectors to only select elements under that namespace. The `@namespace` rule is generally only useful when dealing with an XML document containing multiple namespaces - for example, an XHTML document with SVG embedded.

The `@namespace` rule can be used to define the **default namespace** for the style sheet. When a default namespace is defined, all universal and type selectors (but not attribute selectors, see note below) apply only to elements on that namespace. Any `@namespace` rules must follow all `@charset` and `@import` rules and precede all other non-ignored at-rules and style rules in a style-sheet.

The `@namespace` rule can also be used to define a **namespace prefix** for a style sheet. When a universal, type, or attribute selector is prefixed with a namespace prefix, then that selector only matches if the namespace (and not just the name in the case of type or attribute selectors) of the element or attribute matches.

When using non-XML HTML, known elements will be automatically be assigned namespaces. This means that HTML elements will act as though they are on the XHTML namespace, even if there is no xmlns attribute anywhere in the HTML document.

Note that in XML, unless a prefix is defined directly on an attribute, that attribute has no namespace. In other words, attributes do not inherit the namespace of the element they're on. To match this behaviour, the default namespace in CSS does not apply to attribute selectors.

### Syntax

For a default namespace:

    @namespace url(_XML-namespace-URL_);

For a namespace prefix:

    ​@namespace _prefix_ url(_XML-namespace-URL_);

### Examples

    @namespace url(http://www.w3.org/1999/xhtml);
    @namespace svg url(http://www.w3.org/2000/svg);
    
    /* This matches all XHTML <a> elements, as XHTML is the default namespace */
    a {}
    
    /* This matches all SVG <a> elements */
    svg|a {}
    
    /* This matches both XHTML and SVG <a> elements */
    *|a {}
    



[0]: https://developer.mozilla.org/en/docs/Namespaces
[1]: https://developer.mozilla.org/en/docs/Web/CSS/Universal_selectors
[2]: https://developer.mozilla.org/en/docs/Web/CSS/Type_selectors
[3]: https://developer.mozilla.org/en/docs/Web/CSS/Attribute_selectors