## color\_value

### Summary

The `<color>` [CSS][0] data type denotes a color in the [sRGB color space][1]. A color can be described in any of these ways:

* using a _keyword_
* using the [RGB cubic-coordinate][2] system (via the \#-hexadecimal or the `rgb()` and `rgba()` functional notations)
* using the [HSL cylindrical-coordinate][3] system (via the `hsl()` and `hsla()` functional notations)

Note that the list of accepted color values have been extended as the specification has evolved, culminating with the latest CSS3 colors.

Associated with the color in the sRGB space, a `<color>` value also consists of an [alpha-channel][4] coordinate, _transparency_ value, indicating how the color should [composite][5] with its background color.

Though CSS color values are precisely defined, they may appear differently on different output devices. Most of them are not calibrated, and some browsers do not support output devices' [color profile][6]. Without these, color rendering may vary a lot.

**Note: ** The [WCAG 2.0][7] recommendation from the W3C strongly advises web authors not to use _color_ as the only mean to convey a specific information, action or result. Some users have problems distinguishing colors and the conveyed information may not be grasped. Of course, this doesn't prevent the usage of color, only its usage as the only mean to describe some information.

### Interpolation

Values of the `<color>` CSS data type can be interpolated in order to perform animations or for creating `<gradient>` values. In that case they are interpolated on each of their red, green, blue components, each handled as a real, floating-point number. Note that interpolation of colors happens in the [alpha-premultiplied sRGBA color space][8] to prevent unexpected grey colors to appear. In animations, the speed of the interpolation is determined by the [timing function][9] associated with the animation.

### Values

There are several ways to describe a `<color>` value.

### Color keywords

Color keywords are case-insensitive identifiers which represent a specific color, e.g. `red, blue, brown, lightseagreen`. The name describes the color, though it is mostly artificial. The list of accepted values varied a lot through the different specification:

* CSS Level 1 only accepted 16 basic colors, named the _VGA colors_ as they were taken from the set of displayable colors on [VGA][10] graphic cards.
* CSS Level 2 added the `orange` keyword.
* From the beginning, browsers accepted other colors, mostly the X11 named colors list as some early browsers were X11 applications, though with a few differences. SVG 1.0 was the first standard to formally define these keywords; CSS Colors Level 3 also formally defined these keywords. They are often referred as the _extended color keywords_, the _X11 colors_, or the _SVG colors_.

There are a few caveats to consider when using keywords:

* Except the 16 basic colors which are common with HTML, the others cannot be used in HTML. HTML will convert these unknown values with a specific algorithm which will lead to completely different colors. These keywords should only be used in SVG & CSS.
* Unknown keywords make the CSS property invalid. Invalid properties being ignored, the color will have no effect. This is a different behavior than the one of HTML.
* No keyword-defined colors in CSS have any transparency, they are plain, solid colors.
* Several keywords denote the same colors:
  * `darkgray` / `darkgrey`
  * `darkslategray` / `darkslategrey`
  * `dimgray` / `dimgrey`
  * `lightgray` / `lightgrey`
  * `lightslategray` / `lightslategrey`
  * `gray` / `grey`
  * `slategray` / `slategrey`
* Though the names of the keywords have been taken by the usual X11 color names, the color may diverge from the corresponding system color on X11 system as these are tailored for the specific hardware by the manufacturer .
Specification
Color
Keyword
RGB hex values
Live

[CSS Level 1][11]
`black`
`#000000`

`silver`
`#c0c0c0`

`gray`[\[\*\]][12]
`#808080`

`white`
`#ffffff`

`maroon`
`#800000`

`red`
`#ff0000`

`purple`
`#800080`

`fuchsia`
`#ff00ff`

`green`
`#008000`

`lime`
`#00ff00`

`olive`
`#808000`

`yellow`
`#ffff00`

`navy`
`#000080`

`blue`
`#0000ff`

`teal`
`#008080`

`aqua`
`#00ffff`

[CSS Level 2 (Revision 1)][13]
`orange`
`#ffa500`

[CSS Color Module Level 3][14]
`aliceblue`
`#f0f8ff`

`antiquewhite`
`#faebd7`

`aquamarine`
`#7fffd4`

`azure`
`#f0ffff`

`beige`
`#f5f5dc`

`bisque`
`#ffe4c4`

`blanchedalmond`
`#ffe4c4`

`blueviolet`
`#8a2be2`

`brown`
`#a52a2a`

`burlywood`
`#deb887`

`cadetblue`
`#5f9ea0`

`chartreuse`
`#7fff00`

`chocolate`
`#d2691e`

`coral`
`#ff7f50`

`cornflowerblue`
`#6495ed`

`cornsilk`
`#fff8dc`

`crimson`
`#dc143c`

`darkblue`
`#00008b`

`darkcyan`
`#008b8b`

`darkgoldenrod`
`#b8860b`

`darkgray`[\[\*\]][12]
`#a9a9a9`

`darkgreen`
`#006400`

`darkgrey`[\[\*\]][12]
`#a9a9a9`

`darkkhaki`
`#bdb76b`

`darkmagenta`
`#8b008b`

`darkolivegreen`
`#556b2f`

`darkorange`
`#ff8c00`

`darkorchid`
`#9932cc`

`darkred`
`#8b0000`

`darksalmon`
`#e9967a`

`darkseagreen`
`#8fbc8f`

`darkslateblue`
`#483d8b`

`darkslategray`[\[\*\]][12]
`#2f4f4f`

`darkslategrey`[\[\*\]][12]
`#2f4f4f`

`darkturquoise`
`#00ced1`

`darkviolet`
`#9400d3`

`deeppink`
`#ff1493`

`deepskyblue`
`#00bfff`

`dimgray`[\[\*\]][12]
`#696969`

`dimgrey`[\[\*\]][12]
`#696969`

`dodgerblue`
`#1e90ff`

`firebrick`
`#b22222`

`floralwhite`
`#fffaf0`

`forestgreen`
`#228b22`

`gainsboro`
`#dcdcdc`

`ghostwhite`
`#f8f8ff`

`gold`
`#ffd700`

`goldenrod`
`#daa520`

`greenyellow`
`#adff2f`

`grey`
`#808080`

`honeydew`
`#f0fff0`

`hotpink`
`#ff69b4`

`indianred`
`#cd5c5c`

`indigo`
`#4b0082`

`ivory`
`#fffff0`

`khaki`
`#f0e68c`

`lavender`
`#e6e6fa`

`lavenderblush`
`#fff0f5`

`lawngreen`
`#7cfc00`

`lemonchiffon`
`#fffacd`

`lightblue`
`#add8e6`

`lightcoral`
`#f08080`

`lightcyan`
`#e0ffff`

`lightgoldenrodyellow`
`#fafad2`

`lightgray`[\[\*\]][12]
`#d3d3d3`

`lightgreen`
`#90ee90`

`lightgrey`[\[\*\]][12]
`#d3d3d3`

`lightpink`
`#ffb6c1`

`lightsalmon`
`#ffa07a`

`lightseagreen`
`#20b2aa`

`lightskyblue`
`#87cefa`

`lightslategray`[\[\*\]][12]
`#778899`

`lightslategrey`[\[\*\]][12]
`#778899`

`lightsteelblue`
`#b0c4de`

`lightyellow`
`#ffffe0`

`limegreen`
`#32cd32`

`linen`
`#faf0e6`

`mediumaquamarine`
`#66cdaa`

`mediumblue`
`#0000cd`

`mediumorchid`
`#ba55d3`

`mediumpurple`
`#9370db`

`mediumseagreen`
`#3cb371`

`mediumslateblue`
`#7b68ee`

`mediumspringgreen`
`#00fa9a`

`mediumturquoise`
`#48d1cc`

`mediumvioletred`
`#c71585`

`midnightblue`
`#191970`

`mintcream`
`#f5fffa`

`mistyrose`
`#ffe4e1`

`moccasin`
`#ffe4b5`

`navajowhite`
`#ffdead`

`oldlace`
`#fdf5e6`

`olivedrab`
`#6b8e23`

`orangered`
`#ff4500`

`orchid`
`#da70d6`

`palegoldenrod`
`#eee8aa`

`palegreen`
`#98fb98`

`paleturquoise`
`#afeeee`

`palevioletred`
`#db7093`

`papayawhip`
`#ffefd5`

`peachpuff`
`#ffdab9`

`peru`
`#cd853f`

`pink`
`#ffc0cb`

`plum`
`#dda0dd`

`powderblue`
`#b0e0e6`

`rosybrown`
`#bc8f8f`

`royalblue`
`#4169e1`

`saddlebrown`
`#8b4513`

`salmon`
`#fa8072`

`sandybrown`
`#f4a460`

`seagreen`
`#2e8b57`

`seashell`
`#fff5ee`

`sienna`
`#a0522d`

`skyblue`
`#87ceeb`

`slateblue`
`#6a5acd`

`slategray`[\[\*\]][12]
`#708090`

`slategrey`[\[\*\]][12]
`#708090`

`snow`
`#fffafa`

`springgreen`
`#00ff7f`

`steelblue`
`#4682b4`

`tan`
`#d2b48c`

`thistle`
`#d8bfd8`

`tomato`
`#ff6347`

`turquoise`
`#40e0d0`

`violet`
`#ee82ee`

`wheat`
`#f5deb3`

`whitesmoke`
`#f5f5f5`

`yellowgreen`
`#9acd32`

[CSS Color Module Level 4][15]
`rebeccapurple`
`#663399`

The color `rebeccapurple` is equivalent to the color `#639`, and more information about why it was introduced can be found in this Codepen blog post by Trezy "[Honoring a Great Man][16]."

### `transparent` keyword

The `transparent` keyword represents a fully transparent color, i.e. the color seen will be the background color. Technically, it is a black with alpha channel at its minimum value and is a shortcut for `rgba(0,0,0,0)`.

**Historical Note**  
The `transparent` keyword wasn't a true color in CSS Level 2 (Revision 1). It was a specific keyword that could be used in place of a regular `<color>` value on two CSS properties: [`background`][17] and [`border`][18]. It was essentially added to allow to override an inherited solid colors.  
  
With the support of opacity through [alpha channels][4], `transparent` was redefined as a true color in CSS Colors Level 3 allowing its use in any place where a `<color>` value is required, like the [`color`][19] property.[\[\*\*\]][20]

### `currentColor` keyword

The `currentColor` keyword represents the calculated value of the element's [`color`][19] property. It allows to make the color properties inherited by properties or child's element properties that do not inherit it by default.

It can also be used on properties that inherit the calculated value of the element's [`color`][19] property and will be equivalent to the `inherit` keyword on these elements, if any.

#### Live example

The color of the line (a color-filled div) adapts to the color of its [`color`][19] property, inherited from its parent.

##### Live example 1

    <div style="color:darkred">
     The color of this text is the same as the one of the line:
      <div style="background:currentcolor; height:1px"></div>
     Some more text.
    </div> 
    

##### Live example 2

    <div style="color:blue">
     The color of this text is the same as the one of the line:
      <div style="background:currentcolor; height:1px"></div>
     Some more text.
    </div> 

### `rgb()`

Colors can be defined using the red-green-blue (RGB) model in two ways:

**Hexadecimal notation `#RRGGBB` and `#RGB`**

> * "`#`", followed by six hexadecimal characters (0-9, A-F).
> * "`#`", followed by three hexadecimal characters (0-9, A-F).
> The three-digit RGB notation (`#RGB`) and the six-digit form (`#RRGGBB`) are equal.  
> For example, `#f03` and `#ff0033` represent the same color.

**Functional Notation `rgb(R,G,B)`**

> "`rgb`", followed by three [`<integer>`][21] or three [`<percentage>`][22] values.  
> The integer number 255 corresponds to 100%, and to F or FF in the hexadecimal notation.

    /* These examples all specify the same RGB color: */
     
     #f03
     #F03
     #ff0033
     #FF0033
     rgb(255,0,51)
     rgb(255, 0, 51)
     rgb(255, 0, 51.2) /* ERROR! Don't use fractions, use integers */ 
     rgb(100%,0%,20%)
     rgb(100%, 0%, 20%)
     rgb(100%, 0, 20%) /* ERROR! Don't mix up integer and percentage notation */
    

### `hsl()`

Colors also can be defined the Hue-saturation-lightness model (HSL) using the `hsl()` functional notation.  The advantage of HSL over RGB is that it is far more intuitive: you can guess at the colors you want, and then tweak. It is also easier to create sets of matching colors (by keeping the hue the same and varying the lightness/darkness, and saturation).

**Hue **is represented as an angle of the color circle (i.e. the rainbow represented in a circle). This angle is given as a unitless [`<number>`][23]. By definition **red=0=360**, and the other colors are spread around the circle, so **green=120**, **blue=240**, etc. As an angle, it implicitly wraps around such that -120=240 and 480=120\.

Saturation and lightness are represented as percentages.  
`100%` is full **saturation**, and`0%` is a shade of grey.  
`100%` **lightness** is white, `0%` lightness is black, and `50%` lightness is "normal".

    hsl(0,  100%,50%)    /* red */   
    hsl(30, 100%,50%)                 
    hsl(60, 100%,50%)                
    hsl(90, 100%,50%)                
    hsl(120,100%,50%)    /* green */ 
    hsl(150,100%,50%)                
    hsl(180,100%,50%)                
    hsl(210,100%,50%)                
    hsl(240,100%,50%)    /* blue */  
    hsl(270,100%,50%)                
    hsl(300,100%,50%)                
    hsl(330,100%,50%)                
    hsl(360,100%,50%)    /* red */   
    
    hsl(120,100%,25%)    /* dark green */  
    hsl(120,100%,50%)    /* green */       
    hsl(120,100%,75%)    /* light green */ 
    
    hsl(120,100%,50%)    /* green */  
    hsl(120, 67%,50%)                 
    hsl(120, 33%,50%)                 
    hsl(120,  0%,50%)                 
    
    hsl(120, 60%,70%)    /* pastel green */ 
    

### `rgba()`

Colors can be defined in the Red-green-blue-alpha model (RGBa) using the `rgba()` functional notation. RGBa extends the RGB color model to include the alpha channel, allowing specification of the opacity of a color.  
**a** means opacity: 0=transparent; 1=opaque;

    rgba(255,0,0,0.1)    /* 10% opaque red */  
    rgba(255,0,0,0.4)    /* 40% opaque red */  
    rgba(255,0,0,0.7)    /* 70% opaque red */  
    rgba(255,0,0,  1)    /* full opaque red */ 
    

### `hsla()`

Colors can be defined in the hue-saturation-lightness-alpha model (HSLa) using the `hsla()` functional notation. HSLa extends the HSL color model to include the alpha channel, allowing specification of the opacity of a color.  
**a** means opacity: 0=transparent; 1=opaque;

    hsla(240,100%,50%,0.05)   /* 5% opaque blue */   
    hsla(240,100%,50%, 0.4)   /* 40% opaque blue */  
    hsla(240,100%,50%, 0.7)   /* 70% opaque blue */  
    hsla(240,100%,50%,   1)   /* full opaque blue */ 
    

### System Colors

Not all system colors are supported on all systems. __ for use on public web pages.

**ActiveBorder**

> Active window border.

**ActiveCaption**

> Active window caption.  Should be used with CaptionText foreground color.

**AppWorkspace**

> Background color of multiple document interface.

**Background**

> Desktop background.

**ButtonFace**

> Face background color for 3-D elements that appear 3-D due to one layer of surrounding border.  Should be used with ButtonText foreground color.

**ButtonHighlight**

> The color of the border facing the light source for 3-D elements that appear 3-D due to one layer of surrounding border.

**ButtonShadow**

> The color of the border away from the light source for 3-D elements that appear 3-D due to one layer of surrounding border.

**ButtonText**

> Text on push buttons.  Should be used with ButtonFace or ThreeDFace background color.

**CaptionText**

> Text in caption, size box, and scrollbar arrow box.  Should be used with ActiveCaption background color.

**GrayText**

> Grayed (disabled) text.

**Highlight**

> Item(s) selected in a control.  Should be used with HighlightText foreground color.

**HighlightText**

> Text of item(s) selected in a control.  Should be used with Highlight background color.

**InactiveBorder**

> Inactive window border.

**InactiveCaption**

> Inactive window caption.  Should be used with InactiveCaptionText foreground color.

**InactiveCaptionText**

> Color of text in an inactive caption.  Should be used with InactiveCaption background color.

**InfoBackground**

> Background color for tooltip controls.  Should be used with InfoText foreground color.

**InfoText**

> Text color for tooltip controls.  Should be used with InfoBackground background color.

**Menu**

> Menu background.  Should be used with MenuText or -moz-MenuBarText foreground color.

**MenuText**

> Text in menus.  Should be used with Menu background color.

**Scrollbar**

> Scroll bar gray area.

**ThreeDDarkShadow**

> The color of the darker (generally outer) of the two borders away from the light source for 3-D elements that appear 3-D due to two  
> concentric layers of surrounding border.

**ThreeDFace**

> The face background color for 3-D elements that appear 3-D due to two concentric layers of surrounding border.  Should be used with ButtonText foreground color.

**ThreeDHighlight**

> The color of the lighter (generally outer) of the two borders facing the light source for 3-D elements that appear 3-D due to two  
> concentric layers of surrounding border.

**ThreeDLightShadow**

> The color of the darker (generally inner) of the two borders facing the light source for 3-D elements that appear 3-D due to two  
> concentric layers of surrounding border.

**ThreeDShadow**

> The color of the lighter (generally inner) of the two borders away from the light source for 3-D elements that appear 3-D due to two  
> concentric layers of surrounding border.

**Window**

> Window background.  Should be used with WindowText foreground color.

**WindowFrame**

> Window frame.

**WindowText**

> Text in windows.  Should be used with Window background color.

### Mozilla System Color Extensions

**-moz-ButtonDefault**

> The border color that goes around buttons that represent the default action for a dialog box.

**-moz-ButtonHoverFace**

> The background color of a button that the mouse pointer is over (which would be ThreeDFace or ButtonFace when the mouse pointer is not over it).  Should be used with the -moz-ButtonHoverText foreground color.

**-moz-ButtonHoverText**

> The text color of a button that the mouse pointer is over (which would be ButtonText when the mouse pointer is not over it).  Should be used with the -moz-ButtonHoverFace background color.

**-moz-CellHighlight**

> Background color for selected item in a tree widget.  Should be used with -moz-CellHighlightText foreground color.  See also -moz-html-CellHighlight.

**-moz-CellHighlightText**

> Text color for a selected item in a tree.  Should be used with -moz-CellHighlight background color.  See also -moz-html-CellHighlightText.

**-moz-Combobox**

> Background color for comboboxes.  Should be used with -moz-ComboboxText foreground color.  In versions prior to 1.9.2, use -moz-Field instead.

**-moz-ComboboxText**

> Background Text color for comboboxes.  Should be used with -moz-ComboboxText foreground color.  In versions prior to 1.9.2, use -moz-FieldText instead.

**-moz-Dialog**

> Background color for dialog boxes.  Should be used with -moz-DialogText foreground color.

**-moz-DialogText**

> Text color for dialog boxes.  Should be used with -moz-Dialog background color.

**-moz-dragtargetzone**

**-moz-EvenTreeRow**

> Background color for even-numbered rows in a tree.  Should be used with -moz-FieldText foreground color.  In Gecko versions prior to 1.9, use -moz-Field.  See also -moz-OddTreeRow.

**-moz-Field**

> textfield background color.  Should be used with -moz-FieldText foreground color.

**-moz-FieldText**

> textfield foreground color.  Should be used with -moz-Field, -moz-EvenTreeRow, or -moz-OddTreeRow background colors.

**-moz-html-CellHighlight**

> Background color for highlighted item in HTML select.  Should be used with -moz-html-CellHighlightText foreground color.  Prior to Gecko 1.9, use -moz-CellHighlight.

**-moz-html-CellHighlightText**

> Background color for highlighted item in HTML select.  Should be used with -moz-html-CellHighlight background color.  Prior to Gecko 1.9, use -moz-CellHighlightText.

**-moz-mac-accentdarkestshadow**

**-moz-mac-accentdarkshadow**

**-moz-mac-accentface**

**-moz-mac-accentlightesthighlight**

**-moz-mac-accentlightshadow**

**-moz-mac-accentregularhighlight**

**-moz-mac-accentregularshadow**

**-moz-mac-chrome-active**

> 

**-moz-mac-chrome-inactive**

> 

**-moz-mac-focusring**

**-moz-mac-menuselect**

**-moz-mac-menushadow**

**-moz-mac-menutextselect**

**-moz-MenuHover**

> Background color for hovered menu item.  Often similar to Highlight.  Should be used with -moz-MenuHoverText or -moz-MenuBarHoverText foreground color.

**-moz-MenuHoverText**

> Foreground color for hovered menu item.  Often similar to HighlightText.  Should be used with -moz-MenuHover background color.

**-moz-MenuBarText**

> Foreground color for text in menu bars.  Often similar to MenuText.  Should be used on top of Menu background.

**-moz-MenuBarHoverText**

> Foreground color for hovered text in menu bars.  Often similar to -moz-MenuHoverText.  Should be used on top of -moz-MenuHover background.

**-moz-nativehyperlinktext**

> default platform hyperlink color

**-moz-OddTreeRow**

> Background color for odd-numbered rows in a tree.  Should be used with -moz-FieldText foreground color.  In Gecko versions prior to 1.9, use -moz-Field.  See also -moz-EvenTreeRow.

**-moz-win-communicationstext**

> Should be used for text in objects with appearance:-moz-win-communications-toolbox.

**-moz-win-mediatext**

> Should be used for text in objects with appearance:-moz-win-media-toolbox.

### Mozilla Color Preference Extensions

**-moz-activehyperlinktext**

> User's preference for text color of active links.  Should be used against default document background.

****

**-moz-default-background-color**

> User's preference for document background-color.

****

**-moz-default-color**

> User's preference for text color.

**-moz-hyperlinktext**

> User's preference for text color of unvisited links.  Should be used against default document background.

**-moz-visitedhyperlinktext**

> User's preference for text color of visited links.  Should be used against default document background.



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: http://en.wikipedia.org/wiki/SRGB "http://en.wikipedia.org/wiki/SRGB"
[2]: http://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation "http://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation"
[3]: http://en.wikipedia.org/wiki/HSL_and_HSV "http://en.wikipedia.org/wiki/HSL_and_HSV"
[4]: http://en.wikipedia.org/wiki/Alpha_compositing "http://en.wikipedia.org/wiki/Alpha_compositing"
[5]: http://www.w3.org/TR/2003/REC-SVG11-20030114/masking.html#SimpleAlphaBlending "http://www.w3.org/TR/2003/REC-SVG11-20030114/masking.html#SimpleAlphaBlending"
[6]: http://en.wikipedia.org/wiki/ICC_profile "http://en.wikipedia.org/wiki/ICC_profile"
[7]: http://www.w3.org/TR/WCAG/#visual-audio-contrast "http://www.w3.org/TR/WCAG/#visual-audio-contrast"
[8]: http://www.gimp.org/docs/plug-in/appendix-alpha.html "http://www.gimp.org/docs/plug-in/appendix-alpha.html"
[9]: https://developer.mozilla.org/en/CSS/timing-function "timing-function"
[10]: http://en.wikipedia.org/wiki/VGA "http://en.wikipedia.org/wiki/VGA"
[11]: http://www.w3.org/TR/CSS1/ "The 'CSS Level 1' specification"
[12]: #1 "color_value#1"
[13]: http://www.w3.org/TR/CSS2/ "The 'CSS Level 2 (Revision 1)' specification"
[14]: http://dev.w3.org/csswg/css3-color/ "The 'CSS Color Module Level 3' specification"
[15]: http://dev.w3.org/csswg/css-color/ "The 'CSS Color Module Level 4' specification"
[16]: http://codepen.io/trezy/blog/honoring-a-great-man
[17]: https://developer.mozilla.org/en/docs/Web/CSS/background "The background CSS property is a shorthand for setting the individual background values in a single place in the style sheet. background can be used to set the values for one or more of: background-clip, background-color, background-image, background-origin, background-position, background-repeat, background-size, and background-attachment."
[18]: https://developer.mozilla.org/en/docs/Web/CSS/border "The border CSS property is a shorthand property for setting the individual border property values in a single place in the style sheet. border can be used to set the values for one or more of: border-width, border-style, border-color."
[19]: https://developer.mozilla.org/en/docs/Web/CSS/color "The CSS color property sets the foreground color of an element's text content, and its decorations. It doesn't affect any other characteristic of the element; it should really be called text-color and would have been named so, save for historical reasons and its appearance in CSS Level 1."
[20]: #2
[21]: https://developer.mozilla.org/en/docs/Web/CSS/integer "The documentation about this has not yet been written; please consider contributing!"
[22]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"
[23]: https://developer.mozilla.org/en/docs/Web/CSS/number "The documentation about this has not yet been written; please consider contributing!"