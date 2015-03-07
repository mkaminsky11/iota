## inherit

### Summary

The `inherit` CSS-value causes the element for which it is specified to take the [computed value][0] of the property from its parent element. It is allowed on every CSS property.

For [inherited properties][1], this reinforces the default behavior, and is only needed to override another rule.  For [non-inherited properties][1], this specifies a behavior that typically makes relatively little sense and you may consider using [`initial`][2] instead, or [`unset`][3] on the [`all`][4] property.

Inheritance is always from the parent element in the document tree, even when the parent element is not the containing block.

### Example

     /* make second-level headers green */
     h2 { color: green; }
    
     /* ...but leave those in the sidebar alone so they use their parent's color */
     #sidebar h2 { color: inherit; }
    

In this example the` h2 `elements inside the sidebar might be different colors. For example, if one of them were the child of a div matched by the rule

     div#current { color: blue; }
    

it would be blue.


[0]: https://developer.mozilla.org/en/docs/Web/CSS/computed_value
[1]: https://developer.mozilla.org/en/CSS/inheritance "en/CSS/inheritance"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/initial "The initial CSS keyword applies the initial value of a property to an element. It is allowed on every CSS property and causes the element for which it is specified to use the initial value of the property."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/unset "The unset CSS keyword is the combination of the initial and inherit keywords. Like these two other CSS-wide keywords, it can be applied to any CSS property, including the CSS shorthand all. This keyword resets the property to its inherited value if it inherits from its parent or to its initial value if not. In other words, it behaves like the inherit keyword in the first case and like the initial keyword in the second case."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/all "The CSS all shorthand property resets all properties, but unicode-bidi and direction to their initial or inherited value."