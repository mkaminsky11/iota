## text-rendering

### Summary

The `text-rendering` CSS property provides information to the rendering engine about what to optimize for when rendering text. The browser makes trade-offs among speed, legibility, and geometric precision. The text-rendering property is an SVG property that is not defined in any CSS standard. However, Gecko and WebKit browsers let you apply this property to HTML and XML content on Windows, Mac OS X and Linux. 

One very visible effect is:` optimizeLegibility, `which enables ligatures (ff, fi, fl etc.) in text smaller than 20px for some fonts (for example, Microsoft's_Calibri, Candara, Constantia and Corbel_ or the _DejaVu_ font family).

* _[Initial value][0]_ auto
* _Applies to_ text elements
* _[Inherited][1]_ yes
* _Media_ [`visual`][2]
* _[Computed value][3]_ ?

### Syntax

    Formal grammar:  auto | optimizeSpeed | optimizeLegibility | geometricPrecision

    text-rendering: auto
    text-rendering: optimizeSpeed
    text-rendering: optimizeLegibility
    text-rendering: geometricPrecision
    
    text-rendering: inherit
    

### Values

**`auto`**

> The browser makes educated guesses about when to optimize for speed, legibility, and geometric precision while drawing text. For differences in how this value is interpreted by the browser, see the compatibility table.

**`optimizeSpeed`**

> The browser emphasizes rendering speed over legibility and geometric precision when drawing text. It disables kerning and ligatures.

**`optimizeLegibility`**

> The browser emphasizes legibility over rendering speed and geometric precision. This enables kerning and optional ligatures.

**`geometricPrecision`**

> The browser emphasizes geometric precision over rendering speed and legibility. Certain aspects of fonts---such as kerning---don't scale linearly, so geometricPrecision can make text using those fonts look good.
> 
> In SVG, when text is scaled up or down, browsers calculate the final size of the text (which is the specified font size and the applied scale) and request a font of that computed size from the platform's font system. But if you request a font size of, say, 9 with a scale of 140%, the resulting font size of 12.6 doesn't explicitly exist in the font system, so the browser rounds the font size to 12 instead. This results in stair-step scaling of text.
> 
> But the `geometricPrecision` property---when fully supported by the rendering engine---lets you scale your text fluidly. For large scale factors, you might see less-than-beautiful text rendering, but the size is what you would expect---neither rounded up nor down to the nearest font size supported by Windows or Linux.
> 
> WebKit precisely applies the specified value, but Gecko treats the value the same as `optimizeLegibility`.
> 

### Examples

    /* make sure all fonts in the HTML document display in all its glory,
       but avoid inadequate ligatures in class foo elements */
    
    body  { text-rendering: optimizeLegibility; }
    .foo  { text-rendering: optimizeSpeed; }

#### Live Example
CSS code
Kerning
Ligatures

font: 19.9px 'DejaVu Serif',Constantia;
LYoWAT
ff fi fl ffl

font: 20px 'DejaVu Serif',Constantia;
LYoWAT
ff fi fl ffl

font: 3em 'DejaVu Serif',Constantia;  
text-rendering: optimizeSpeed;
LYoWAT
ff fi fl ffl

font: 3em 'Dejavu Serif',Constantia;  
text-rendering: optimizeLegibility;
LYoWAT
ff fi fl ffl

### Gecko Notes

The 20px threshold value of the` auto `keyword can be changed by changing the `browser.display.auto_quality_min_font_size` preference.

The `optimizeSpeed` option has no effect on Gecko 2.0 (Firefox 4 / Thunderbird 3.3 / SeaMonkey 2.1), because the standard code for text rendering is already very fast and there is not a faster code path at this time. See [bug 595688][4] for details.


[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/Web/CSS/Media/Visual "The documentation about this has not yet been written; please consider contributing!"
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://bugzilla.mozilla.org/show_bug.cgi?id=595688 "text-rendering: optimizeSpeed; doesn't work"