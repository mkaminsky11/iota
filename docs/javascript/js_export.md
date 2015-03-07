## export

### Summary

The **export statement** is used to allow a signed script to provide properties, functions, and objects to other signed or unsigned scripts. It is an ancient Netscape 4 feature that has been removed in Firefox 3.5 ([bug 447713][0]). In the future, a new export declaration will be specified by ECMAScript 6 modules.

### Syntax

    Example 1:
    export _name1_, _name2_, ..., _nameN_;
    
    Example 2:
    export *; 

**`_nameN_`**

> Property, function, or object to be exported.

### Description

Typically, information in a signed script is available only to scripts signed by the same principals. By exporting properties, functions, or objects, a signed script makes this information available to any script (signed or unsigned). The receiving script uses the companion import statement to access the information.

Example 1 shows the syntax for exporting specified properties, functions, and objects.

Example 2 shows the syntax for exporting all the properties, functions, and objects from the script.


[0]: https://bugzilla.mozilla.org/show_bug.cgi?id=447713 "FIXED: Remove the import/export functionality from spidermonkey"