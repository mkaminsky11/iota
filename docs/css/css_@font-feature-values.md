## @font-feature-values

### Summary

The `@font-feature-values` [CSS][0] [at-rule][1] allows authors to use a common name in [`font-variant-alternate`][2] for feature activated differently in OpenType. It allows to simplify the CSS when using several fonts.

    @font-feature-values Font One { /* How to activate nice-style in Font One */  @styleset {
        nice-style: 12;
      }
    }
     
    @font-feature-values Font Two { /* How to activate nice-style in Font Two */
      @styleset {
        nice-style: 4;
      }
    } 
    
    …
    
    .nice-look { font-variant-alternate: styleset(nice-style); } /* Independent of the font */
    

The `@`font-feature-values`` at-rule may be used at the top level of a CSS, but also inside any [CSS conditional-group at-rule][3].

### Syntax

    @font-feature-values <font-family> {
          [  @swash | @ornaments | @annotation | @stylistic | @styleset | @character-variant 
            {
               [ <IDENT>: <integer>+ ]?
            } 
          ]?
    }
    

### At-rules

### Example

TBD

**`@swash`**

> Specifies a feature name that will work with the [`swash()`][4] functional notation of [`font-variant-alternates`][5]. A swash feature value definition allows only one value: `ident1: 2` is valid when `ident2: 2 4` isn't.

**`@annotation`**

> Specifies a feature name that will work with the [`annotation()`][6] functional notation of [`font-variant-alternates`][5]. An annotation feature value definition allows only one value: `ident1: 2` is valid when `ident2: 2 4` isn't.

**`@ornaments`**

> Specifies a feature name that will work with the [`ornaments()`][7] functional notation of [`font-variant-alternates`][5]. An ornaments feature value definition allows only one value: `ident1: 2` is valid when `ident2: 2 4` isn't.

**`@stylistic`**

> Specifies a feature name that will work with the [`stylistic()`][8] functional notation of [`font-variant-alternates`][5]. A stylistice feature value definition allows only one value: `ident1: 2` is valid when `ident2: 2 4` isn't.

**`@styleset`**

> Specifies a feature name that will work with the [`styleset()`][9] functional notation of [`font-variant-alternates`][5]. A stylset feature value definition allows and illimited amount of values: `ident1: 2 4 12 1`maps to the OpenType values `ss02`, `ss04`, `ss12`, `ss01`. Note that values higher than `99` are valid, but doesn't map to any OpenType values and are ignored.

**`@character-variant`**

> Specifies a feature name that will work with the [`character-variant()`][10] functional notation of [`font-variant-alternates`][5]. A character-variant feature value definition allows one or two values: `ident1: 2` maps to `cv02=1` and `ident2: 2 4` maps to `cv02)4` and `ident2: 2 4 5` isn't valid.



[0]: https://developer.mozilla.org/en/docs/Web/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/At-rule "At-rule"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-alternate "The documentation about this has not yet been written; please consider contributing!"
[3]: https://developer.mozilla.org/en/docs/Web/CSS/At-rule#Conditional_Group_Rules "CSS/At-rule#Conditional_Group_Rules"
[4]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-alternates#swash()
[5]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-alternates "The font-variant-alternates CSS property controls the usage of alternate glyphs associated to alternative names defined in @font-feature-values."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-alternates#annotation()
[7]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-alternates#ornaments()
[8]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-alternates#stylistic()
[9]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-alternates#styleset()
[10]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-alternates#character-variant()