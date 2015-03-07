## Proxy

**This is an experimental technology, part of the ECMAScript 6 (Harmony) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

The **Proxy** object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).

### Terminology

**[handler][1]**

> Placeholder object which contains traps.

**traps**

> The methods that provide property access. This is analogous to the concept of traps in operating systems.

**target**

> Object which the proxy virtualizes. It is often used as storage backend for the proxy. Invariants (semantics that remain unchanged) regarding object non-extensibility or non-configurable properties are verified against the target.

### Syntax

    var p = new Proxy(target, handler);
    

### Parameters

**`target`**

> A target object (can be any sort of objects, including a native array, a function or even another proxy) or function to wrap with `Proxy`.

**`handler`**

> An object whose properties are functions which define the behavior of the proxy when an operation is performed on it.

### Methods

**[`Proxy.revocable()`][2]**

> Creates a revocable `Proxy` object.

### Methods of the handler object

The handler object is a placeholder object which contains traps for `Proxy`.

All traps are optional. If a trap has not been defined, the default behavior is to forward the operation to the target.

**[`handler.getPrototypeOf()`][3]**

> A trap for [`Object.getPrototypeOf`][4].

**[`handler.setPrototypeOf()`][5]**

> A trap for [`Object.setPrototypeOf`][6].

**[`handler.isExtensible()`][7]**

> A trap for [`Object.isExtensible`][8].

**[`handler.preventExtensions()`][9]**

> A trap for [`Object.preventExtensions`][10].

**[`handler.getOwnPropertyDescriptor()`][11]**

> A trap for [`Object.getOwnPropertyDescriptor`][12].

**[`handler.defineProperty()`][13]**

> A trap for [`Object.defineProperty`][14].

**[`handler.has()`][15]**

> A trap for the [`in`][16] operator.

**[`handler.get()`][17]**

> A trap for getting property values.

**[`handler.set()`][18]**

> A trap for setting property values.

**[`handler.deleteProperty()`][19]**

> A trap for the [`delete`][20] operator.

**[`handler.enumerate()`][21]**

> A trap for [`for...in`][22] statements.

**[`handler.ownKeys()`][23]**

> A trap for [`Object.getOwnPropertyNames`][24].

**[`handler.apply()`][25]**

> A trap for a function call.

**[`handler.construct()`][26]**

> A trap for the [`new`][27] operator.

Some non-standard traps are [obsolete and have been removed][28].

### Examples

### Basic example

In this simple example the number `37` gets returned as the default value when the property name is not in the object. It is using the [`get`][29] handler.

    var handler = {
        get: function(target, name){
            return name in target?
                target[name] :
                37;
        }
    };
    
    var p = new Proxy({}, handler);
    p.a = 1;
    p.b = undefined;
    
    console.log(p.a, p.b); // 1, undefined
    console.log('c' in p, p.c); // false, 37
    

### No-op forwarding proxy

In this example, we are using a native JavaScript object to which our proxy will forward all operations that are applied to it.

    var target = {};
    var p = new Proxy(target, {});
    
    p.a = 37; // operation forwarded to the proxy
    
    console.log(target.a); // 37. The operation has been properly forwarded
    

### Validation

With a `Proxy`, you can easily validate the passed value for an object. This example uses the [`set`][30] handler.

    let validator = {
      set: function(obj, prop, value) {
        if (prop === 'age') {
          if (!Number.isInteger(value)) {
            throw new TypeError('The age is not an integer');
          }
          if (value > 200) {
            throw new RangeError('The age seems invalid');
          }
        }
    
        // The default behavior to store the value
        obj[prop] = value;
      }
    };
    
    let person = new Proxy({}, validator);
    
    person.age = 100;
    console.log(person.age); // 100
    person.age = 'young'; // Throws an exception
    person.age = 300; // Throws an exception
    

### Extending constructor

A function proxy could easily extend a constructor with a new constructor. This example uses the [`construct`][31] and [`apply`][32] handlers.

    function extend(sup,base) {
      var descriptor = Object.getOwnPropertyDescriptor(
        base.prototype,"constructor"
      );
      base.prototype = Object.create(sup.prototype);
      var handler = {
        construct: function(target, args) {
          var obj = Object.create(base.prototype);
          this.apply(target,obj,args);
          return obj;
        },
        apply: function(target, that, args) {
          sup.apply(that,args);
          base.apply(that,args);
        }
      };
      var proxy = new Proxy(base,handler);
      descriptor.value = proxy;
      Object.defineProperty(base.prototype, "constructor", descriptor);
      return proxy;
    }
    
    var Person = function(name){
      this.name = name
    };
    
    var Boy = extend(Person, function(name, age) {
      this.age = age;
    });
    
    Boy.prototype.sex = "M";
    
    var Peter = new Boy("Peter", 13);
    console.log(Peter.sex);  // "M"
    console.log(Peter.name); // "Peter"
    console.log(Peter.age);  // 13

### Manipulating DOM nodes

