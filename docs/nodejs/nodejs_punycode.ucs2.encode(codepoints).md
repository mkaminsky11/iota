## punycode.ucs2.encode(codePoints)

## 

Creates a string based on an array of numeric code point values.

    punycode.ucs2.encode([0x61, 0x62, 0x63]); // 'abc'
    punycode.ucs2.encode([0x1D306]); // '\uD834\uDF06'