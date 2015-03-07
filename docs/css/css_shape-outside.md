## shape-outside

### Summary

The `shape-outside` [CSS][0] property uses shape values to define the float area for a float and will cause inline content to wrap around the shape instead of the float's bounding box.

* _[Initial value][1]_ `none` 
* _Applies to_ floats 
* _[Inherited][2]_ no 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ as defined for [`<basic-shape>`][5] (with[][6][`<shape-box>`][6] following, if supplied), the `[<image>][7]` with its URI made absolute, otherwise as specified. 
* _Animatable_ yes, as \*Unknown value in DB (basic-shape)\* 
* _Canonical order_ \*Value 'order-shape-outside' not found in DB\*

### Syntax

    [Formal syntax][8]: none [|][9] [<shape-box>][10] [||][11] [<basic-shape>][12] [|][9] [<image>][7]

    shape-outside: none
    shape-outside: margin-box
    shape-outside: content-box
    shape-outside: border-box
    shape-outside: padding box
    
    shape-outside: circle()
    shape-outside: ellipse()
    shape-oustide: inset(10px 10px 10px 10px)
    shape-outside: polygon(10px 10px, 20px 20px, 30px 30px)
    
    shape-outside: url(image.png)
    
    shape-outside: [initial][13]
    shape-outside: [inherit][14]
    shape-outside: [unset][15]
    

### Values

**`none`**

> The float area is unaffected

**`<shape-box>`**

> If one of these is specified by itself the shape is computed based on one of '**`margin-box`**', '**`border-box`**', '**`padding-box`**' or '**`content-box`**' which us their respective boxes including curvature from `border-radius`, similar to '`[background-clip][16]`'.

**<basic-shape\>**

> The shape is computed based on the values of one of '**`inset()`**', '**`circle()`**', '**`ellipse()`**' or '**`polygon()`**'. If a **`<shape-box>`** is also supplied, this defines the reference box for the **`<basic-shape>`** function. If **`<shape-box>`** is not supplied, then the reference box defaults to '**`margin-box`**'.

**<image\>**

> The shape is extracted and computed based on the alpha channel of the specified **`<image>`** as defined by '**`shape-image-threshold`**'.

> User agents must use the potentially CORS-enabled fetch method defined by the HTML5 specification for all URLs in a '**`shape-outside`**' value. When fetching, user agents must use "Anonymous" mode, set the referrer source to the stylesheet's URL and set the origin to the URL of the containing document. If this results in network errors such that there is no valid fallback image, the effect is as if the value '`**none**`' had been specified.

### Examples

### shape-outside

### HTML

    

`<div >`
`    <div ></div>`
`    <div ></div> `
`    <p>`
`      Sometimes a web page's text content appears to be`
`      funneling your attention towards a spot on the page`
`      to drive you to follow a particular link.  Sometimes`
`      you don't notice.`
`    </p>`
`</div>`

### CSS

    

`.main {`
`     width: 500px;`
`     height: 200px;`
`}`
`.left {      `

`-webkit-shape-outside: polygon(0 0, 100% 100%, 0 100%);`

`float: left;`

`width: 40%;`

`height: 12ex;`

`background-color: lightgray;`

`-webkit-clip-path: polygon(0 0, 100% 100%, 0 100%);`
`}    `
`.right`
`{      `

`-webkit-shape-outside: polygon(100% 0, 100% 100%, 0 100%);`

`float: right;`

`width: 40%;    `

`height: 12ex;`

`background-color: lightgray;`

`-webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%);`
`}    `
`p `
`{      `

`text-align: center;`
`}`

### 



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/Web/CSS/%3Cbasic-shape%3E
[6]: https://developer.mozilla.org/en/docs/shape-box
[7]: https://developer.mozilla.org/en/docs/Web/CSS/image
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[10]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-shape-box "Tooltip not found in DB."
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: The two entities are optional, and may appear in any order."
[12]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-basic-shape "Tooltip not found in DB."
[13]: https://developer.mozilla.org/en/docs/Web/CSS/initial
[14]: https://developer.mozilla.org/en/docs/Web/CSS/inherit
[15]: https://developer.mozilla.org/en/docs/Web/CSS/unset
[16]: https://developer.mozilla.org/en/docs/CSS/background-clip "backround-clip"