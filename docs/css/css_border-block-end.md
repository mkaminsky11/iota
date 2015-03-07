## border-block-end

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

The `border-block-end` [CSS][1] property is a shorthand property for setting the individual logical block end border property values in a single place in the style sheet. `border-block-end` can be used to set the values for one or more of: [`border-block-end-width`][2], [`border-block-end-style`][3], [`border-block-end-color`][4]. It maps to a physical border depending on the element's writing mode, directionality, and text orientation. It corresponds to the [`border-top`][5], [`border-right`][6], [`border-bottom`][7], or [`border-left`][8] property depending on the values defined for [`writing-mode`][9], [`direction`][10], and [`text-orientation`][11].

It relates to [`border-block-start`][12], [`border-inline-start`][13], and [`border-inline-end`][14], which define the other borders of the element.

* _[Initial value][15]_ `currentcolor` 
* _Applies to_ all elements 
* _[Inherited][16]_ no 
* _Media_ [`visual`][17] 
* _[Computed value][18]_ as each of the properties of the shorthand:
  * `border-width`: is itself a shorthand, applies to the same elements as each of its longhand properties.
  * `border-style`: is itself a shorthand, applies to the same elements as each of its longhand properties.
  * `color`: is itself a shorthand, applies to the same elements as each of its longhand properties. 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][19]: [<'border-width'>][20] [||][21] [<'border-style'>][22] [||][21] [<'color'>][23]
    

### Values

One or more of the following, in any order:

**`<'border-width'>`**

> See [`border-width`][24]

**`<'border-style'>`**

> See [`border-style`][25]

**`<'color'>`**

> See [`color`][26]

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
      writing-mode: vertical-rl;
      border-block-end: 5px dashed blue;
    }

### Specification
Specification
Status
Comment

[CSS Logical Properties Level 1  
The definition of 'border-block-end' in that specification.][27]
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
[38.0][28] (38.0)[\[1\]][29]
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
38.0 (38.0)[\[1\]][29]
Not supported
Not supported
Not supported

\[1\] Available since Gecko 38, but behind the preference `layout.css.vertical-text.enabled`, disabled by default.

### See also

