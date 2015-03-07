## text-orientation

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

The `text-orientation` [CSS][1] property defines the orientation of the text in a line. This property only has an effect in vertical mode, that is when [`writing-mode`][2] is not `horizontal-tb`. It is useful to control the display of writing in languages using vertical script, but also to deal with vertical table headers.

* _[Initial value][3]_ `mixed` 
* _Applies to_ all elements, except table row groups, rows, column groups, and columns 
* _[Inherited][4]_ yes 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: mixed [|][8] upright [|][8] sideways-right [|][8] sideways-left [|][8] sideways [|][8] use-glyph-orientation
    

    text-orientation: mixed
    text-orientation: upright
    text-orientation: sideways-right
    text-orientation: sideways-left
    text-orientation: sideways
    text-orientation: use-glyph-orientation
    
    text-orientation: inherit
    text-orientation: initial
    text-orientation: unset
    

### Values

**`mixed`**

> This keyword leads to have characters for horizontal-only scripts being turned 90°, while the glyphs for vertical scripts are laid out naturally.

**`upright`**

> This keyword leads to have characters for horizontal-only scripts to be laid out naturally (upright), as well as the glyphs for vertical scripts. Note that this keyword lead all characters to be considered as ltr: the used value of [`direction`][9] is `ltr`, whatever the user could try to set it to.

**`sideways-right`**

> This keyword leads to have characters laid out like if they were laid out horizontally, but with the whole line rotated 90° to the right.

**`sideways-left`**

> This keyword leads to have characters laid out like if they were laid out horizontally, but with the whole line rotated 90° to the left.

**`sideways`**

> This keyword leads to have characters laid out like if they were laid out horizontally, but with the whole line rotated 90° to the right if [`writing-mode`][2] is `vertical-rl` or to the left, if it is `vertical-lr`.

**`use-glyph-orientation`**

> On SVG elements, this keyword leads to use the value of the deprecated SVG properties` glyph-orientation-vertical` and `glyph-orientation-horizontal`.

### Examples

    .myText {
      writing-mode: vertical-rl;
      text-orientation: sideways-right;
    }  
    

### Specification
Specification
Status
Comment

[CSS Writing Modes Module Level 3  
The definition of 'text-orientation' in that specification.][10]
Candidate Recommendation
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
Not supported
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
Not supported
Not supported
Not supported
Not supported

### See also

* The other vertical-script related CSS properties: [`writing-mode`][2], [`text-combine-upright`][11], and [`unicode-bidi`][12].


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/writing-mode "The writing-mode CSS property defines whether lines of text are laid out horizontally or vertically and the direction in which blocks progress."
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/direction "Set the direction CSS property to match the direction of the text: rtl for languages written from right-to-left (like Hebrew or Arabic) text and ltr for other scripts. This is typically done as part of the document (e.g., using the dir attribute in HTML) rather than through direct use of CSS."
[10]: http://dev.w3.org/csswg/css3-writing-modes/#text-orientation
[11]: https://developer.mozilla.org/en/docs/Web/CSS/text-combine-upright "The documentation about this has not yet been written; please consider contributing!"
[12]: https://developer.mozilla.org/en/docs/Web/CSS/unicode-bidi "The unicode-bidi CSS property together with the direction property relates to the handling of bidirectional text in a document. For example, if a block of text contains both left-to-right and right-to-left text then the user-agent uses a complex Unicode algorithm to decide how to display the text. This property overrides this algorithm and allows the developer to control the text embedding."