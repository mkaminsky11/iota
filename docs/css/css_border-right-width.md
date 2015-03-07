## border-right-width

### Summary

The `border-right-width` [CSS][0] property sets the width of the right border of a box.

* _[Initial value][1]_ `medium` 
* _Applies to_ all elements 
* _[Inherited][2]_ no 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ the absolute length or `0` if [`border-right-style`][5] is `none` or `hidden` 
* _Animatable_ yes, as a [length][6] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: [<br-width>][8]
    

    border-right-width: 10em    /* Any <length> value */
    border-right-width: 3vmax
    border-right-width: 6px
    
    border-right-width: thin    /* A keyword */
    border-right-width: medium
    border-right-width: thick
    
    border-right-width: inherit
    

### Values

**`<br-width>`**

> Is either a non-negative explicit [`<length>`][9] value or a keyword denoting the thickness of the right border. The keyword must be one of the following values:
> `thin`
> 
> A thin border
> 
> `medium`
> 
> A medium border
> 
> `thick`
> 
> A thick border
> 
> The specification doesn't define precisely the thickness of each fo the keywords, which is therefore implementation specific. Nevertheless, it requests that the thickness does follow the rule `thin ≤ medium ≤ thick`, and is constant on a single document.

**`inherit`**

> Represents the calculated value of the `border-right-width` of the parent's element.

### Examples

### Four table cells

#### HTML

    <table>
       <tr>
          <td  >
             <code>border-right-width: 40px</code></td>
          <td  >
             <code>border-right-width: thin</code></td>
          <td  >
             <code>border-right-width: medium</code></td>
          <td  >
             <code>border-right-width: thick</code></td>
       </tr>
    </table>

#### CSS

    #b1 { border-right-width: 40px;   }
    #b2 { border-right-width: thin;   }
    #b3 { border-right-width: medium; }
    #b4 { border-right-width: thick;  }
    .blu {
        border-right-color: #2266DD;
    }
    td {
        border: 1px solid #000000;
    }

#### Result



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/Web/CSS/border-right-style
[6]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-br-width "<length> | thin | medium | thick"
[9]: https://developer.mozilla.org/en/docs/Web/CSS/length