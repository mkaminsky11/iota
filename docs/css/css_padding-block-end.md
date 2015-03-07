## padding-block-end

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

The `padding-block-end` [CSS][1] property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the [`padding-top`][2], [`padding-right`][3], [`padding-bottom`][4], or [`padding-left`][5] property depending on the values defined for [`writing-mode`][6], [`direction`][7], and [`text-orientation`][8].

It relates to [`padding-block-start`][9], [`padding-inline-start`][10], and [`padding-inline-end`][11], which define the other paddings of the element.

* _[Initial value][12]_ `0` 
* _Applies to_ all elements 
* _[Inherited][13]_ no 
* _Percentages_ logical-width of containing block 
* _Media_ [`visual`][14] 
* _[Computed value][15]_ length 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][16]: [<'padding-left'>][17]
    

    padding-block-end: 10px;      /* An absolute length */
    padding-block-end: 1em;       /* A length relative to the text size */
    padding-block-end: 5%;        /* A padding relative to the block container's width */
    padding-block-end: auto;
    
    padding-block-end: inherit;
    

### Values

The `padding-block-end` property takes the same values as the [`padding-left`][5] property.

### Example

### HTML Content

    <div>
      <p >Example text</p>
    </div>
    

### CSS Content

    div {
      background-color: yellow;
      width: 120px;
      height: 120px;
    }
    
    .exampleText {
      writing-mode: vertical-lr;
      padding-block-end: 20px;
      background-color: #C8C800;
    }

### Specification
Specification
Status
Comment

[CSS Logical Properties Level 1  
The definition of 'padding-block-end' in that specification.][18]
Editor's Draft
Initial definition

### Browser compatibility

* Desktop
* Mobile

Feature
Chrome
Firefox (Gecko)
Internet Explorer
Opera
Safari (WebKit)

Basic support
Not supported
[38.0][19] (38.0)[\[1\]][20]
Not supported
Not supported
Not supported

Feature
Android
Firefox Mobile (Gecko)
IE Phone
Opera Mobile
Safari Mobile

Basic support
Not supported
38.0 (38.0)[\[1\]][20]
Not supported
Not supported
Not supported

\[1\] Available since Gecko 38, but behind the preference `layout.css.vertical-text.enabled`, disabled by default.

### See also

