## uri

### Summary

The `<uri>` [CSS][0] data type denotes a pointer to a resource. It has no proper syntax and can only be expressed through the `url()` functional notation.

**URI or URL?**  
  
There is a difference between a [URI][1] and a [URL][2]. A URL describes the location of the resource, the URI describes an id of the resource . A URI may be a location, a URL, or a name, a [URN][3], of a resource.  
  
In CSS Level 1, the `url()` functional notation was introduced to describe... URL, i.e. locations (a `<url>` CSS data type, though it wasn't explicitly defined that way).  
  
In CSS Level 2, the same functional notation was extended to describe any URI, being a URL or URN. This led to the confusing fact that `url()` was used to create a `<uri>` CSS data type. Not only was this confusing, but URN are almost never used in the CSS usual case.  
  
To fix this, CSS Level 3 came back to the initial definition, this time explicitly defined. The functional notation `url() `denotes a `<url>` CSS data type and no more the more generic `<uri>` CSS data type.  
  
Remark that these semantic details doesn't change much for a web author, or the implementation details of the data type.

Many [CSS properties][4] take a URL as value, such as [`background-image`][5], [`cursor`][6], [`@font-face`][7], [`list-style`][8] etc.  

### The url() functional notation

The URI may be quoted by single or double quotes. Relative URIs are allowed and are relative to the URL of stylesheet (and not to the URL of the web page).

### Syntax

     <a_css_property>:  url("http://mysite.example.com/mycursor.png")
    
     <a_css_property>:  url(http://mysite.example.com/mycursor.png)
    

**Note:** Control characters above 0x7e are no longer allowed in unquoted url() notation starting in Firefox 15\. See [bug 752230][9] for more details.

### Examples

    .topbanner { background: url("topbanner.png") #00D no-repeat fixed; }
    

    ul { list-style: square url(http://www.example.com/redball.png) }
    



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: http://en.wikipedia.org/wiki/Uniform_Resource_Identifier "http://en.wikipedia.org/wiki/Uniform_Resource_Identifier"
[2]: http://en.wikipedia.org/wiki/Uniform_Resource_Locator "http://en.wikipedia.org/wiki/Uniform_Resource_Locator"
[3]: http://en.wikipedia.org/wiki/Uniform_Resource_Name "http://en.wikipedia.org/wiki/Uniform_Resource_Name"
[4]: https://developer.mozilla.org/en/CSS_Reference "en/CSS_Reference"
[5]: https://developer.mozilla.org/en/docs/Web/CSS/background-image "The CSS background-image property sets one or several background images for an element. The images are drawn on stacking context layers on top of each other. The first layer specified is drawn as if it is closest to the user. The borders of the element are then drawn on top of them, and the background-color is drawn beneath them."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/cursor "The cursor CSS property specifies the mouse cursor displayed when the mouse pointer is over an element."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/@font-face "The @font-face CSS at-rule allows authors to specify online fonts to display text on their web pages. By allowing authors to provide their own fonts, @font-face eliminates the need to depend on the limited number of fonts users have installed on their computers. The @font-face at-rule may be used not only at the top level of a CSS, but also inside any CSS conditional-group at-rule."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/list-style "The list-style CSS property is a shorthand property for setting list-style-type, list-style-image and list-style-position."
[9]: https://bugzilla.mozilla.org/show_bug.cgi?id=752230 "FIXED: control characters above 0x7e should not be allowed in unquoted url()"