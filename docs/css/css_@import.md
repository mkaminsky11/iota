## @import

### Summary

The `@import` [CSS][0] [at-rule][1] allows to import style rules from other style sheets. These rules must precede all other types of rules, except [`@charset`][2] rules; as it is not a [nested statement][3], it cannot be used inside [conditional group at-rules][4].

So that user agents can avoid retrieving resources for unsupported media types, authors may specify media-dependent `@import` rules. These conditional imports specify comma-separated [media queries][5] after the URI. In the absence of any media query, the import is unconditional. Specifying `all` for the medium has the same effect.

### Syntax

    @import _url_;                      _or_
    @import _url_ _list-of-media-queries_;
    

where :

**_url_**

> Is a [`<string>`][6] or a [`<uri>`][7] representing the location of the resource to import. The url may be an absolute or relative url. Note that the url needn't actually specify a file; it can just specify the package name and part, and the appropriate file will be chosen automatically (eg. **chrome://communicator/skin/**). [See here][8] for more information.

**_list-of-media-queries_**

> Is a comma-separated list of [media queries][9] conditioning the application of the css rules defined in the linked url. If the browser doesn't support any of these media types, it won't even load the linked resource.

### Examples

    @import url("fineprint.css") print;
    @import url("bluish.css") projection, tv;
    @import 'custom.css';
    @import url("chrome://communicator/skin/");
    @import "common.css" screen, projection;
    @import url('landscape.css') screen and (orientation:landscape);
    



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/CSS/At-rule "At-rule"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/@charset
[3]: https://developer.mozilla.org/en/CSS/Syntax#nested_statements "en/CSS/Syntax#nested_statements"
[4]: https://developer.mozilla.org/en/CSS/At-rule#Conditional_Group_Rules "en/CSS/At-rule#Conditional_Group_Rules"
[5]: https://developer.mozilla.org/en/CSS/Media_queries "Using CSS media queries"
[6]: https://developer.mozilla.org/en/docs/Web/CSS/string
[7]: https://developer.mozilla.org/en/docs/Web/CSS/uri
[8]: https://developer.mozilla.org/en/docs/XUL/Tutorial/The_Chrome_URL "https://developer.mozilla.org/en/docs/XUL/Tutorial/The_Chrome_URL"
[9]: https://developer.mozilla.org/en/CSS/Using_CSS_media_queries "en/CSS/Using_CSS_media_queries"