## let

### Summary

The **`let`** statement declares a block scope local variable, optionally initializing it to a value.

**Note:** The `let` keyword is only available to code blocks in HTML wrapped in a `<script type="application/javascript;version=1.7">` block (or higher version). [XUL][0] script tags have access to these features without needing this special block.

### Syntax

    let var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]];

### Parameters

**`var1`, `var2`, ..., `varN`**

> Variable name. It can be any legal identifier.

**`value1`, `value2`, ..., `valueN`**

> Initial value of the variable. It can be any legal expression.

### Description

`let` allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the [`var`][1] keyword, which defines a variable globally, or locally to an entire function regardless of block scope.

### Block scope with `let`

Use the `let` keyword to define variables inside a block.

    if (x > y) {
      let gamma = 12.7 + y;
      i = gamma * x;
    }
    

You can use `let` definitions to alias pseudo-namespaced code in extensions. (See [Security best practices in extensions][2].)

    let Cc = Components.classes, Ci = Components.interfaces;
    

`let` sometimes makes the code cleaner when inner functions are used.

    var list = document.getElementById("list");
    
    for (var i = 1; i <= 5; i++) {
      var item = document.createElement("LI");
      item.appendChild(document.createTextNode("Item " + i));
    
      let j = i;
      item.onclick = function (ev) {
        console.log("Item " + j + " is clicked.");
      };
      list.appendChild(item);
    }
    

The example above works as intended because the five instances of the (anonymous) inner function refer to five different instances of variable `j`. Note that it does not work as intended if you replace `let` by `var` or if you remove the variable `j` and simply use the variable `i` in the inner function.

#### Scoping rules

Variables declared by `let` have as their scope the block in which they are defined, as well as in any contained sub-blocks . In this way, `let` works very much like `var`. The main difference is that the scope of a `var` variable is the entire enclosing function:

    function varTest() {
      var x = 31;
      if (true) {
        var x = 71;  // same variable!
        console.log(x);  // 71
      }
      console.log(x);  // 71
    }
    
    function letTest() {
      let x = 31;
      if (true) {
        let x = 71;  // different variable
        console.log(x);  // 71
      }
      console.log(x);  // 31
    }
    

At the top level of programs and functions, `let` behaves exactly like `var` does. For example:

    var x = 'global';
    let y = 'global';
    console.log(this.x);
    console.log(this.y);
    

The output displayed by this code will display "global" twice.

### Temporal dead zone and errors with `let`

Redeclaration of the same variable in the same block scope raises a `[TypeError][3]`.

    if (x) {
      let foo;
      let foo; // TypeError thrown.
    }

However, function bodies do not have this limitation!

    function do_something() {
      let foo;
      let foo; // This works fine.
    }

In ECMAScript 6, `let` **does not hoist** the variable to the top of the block. If you reference a variable in a block before the `let` declaration for that variable is encountered, this results in a `[ReferenceError][4]`, because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.

    function do_something() {
      console.log(foo); // ReferenceError
      let foo = 2;
    }

You may encounter errors in [`switch`][5] statements because there is only one underlying block.

    switch (x) {
      case 0:
        let foo;
        break;
        
      case 1:
        let foo; // TypeError for redeclaration.
        break;
    }

### `let`-scoped variables in `for` loops

You can use the `let` keyword to bind variables locally in the scope of `for` loops. This is different from the var keyword in the head of a for loop, which makes the variables visible in the whole function containing the loop.

    var i=0;
    for ( let i=i ; i < 10 ; i++ ) {
      console.log(i);
    }
    

#### Scoping rules

    for (let _expr1_; _expr2_; _expr3_) _statement_
    

In this example, _expr2_, _expr3_, and _statement_ are enclosed in an implicit block that contains the block local variables declared by `let _expr1_`. This is demonstrated in the first loop above.

### Examples

### `let` vs `var`

When used inside a block, _let_ limits the variable's scope to that block. Note the difference between _var _whose scope is inside the function where it is declared

    var a = 5;
    var b = 10;
    
    if (a === 5) {
      let a = 4; // The scope is inside the if-block
      var b = 1; // The scope is inside the function
    
      console.log(a);  // 4
      console.log(b);  // 1
    } 
    
    console.log(a); // 5
    console.log(b); // 1

### `let` in loops

You can use the _let_ keyword to bind variables locally in the scope of loops instead of using a global variable (defined using _var_) for that.

    for (let i = 0; i<10; i++) {
      console.log(i); // 0, 1, 2, 3, 4 ... 9
    }
    
    console.log(i); // i is not defined

### Non-standard `let` extensions

The `let` block and `let` expression syntax is non-standard and will be removed in the future. Do not use them! See [bug 1023609][6] for more details.

### `let` block

The **`let` block** provides a way to associate values with variables within the scope of a block, without affecting the values of like-named variables outside the block.

#### Syntax

    let (var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]]) statement;

#### Description

The `let` block provides local scoping for variables. It works by binding zero or more variables in the lexical scope of a single block of code; otherwise, it is exactly the same as a block statement. Note in particular that the scope of a variable declared inside a `let` block using `var` is still the same as if it had been declared outside the `let` block; such variables still have function scoping. When using the `let` block syntax, the parentheses following `let` are required. Failure to include them will result in a syntax error.

#### Example

    var x = 5;
    var y = 0;
    
    let (x = x+10, y = 12) {
      console.log(x+y); // 27
    }
    
    console.log(x + y); // 5
    

The rules for the code block are the same as for any other code block in JavaScript. It may have its own local variables established using the `let` declarations.

#### Scoping rules

The scope of variables defined using `let` is the `let` block itself, as well as any inner blocks contained inside it, unless those blocks define variables by the same names.

### `let` expressions

The **`let` expression** lets you establish variables scoped only to a single expression.

#### Syntax

    let (var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]]) expression;

#### Example

You can use `let` to establish variables that are scoped only to a single expression:

    var a = 5;
    let(a = 6) console.log(a); // 6
    console.log(a); // 5

#### Scoping rules

Given a `let` expression:

    let (_decls_) _expr_
    

There is an implicit block created around _expr_.


[0]: https://developer.mozilla.org/en/docs/XUL "en-US/docs/XUL"
[1]: https://developer.mozilla.org/en/docs/JavaScript/Reference/Statements/var "JavaScript/Reference/Statements/var"
[2]: https://developer.mozilla.org/en/docs/Security_best_practices_in_extensions "en-US/docs/Security_best_practices_in_extensions"
[3]: https://developer.mozilla.org/en/docs/JavaScript/Reference/Global_Objects/TypeError "TypeError"
[4]: https://developer.mozilla.org/en/docs/JavaScript/Reference/Global_Objects/ReferenceError "TypeError"
[5]: https://developer.mozilla.org/en/docs/JavaScript/Reference/Statements/switch "switch"
[6]: https://bugzilla.mozilla.org/show_bug.cgi?id=1023609 "Delete support for let blocks and let expressions for ES6"