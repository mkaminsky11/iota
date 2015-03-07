## content

### Summary

The `content` CSS property is used with the [`::before`][0] and [`::after`][1] pseudo-elements to generate content in an element. Objects inserted using the `content` property are _anonymous [replaced elements][2]._

* _[Initial value][3]_ `normal` 
* _Applies to_ [`::before`][0] and [`::after`][1] [pseudo-elements][4] 
* _[Inherited][5]_ no 
* _Media_ [`all`][6] 
* _[Computed value][7]_ On elements, always computes to `normal`. On [`::before`][0] and [`::after`][1], if` normal` is specified, computes to `none`. Otherwise, for URI values, the absolute URI; for `attr()` values, the resulting string; for other keywords, as specified. 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][8]: normal [|][9] none [|][9] [ [<string>][10] [|][9] [<uri>][11] [|][9] [<counter>][12] [|][9] attr() [|][9] open-quote [|][9] close-quote [|][9] no-open-quote [|][9] no-close-quote ][+][13]
    

    content: normal                                /* Keywords that cannot be combined with other values */
    content: none
    
    content: 'prefix'                              /* <string> value, non-latin characters must be encoded e.g. \00A0 for &nbsp; */
    content: url(http://www.example.com/test.html) /* <uri> value */
    content: chapter_counter                       /* <counter> values */
    content: attr(value string)                    /* attr() value linked to the HTML attribute value */
    content: open-quote                            /* Language- and position-dependant keywords */
    content: close-quote
    content: no-open-quote
    content: no-close-quote
    
    content: open-quote chapter_counter            /* Except for normal and none, several values can be used simultaneously */
    
    content: inherit
    

### Values

**`none`**

> The pseudo-element is not generated.

**`normal`**

> Computes to `none` for the `:before` and `:after` pseudo-elements.

**`<string>`**

> Text content.

**`<uri>` or `url()`**

> The value is a URI that designates an external resource (such as an image). If the resource or image can't be displayed, it is either ignored or some placeholder shows up.

**`<counter>`**

> Counters may be specified with two different functions: 'counter()' or 'counters()'. The former has two forms: 'counter(_name_)' or 'counter(_name_, _style_)'. The generated text is the value of the innermost counter of the given name in scope at this pseudo-element; it is formatted in the indicated style ('decimal' by default). The latter function also has two forms: 'counters(_name_, _string_)' or 'counters(_name_, _string_, _style_)'. The generated text is the value of all counters with the given name in scope at this pseudo-element, from outermost to innermost separated by the specified string. The counters are rendered in the indicated style ('decimal' by default). See the section on automatic counters and numbering for more information. The name must not be 'none', 'inherit' or 'initial'. Such a name causes the declaration to be ignored.

**`attr(X)`**

> Returns the value of the element's attribute X as a string. If there is no attribute X, an empty string is returned. The case-sensitivity of attribute names depends on the document language.

**`open-quote` | `close-quote`**

> These values are replaced by the appropriate string from the [`quotes`][14] property.

**`no-open-quote` | `no-close-quote`**

> Introduces no content, but increments (decrements) the level of nesting for quotes.

### Examples

### Code sample - headings and quotes

#### HTML Content

    <h1>5</h1>
    <p> We shall start this with a quote from Sir Tim Berners-Lee,
        <q cite="http://www.w3.org/People/Berners-Lee/FAQ.html#Internet">
            I was lucky enough to invent the Web at the time when the Internet already existed - and had for a decade and a half.</q>  We must understand that there is nothing fundamentally wrong with building on the contributions of others.
    </p>
    
    <h1>6</h1>
    <p> Here we shall quote the Mozilla Manifesto,
        <q cite="http://www.mozilla.orghttps://developer.mozilla.org/en/about/manifesto/">
            Individuals must have the ability to shape the Internet and their own experiences on the Internet.</q> And so, we can infer that contributing to the open web, can protect our own individual experiences on it.
    </p>

#### CSS Content

    q {
        color: #00008B;
        font-style: italic;
    }
    
    q::before   { content: open-quote }
    q::after    { content: close-quote }
    
    h1::before  { content: "Chapter "; }

#### Output

### Code sample - content with multiple values adding an icon before a link

#### HTML Content

    <a href="http://www.mozilla.orghttps://developer.mozilla.org/en/">Home Page</a>

#### CSS Content

    a::before{
        content: url(https://www.mozilla.org/favicon.ico) " MOZILLA: ";
        font:    x-small Arial,freeSans,sans-serif;
        color:   gray;
    }

#### Output

### Code sample - class based example

#### HTML Content

    <h2>Paperback best sellers</h2>
    <ol>
        <li>Political thriller</li>
        <li >Halloween Stories</li>
        <li>My Biography</li>    
        <li >Vampire Romance</li>
    </ol>

#### CSS Content

    /* use a class rather that an element selector to give more flexibility.
    Simple string example, but don't forget add a leading space in the text string
    for spacing purposes  */
    
    .newEntry::after {
        content: " New!";
        color: red;
    }

#### Output

### Code sample - rich link styling

#### HTML Content

    <ul>
        <li><a  href="http://www.mozilla.org/">
            Mozilla Home Page</a></li>
        <li><a  href="https://developer.mozilla.org/">
            Mozilla Developer Network</a></li>
    </ul>

#### CSS Content

    a {
        text-decoration: none;
        border-bottom: 3px dotted navy;
    }
    
    a::after {
        content: " (" attr(id) ")";
    }
    
    #moz::before {
        content:url(https://mozorg.cdn.mozilla.net/media/img/favicon.ico) ;
    }
    
    #mdn::before {
        content:url(https://mdn.mozillademos.org/files/7691/mdn-favicon16.png) ;
    }
    
    li {
        margin: 1em;
    }
    
    

#### Output



[0]: https://developer.mozilla.org/en/docs/Web/CSS/::before "::before creates a pseudo-element that is the first child of the element matched. It is often used to add cosmetic content to an element by using the content property. This element is inline by default."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/::after "The CSS ::after pseudo-element matches a virtual last child of the selected element. It is typically used to add cosmetic content to an element by using the content CSS property. This element is inline by default."
[2]: https://developer.mozilla.org/en/docs/CSS/Replaced_element "CSS/Replaced_element"
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/CSS/Pseudo-elements "https://developer.mozilla.org/en/docs/CSS/Pseudo-elements"
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/string
[11]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-uri "Tooltip not found in DB."
[12]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-counter "Tooltip not found in DB."
[13]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Plus_(.2B) "Plus multiplier: The previous entity may appear 1 or several times."
[14]: https://developer.mozilla.org/en/docs/Web/CSS/quotes "The quotes CSS property indicates how user agents should render quotation marks."