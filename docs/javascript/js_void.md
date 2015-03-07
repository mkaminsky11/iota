## void

### Summary

The `void` operator evaluates the given `_expression_` and then returns `undefined`.

### Syntax

    void _expression_

### Description

This operator allows inserting expressions that produce side effects into places where an expression that evaluates to `undefined` is desired.

The `void` operator is often used merely to obtain the `undefined` primitive value, usually using "`void(0)`" (which is equivalent to "`void 0`"). In these cases, the global variable [`undefined`][0] can be used instead (assuming it has not been assigned to a non-default value).

### Immediately Invoked Function Expressions

When using an [immediately-invoked function expression][1], `void` can be used to force the `function` keyword to be treated as an expression instead of a declaration.

    void function iife() {
        var bar = function () {};
        var baz = function () {};
        var foo = function () {
            bar();
            baz();
         };
        var biz = function () {};
    
        foo();
        biz();
    }();
    

### JavaScript URIs

When a browser follows a `javascript:` URI, it evaluates the code in the URI and then replaces the contents of the page with the returned value, unless the returned value is `undefined`. The `void` operator can be used to return `undefined`. For example:

    <a href="javascript:void(0);">
      Click here to do nothing
    </a>
    
    <a href="javascript:void(document.body.style.backgroundColor='green');">
      Click here for green background
    </a>
    

Note, however, that the `javascript:` pseudo protocol is discouraged over other alternatives, such as unobtrusive event handlers.


[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/undefined "https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/undefined"
[1]: https://developer.mozilla.org/en/docs/Glossary/IIFE