## border-image

### Summary

The `border-image` CSS property allows drawing an image on the borders of elements. This makes drawing complex looking widgets much simpler than it has been and removes the need for nine boxes in some cases.

The `border-image` is used instead of the border styles given by the [`border-style`][0] properties. It is important to note that if the computed value of [`border-image-source`][1], which can be set either by `border-image-source` or the shorthand `border-image`, is `none`, or if the image cannot be displayed, the border styles will be used.

* _[Initial value][2]_ the concatenation of the initial values of its longhand properties:
  * `border-image-source`: is itself a shorthand, its initial value is the concatenation of its own longhand properties
  * `border-image-slice`: is itself a shorthand, its initial value is the concatenation of its own longhand properties
  * `border-image-width`: is itself a shorthand, its initial value is the concatenation of its own longhand properties
  * `border-image-outset`: is itself a shorthand, its initial value is the concatenation of its own longhand properties
  * `border-image-repeat`: is itself a shorthand, its initial value is the concatenation of its own longhand properties 
* _Applies to_ as each of the properties of the shorthand:
  * `border-image-outset`: all elements, except internal table elements when [`border-collapse`][3] is `collapse`
  * `border-image-repeat`: all elements, except internal table elements when [`border-collapse`][3] is `collapse`
  * `border-image-slice`: all elements, except internal table elements when [`border-collapse`][3] is `collapse`
  * `border-image-source`: all elements, except internal table elements when [`border-collapse`][3] is `collapse`
  * `border-image-width`: all elements, except table elements when [`border-collapse`][3] is `collapse`. It also applies to [`::first-letter`][4]. 
* _[Inherited][5]_ no 
* _Percentages_ The values of its longhand properties the percentage value belongs to:
  * `border-image-slice`: refer to the size of the border image
  * `border-image-width`: refer to the width or height of the border image area 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ as each of the properties of the shorthand:
  * `border-image-outset`: all lengths made absolute, otherwise as specified
  * `border-image-repeat`: as specified
  * `border-image-slice`: one to four percentage(s) (as specified) or absolute length(s), plus the keyword `fill` if specified
  * `border-image-source`: none or the image with its URI made absolute
  * `border-image-width`: all lengths made absolute, otherwise as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][8]: [<'border-image-source'>][9] [||][10] [<'border-image-slice'>][11] [ / [<'border-image-width'>][12] [|][13] / [<'border-image-width'>][12][?][14] / [<'border-image-outset'>][15] ][?][14] [||][10] [<'border-image-repeat'>][16]

### Values

See the respective properties for the different values.

### Examples

### Bitmap repeated (repeat)

The image is sliced and simply tiled to fill the border area.

      <div >The image is tiled (repeated) to fill the area.</div>
    

    #repeat { 
      border: 15px solid transparent;
      padding: 10px 20px;
      -moz-border-image:url("/files/4127/border.png") 30 30 repeat; /* Old Firefox */
      -webkit-border-image:url("/files/4127/border.png") 30 30 repeat; /* Safari */
      -o-border-image:url("/files/4127/border.png") 30 30 repeat; /* Opera */
      border-image:url("/files/4127/border.png") 30 30 repeat;
    }
    

Live Sample:  

### Bitmap repeated (round)

The round option is a variation on the repeat option that distributes the tiles in such a way that the ends nicely connect.

      <div >The image is tiled (repeated) to fill the area.</div>
    

    #round { 
      border: 15px solid transparent;
      padding: 10px 20px;
      -moz-border-image:url("/files/4127/border.png") 30 30 round; /* Old Firefox */
      -webkit-border-image:url("/files/4127/border.png") 30 30 round; /* Safari */
      -o-border-image:url("/files/4127/border.png") 30 30 round; /* Opera */
      border-image:url("/files/4127/border.png") 30 30 round;
    }
    

Live Sample:  

### Bitmap stretched

The 'stretch' option stretches the images to fill the border area.

      <div >The image is stretched to fill the area.</div>
    

    #stretch { 
      border: 15px solid transparent;
      padding: 10px 20px;
      -moz-border-image:url("/files/4127/border.png") 30 30 stretch; /* Old Firefox */
      -webkit-border-image:url("/files/4127/border.png") 30 30 stretch; /* Safari */
      -o-border-image:url("/files/4127/border.png") 30 30 stretch; /* Opera */
      border-image:url("/files/4127/border.png") 30 30 stretch;
    }
    

Live Sample:  


[0]: https://developer.mozilla.org/en/docs/Web/CSS/border-style "Technical review completed."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/border-image-source "The border-image-source CSS property defines the <image> to use instead of the style of the border. If this property is set to none, the style defined by border-style is used instead."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/Web/CSS/border-collapse "The border-collapse CSS property selects a table's border model. This has a big influence on the look and style of the table cells."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/CSS/border-image-source "none | <image>"
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: The two entities are optional, and may appear in any order."
[11]: https://developer.mozilla.org/en/docs/CSS/border-image-slice "[<number> | <percentage>]{1,4} && fill?"
[12]: https://developer.mozilla.org/en/docs/CSS/border-image-width "[ <length> | <percentage> | <number> | auto ]{1,4}"
[13]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[14]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Question_mark_(.3F) "Question mark multiplier: The previous entity is optional (it may be used once, or not at all)."
[15]: https://developer.mozilla.org/en/docs/CSS/border-image-outset "[ <length> | <number> ]{1,4}"
[16]: https://developer.mozilla.org/en/docs/CSS/border-image-repeat "[ stretch | repeat | round ]{1,2}"