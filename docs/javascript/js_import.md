## import

**This is an experimental technology, part of the Harmony (ECMAScript 6) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

The **import statement** is used to import functions exported from an external module, another script.

Note: This feature is not implemented in any browsers natively at this point. It is implemented in many transpilers, such as the [Traceur Compiler][1] and [ES6 Module Transpiler][2].

### Syntax

    import _name_ from "_module-name_";
    import { _member _} from "_module-name_";
    import {_member_ as _alias _} from "_module-name_";
    import { _member1 , member2_ } from "_module-name_";
    import { _member1 , member2_ as _alias2_ , _[...]_ } from "_module-name_";
    import _name_ , { _member_ [ , _[...]_ ] } from "_module-name_";
    import "_module-name_" as _name_;

**name**

> Name of the object that will receive the imported values.

**`member, memberN`**

> Name of the exported members to be imported.

**`alias, aliasN`**

> Name of the object that will receive the imported property

**`module-name`**

> The name of the module to import. This is a file name.

### Description

The `name` parameter is the name of the object that will receive the exported members. The `member` parameters specify individual members, while the `name` parameter imports all of them. name may also be a function if the module exports a single default parameter rather than a series of members. Below are examples to clarify the syntax.

Import an entire module's contents. This inserts `myModule` into the current scope, containing all the exported bindings.

    import myModule from "my-module.js";
    import "my-module.js" as myModule; // equivalent

Import a single member of a module. This inserts `myMember` into the current scope.

    import {myMember} from "my-module.js";

Import multiple members of a module. This inserts both `foo` and `bar` into the current scope.

    import {foo, bar} from "my-module.js";

Import an entire module's contents, with some also being explicitly named. This inserts `myModule`, `foo`, and `bar` into the current scope. Note that `foo` and `myModule.foo` are the same, as are `bar` and `myModule.bar`.

    import MyModule, {foo, bar} from "my-module.js";

Import a member with a more convenient alias. This inserts `shortName` into the current scope.

    import {reallyReallyLongModuleMemberName as shortName} from "my-module.js";

Import an entire module for side effects only, without importing any bindings.

    import "my-module.js";

### Examples

Importing a secondary file to assist in processing a AJAX JSON request.

    // file.js
    function getJSON(url, callback) {
      let xhr = new XMLHttpRequest();
      xhr.onload = function () { callback(this.responseText) };
      xhr.open("GET", url, true);
      xhr.send();
    }
    
    export function getUsefulContents(url, callback) {
      getJSON(url, data => callback(JSON.parse(data)));
    }
    
    // main.js
    import {getUsefulContents} from "file.js";
    getUsefulContents("http://www.example.com", data => {
      doSomethingUseful(data);
    });



[0]: #Browser_compatibility
[1]: https://github.com/google/traceur-compiler
[2]: https://github.com/esnext/es6-module-transpiler