* The mapped physical properties: [`padding-top`][2], [`padding-right`][3], [`padding-bottom`][4], and [`padding-left`][5]
* [`writing-mode`][6], [`direction`][7], [`text-orientation`][8]
* Logical CSS properties: 
[`block-size`][21], 
[`inline-size`][22], 
[`min-block-size`][23], 
[`min-inline-size`][24], 
[`max-block-size`][25], 
[`max-inline-size`][26], 
[`margin-block-start`][27], 
[`margin-block-end`][28], 
[`margin-inline-start`][29], 
[`margin-inline-end`][30], 
[`offset-block-start`][31], 
[`offset-block-end`][32], 
[`offset-inline-start`][33], 
[`offset-inline-end`][34], 
[`padding-block-start`][9], 
[`padding-block-end`][35], 
[`padding-inline-start`][10], 
[`padding-inline-end`][11], 
[`border-block-start-width`][36], 
[`border-block-end-width`][37], 
[`border-inline-start-width`][38], 
[`border-inline-end-width`][39], 
[`border-block-start-style`][40], 
[`border-block-end-style`][41], 
[`border-inline-start-style`][42], 
[`border-inline-end-style`][43], 
[`border-block-start-color`][44], 
[`border-block-end-color`][45], 
[`border-inline-start-color`][46], 
[`border-inline-end-color`][47], 
[`border-block-start`][48], 
[`border-block-end`][49], 
[`border-inline-start`][50], 
[`border-inline-end`][51]


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/padding-top "The padding-top CSS property of an element sets the padding space required on the top of an element. The padding area is the space between the content of the element and its border. Contrary to margin-top values, negative values of padding-top are invalid."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/padding-right "The padding-right CSS property of an element sets the padding space required on the right side of an element. The padding area is the space between the content of the element and its border. Negative values are not allowed."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/padding-bottom "The padding-bottom CSS property of an element sets the height of the padding area at the bottom of an element. The padding area is the space between the content of the element and it's border. Contrary to margin-bottom values, negative values of padding-bottom are invalid."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/padding-left "The padding-left CSS property of an element sets the padding space required on the left side of an element. The padding area is the space between the content of the element and it's border. A negative value is not allowed."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/writing-mode "CSS Writing Modes Level 3 defines CSS features to support various international script modes, such as left-to-right (e.g., Latin and Indic), right-to-left (e.g., Hebrew and Arabic), bidirectional (e.g., mixed Latin and Arabic) and vertical (e.g., Asian). This article is about the CSS writing-mode property."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/direction "Set the direction CSS property to match the direction of the text: rtl for languages written from right-to-left (like Hebrew or Arabic) text and ltr for other scripts. This is typically done as part of the document (e.g., using the dir attribute in HTML) rather than through direct use of CSS."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/text-orientation "The text-orientation CSS property defines the orientation of the text in a line. This property only has an effect in vertical mode, that is when writing-mode is not horizontal-tb. It is useful to control the display of writing in languages using vertical script, but also to deal with vertical table headers."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/padding-block-start "The padding-block-start CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the padding-top, padding-right, padding-bottom or padding-left property depending on the values defined for writing-mode, direction and text-orientation."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/padding-inline-start "The padding-inline-start CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the padding-top, padding-right, padding-bottom or padding-left property depending on the values defined for writing-mode, direction and text-orientation."
[11]: https://developer.mozilla.org/en/docs/Web/CSS/padding-inline-end "The padding-inline-end CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the padding-top, padding-right, padding-bottom or padding-left property depending on the values defined for writing-mode, direction and text-orientation."
[12]: https://developer.mozilla.org/en/docs/CSS/initial_value
[13]: https://developer.mozilla.org/en/docs/CSS/inheritance
[14]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[15]: https://developer.mozilla.org/en/docs/CSS/computed_value
[16]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[17]: https://developer.mozilla.org/en/docs/CSS/padding-left "<length> | <percentage>"
[18]: http://dev.w3.org/csswg/css-logical-props/#propdef-padding-block-end
[19]: https://developer.mozilla.org/en/Firefox/Releases/38 "Released on 2015-05-19."
[20]: #compat_hint1
[21]: https://developer.mozilla.org/en/docs/Web/CSS/block-size "The block-size CSS property defines the horizontal or vertical size of an element's block depending on it's writing mode. It corresponds to the width or the height property depending on the value defined for writing-mode."
[22]: https://developer.mozilla.org/en/docs/Web/CSS/inline-size "The inline-size CSS property defines the horizontal or vertical size of an element's block depending on it's writing mode. It corresponds to the width or the height property depending on the value defined for writing-mode."
[23]: https://developer.mozilla.org/en/docs/Web/CSS/min-block-size "The min-block-size CSS property defines the horizontal or vertical minimal size of an element's block depending on it's writing mode. It corresponds to the min-width or the min-height property depending on the value defined for writing-mode."
[24]: https://developer.mozilla.org/en/docs/Web/CSS/min-inline-size "The min-inline-size CSS property defines the horizontal or vertical minimal size of an element's block depending on it's writing mode. It corresponds to the min-width or the min-height property depending on the value defined for writing-mode."
[25]: https://developer.mozilla.org/en/docs/Web/CSS/max-block-size "The max-block-size CSS property defines the horizontal or vertical maximal size of an element's block depending on it's writing mode. It corresponds to the max-width or the max-height property depending on the value defined for writing-mode."
[26]: https://developer.mozilla.org/en/docs/Web/CSS/max-inline-size "The max-inline-size CSS property defines the horizontal or vertical maximal size of an element's block depending on it's writing mode. It corresponds to the max-width or the max-height property depending on the value defined for writing-mode."
[27]: https://developer.mozilla.org/en/docs/Web/CSS/margin-block-start "The margin-block-start CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction and text-orientation."
[28]: https://developer.mozilla.org/en/docs/Web/CSS/margin-block-end "The margin-block-end CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction and text-orientation."
[29]: https://developer.mozilla.org/en/docs/Web/CSS/margin-inline-start "The margin-inline-start CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction and text-orientation."
[30]: https://developer.mozilla.org/en/docs/Web/CSS/margin-inline-end "The margin-inline-end CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction and text-orientation."
[31]: https://developer.mozilla.org/en/docs/Web/CSS/offset-block-start "The offset-block-start CSS property defines the logical block start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the top, right, bottom or left property depending on the values defined for writing-mode, direction and text-orientation."
[32]: https://developer.mozilla.org/en/docs/Web/CSS/offset-block-end "The offset-block-end CSS property defines the logical block end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the top, right, bottom or left property depending on the values defined for writing-mode, direction and text-orientation."
[33]: https://developer.mozilla.org/en/docs/Web/CSS/offset-inline-start "The offset-inline-start CSS property defines the logical inline start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the top, right, bottom or left property depending on the values defined for writing-mode, direction and text-orientation."
[34]: https://developer.mozilla.org/en/docs/Web/CSS/offset-inline-end "The offset-inline-end CSS property defines the logical inline end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the top, right, bottom or left property depending on the values defined for writing-mode, direction and text-orientation."
[35]: https://developer.mozilla.org/en/docs/Web/CSS/padding-block-end "The padding-block-end CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the padding-top, padding-right, padding-bottom or padding-left property depending on the values defined for writing-mode, direction and text-orientation."
[36]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-start-width "The border-block-start-width CSS property defines the width of the logical block start border of an element, which maps to a physical border width depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-width, border-right-width, border-bottom-width or border-left-width property depending on the values defined for writing-mode, direction and text-orientation."
[37]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-end-width "The border-block-end-width CSS property defines the width of the logical block end border of an element, which maps to a physical border width depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-width, border-right-width, border-bottom-width or border-left-width property depending on the values defined for writing-mode, direction and text-orientation."
[38]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-start-width "The border-inline-start-width CSS property defines the width of the logical inline start border of an element, which maps to a physical border width depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-width, border-right-width, border-bottom-width or border-left-width property depending on the values defined for writing-mode, direction and text-orientation."
[39]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-end-width "The border-inline-end-width CSS property defines the width of the logical inline end border of an element, which maps to a physical border width depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-width, border-right-width, border-bottom-width or border-left-width property depending on the values defined for writing-mode, direction and text-orientation."
[40]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-start-style "The border-block-start-style CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-style, border-right-style, border-bottom-style or border-left-style property depending on the values defined for writing-mode, direction and text-orientation."
[41]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-end-style "The border-block-end-style CSS property defines the style of the logical block end border of an element, which maps to a physical border style depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-style, border-right-style, border-bottom-style or border-left-style property depending on the values defined for writing-mode, direction and text-orientation."
[42]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-start-style "The border-inline-start-style CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-style, border-right-style, border-bottom-style or border-left-style property depending on the values defined for writing-mode, direction and text-orientation."
[43]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-end-style "The border-inline-end-style CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-style, border-right-style, border-bottom-style or border-left-style property depending on the values defined for writing-mode, direction and text-orientation."
[44]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-start-color "The border-block-start-color CSS property defines the color of the logical block start border of an element, which maps to a physical border color depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-color, border-right-color, border-bottom-color or border-left-color property depending on the values defined for writing-mode, direction and text-orientation."
[45]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-end-color "The border-block-end-color CSS property defines the color of the logical block end border of an element, which maps to a physical border color depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-color, border-right-color, border-bottom-color or border-left-color property depending on the values defined for writing-mode, direction and text-orientation."
[46]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-start-color "The border-inline-start-color CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-color, border-right-color, border-bottom-color or border-left-color property depending on the values defined for writing-mode, direction and text-orientation."
[47]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-end-color "The border-inline-end-color CSS property defines the color of the logical inline end border of an element, which maps to a physical border color depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-color, border-right-color, border-bottom-color or border-left-color property depending on the values defined for writing-mode, direction and text-orientation."
[48]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-start "The border-block-start CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet. border-block-start can be used to set the values for one or more of: border-block-start-width, border-block-start-style, border-block-start-color. It maps to a physical border depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top, border-right, border-bottom or border-left property depending on the values defined for writing-mode, direction and text-orientation."
[49]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-end "The border-block-end CSS property is a shorthand property for setting the individual logical block end border property values in a single place in the style sheet. border-block-end can be used to set the values for one or more of: border-block-end-width, border-block-end-style, border-block-end-color. It maps to a physical border depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top, border-right, border-bottom or border-left property depending on the values defined for writing-mode, direction and text-orientation."
[50]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-start "The border-inline-start CSS property is a shorthand property for setting the individual logical inline start border property values in a single place in the style sheet. border-inline-start can be used to set the values for one or more of: border-inline-start-width, border-inline-start-style, border-inline-start-color. It maps to a physical border depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top, border-right, border-bottom or border-left property depending on the values defined for writing-mode, direction and text-orientation."
[51]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-end "The border-inline-end CSS property is a shorthand property for setting the individual logical inline end border property values in a single place in the style sheet. border-inline-end can be used to set the values for one or more of: border-inline-end-width, border-inline-end-style, border-inline-end-color. It maps to a physical border depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top, border-right, border-bottom or border-left property depending on the values defined for writing-mode, direction and text-orientation."