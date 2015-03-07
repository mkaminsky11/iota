## text-transform

### Summary

The `text-transform` CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.

The `text-transform` property takes into account language-specific case mapping rules, like:

* in Turkic languages, like Turkish (tr), Azerbaijani (az), Crimean Tatar (crh), Volga Tatar (tt), and Bashkir (ba), there are two kinds of i, with and without the dot, and two case pairings: `i`/`İ` and `ı`/`I`.
* In German (de), the `ß` becomes `SS` in uppercase.
* In Dutch (nl), the `ij` digraph becomes `IJ`, even in the `text-transform: capitalize` case which only put the first letter of a word in uppercase.
* In Greek (el), vowels lose their accent when the whole word is in uppercase (`ά`/`Α`), except for the disjunctive eta (`ή`/`Ή`). Also, diphthongs with an accent on the first vowel lose the accent and gain a diaeresis on the second vowel (`άι`/`ΑΪ`).
* In Greek (el), the lowercase sigma character has two forms: `σ` and `ς`. `ς` is used only when sigma terminates a word. When applying `text-transform: lowercase` to an uppercase sigma (`Σ`), the browser needs to choose the right lowercase form based on context.

The language is defined by the `lang` HTML attribute or the `xml:lang` XML attribute.

Support for these specific cases vary from one browser to the other, so check the [browser compatibility table][0].

* _[Initial value][1]_ `none` 
* _Applies to_ all elements. It also applies to [`::first-letter`][2] and [`::first-line`][3]. 
* _[Inherited][4]_ yes 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: none [|][8] capitalize [|][8] uppercase [|][8] lowercase [|][8] full-width
    

    text-transform: capitalize
    text-transform: uppercase
    text-transform: lowercase
    text-transform: none
    text-transform: full-width
    
    text-transform: inherit
    

### Values

**`capitalize`**

> Is a keyword forcing the first _letter_ of each word to be converted to uppercase. Other characters are unchanged; that is, they retain their original case as written in the element's text. A letter is any Unicode character part of the Letter or Number general categories __ : it excludes any punctuation marks or symbols at the beginning of the word.
> 
> Authors should not expect `capitalize` to follow language-specific titlecasing conventions (such as skipping articles in English).
> 

**`uppercase`**

> Is a keyword forcing all characters to be converted to uppercase.

**`lowercase`**

> Is a keyword forcing all characters to be converted to lowercase.

**`none`**

> Is a keyword preventing the case of all characters to be changed.

**`full-width` __**

> Is a keyword forcing the writing of a character, mainly ideograms and latin scripts inside a square, allowing them to be aligned in the usual East Asian scripts (like Chinese or Japanese).

### Examples
`p { text-transform: none; }`

Initial string
`Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...`

Live example
`Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...`

Reference result
`Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...`

`p { text-transform: capitalize; }`

Initial string
`Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...`

Live example
`Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...`

Reference result
`Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, ...`

`p { text-transform: capitalize; }`  
Initial punctuations of a word are ignored. The keyword target the first letter, that is the first Unicode character part of the Letter or Number general category.

Initial string
`(this) “is” [a] –short– -test- «for» *the* _css_ ¿capitalize? ?¡transform!`

Live example
`(this) “is” [a] –short– -test- «for» *the* _css_ ¿capitalize? ?¡transform!`

Reference result
`(This) “Is” [A] –Short– -Test- «For» *The* _Css_ ¿Capitalize? ?¡Transform!`

`p { text-transform: capitalize; }`  
Initial symbols are ignored. The keyword target the first letter, that is the first Unicode character part of the Letter or Number general category.

Initial string
`ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl`

Live example
`ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl`

Reference result
`ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙKl`

`p { text-transform: capitalize; }`  
The Dutch ij digraph must be handled like one single letter

Initial string
`The Dutch word: "ijsland" starts with a digraph.`

Live example
`The Dutch word: "ijsland" starts with a digraph.`

Reference result
`The Dutch Word: "IJsland" Starts With A Digraph.`

`p { text-transform: uppercase; }`

Initial string
`Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...`

Live example
`Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...`

Reference result
`LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT, ...`

`p { text-transform: uppercase; }`  
Greek vowels except disjunctive eta should have no accent,  
and the accent on the first vowel of a vowel pair becomes a diaeresis on the second vowel

Initial string
`Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα";`

Live example
`Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα";`

Reference result
`ΘΑ ΠΑΜΕ ΣΤΟ "ΘΕΪΚΟ ΦΑΪ" Ή ΣΤΗ "ΝΕΡΑΪΔΑ";`

`p { text-transform: lowercase; }`

Initial string
`Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...`

Live example
`Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...`

Reference result
`lorem ipsum dolor sit amet, consectetur adipisicing elit, ...`

`p { text-transform: lowercase; }`  
The Greek character sigma (`Σ`) is transformed into the regular lowercase sigma (`σ`) or the word-final variant (`ς`), according the context.

Initial string
`Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.`

Live example
`Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.`

Reference result
`σ is a greek letter that appears several times in ``ΟΔΥΣΣΕΥ``ς.`

`p { text-transform: full-width; }`  
Some characters exists in two formats, normal width and a full-width, with different Unicode code points. The full-width version is used to mix them smoothly with Asian ideographic characters.

Initial string
0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"\#$%&()\*+,-./:;<=\>?@{|}~

Live example
0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"\#$%&()\*+,-./:;<=\>?@{|}~

Reference result
０１２３４５６７８９ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ！＂＃＄％＆（）＊＋，－．／：；＜＝＞？＠｛｜｝～



[0]: https://developer.mozilla.org/en/docs/CSS/text-transform#Browser_compatibility "CSS/text-transform#Browser_compatibility"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."