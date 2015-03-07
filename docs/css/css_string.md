## string

### Summary

The `<string>` [CSS][0] data type represents a string. It is formed by a [Unicode][1] characters delimited by either double (") or single (') quotes. A double quoted string cannot contain double quotes unless escaped using a backslash (\\). The same practice applies for single quoted strings, they cannot contain single quotes unless escaped using a backslash (\\). The backslash character must be escaped to be part of the string.

New lines are not accepted unless escaped by using a line feed character such as \\A or \\00000a. However, strings can span over several lines. In that case, the new line must be escaped using a \\ as the last character of the line.

Characters can be described using their [Unicode code point][2] in hexadecimal, when escaped using \\. \\27 represents the single quote (').

### Examples

    /* Simple quote escaping */
    "Awesome string with double quotes"
    "Awesome string with \" escaped double quotes"
    'Awesome string with single quotes'
    "Awesome string with \' escaped single quotes"
    
    /* New line in a string */
    "Awesome string with \Aline break"
    
    /* String spanning over two lines (these two strings are exactly the same) */
    "A really long \
    awesome string"
    "A really long awesome string"
    

**Note:** Double quoted strings can also be escaped using \\22 and single quoted strings can be escaped using \\27\.


[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: http://en.wikipedia.org/wiki/Unicode "http://en.wikipedia.org/wiki/Unicode"
[2]: http://en.wikipedia.org/wiki/Unicode#Code_point_planes_and_blocks "http://en.wikipedia.org/wiki/Unicode#Code_point_planes_and_blocks"