## font-family

### Summary

The `font-family` CSS property allows for a prioritized list of font family names and/or generic family names to be specified for the selected element. Unlike most other CSS properties, values are separated by a comma to indicate that they are alternatives. The browser will select the first font on the list that is installed on the computer, or that can be downloaded using the information provided by a [`@font-face`][0] at-rule.

Web authors should always add at least one generic family in a font-family list, since there's no guarantee that a specific font is installed on the computer or can be downloaded using a [`@font-face`][0] at-rule. The generic family lets the browser select an acceptable fallback font when needed.

It is often convenient to use the shorthand property [`font`][1] to set `font-size` and other font related properties all at once.

**Note:** The `font-family` property specifies a list of fonts, from highest priority to lowest. Font selection does **not** simply stop at the first font named in the list that is on the user's system. Rather, font selection is done **one character at a time**, so that if an available font does not have a glyph that can display a character needed, the later available fonts are tried. However, this doesn't work in Internet Explorer 6 or earlier.  
  
When a font is only available in some [styles][2], [variants][3], or [sizes][4], those properties may also influence which font family is chosen.

* _[Initial value][5]_ depends on user agent 
* _Applies to_ all elements. It also applies to [`::first-letter`][6] and [`::first-line`][7]. 
* _[Inherited][8]_ yes 
* _Media_ [`visual`][9] 
* _[Computed value][10]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][11]: [ [<family-name>][12] [|][13] [<generic-family>][14] ][#][15] 
    

    font-family: Gill Sans Extrabold, sans-serif
    font-family: "Goudy Bookletter 1911", sans-serif
    
    font-family: sans-serif
    font-family: serif
    font-family: fantasy
    font-family: cursive
    font-family: monospace
    
    font-family: inherit
    

### Values
`<family-name>`
The name of a font family. For example, "Times" and "Helvetica" are font families. Font family names containing whitespace should be quoted.

`<generic-name>`

Generic font families are a fallback mechanism, a means of preserving some of the style sheet author's intent in case when none of the specified fonts are available. Generic family names are keywords and must not be quoted. A generic font family should be the a last alternative in the list of font family names.

**`serif`**

> Glyphs have finishing strokes, flared or tapering ends, or have actual serifed endings.  
> E.g.  Palatino, "Palatino Linotype", Palladio, "URW Palladio", serif

**`sans-serif`**

> Glyphs have stroke endings that are plain.  
> E.g. 'Trebuchet MS', 'Liberation Sans', 'Nimbus Sans L', sans-serif

**`monospace`**

> All glyphs have the same fixed width.  
> E.g. "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace

**`cursive`**

> Glyphs in cursive fonts generally have either joining strokes or other cursive characteristics beyond those of italic typefaces. The glyphs are partially or completely connected, and the result looks more like handwritten pen or brush writing than printed letterwork.

**`fantasy`**

> Fantasy fonts are primarily decorative fonts that contain playful representations of characters.

### Valid family names

Font family names must either be given quoted as strings, or unquoted as a sequence of one or more identifiers. This means that punctuation characters and digits at the start of each token must be escaped in unquoted font family names.

For example, the following declarations are valid:

    font-family: Gill Sans Extrabold, sans-serif;
    font-family: "Goudy Bookletter 1911", sans-serif;

The following declarations are **invalid**:

    font-family: Goudy Bookletter 1911, sans-serif;
    font-family: Red/Black, sans-serif;
    font-family: "Lucida" Grande, sans-serif;
    font-family: Ahem!, sans-serif;
    font-family: test@foo, sans-serif;
    font-family: #POUND, sans-serif;
    font-family: Hawaii 5-0, sans-serif;

### Examples

### Example 1

    body {
      font-family: "Gill Sans Extrabold", Helvetica, sans-serif;
    }
    
    .receipt {
      font-family: Courier, "Lucida Console", monospace;
    }
    

### Example 2

    .exampleserif {
        font-family: Times, "Times New Roman", Georgia, serif;
    }
    
    .examplesansserif {
        font-family: Verdana, Arial, Helvetica, sans-serif;
    }
    
    .examplemonospace {
        font-family: "Lucida Console", Courier, monospace;
    }
    
    .examplecursive {
        font-family: cursive;
    }
    
    .examplefantasy {
        font-family: fantasy;
    }
    

    <div >
    This is an example of a serif font.
    </div>
    
    <div >
    This is an example of a sans-serif font.
    </div>
    
    <div >
    This is an example of a monospace font.
    </div>
    
    <div >
    This is an example of a cursive font.
    </div>
    
    <div >
    This is an example of a fantasy font.
    </div>

#### Live Sample



[0]: https://developer.mozilla.org/en/docs/Web/CSS/@font-face "The @font-face CSS at-rule allows authors to specify online fonts to display text on their web pages. By allowing authors to provide their own fonts, @font-face eliminates the need to depend on the limited number of fonts users have installed on their computers. The @font-face at-rule may be used not only at the top level of a CSS, but also inside any CSS conditional-group at-rule."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/font "The font CSS property is either a shorthand property for setting font-style, font-variant, font-weight, font-size, line-height and font-family, or a way to set the element's font to a system font, using specific keywords."
[2]: https://developer.mozilla.org/en/docs/CSS/font-style "CSS/font-style"
[3]: https://developer.mozilla.org/en/docs/CSS/font-variant "CSS/font-variant"
[4]: https://developer.mozilla.org/en/docs/CSS/font-size "CSS/font-size"
[5]: https://developer.mozilla.org/en/docs/CSS/initial_value
[6]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[8]: https://developer.mozilla.org/en/docs/CSS/inheritance
[9]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[10]: https://developer.mozilla.org/en/docs/CSS/computed_value
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[12]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-family-name "<string> | <IDENT>+"
[13]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[14]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-generic-family "Tooltip not found in DB."
[15]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: The previous entity may appear 0, 1 or several times, each occurrence being separated from the previous one by a comma."