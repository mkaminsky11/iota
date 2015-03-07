## @supports

### Summary

The `@supports` [CSS][0] [at-rule][1] associates a set of nested statements, in a CSS block, that is delimited by curly braces, with a condition consisting of testing of CSS declarations, that is property-value pairs, combined with arbitrary conjunctions, disjunctions, and negations of them. Such a condition is called a _supports condition_.

`@supports` gives CSS the ability to perform a _feature query_.

The `@supports` at-rule may be used not only at the top level of a CSS, but also inside any [CSS conditional-group at-rule][2] and can be accessed via the CSS object model interface [`CSSSupportsRule`][3].

### Syntax

    @supports _<supports_condition>_ {
      /* specific rules */
    }
    

A supports condition consists of one or several declarations combined by different logical operators. Precedence of operators can be overruled by using parenthesis.

### Declaration syntax

The simplest expression is a CSS declaration, that is a CSS property name followed by a value, separated by a colon. The following expression

    ( transform-origin: 5% 5% )

returns true if the [`transform-origin`][4] implements a syntax considering `5% 5%` as valid.

A CSS declaration is always surrounded by parentheses.

### The `not` operator

The `not` operator can precede any expression to create a new expression, resulting in the negation of the original expression. The following expression

    not ( transform-origin: 10em 10em 10em )

returns true if [`transform-origin`][4] doesn't implement a syntax considering `10em 10em 10em` as valid.

Like any operator, the `not` operator can be applied to a declaration of any complexity. The following examples are all valid expressions:

    not ( not ( transform-origin: 2px ) )
    (display: flexbox) and ( not (display: inline-grid) )

**Note:** there is no need to enclose the `not` operator between two parenthesis when at the top level. But to combine it with other operators, like `and` and `or`, the parenthesis are required.

### The `and` operator

From two expressions, the `and` operator creates a new expression consisting in the conjunction of the two original ones, that is the resulting expression is true only if both of the original expressions also resolve to true. In this example, the complete expression resolves to true if and only if the two expressions are simultaneously true:

    (display: table-cell) and (display: list-item)

Several conjunctions can be juxtaposed without the need of more parenthesis:

    (display: table-cell) and (display: list-item) and (display:run-in)

is equivalent to:

    (display: table-cell) and ((display: list-item) and (display:run-in))

### The `or` operator

From two expressions, the `or` operator creates a new expression consisting in the disjunction of the two original ones, that is the resulting expression is true if one, or both, of the original expressions also resolves to true. In this example, the complete expression resolves to true if at least one of the two expressions is true:

    ( transform-style: preserve ) or ( -moz-transform-style: preserve )

Several disjunctions can be juxtaposed without the need of more parenthesis:

    ( transform-style: preserve ) or ( -moz-transform-style: preserve ) or 
    ( -o-transform-style: preserve ) or ( -webkit-transform-style: preserve  )

is equivalent to:

    ( transform-style: preserve-3d ) or (( -moz-transform-style: preserve-3d ) or 
    (( -o-transform-style: preserve-3d ) or ( -webkit-transform-style: preserve-3d  )))

**Note**: when using both `and` and `or` operators, the parenthesis must be used in order to define the order in which they apply. If not, the condition is invalid leading to the whole at-rule to be ignored.

### Examples

### Testing for the support of a given CSS property

    @supports (animation-name: test) {
        … /* specific CSS applied when animations are supported unprefixed */
        @keyframes { /* @supports being a CSS conditional group at-rule, it can includes other relevent at-rules */
          …
        }
    }
    

### Testing for the support of a given CSS property or a prefixed version

    @supports ( (perspective: 10px) or (-moz-perspective: 10px) or (-webkit-perspective: 10px) or
                (-ms-perspective: 10px) or (-o-perspective: 10px) ) {
        … /* specific CSS applied when 3D transforms, eventually prefixed, are supported */
    }
    

### Testing for the non-support of a specific CSS property

    @supports ( not ((text-align-last:justify) or (-moz-text-align-last:justify) ){
        … /* specific CSS applied to simulate text-align-last:justify */
    }



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/CSS/At-rule "en/CSS/At-rule"
[2]: https://developer.mozilla.org/en/CSS/At-rule#Conditional_Group_Rules "en/CSS/At-rule#Conditional_Group_Rules"
[3]: https://developer.mozilla.org/en/docs/Web/API/CSSSupportsRule "The CSSSupportsRule interface describes an object representing a single CSS @supports at-rule. It implements the CSSConditionRule interface, and therefore the CSSRule and CSSGroupingRule interfaces with a type value of 12 (CSSRule.SUPPORTS_RULE)."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/transform-origin "The transform-origin CSS property lets you modify the origin for transformations of an element. For example, the transform-origin of the rotate() function is the centre of rotation. (This property is applied by first translating the element by the negated value of the property, then applying the element's transform, then translating by the property value.)"