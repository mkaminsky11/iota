## @page

### Summary

The `@page` CSS at-rule is used to modify some CSS properties when printing a document.****You can't change all CSS properties with `@page`. You can only change the margins, orphans, widows, and page breaks of the document. Attempts to change any other CSS properties will be ignored.

The `@page` at-rule can be accessed via the CSS object model interface [`CSSPageRule`][0].

**Note:** The W3C is discussing how to handle viewport-related [`<length>`][1] units, `vh`, `vw`, `vmin`, and `vmax`. Meanwhile do not use them within a `@page` at-rule.

### Syntax

    @page :pseudo-class {
      margin:2in;
    }
    

### Examples

Please refer to the various [pseudo-classes][2] of `@page` for examples.

* [`:first`][3]
* [`:left`][4]
* [`:right`][5]


[0]: https://developer.mozilla.org/en/docs/Web/API/CSSPageRule "CSSPageRule is an interface representing a single CSS @page rule. It implements the CSSRule interface with a type value of 6 (CSSRule.PAGE_RULE)."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/length
[2]: https://developer.mozilla.org/en/docs/CSS/Pseudo-classes "Pseudo-classes"
[3]: https://developer.mozilla.org/en/docs/Web/CSS/:first
[4]: https://developer.mozilla.org/en/docs/Web/CSS/:left
[5]: https://developer.mozilla.org/en/docs/Web/CSS/:right