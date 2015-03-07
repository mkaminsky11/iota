## with

Use of the `with` statement is not recommended, as it may be the source of confusing bugs and compatibility issues. See the "Ambiguity Con" paragraph in the "Description" section below for details.

### Summary

The **with statement** extends the scope chain for a statement.

### Syntax

    with (expression) {
      _statement_
    }
    

**`expression`**

> Adds the given expression to the scope chain used when evaluating the statement. The parentheses around the expression are required.

**`statement`**

> Any statement. To execute multiple statements, use a [block][0] statement ({ ... }) to group those statements.

### Description

JavaScript looks up an unqualified name by searching a scope chain associated with the execution context of the script or function containing that unqualified name. The 'with' statement adds the given object to the head of this scope chain during the evaluation of its statement body. If an unqualified name used in the body matches a property in the scope chain, then the name is bound to the property and the object containing the property. Otherwise a [`ReferenceError`][1] is thrown.

Using `with` is not recommended, and is forbidden in ECMAScript 5 [strict mode][2]. The recommended alternative is to assign the object whose properties you want to access to a temporary variable.

### Performance pro & contra

**Pro:** The `with` statement can help reduce file size by reducing the need to repeat a lengthy object reference without performance penalty. The scope chain change required by 'with' is not computationally expensive. Use of 'with' will relieve the interpreter of parsing repeated object references. Note, however, that in many cases this benefit can be achieved by using a temporary variable to store a reference to the desired object.

**Contra:** The `with` statement forces the specified object to be searched first for all name lookups. Therefore all identifiers that aren't members of the specified object will be found more slowly in a 'with' block. Where performance is important, 'with' should only be used to encompass code blocks that access members of the specified object.

### Ambiguity contra

**Contra:** The `with` statement makes it hard for a human reader or JavaScript compiler to decide whether an unqualified name will be found along the scope chain, and if so, in which object. So given this example:

    function f(x, o) {
      with (o) 
        print(x);
    }

Only when `f` is called is `x` either found or not, and if found, either in `o` or (if no such property exists) in `f`'s activation object, where `x` names the first formal argument. If you forget to define `x` in the object you pass as the second argument, or if there's some similar bug or confusion, you won't get an error -- just unexpected results.

**Contra: **Code using `with` may not be forward compatible, especially when used with something else than a plain object. Consider this example:

    function f(foo, values) {
        with (foo) {
            console.log(values)
        }
    }
    

If you call `f([1,2,3], obj)` in an ECMAScript 5 environment, then the `values` reference inside the `with` statement will resolve to `obj`. However, ECMAScript 6 introduces a `values` property on `[Array.prototype][3]` (so that it will be available on every array). So, in a JavaScript environment that supports ECMAScript 6, the `values` reference inside the `with` statement will resolve to `[1,2,3].values`.

### Examples

### Example: Using `with`

The following `with` statement specifies that the [`Math`][4] object is the default object. The statements following the `with` statement refer to the [`PI`][5] property and the [`cos`][6] and [`sin`][7] methods, without specifying an object. JavaScript assumes the `Math` object for these references.

    var a, x, y;
    var r = 10;
    
    with (Math) {
      a = PI * r * r;
      x = r * cos(PI);
      y = r * sin(PI / 2);
    }



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/block "JavaScript/Reference/Statements/block"
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "The ReferenceError object represents an error when a non-existent variable is referenced."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode "JavaScript/Strict mode"
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math "JavaScript/Reference/Global_Objects/Math"
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/PI "JavaScript/Reference/Global_Objects/Math/PI"
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/cos "JavaScript/Reference/Global_Objects/Math/cos"
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/sin "JavaScript/Reference/Global_Objects/Math/sin"