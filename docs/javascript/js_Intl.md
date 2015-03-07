## Intl

### Summary

The **`Intl`** object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for [`Collator`][0], [`NumberFormat`][1], and [`DateTimeFormat`][2] objects are properties of the `Intl` object. This page documents these properties as well as functionality common to the internationalization constructors and other language sensitive functions.

### Properties

**[`Intl.Collator`][0]**

> Constructor for collators, objects that enable language sensitive string comparison.

**[`Intl.DateTimeFormat`][2]**

> Constructor for objects that enable language sensitive date and time formatting.

**[`Intl.NumberFormat`][1]**

> Constructor for objects that enable language sensitive number formatting.

### Locale identification and negotiation

The internationalization constructors as well as several language sensitive methods of other constructors (listed under [See also][3]) use a common pattern for identifying locales and determing the one they will actually use: they all accept `locales` and `options` arguments, and negotiate the requested locale(s) against the locales they support using an algorithm specified in the `options.localeMatcher` property.

### `locales` argument

The `locales` argument must be either a string holding a [BCP 47 language tag][4], or an array of such language tags. If the `locales` argument is not provided or is undefined, the runtime's default locale is used.

A BCP 47 language tag identifies a language or locale (the difference between the two is fuzzy). In their most common form it can contain, in this order: a language code, a script code, and a country code, all separated by hyphens. Examples:

* `"hi"`: Hindi.
* `"de-AT"`: German as used in Austria.
* `"zh-Hans-CN"`: Chinese written in simplified characters as used in China.

The subtags identifying languages, scripts, countries (regions), and (rarely used) variants in BCP 47 language tags can be found in the [IANA Language Subtag Registry][5].

BCP 47 also allows for extensions, and one of them matters to the JavaScript internationalization functions: the `"u"` (Unicode) extension. It can be used to request a customization of the locale-specific behavior of a [`Collator`][0], [`NumberFormat`][1], or [`DateTimeFormat`][2] object. Examples:

* `"de-DE-u-co-phonebk"`: Use the phonebook variant of the German sort order, which expands umlauted vowels to character pairs: ä → ae, ö → oe, ü → ue.
* `"th-TH-u-nu-thai"`: Use Thai digits (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) in number formatting.
* `"ja-JP-u-ca-japanese"`: Use the Japanese calendar in date and time formatting, so that 2013 is expressed as the year 25 of the Heisei period, or 平成25\.

### Locale negotiation

The `locales` argument, after stripping off all Unicode extensions, is interpreted as a prioritized request from the application. The runtime compares it against the locales it has available and picks the best one available. Two matching algorithms exist: the `"lookup"` matcher follows the Lookup algorithm specified in [BCP 47][6]; the `"best fit"` matcher lets the runtime provide a locale that's at least, but possibly more, suited for the request than the result of the Lookup algorithm. If the application doesn't provide a `locales` argument, or the runtime doesn't have a locale that matches the request, then the runtime's default locale is used. The matcher can be selected using a property of the `options` argument (see below).

If the selected language tag had a Unicode extension substring, that extension is now used to customize the constructed object or the behavior of the function. Each constructor or function supports only a subset of the keys defined for the Unicode extension, and the supported values often depend on the language tag. For example, the `"co"` key (collation) is only supported by [`Collator`][0], and its `"phonebk"` value is only supported for German.

### `options` argument

The `options` argument must be an object with properties that vary between constructors and functions. If the `options` argument is not provided or is undefined, default values are used for all properties.

One property is supported by all language sensitive constructors and functions: The `localeMatcher` property, whose value must be a string `"lookup"` or `"best fit"` and which selects one of the locale matching algorithms described above.


[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Collator "The Intl.Collator object is a constructor for collators, objects that enable language sensitive string comparison."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat "The Intl.NumberFormat object is a constructor for objects that enable language sensitive number formatting."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat "The Intl.DateTimeFormat object is a constructor for objects that enable language sensitive date and time formatting."
[3]: #See_also
[4]: http://tools.ietf.org/html/rfc5646
[5]: http://www.iana.org/assignments/language-subtag-registry
[6]: http://tools.ietf.org/html/rfc4647#section-3.4