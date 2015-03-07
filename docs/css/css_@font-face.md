## @font-face

### Summary

The `@font-face` [CSS][0] [at-rule][1] allows authors to specify online fonts to display text on their web pages. By allowing authors to provide their own fonts, `@font-face` eliminates the need to depend on the limited number of fonts users have installed on their computers. The `@font-face` at-rule may be used not only at the top level of a CSS, but also inside any [CSS conditional-group at-rule][2].

### Syntax

    @font-face {
                  [ font-family: <family-name>; ]?
               || [ src: [ <uri> [format(<string>#)]? | <font-face-name> ]#; ]?
               || [ unicode-range: <urange>#; ]?
               || [ font-variant: <font-variant>; ]?
               || [ font-feature-settings: normal|<feature-tag-value>#; ]?
               || [ font-stretch: <font-stretch>; ]?
               || [ font-weight: <weight>; ]?
               || [ font-style: <style>; ]?
    }
    

### Descriptors

**`family-name`**

> Specifies a name that will be used as the font face value for font properties. ( i.e. font-family: <family-name\>; )

**`src`**

> URL for the remote font file location, or the name of a font on the user's computer in the form `local("Font Name")`. You can specify a font on the user's local computer by name using the `local()` syntax. If that font isn't found, other sources will be tried until one is found.

**`font-variant`**

> A [`font-variant`][3] value.

**`font-stretch`**

> A [`font-stretch`][4] value.

**`font-weight`**

> A [`font-weight`][5] value.

**`font-style`**

> A [`font-style`][6] value.

**[`unicode-range`][7]**

> The range of unicode code points defined in the font-face rule.

### Examples

This example simply specifies a downloadable font to use, applying it to the entire body of the document.

[View the live example][8]

    <html>
    <head>
      <title>Web Font Sample</title>
      <style type="text/css" media="screen, print">
        @font-face {
          font-family: "Bitstream Vera Serif Bold";
          src: url("https://mdn.mozillademos.org/files/2468/VeraSeBd.ttf");
        }
        
        body { font-family: "Bitstream Vera Serif Bold", serif }
      </style>
    </head>
    <body>
      This is Bitstream Vera Serif Bold.
    </body>
    </html>
    

In this example, the user's local copy of "Helvetica Neue Bold" is used; if the user doesn't have that font installed (two different names are tried), then the downloadable font named "MgOpenModernaBold.ttf" is used instead:

    @font-face {
      font-family: MyHelvetica;
      src: local("Helvetica Neue Bold"),
           local("HelveticaNeue-Bold"),
           url(MgOpenModernaBold.ttf);
      font-weight: bold;
    }
    

### Notes

* Web fonts are subject to the same domain restriction (font files must be on the same domain as the page using them), unless [HTTP access controls][9] are used to relax this restriction.
* Because there are no defined MIME types for TrueType, OpenType, and Web Open File Format (WOFF) fonts, the MIME type of the file specified is not considered.
* When Gecko displays a page that uses web fonts, it initially displays text using the best CSS fallback font available on the user's computer while it waits for the web font to finish downloading.  As each web font finishes downloading, Gecko updates the text that uses that font.  This allows the user to read the text on the page more quickly.


[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/At-rule "At-rule"
[2]: https://developer.mozilla.org/en/docs/CSS/At-rule#Conditional_Group_Rules "CSS/At-rule#Conditional_Group_Rules"
[3]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant "The font-variant CSS property selects a normal, or small-caps face from a font family. Setting the CSS Level 2 (Revision 1) values of the  font-variant property, that is normal or small-caps, is also possible by using the font shorthand."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/font-stretch "The font-stretch CSS property selects a normal, condensed, or expanded face from a font."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/font-weight "The font-weight CSS property specifies the weight or boldness of the font. However, some fonts are not available in all weights; some are available only on normal and bold."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/font-style "The font-style CSS property allows italic or oblique faces to be selected within a font-family."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/unicode-range "The unicode-range CSS descriptor sets the specific range of characters to be downloaded from a font defined by @font-face and made available for use on the current page."
[8]: https://mdn.mozillademos.org/files/7775/webfont-sample.html "/@api/deki/files/2935/=webfont-sample.html"
[9]: https://developer.mozilla.org/en/docs/HTTP_access_control "HTTP access control"