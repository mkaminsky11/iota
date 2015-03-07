## :nth-last-child

### Summary

The `:nth-last-child` CSS [pseudo-class][0] matches an element that has `_a_n+_b_-1` siblings after it in the document tree, for a given positive or zero value for `n`, and has a parent element.

In effect, it functions the same as [`:nth-child`][1] except it selects items counting backwards from the **end** of element series, not the start.

See [`:nth-child`][1] for a more thorough description of the syntax of its argument.

### Syntax

    element:nth-last-child(_a_n + _b_) { _style properties_ }
    

### Examples

### Example selectors

**`tr:nth-last-child(-n+4)`**

> Matches the last four rows of an HTML table.

**`span:nth-last-child(even)`**

> Matches the even elements in their parent element, starting at the last element and working backward.

### Usage

This CSS ...

    table {
      border: 1px solid blue;
    }
    tr:nth-last-child(-n+3) { /* the last 3 siblings */
      background-color: lime;
    }
    

... with this HTML ...

    <table>
      <tbody>
        <tr>
          <td>First line</td>
        </tr>
        <tr>
           <td>Second line</td>
        </tr>
        <tr>
           <td>Third line</td>
        </tr>
        <tr>
           <td>Fourth line</td>
        </tr>
        <tr>
           <td>Fifth line</td>
        </tr>
      </tbody>
    </table>
    

... looks like :



[0]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/:nth-child "The :nth-child(an+b) CSS pseudo-class matches an element that has an+b-1 siblings before it in the document tree, for a given positive or zero value for n, and has a parent element."