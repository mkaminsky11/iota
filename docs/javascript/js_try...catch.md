## try...catch

### Summary

The **`try...catch` statement** marks a block of statements to try, and specifies a response, should an exception be thrown.

### Syntax

    try {
       _try_statements_
    }
    [catch (_exception_var_1_ if _condition_1_) { // non-standard
       _catch_statements_1_
    }]
    ...
    [catch (_exception_var_2_) {
       _catch_statements_2_
    }]
    [finally {
       _finally_statements_
    }]
    

**`try_statements`**

> The statements to be executed.

**`catch_statements_1`, `catch_statements_2`**

> Statements that are executed if an exception is thrown in the `try` block.

**`exception_var_1`, `exception_var_2`**

> An identifier to hold an exception object for the associated `catch` clause.

**`condition_1`**

> A conditional expression.

**`finally_statements`**

> Statements that are executed after the `try` statement completes. These statements execute regardless of whether or not an exception was thrown or caught.

### Description

The `try` statement consists of a `try` block, which contains one or more statements, and at least one `catch` clause or a `finally` clause, or both. That is, there are three forms of the `try` statement:

1. `try...catch`
2. `try...finally`
3. `try...catch...finally`

A `catch` clause contain statements that specify what to do if an exception is thrown in the `try` block. That is, you want the `try` block to succeed, and if it does not succeed, you want control to pass to the `catch` block. If any statement within the `try` block (or in a function called from within the `try` block) throws an exception, control immediately shifts to the `catch` clause. If no exception is thrown in the `try` block, the `catch` clause is skipped.

The `finally` clause executes after the `try` block and `catch` clause(s) execute but before the statements following the `try` statement. It always executes, regardless of whether or not an exception was thrown or caught.

You can nest one or more `try` statements. If an inner `try` statement does not have a `catch` clause, the enclosing `try` statement's `catch` clause is entered.

You also use the `try` statement to handle JavaScript exceptions. See the [JavaScript Guide][0] for more information on JavaScript exceptions.

### Unconditional `catch` clause

When a single, unconditional `catch` clause is used, the `catch` block is entered when any exception is thrown. For example, when the exception occurs in the following code, control transfers to the `catch` clause.

    try {
       throw "myException"; // generates an exception
    }
    catch (e) {
       // statements to handle any exceptions
       logMyErrors(e); // pass exception object to error handler
    }
    

### Conditional `catch` clauses

**Non-standard**  
This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

You can also use one or more conditional `catch` clauses to handle specific exceptions. In this case, the appropriate `catch` clause is entered when the specified exception is thrown. In the following example, code in the `try` block can potentially throw three exceptions: [`TypeError`][1], [`RangeError`][2], and [`EvalError`][3]. When an exception occurs, control transfers to the appropriate `catch` clause. If the exception is not one of the specified exceptions and an unconditional `catch` clause is found, control transfers to that `catch` clause.

If you use an unconditional `catch` clause with one or more conditional `catch` clauses, the unconditional `catch` clause must be specified last. Otherwise, the unconditional `catch` clause will intercept all types of exception before they can reach the conditional ones.

Reminder: this functionality is not part of the ECMAScript specification.

    try {
        myroutine(); // may throw three types of exceptions
    } catch (e if e instanceof TypeError) {
        // statements to handle TypeError exceptions
    } catch (e if e instanceof RangeError) {
        // statements to handle RangeError exceptions
    } catch (e if e instanceof EvalError) {
        // statements to handle EvalError exceptions
    } catch (e) {
        // statements to handle any unspecified exceptions
        logMyErrors(e); // pass exception object to error handler
    }
    

And here is how to do implement the same "Conditional catch clauses" using only simple JavaScript conforming to the ECMAScript specification (obviously it's more verbose, but works everywhere):

    try {
        myroutine(); // may throw three types of exceptions
    } catch (e) {
        if (e instanceof TypeError) {
            // statements to handle TypeError exceptions
        } else if (e instanceof RangeError) {
            // statements to handle RangeError exceptions
        } else if (e instanceof EvalError) {
            // statements to handle EvalError exceptions
        } else {
           // statements to handle any unspecified exceptions
           logMyErrors(e); // pass exception object to error handler
        }
    }
    

### The exception identifier

When an exception is thrown in the `try` block, _`exception_var`_ (e.g. the `e` in `catch (e)`) holds the value specified by the `throw` statement. You can use this identifier to get information about the exception that was thrown.

This identifier is local to the `catch` clause. That is, it is created when the `catch` clause is entered, and after the `catch` clause finishes executing, the identifier is no longer available.

### The `finally` clause

The `finally` clause contains statements to execute after the `try` block and `catch` clause(s) execute, but before the statements following the `try` statement. The `finally` clause executes regardless of whether or not an exception is thrown. If an exception is thrown, the statements in the `finally` clause execute even if no `catch` clause handles the exception.

You can use the `finally` clause to make your script fail gracefully when an exception occurs; for example, you may need to release a resource that your script has tied up. The following example opens a file and then executes statements that use the file (server-side JavaScript allows you to access files). If an exception is thrown while the file is open, the `finally` clause closes the file before the script fails.

    openMyFile()
    try {
       // tie up a resource
       writeMyFile(theData);
    }
    finally {
       closeMyFile(); // always close the resource
    }
    

### Examples

### Nested try-blocks

First let's see what happens with this:

    try {
      try {
        throw new Error("oops");
      }
      finally {
        console.log("finally");
      }
    }
    catch (ex) {
      console.error("outer", ex.message);
    }
    
    // Output:
    // "finally"
    // "outer" "oops"
    

Now, if we already caught the exception in the inner try-block by adding a catch block

    try {
      try {
        throw new Error("oops");
      }
      catch (ex) {
        console.error("inner", ex.message);
      }
      finally {
        console.log("finally");
      }
    }
    catch (ex) {
      console.error("outer", ex.message);
    }
    
    // Output:
    // "inner" "oops"
    // "finally"
    

And now, lets re-throw the error.

    try {
      try {
        throw new Error("oops");
      }
      catch (ex) {
        console.error("inner", ex.message);
        throw ex;
      }
      finally {
        console.log("finally");
      }
    }
    catch (ex) {
      console.error("outer", ex.message);
    }
    
    // Output:
    // "inner" "oops"
    // "finally"
    // "outer" "oops"
    

Any given exception will be caught only once by the nearest enclosing catch-block, unless it is re-thrown. Of course, any new exceptions raised in the "inner" block (because code in catch-block may do something that throws), will be caught by the "outer" block.

### Returning from a finally block

If the `finally` block returns a value, this value becomes the return value of the entire `try-catch-finally` production, regardless of any `return` statements in the `try` and `catch` blocks. This includes exceptions thrown inside of the catch block:

    try {
      try {
        throw new Error("oops");
      }
      catch (ex) {
        console.error("inner", ex.message);
        throw ex;
      }
      finally {
        console.log("finally");
        return;
      }
    }
    catch (ex) {
      console.error("outer", ex.message);
    }
    
    // Output:
    // "inner" "oops"
    // "finally"
    

The outer "oops" is not thrown because of the return in the finally block. The same would apply to any value returned from the catch block.


[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide "en/JavaScript/Guide"
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RangeError "The RangeError object indicates an error when a value is not in the set or range of allowed values."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/EvalError "The EvalError object indicates an error regarding the global eval() function."