## Empty

### Summary

An **empty statement** is used to provide no statement, although the JavaScript syntax would expect one.

### Syntax

    ;
    

### Description

The empty statement is a semicolon (;) indicating that no statement will be executed, even if JavaScript syntax requires one. The opposite behavior, where you want multiple statements, but JavaScript only allows a single one, is possible using a[block statement][0]; it combines several statements into a single one.

### Examples

The empty statement is sometimes used with loop statements. See the following example with an empty loop body:

    var arr = [1, 2, 3];
    
    // Assign all array values to 0
    for (i = 0; i < arr.length; arr[i++] = 0) /* empty statement */ ;
    
    console.log(arr)
    // [0, 0, 0]
    

**Note:** It is a good idea to comment the intentional use of the empty statement, as it is not really obvious to distinguish between a normal semicolon. In the following example the usage is probably not intentional:

    if (condition);       // Caution, this "if" does nothing!
       killTheUniverse()  // So this gets always executed!!!
    

Another Example: An [`if...else`][1] statement without curly braces (`{}`). If `three` is `true`, nothing will happen, `four` does not matter, and also the `launchRocket()` function in the `else` case will not be executed.

    if (one)
      doOne();
    else if (two)
      doTwo();
    else if (three)
      ; // nothing here
    else if (four)
      doFour();
    else
      launchRocket();



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/block
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/if...else