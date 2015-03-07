## eval

### Summary

The `**eval()**` method evaluates JavaScript code represented as a string.

### Syntax

    eval(_string_)

### Parameters

**`string`**

> A string representing a JavaScript expression, statement, or sequence of statements. The expression can include variables and properties of existing objects.

### Description

`eval()` is a function property of the global object.

The argument of the `eval()` function is a string. If the string represents an expression, `eval()` evaluates the expression. If the argument represents one or more JavaScript statements, `eval()` evaluates the statements. Do not call `eval()` to evaluate an arithmetic expression; JavaScript evaluates arithmetic expressions automatically.

If you construct an arithmetic expression as a string, you can use `eval()` to evaluate it at a later time. For example, suppose you have a variable `x`. You can postpone evaluation of an expression involving `x` by assigning the string value of the expression, say "`3 * x + 2`", to a variable, and then calling `eval()` at a later point in your script.

If the argument of `eval()` is not a string, `eval()` returns the argument unchanged. In the following example, the `String` constructor is specified, and `eval()` returns a `String` object rather than evaluating the string.

    eval(new String("2 + 2")); // returns a String object containing "2 + 2"
    eval("2 + 2");             // returns 4
    

You can work around this limitation in a generic fashion by using `toString()`.

    var expression = new String("2 + 2");
    eval(expression.toString());
    

You cannot indirectly use the `eval` function by invoking it via a name other than `eval()`; if you do, a runtime error might occur. For example, you should not use the following code:

    var x = 2;
    var y = 4;
    var myEval = eval;
    myEval("x + y");
    

### Don't use eval needlessly!

`eval()` is a dangerous function, which executes the code it's passed with the privileges of the caller. If you run `eval()` with a string that could be affected by a malicious party, you may end up running malicious code on the user's machine with the permissions of your webpage / extension. More importantly, third party code can see the scope in which `eval()` was invoked, which can lead to possible attacks in ways to which the similar [`Function`][0] is not susceptible.

`eval()` is also generally slower than the alternatives, since it has to invoke the JS interpreter, while many other constructs are optimized by modern JS engines.

There are safer (and faster!) alternatives to `eval()` for common use-cases.

### Accessing member properties

You should not use `eval()` to convert property names into properties. Consider the following example where the property of the object to be accessed is not known until the code is executed. This can be done with eval:

    var obj = { a: 20, b: 30 };
    var propname = getPropName();  //returns "a" or "b"
    
    eval( "var result = obj." + propname );
    

However, `eval()` is not necessary here. In fact, its use here is discouraged. Instead, use the [member operators][1], which are much faster and safer:

    var obj = { a: 20, b: 30 };
    var propname = getPropName();  //returns "a" or "b"
    var result = obj[ propname ];  //  obj[ "a" ] is the same as obj.a 
    

### Use functions instead of evaluating snippets of code

JavaScript has [first-class functions][2], which means you can pass functions as arguments to other APIs, store them in variables and objects' properties, and so on. Many DOM APIs are designed with this in mind, so you can (and should) write:

    // instead of setTimeout(" ... ", 1000) use:
    setTimeout(function() { ... }, 1000); 
    
    // instead of elt.setAttribute("onclick", "...") use:
    elt.addEventListener("click", function() { ... } , false); 

[Closures][3] are also helpful as a way to create parametrized functions without concatenating strings.

### Parsing JSON (converting strings to JavaScript objects)

If the string you're calling `eval()` on contains data (for example, an array: `"[1, 2, 3]"`), as opposed to code, you should consider switching to [JSON][4], which allows the string to use a subset of JavaScript syntax to represent data. See also [Downloading JSON and JavaScript in extensions][5].

Note that since JSON syntax is limited compared to JavaScript syntax, many valid JavaScript literals will not parse as JSON. For example, trailing commas are not allowed in JSON, and property names (keys) in object literals must be enclosed in quotes. Be sure to use a JSON serializer to generate strings that will be later parsed as JSON.

### Pass data instead of code

For example, an extension designed to scrape contents of web-pages could have the scraping rules defined in [XPath][6] instead of JavaScript code.

### Run code with limited privileges

If must run code, consider running it with reduced privileges. This advice applies mainly to extensions and XUL applications, which can use [Components.utils.evalInSandbox][7] for this.

### Examples

The following examples display output using [`document.write`][8]. In server-side JavaScript, you can display the same output by calling the `write()` function instead of using `document.write()`.

### Example: Using `eval`

In the following code, both of the statements containing `eval()` return 42\. The first evaluates the string "`x + y + 1`"; the second evaluates the string "`42`".

    var x = 2;
    var y = 39;
    var z = "42";
    eval("x + y + 1"); // returns 42
    eval(z);           // returns 42 
    

### Example: Using `eval` to evaluate a string of JavaScript statements

The following example uses `eval()` to evaluate the string `str`. This string consists of JavaScript statements that open an alert dialog box and assign `z` a value of 42 if `x` is five, and assigns 0 to `z` otherwise. When the second statement is executed, `eval()` will cause these statements to be performed, and it will also evaluate the set of statements and return the value that is assigned to `z`.

    var x = 5;
    var str = "if (x == 5) {alert('z is 42'); z = 42;} else z = 0; ";
    
    document.write("<P>z is ", eval(str));

### Example: Last expression is evaluated

`eval()` returns the value of the last expression evaluated.

    var str = "if ( a ) { 1+1; } else { 1+2; }";
    var a = true;
    var b = eval(str);  // returns 2
     
    alert("b is : " + b);
    
    a = false;
    b = eval(str);  // returns 3
    
    alert("b is : " + b);

### Example: eval a string defining function required "(" and ")" as prefix and suffix

    var fctStr1 = "function a() {}"
    var fctStr2 = "(function a() {})"
    var fct1 = eval(fctStr1)  // return undefined
    var fct2 = eval(fctStr2)  // return a function
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function "The Function constructor creates a new Function object. In JavaScript every function is actually a Function object."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Member_Operators "JavaScript/Reference/Operators/Member_Operators"
[2]: http://en.wikipedia.org/wiki/First-class_function "http://en.wikipedia.org/wiki/First-class_function"
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Closures "JavaScript/Guide/Closures"
[4]: https://developer.mozilla.org/en/docs/JSON "JSON"
[5]: https://developer.mozilla.org/en/docs/Downloading_JSON_and_JavaScript_in_extensions "Downloading_JSON_and_JavaScript_in_extensions"
[6]: https://developer.mozilla.org/en/docs/XPath "XPath"
[7]: https://developer.mozilla.org/en/docs/Components.utils.evalInSandbox "Components.utils.evalInSandbox"
[8]: https://developer.mozilla.org/en/docs/Web/API/document.write