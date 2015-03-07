## initial

The `initial` CSS keyword applies the initial value of a property to an element. It is allowed on every CSS property and causes the element for which it is specified to use the [initial value][0] of the property.

On [inherited properties][1], the initial value may be surprising and you should consider using the [`inherit`][2] or [`unset`][3] keywords instead.

### Examples

     /* give headers a green border */
     h2 { border: medium solid green }
    
     /* but make those in the sidebar use the value of the "color" property */
     #sidebar h2 { border-color: initial; }
    

     <p style="color:red"> 
        this text is red 
           <em style="color:initial"> 
              this text is in the initial color (e.g. black)
           </em>
        this is red again
     </p> 



[0]: https://developer.mozilla.org/en/docs/Web/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/Web/CSS/inheritance#Inherited_properties
[2]: https://developer.mozilla.org/en/docs/Web/CSS/inherit "The inherit CSS-value causes the element for which it is specified to take the computed value of the property from its parent element. It is allowed on every CSS property."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/unset "The unset CSS keyword is the combination of the initial and inherit keywords. Like these two other CSS-wide keywords, it can be applied to any CSS property, including the CSS shorthand all. This keyword resets the property to its inherited value if it inherits from its parent or to its initial value if not. In other words, it behaves like the inherit keyword in the first case and like the initial keyword in the second case."