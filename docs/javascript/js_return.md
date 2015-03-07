## return

### Summary

The **`return` statement** ends function execution and specifies a value to be returned to the function caller.

### Syntax

    return [[expression]]; 

**`expression`**

> The expression to return. If omitted, `undefined` is returned instead.

### Description

When a `return` statement is called in a function, the execution of this function is stopped. If specified, a given value is returned to the function caller. If the expression is omitted, `undefined` is returned instead. The following return statements all break the function execution:

    return;
    return true;
    return false;
    return x;
    return x + y / 3;
    

### Automatic semicolon insertion

The `return` statement is affected by [automatic semicolon insertion (ASI)][0]. There is no line terminator between the `return` keyword and the expression allowed.

    return
    a + b;
    
    // is transformed by ASI into
    
    return; 
    a + b;
    

### Examples

### Example: Using `return`

The following function returns the square of its argument, `x`, where `x` is a number.

    function square(x) {
       return x * x;
    }
    

### Example: Interrupt a function

A function immediately stops at the point where `return` is called.

    function counter() {
      for (var count = 1; ; count++) {  // infinite loop
        console.log(count + "A"); // until 5
          if (count === 5) {          
            return;
          }
          console.log(count + "B");  // until 4
        }
      console.log(count + "C");  // never appears
    }
    
    counter();
    
    // Output:
    // 1A
    // 1B
    // 2A
    // 2B
    // 3A
    // 3B
    // 4A
    // 4B
    // 5A
    

### Example: Returning a function

To learn more about closures, read the [JavaScript guide][1].

    function magic(x) {
      return function calc(x) { return x * 42};
    }
    
    var answer = magic();
    answer(1337); // 56154
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Closures