## @document

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `@document` rule is an at-rule that restricts the style rules contained within it based on the URL of the document. It is designed primarily for user style sheets. A `@document` rule can specify one or more matching functions. If any of the functions apply to a URL, the rule will take effect on that URL.

The main use case is for user-defined stylesheets, though this at-rule can be used on author-defined stylesheets too.

The functions available are:

* `url()`, which matches an exact URL
* `url-prefix()`, which matches if the document URL starts with the value provided
* `domain()`, which matches if the document URL is on the domain provided (or a subdomain of it)
* `regexp()`, which matches if the document URL is matched by the [regular expression][1] provided. The expression must match the entire URL.

### Syntax

The values provided to the `url()`, `url-prefix()`, and `domain()` functions can optionally be enclosed by single or double quotes. The values provided to the `regexp()` function **must** be enclosed in quotes.

Escaped values provided to the `regexp()` function must additionally be escaped from the CSS. For example, a `.` (period) matches any character in regular expressions. To match a literal period, you would first need to escape it using regular expression rules (to `\.`), then escape that string using CSS rules (to `\\.`).

### Examples

    @document url(http://www.w3.org/),
                   url-prefix(http://www.w3.org/Style/),
                   domain(mozilla.org),
                   regexp("https:.*")
    {
      /* CSS rules here apply to:
         + The page "http://www.w3.org/".
         + Any page whose URL begins with "http://www.w3.org/Style/"
         + Any page whose URL's host is "mozilla.org" or ends with
           ".mozilla.org"
         + Any page whose URL starts with "https:" */
    
      /* make the above-mentioned pages really ugly */
      body { color: purple; background: yellow; }
    }
    



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/JavaScript/Guide/Regular_Expressions "https://developer.mozilla.orghttps://developer.mozilla.org/en/JavaScript/Guide/Regular_Expressions"