Sometimes you want to toggle the attribute or class name of two different elements. Here's how using the [`set`][30] handler.

    let view = new Proxy({
      selected: null
    },
    {
      set: function(obj, prop, newval) {
        let oldval = obj[prop];
    
        if (prop === 'selected') {
          if (oldval) {
            oldval.setAttribute('aria-selected', 'false');
          }
          if (newval) {
            newval.setAttribute('aria-selected', 'true');
          }
        }
    
        // The default behavior to store the value
        obj[prop] = newval;
      }
    });
    
    let i1 = view.selected = document.getElementById('item-1');
    console.log(i1.getAttribute('aria-selected')); // 'true'
    
    let i2 = view.selected = document.getElementById('item-2');
    console.log(i1.getAttribute('aria-selected')); // 'false'
    console.log(i2.getAttribute('aria-selected')); // 'true'
    

### Value correction and an extra property

The `products` proxy object evaluates the passed value and convert it to an array if needed. The object also supports an extra property called `latestBrowser` both as a getter and a setter.

    let products = new Proxy({
      browsers: ['Internet Explorer', 'Netscape']
    },
    {
      get: function(obj, prop) {
        // An extra property
        if (prop === 'latestBrowser') {
          return obj.browsers[obj.browsers.length - 1];
        }
    
        // The default behavior to return the value
        return obj[prop];
      },
      set: function(obj, prop, value) {
        // An extra property
        if (prop === 'latestBrowser') {
          obj.browsers.push(value);
          return;
        }
    
        // Convert the value if it is not an array
        if (typeof value === 'string') {
          value = [value];
        }
    
        // The default behavior to store the value
        obj[prop] = value;
      }
    });
    
    console.log(products.browsers); // ['Internet Explorer', 'Netscape']
    products.browsers = 'Firefox'; // pass a string (by mistake)
    console.log(products.browsers); // ['Firefox'] <- no problem, the value is an array
    
    products.latestBrowser = 'Chrome';
    console.log(products.browsers); // ['Firefox', 'Chrome']
    console.log(products.latestBrowser); // 'Chrome'
    

### Finding an array item object by its property

This proxy extends an array with some utility features. As you see, you can flexibly "define" properties without using [`Object.defineProperties`][33]. This example can be adapted to find a table row by its cell. In that case, the target will be [`table.rows`][34].

    let products = new Proxy([
      { name: 'Firefox', type: 'browser' },
      { name: 'SeaMonkey', type: 'browser' },
      { name: 'Thunderbird', type: 'mailer' }
    ],
    {
      get: function(obj, prop) {
        // The default behavior to return the value; prop is usually an integer
        if (prop in obj) {
          return obj[prop];
        }
    
        // Get the number of products; an alias of products.length
        if (prop === 'number') {
          return obj.length;
        }
    
        let result, types = {};
    
        for (let product of obj) {
          if (product.name === prop) {
            result = product;
          }
          if (types[product.type]) {
            types[product.type].push(product);
          } else {
            types[product.type] = [product];
          }
        }
    
        // Get a product by name
        if (result) {
          return result;
        }
    
        // Get products by type
        if (prop in types) {
          return types[prop];
        }
    
        // Get product types
        if (prop === 'types') {
          return Object.keys(types);
        }
    
        return undefined;
      }
    });
    
    console.log(products[0]); // { name: 'Firefox', type: 'browser' }
    console.log(products['Firefox']); // { name: 'Firefox', type: 'browser' }
    console.log(products['Chrome']); // undefined
    console.log(products.browser); // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
    console.log(products.types); // ['browser', 'mailer']
    console.log(products.number); // 3
    

### A complete `traps` list example

Now in order to create a complete sample `traps` list, for didactic purposes, we will try to proxify a _non native_ object that is particularly suited to this type of operation: the `docCookies` global object created by [the "little framework" published on the `document.cookie` page][35].

    /*
      var docCookies = ... get the "docCookies" object here:  
      https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support
    */
    
    var docCookies = new Proxy(docCookies, {
      "get": function (oTarget, sKey) {
        return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
      },
      "set": function (oTarget, sKey, vValue) {
        if (sKey in oTarget) { return false; }
        return oTarget.setItem(sKey, vValue);
      },
      "deleteProperty": function (oTarget, sKey) {
        if (sKey in oTarget) { return false; }
        return oTarget.removeItem(sKey);
      },
      "enumerate": function (oTarget, sKey) {
        return oTarget.keys();
      },
      "ownKeys": function (oTarget, sKey) {
        return oTarget.keys();
      },
      "has": function (oTarget, sKey) {
        return sKey in oTarget || oTarget.hasItem(sKey);
      },
      "defineProperty": function (oTarget, sKey, oDesc) {
        if (oDesc && "value" in oDesc) { oTarget.setItem(sKey, oDesc.value); }
        return oTarget;
      },
      "getOwnPropertyDescriptor": function (oTarget, sKey) {
        var vValue = oTarget.getItem(sKey);
        return vValue ? {
          "value": vValue,
          "writable": true,
          "enumerable": true,
          "configurable": false
        } : undefined;
      },
    });
    
    /* Cookies test */
    
    alert(docCookies.my_cookie1 = "First value");
    alert(docCookies.getItem("my_cookie1"));
    
    docCookies.setItem("my_cookie1", "Changed value");
    alert(docCookies.my_cookie1);

