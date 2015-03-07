## @counter-style

### Summary

The `@counter-style` [CSS][0] [at-rule][1] lets authors define specific counter styles that are not part of the predefined set of styles. A `@counter-style` rule defines how to convert a counter value into a string representation.

CSS defined a set of useful counter styles: although more styles where added to this set over the year, this restrictive way proves unable to fulfill the needs of typography. The `@counter-style` at-rule addresses this shortcoming in an open-ended manner, by allowing authors to define their own counter styles when the pre-defined styles aren't fitting their needs.

### Syntax

    @counter-style <counter-style-name> {
        system: <counter system>
        symbols: <counter symbols>
        additive-symbols: <additive-symbols>
        negative: <negative symbol>
        prefix: <prefix>
        suffix: <suffix>
        range: <range>
        pad: <padding>
        speak-as: <speak-as>
        fallback: <counter-style-name>
    }
    

### Descriptors

Each `@counter-style` is identified by a name and has a set of descriptors.

**[`system`][2]**

> Specifies the algorithm to be used for converting the integer value of a counter to a string representation.

**[`negative`][3]**

> Lets the author specify symbols to be appended or prepended to the counter representation if the value is negative.

**[`prefix`][4]**

> Specifies a symbol that should be prepended to the marker representation. Prefixes are added to the representation in the final stage, so in the final representation of the counter, it comes before the negative sign.

**[`suffix`][5]**

> Specifies, similar to the prefix descriptor, a symbol that is appended to the marker representation. Prefixes come after the marker representation.

**[`range`][6]**

> Defines the range of values over which the conter style is applicable. If a counter style is used to represent a counter value outside of its ranges, the counter style will drop back to its fallback style.

**`pad`**

> Is used when you need the marker representations to be of a minimum length. For example if you want the counters to start start at 01 and go through 02, 03, 04 etc, then the pad descriptor is to be used. For representations larger than the specified pad value, the marker is constructed as normal.

**`fallback`**

> Specifies a system to fall back into if either the specified system is unable to construct the representation of or a counter value or if the counter value outside the specified range. If the specified fallback also fails to represent the value, then the fallback style's fallback is used, if one is specified. If there are either no fallback systems described or if the chain of fallback systems are unable to represent a counter value, then it will ultimately fall back to the decimal style.

**`symbols`**

> Specifies the symbols that are to be used for the marker representations. Symbols can contain string, images or custom identifiers. How the symbols are used to construct the marker representation is up to the algorithm specified in the system descriptor. For example, if the system specified is fixed, then each of the N symbols specified in the descriptor will be used to represent the first N counter symbols. Once the specified set of symbols have exhausted, the fallback style will be used for the rest of the list.  
>   
> The below @counter-style rule uses images instead of character symbols.  
> 
>     @counter-style winners-list {
>       system: fixed;
>       symbols: url(gold-medal.svg) url(silver-medal.svg) url(bronze-medal.svg);
>       suffix: " ";
>     }
> 
> 

**`additive-symbols`**

> While the symbols specified in the symbols descriptor is used for constructing marker representation by most algorithms, some systems such as 'additive' rely on _additive tuples_ described in this descriptor. Each additive tuple consists of a counter symbol and a non negative integer weight. The additive tuples must be specified in the descending order of their weights.

**`speak-as`**

> Describes how to read out the counter style in speech synthesizers, such as screen readers. For example, the value of the marker symbol can be read out as numbers or alphabets for ordered lists or as audio cues for unordered lists, based on the value of this descriptor.

### Examples

    @counter-style circled-alpha {
      system: fixed;
      symbols: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
      suffix: " ";
    }

The above counter style rule can be applied to lists like this:

    .items {
       list-style: circled-alpha;
    }
    

Which will produce lists like this:

Ⓐ One  
Ⓑ Two  
Ⓒ Three  
Ⓓ Four  
Ⓔ FIve  
....  
...  
Ⓨ Twenty Five  
Ⓩ Twenty Six

27 Twenty Seven  
28 Twenty Eight  
29 Twenty Nine  
30 Thirty

Checkout more examples on the [demo page][7].


[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/CSS/At-rule "en/CSS/At-rule"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/system "The documentation about this has not yet been written; please consider contributing!"
[3]: https://developer.mozilla.org/en/docs/Web/CSS/negative "When defining custom counter styles, the negative descriptor lets the author alter the representations of negative counter values, by providing a way to specify symbols to be appended or prepended to the counter representation when the value is negative."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/prefix "The prefix descriptor of the @counter-style rule allows authors to specify a symbol that will be prepended to the marker representation. If no value is specified, the default value will be the empty string."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/suffix "The suffix is used with @counter-style to specify a symbol that will be appended to the marker representation. A symbol can be a string, image or a CSS identifier. If not specified, the descriptor assumes the default value "\2E\20" ("." full stop followed by a space)."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/range "When defining custom counter styles, the range descriptor lets the author specify a range of counter values over which the style is applied. If a counter value is outside the specified range, then the fallback style will be used to construct the representation of that marker."
[7]: https://mdn.github.io/css-counter-style-demo/