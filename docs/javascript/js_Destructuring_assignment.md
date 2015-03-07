## Destructuring assignment

**This is an experimental technology, part of the ECMAScript 6 (Harmony) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

The **destructuring assignment** syntax is a JavaScript expression that makes it possible to extract data from arrays or objects using a syntax that mirrors the construction of array and object literals.

### Syntax

    [a, b] = [1, 2]
    [a, b, ...c] = [1, 2, 3, 4, 5]
    {a, b} = {a:1, b:2}
    

### Description

The object and array literal expressions provide an easy way to create _ad hoc_ packages of data. Once you've created these packages of data, you can use them any way you want to. You can even return them from functions.

One particularly useful thing you can do with destructuring assignment is to read an entire structure in a single statement, although there are a number of interesting things you can do with them, as shown in the section full of examples that follows.

This capability is similar to features present in languages such as Perl and Python.

### Array destructuring

### Simple example

    var foo = ["one", "two", "three"];
    
    // without destructuring
    var one   = foo[0];
    var two   = foo[1];
    var three = foo[2];
    
    // with destructuring
    var [one, two, three] = foo;

### Swapping variables

After executing this code, _b_ is 1 and _a_ is 3\. Without destructuring assignment, swapping two values requires a temporary variable (or, in some low-level languages, the [XOR-swap trick][1]).

    var a = 1;
    var b = 3;
    
    [a, b] = [b, a];

### Multiple-value returns

Thanks to destructuring assignment, functions can return multiple values. While it's always been possible to return an array from a function, this provides an added degree of flexibility.

    function f() {
      return [1, 2];
    }
    

As you can see, returning results is done using an array-like notation, with all the values to return enclosed in brackets. You can return any number of results in this way. In this example, `f()` returns the values `[1, 2]` as its output.

    var a, b;
    [a, b] = f();
    console.log("A is " + a + " B is " + b);
    

The statement `[a, b] = f()` assigns the results of the function to the variables in brackets, in order: _a_ is set to 1 and _b_ is set to 2\.

You can also retrieve the return values as an array:

    var a = f();
    console.log("A is " + a);
    

In this case, _a_ is an array containing the values 1 and 2\.

### Ignoring some returned values

You can also ignore return values that you're not interested in:

    function f() {
      return [1, 2, 3];
    }
    
    var [a, , b] = f();
    console.log("A is " + a + " B is " + b);
    

After running this code, a is 1 and b is 3\. The value 2 is ignored. You can ignore any (or all) returned values this way. For example:

    [,,] = f();
    

### Pulling values from a regular expression match

When the regular expression `[exec()][2]` method finds a match, it returns an array containing first the entire matched portion of the string and then the portions of the string that matched each parenthesized group in the regular expression. Destructuring assignment allows you to pull the parts out of this array easily, ignoring the full match if it is not needed.

    var url = "https://developer.mozilla.orghttps://developer.mozilla.org/en/Web/JavaScript";
    
    var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
    var [, protocol, fullhost, fullpath] = parsedURL;
    
    console.log(protocol); // logs "https:"
    

### Object destructuring

### Simple example

    var o = {p: 42, q: true};
    var {p, q} = o;
    
    console.log(p); // 42
    console.log(q); // true 
    
    // Assign new variable names
    var {p: foo, q: bar} = o;
    
    console.log(foo); // 42
    console.log(bar); // true  

### Function argument defaults

#### ES5 version

    function drawES5Chart(options) {
      options = options === undefined ? {} : options;
      var size = options.size === undefined ? 'big' : options.size;
      var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
      var radius = options.radius === undefined ? 25 : options.radius;
      console.log(size, cords, radius);
      // now finally do some chart drawing
    }
    
    drawES5Chart({
      cords: { x: 18, y: 30 },
      radius: 30
    });

#### ES6 version

    function drawES6Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) 
    {
      console.log(size, cords, radius);
      // do some chart drawing
    }
    
    drawES6Chart({
      cords: { x: 18, y: 30 },
      radius: 30
    });

In Firefox, default values for destructuring assignments are not yet implemented: var { x = 3 } = {} and var \[foo = "bar"\] = \[\]. See [bug 932080][3] and also [bug 1018628][4] for destructured default values in functions.

### Module loading

Destructuring can help to load specific subsets of a module like here in the [Add-on SDK][5]:

    const { Loader, main } = require('toolkit/loader');
    

### Nested object and array destructuring

    var metadata = {
        title: "Scratchpad",
        translations: [
           {
            locale: "de",
            localization_tags: [ ],
            last_edit: "2014-04-14T08:43:37",
            url: "/de/docs/Tools/Scratchpad",
            title: "JavaScript-Umgebung"
           }
        ],
        url: "https://developer.mozilla.org/en/docs/Tools/Scratchpad"
    };
    
    var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;
    
    console.log(englishTitle); // "Scratchpad"
    console.log(localeTitle);  // "JavaScript-Umgebung"

### For of iteration and destructuring

    var people = [
      {
        name: "Mike Smith",
        family: {
          mother: "Jane Smith",
          father: "Harry Smith",
          sister: "Samantha Smith"
        },
        age: 35
      },
      {
        name: "Tom Jones",
        family: {
          mother: "Norah Jones",
          father: "Richard Jones",
          brother: "Howard Jones"
        },
        age: 25
      }
    ];
    
    for (var {name: n, family: { father: f } } of people) {
      console.log("Name: " + n + ", Father: " + f);
    }
    
    // "Name: Mike Smith, Father: Harry Smith"
    // "Name: Tom Jones, Father: Richard Jones"

### Pulling fields from objects passed as function parameter

    function userId({id}) {
      return id;
    }
    
    function whois({displayName: displayName, fullName: {firstName: name}}){
      console.log(displayName + " is " + name);
    }
    
    var user = { 
      id: 42, 
      displayName: "jdoe",
      fullName: { 
          firstName: "John",
          lastName: "Doe"
      }
    };
    
    console.log("userId: " + userId(user)); // "userId: 42"
    whois(user); // "jdoe is John"

This pulls the `id`, `displayName` and `firstName` from the user object and prints them.

### Computed object property names and destructuring

Computed property names, like on [object literals][6], can be used with destructuring.

    let key = "z";
    let { [key]: foo } = { z: "bar" };
    
    console.log(foo); // "bar"
    



[0]: #Browser_compatibility
[1]: http://en.wikipedia.org/wiki/XOR_swap
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
[3]: https://bugzilla.mozilla.org/show_bug.cgi?id=932080 "Support default values in destructuring"
[4]: https://bugzilla.mozilla.org/show_bug.cgi?id=1018628 "Destructured parameters incorrectly disallow default value in function"
[5]: https://developer.mozilla.org/en/Add-ons/SDK
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names