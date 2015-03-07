## border-collapse

### Summary

The `border-collapse` CSS property selects a table's border model. This has a big influence on the look and style of the table cells.

The _separated_ model is the traditional HTML table border model. Adjacent cells each have their own distinct borders. The distance between them given by the [`border-spacing`][0] property.

In the _collapsed_ border model, adjacent table cells share borders. In that model, the [`border-style`][1] value of `inset` behaves like `groove`, and `outset` behaves like `ridge`.

* _[Initial value][2]_ `separate` 
* _Applies to_ table and inline-table elements 
* _[Inherited][3]_ yes 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: collapse [|][7] separate
    

    border-collapse: collapse
    border-collapse: separate
    
    border-collapse: inherit

### Values

**`separate`**

> Is a keyword requesting the use of the separated-border table rendering model. It is the default value.

**`collapse`**

> Is a keyword requesting the use of the collapsed-border table rendering model.

### Examples

### View a standalone example

[View Live Examples][8]

### A colorful table of browser engines

#### HTML

    <table >
        <caption><code>border-collapse: separate</code></caption>
        <tbody>
            <tr><th>Browser</th> <th>Layout Engine</th>
            </tr>
            <tr><td >Firefox</td> <td >Gecko</td>
            </tr>
            <tr><td >Internet Explorer</td> <td >Trident</td>
            </tr>
            <tr><td >Safari</td> <td >Webkit</td>
            </tr>
            <tr><td >Chrome</td> <td >Blink</td>
            </tr>
            <tr><td >Opera</td> <td >Blink</td>
            </tr>
        </tbody>
    </table>
    <table >
        <caption><code>border-collapse: collapse</code></caption>
        <tbody>
            <tr><th>Browser</th> <th>Layout Engine</th>
            </tr>
            <tr><td >Firefox</td> <td >Gecko</td>
            </tr>
            <tr><td >Internet Explorer</td> <td >Trident</td>
            </tr>
            <tr><td >Safari</td> <td >Webkit</td>
            </tr>
            <tr><td >Chrome</td> <td >Blink</td>
            </tr>
            <tr><td >Opera</td> <td >Blink</td>
            </tr>
        </tbody>
    </table>

#### CSS

    .collapse {
        border-collapse: collapse;
    }
    .separate {
        border-collapse: separate;
    }
    table {
        display: inline-table;
        margin: 1em;
        border: dashed 6px;
        border-width: 6px;
    }
    table th, table td {
        border: solid 3px;
    }
    .fx { border-color: orange blue; }
    .gk { border-color: black red; }
    .ie { border-color: blue gold; }
    .tr { border-color: aqua; }
    .sa { border-color: silver blue; }
    .wk { border-color: gold blue; }
    .ch { border-color: red yellow green blue; }
    .bk { border-color: navy blue teal aqua; }
    .op { border-color: red; }

#### Result



[0]: https://developer.mozilla.org/en/docs/Web/CSS/border-spacing
[1]: https://developer.mozilla.org/en/docs/Web/CSS/border-style
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[8]: /samples/cssref/border-collapse.html