### Browser compatibility

* Desktop
* Mobile

Feature
Chrome
Firefox (Gecko)
Internet Explorer
Opera
Safari

Basic support

Not supported
[18][36] (18)
12
?
?

Feature
Android
Chrome for Android
Firefox Mobile (Gecko)
IE Mobile
Opera Mobile
Safari Mobile

Basic support
?
?
[18][36] (18)
?
?
?

### Gecko specific notes

* At present, `Object.getPrototypeOf(proxy)` unconditionally returns `Object.getPrototypeOf(target)`, because the ES6 getPrototypeOf trap is not yet implemented ([bug 888969][37], [bug 888969][37]).
* `Array.isArray(proxy)` unconditionally returns `Array.isArray(target)` ([bug 1111785][38], [bug 1111785][38]).
* `Object.prototype.toString.call(proxy)` unconditionally returns `Object.prototype.toString.call(target)`, because ES6 Symbol.toStringTag is not yet implemented ([bug 1114580][39]).

### See also

* ["Proxies are awesome" Brendan Eich presentation at JSConf][40] ([slides][41])
* [ECMAScript Harmony Proxy proposal page][42] and [ECMAScript Harmony proxy semantics page][43]
* [Tutorial on proxies][44]
* [SpiderMonkey specific Old Proxy API][45]
* [`Object.watch()`][46] is a non-standard feature but has been supported in Gecko for a long time.

### Licensing note

Some content (text, examples) in this page has been copied or adapted from the [ECMAScript wiki][47] which content is licensed [CC 2.0 BY-NC-SA][48].


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable "The Proxy.revocable() method is used to create a revocable Proxy object."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getPrototypeOf "The handler.getPrototypeOf() method is a trap for the [[GetPrototypeOf]] internal method."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf "The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/setPrototypeOf "The handler.setPrototypeOf() method is a trap for Object.setPrototypeOf()."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf "The Object.setPrototype() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/isExtensible "The handler.isExtensible() method is a trap for Object.isExtensible()."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible "The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it)."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/preventExtensions "The handler.preventExtensions() method is a trap for Object.preventExtensions()."
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions "The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object)."
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor "The handler.getOwnPropertyDescriptor() method is a trap for Object.getOwnPropertyDescriptor()."
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor "The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property (that is, one directly present on an object, not present by dint of being along an object's prototype chain) of a given object."
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/defineProperty "The handler.defineProperty() method is a trap for Object.defineProperty()."
[14]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object."
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/has "The handler.has() method is a trap for the in operator."
[16]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/in "The in operator returns true if the specified property is in the specified object."
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get "The handler.get() method is a trap for getting a property value."
[18]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set "The handler.set() method is a trap for setting a property value."
[19]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/deleteProperty "The handler.deleteProperty() method is a trap for the delete operator."
[20]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/delete "The delete operator removes a property from an object."
[21]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/enumerate "The handler.enumerate() method is a trap for for...in statements."
[22]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...in "The for..in statement iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed."
[23]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/ownKeys "The handler.ownKeys() method is a trap for Object.getOwnPropertyNames()."
[24]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames "The Object.getOwnPropertyNames() method returns an array of all properties (enumerable or not) found directly upon a given object."
[25]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply "The handler.apply() method is a trap for a function call."
[26]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct "The handler.construct() method is a trap for the new operator."
[27]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/new "The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function."
[28]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#Proxy
[29]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get
[30]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set
[31]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct
[32]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
[33]: https://developer.mozilla.org/en/docs/JavaScript/Reference/Global_Objects/Object/defineProperties
[34]: https://developer.mozilla.org/en/docs/DOM/table.rows
[35]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support "https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support"
[36]: https://developer.mozilla.org/en/Firefox/Releases/18 "Released on 2013-01-08."
[37]: https://bugzilla.mozilla.org/show_bug.cgi?id=888969 "Implement ES6 Proxy traps for getPrototypeOf and setPrototypeOf"
[38]: https://bugzilla.mozilla.org/show_bug.cgi?id=1111785 "FIXED: Implement ES6 7.2.2  IsArray"
[39]: https://bugzilla.mozilla.org/show_bug.cgi?id=1114580 "Implement ES6 Symbol.toStringTag"
[40]: http://jsconf.eu/2010/speaker/be_proxy_objects.html
[41]: http://www.slideshare.net/BrendanEich/metaprog-5303821
[42]: http://wiki.ecmascript.org/doku.php?id=harmony:proxies
[43]: http://wiki.ecmascript.org/doku.php?id=harmony:proxies_semantics
[44]: http://soft.vub.ac.be/~tvcutsem/proxies/
[45]: https://developer.mozilla.org/en/docs/JavaScript/Old_Proxy_API "https://developer.mozilla.org/en/docs/JavaScript/Old_Proxy_API"
[46]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/watch "The watch() method watches for a property to be assigned a value and runs a function when that occurs."
[47]: http://wiki.ecmascript.org/doku.php
[48]: http://creativecommons.org/licenses/by-nc-sa/2.0/