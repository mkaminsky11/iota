## punycode.ucs2.decode(string)

## 

Creates an array containing the numeric code point values of each Unicode
symbol in the string. While [JavaScript uses UCS-2
internally][0], this function
will convert a pair of surrogate halves (each of which UCS-2 exposes as
separate characters) into a single code point, matching UTF-16\.

    punycode.ucs2.decode('abc'); // [0x61, 0x62, 0x63]
    // surrogate pair for U+1D306 tetragram for centre:
    punycode.ucs2.decode('\uD834\uDF06'); // [0x1D306]



[0]: http://mathiasbynens.be/notes/javascript-encoding