* The mapped physical properties: [`border-top`][5], [`border-right`][6], [`border-bottom`][7], and [`border-left`][8]
* [`writing-mode`][9], [`direction`][10], [`text-orientation`][11]
* Logical CSS properties: 
[`block-size`][30], 
[`inline-size`][31], 
[`min-block-size`][32], 
[`min-inline-size`][33], 
[`max-block-size`][34], 
[`max-inline-size`][35], 
[`margin-block-start`][36], 
[`margin-block-end`][37], 
[`margin-inline-start`][38], 
[`margin-inline-end`][39], 
[`offset-block-start`][40], 
[`offset-block-end`][41], 
[`offset-inline-start`][42], 
[`offset-inline-end`][43], 
[`padding-block-start`][44], 
[`padding-block-end`][45], 
[`padding-inline-start`][46], 
[`padding-inline-end`][47], 
[`border-block-start-width`][48], 
[`border-block-end-width`][2], 
[`border-inline-start-width`][49], 
[`border-inline-end-width`][50], 
[`border-block-start-style`][51], 
[`border-block-end-style`][3], 
[`border-inline-start-style`][52], 
[`border-inline-end-style`][53], 
[`border-block-start-color`][54], 
[`border-block-end-color`][4], 
[`border-inline-start-color`][55], 
[`border-inline-end-color`][56], 
[`border-block-start`][12], 
[`border-block-end`][57], 
[`border-inline-start`][13], 
[`border-inline-end`][14]


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-end-width "The border-block-end-width CSS property defines the width of the logical block end border of an element, which maps to a physical border width depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-width, border-right-width, border-bottom-width or border-left-width property depending on the values defined for writing-mode, direction and text-orientation."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-end-style "The border-block-end-style CSS property defines the style of the logical block end border of an element, which maps to a physical border style depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-style, border-right-style, border-bottom-style or border-left-style property depending on the values defined for writing-mode, direction and text-orientation."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-end-color "The border-block-end-color CSS property defines the color of the logical block end border of an element, which maps to a physical border color depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-color, border-right-color, border-bottom-color or border-left-color property depending on the values defined for writing-mode, direction and text-orientation."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/border-top "The border-top CSS property is a shorthand that sets the values of border-top-color, border-top-style, and border-top-width. These properties describe the top border of elements."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/border-right "The border-right CSS property is a shorthand that sets the values of border-right-color, border-right-style, and border-right-width. These properties describe the right border of elements."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/border-bottom "The border-bottom CSS property is a shorthand that sets the values of border-bottom-color, border-bottom-style, and border-bottom-width. These properties describe the bottom border of elements."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/border-left "The border-left CSS property is a shorthand that sets the values of border-left-color, border-left-style, and border-left-width. These properties describe the left border of elements."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/writing-mode "CSS Writing Modes Level 3 defines CSS features to support various international script modes, such as left-to-right (e.g., Latin and Indic), right-to-left (e.g., Hebrew and Arabic), bidirectional (e.g., mixed Latin and Arabic) and vertical (e.g., Asian). This article is about the CSS writing-mode property."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/direction "Set the direction CSS property to match the direction of the text: rtl for languages written from right-to-left (like Hebrew or Arabic) text and ltr for other scripts. This is typically done as part of the document (e.g., using the dir attribute in HTML) rather than through direct use of CSS."
[11]: https://developer.mozilla.org/en/docs/Web/CSS/text-orientation "The text-orientation CSS property defines the orientation of the text in a line. This property only has an effect in vertical mode, that is when writing-mode is not horizontal-tb. It is useful to control the display of writing in languages using vertical script, but also to deal with vertical table headers."
[12]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-start "The border-block-start CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet. border-block-start can be used to set the values for one or more of: border-block-start-width, border-block-start-style, border-block-start-color. It maps to a physical border depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top, border-right, border-bottom or border-left property depending on the values defined for writing-mode, direction and text-orientation."
[13]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-start "The border-inline-start CSS property is a shorthand property for setting the individual logical inline start border property values in a single place in the style sheet. border-inline-start can be used to set the values for one or more of: border-inline-start-width, border-inline-start-style, border-inline-start-color. It maps to a physical border depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top, border-right, border-bottom or border-left property depending on the values defined for writing-mode, direction and text-orientation."
[14]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-end "The border-inline-end CSS property is a shorthand property for setting the individual logical inline end border property values in a single place in the style sheet. border-inline-end can be used to set the values for one or more of: border-inline-end-width, border-inline-end-style, border-inline-end-color. It maps to a physical border depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top, border-right, border-bottom or border-left property depending on the values defined for writing-mode, direction and text-orientation."
[15]: https://developer.mozilla.org/en/docs/CSS/initial_value
[16]: https://developer.mozilla.org/en/docs/CSS/inheritance
[17]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[18]: https://developer.mozilla.org/en/docs/CSS/computed_value
[19]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[20]: https://developer.mozilla.org/en/docs/CSS/border-width "<br-width>{1,4}"
[21]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: The two entities are optional, and may appear in any order."
[22]: https://developer.mozilla.org/en/docs/CSS/border-style "<br-style>{1,4}"
[23]: https://developer.mozilla.org/en/docs/CSS/color "<color>"
[24]: https://developer.mozilla.org/en/docs/Web/CSS/border-width "Technical review completed."
[25]: https://developer.mozilla.org/en/docs/Web/CSS/border-style "Technical review completed."
[26]: https://developer.mozilla.org/en/docs/Web/CSS/color "The CSS color property sets the foreground color of an element's text content, and its decorations. It doesn't affect any other characteristic of the element; it should really be called text-color and would have been named so, save for historical reasons and its appearance in CSS Level 1."
[27]: http://dev.w3.org/csswg/css-logical-props/#propdef-border-block-end
[28]: https://developer.mozilla.org/en/Firefox/Releases/38 "Released on 2015-05-19."
[29]: #compat_hint1
[30]: https://developer.mozilla.org/en/docs/Web/CSS/block-size "The block-size CSS property defines the horizontal or vertical size of an element's block depending on it's writing mode. It corresponds to the width or the height property depending on the value defined for writing-mode."
[31]: https://developer.mozilla.org/en/docs/Web/CSS/inline-size "The inline-size CSS property defines the horizontal or vertical size of an element's block depending on it's writing mode. It corresponds to the width or the height property depending on the value defined for writing-mode."
[32]: https://developer.mozilla.org/en/docs/Web/CSS/min-block-size "The min-block-size CSS property defines the horizontal or vertical minimal size of an element's block depending on it's writing mode. It corresponds to the min-width or the min-height property depending on the value defined for writing-mode."
[33]: https://developer.mozilla.org/en/docs/Web/CSS/min-inline-size "The min-inline-size CSS property defines the horizontal or vertical minimal size of an element's block depending on it's writing mode. It corresponds to the min-width or the min-height property depending on the value defined for writing-mode."
[34]: https://developer.mozilla.org/en/docs/Web/CSS/max-block-size "The max-block-size CSS property defines the horizontal or vertical maximal size of an element's block depending on it's writing mode. It corresponds to the max-width or the max-height property depending on the value defined for writing-mode."
[35]: https://developer.mozilla.org/en/docs/Web/CSS/max-inline-size "The max-inline-size CSS property defines the horizontal or vertical maximal size of an element's block depending on it's writing mode. It corresponds to the max-width or the max-height property depending on the value defined for writing-mode."
[36]: https://developer.mozilla.org/en/docs/Web/CSS/margin-block-start "The margin-block-start CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction and text-orientation."
[37]: https://developer.mozilla.org/en/docs/Web/CSS/margin-block-end "The margin-block-end CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction and text-orientation."
[38]: https://developer.mozilla.org/en/docs/Web/CSS/margin-inline-start "The margin-inline-start CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction and text-orientation."
[39]: https://developer.mozilla.org/en/docs/Web/CSS/margin-inline-end "The margin-inline-end CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction and text-orientation."
[40]: https://developer.mozilla.org/en/docs/Web/CSS/offset-block-start "The offset-block-start CSS property defines the logical block start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the top, right, bottom or left property depending on the values defined for writing-mode, direction and text-orientation."
[41]: https://developer.mozilla.org/en/docs/Web/CSS/offset-block-end "The offset-block-end CSS property defines the logical block end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the top, right, bottom or left property depending on the values defined for writing-mode, direction and text-orientation."
[42]: https://developer.mozilla.org/en/docs/Web/CSS/offset-inline-start "The offset-inline-start CSS property defines the logical inline start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the top, right, bottom or left property depending on the values defined for writing-mode, direction and text-orientation."
[43]: https://developer.mozilla.org/en/docs/Web/CSS/offset-inline-end "The offset-inline-end CSS property defines the logical inline end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the top, right, bottom or left property depending on the values defined for writing-mode, direction and text-orientation."
[44]: https://developer.mozilla.org/en/docs/Web/CSS/padding-block-start "The padding-block-start CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the padding-top, padding-right, padding-bottom or padding-left property depending on the values defined for writing-mode, direction and text-orientation."
[45]: https://developer.mozilla.org/en/docs/Web/CSS/padding-block-end "The padding-block-end CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the padding-top, padding-right, padding-bottom or padding-left property depending on the values defined for writing-mode, direction and text-orientation."
[46]: https://developer.mozilla.org/en/docs/Web/CSS/padding-inline-start "The padding-inline-start CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the padding-top, padding-right, padding-bottom or padding-left property depending on the values defined for writing-mode, direction and text-orientation."
[47]: https://developer.mozilla.org/en/docs/Web/CSS/padding-inline-end "The padding-inline-end CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the padding-top, padding-right, padding-bottom or padding-left property depending on the values defined for writing-mode, direction and text-orientation."
[48]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-start-width "The border-block-start-width CSS property defines the width of the logical block start border of an element, which maps to a physical border width depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-width, border-right-width, border-bottom-width or border-left-width property depending on the values defined for writing-mode, direction and text-orientation."
[49]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-start-width "The border-inline-start-width CSS property defines the width of the logical inline start border of an element, which maps to a physical border width depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-width, border-right-width, border-bottom-width or border-left-width property depending on the values defined for writing-mode, direction and text-orientation."
[50]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-end-width "The border-inline-end-width CSS property defines the width of the logical inline end border of an element, which maps to a physical border width depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-width, border-right-width, border-bottom-width or border-left-width property depending on the values defined for writing-mode, direction and text-orientation."
[51]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-start-style "The border-block-start-style CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-style, border-right-style, border-bottom-style or border-left-style property depending on the values defined for writing-mode, direction and text-orientation."
[52]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-start-style "The border-inline-start-style CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-style, border-right-style, border-bottom-style or border-left-style property depending on the values defined for writing-mode, direction and text-orientation."
[53]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-end-style "The border-inline-end-style CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-style, border-right-style, border-bottom-style or border-left-style property depending on the values defined for writing-mode, direction and text-orientation."
[54]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-start-color "The border-block-start-color CSS property defines the color of the logical block start border of an element, which maps to a physical border color depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-color, border-right-color, border-bottom-color or border-left-color property depending on the values defined for writing-mode, direction and text-orientation."
[55]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-start-color "The border-inline-start-color CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-color, border-right-color, border-bottom-color or border-left-color property depending on the values defined for writing-mode, direction and text-orientation."
[56]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-end-color "The border-inline-end-color CSS property defines the color of the logical inline end border of an element, which maps to a physical border color depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-color, border-right-color, border-bottom-color or border-left-color property depending on the values defined for writing-mode, direction and text-orientation."
[57]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-end "The border-block-end CSS property is a shorthand property for setting the individual logical block end border property values in a single place in the style sheet. border-block-end can be used to set the values for one or more of: border-block-end-width, border-block-end-style, border-block-end-color. It maps to a physical border depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top, border-right, border-bottom or border-left property depending on the values defined for writing-mode, direction and text-orientation."