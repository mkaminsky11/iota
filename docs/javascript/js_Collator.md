## Collator

### Summary

The **`Intl.Collator`** object is a constructor for collators, objects that enable language sensitive string comparison.

### Syntax

    new Intl.Collator([_locales_[, _options_]])
    Intl.Collator.call(_this_[, _locales_[, _options_]])

### Parameters

**`locales`**

> Optional. A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the `locales` argument, see the [Intl page][0]. The following Unicode extension keys are allowed:
> 
> **`co`**
> 
> > Variant collations for certain locales. Possible values include: `"big5han"`, `"dict"`, `"direct"`, `"ducet"`, `"gb2312"`, `"phonebk"`, `"phonetic"`, `"pinyin"`, `"reformed"`, `"searchjl"`, `"stroke"`, `"trad"`, `"unihan"`. The `"standard"` and `"search"` values are ignored; they are replaced by the `options` property `usage` (see below).
> 
> **`kn`**
> 
> > Whether numeric collation should be used, such that "1" < "2" < "10". Possible values are `"true"` and `"false"`. This option can be set through an `options` property or through a Unicode extension key; if both are provided, the `options` property takes precedence.
> 
> **`kf`**
> 
> > Whether upper case or lower case should sort first. Possible values are `"upper"`, `"lower"`, or `"false"` (use the locale's default). This option can be set through an `options` property or through a Unicode extension key; if both are provided, the `options` property takes precedence.
> 
> 

**`options`**

> Optional. An object with some or all of the following properties:
> 
> **`localeMatcher`**
> 
> > The locale matching algorithm to use. Possible values are `"lookup"` and `"best fit"`; the default is `"best fit"`. For information about this option, see the [Intl page][1].
> 
> **`usage`**
> 
> > Whether the comparison is for sorting or for searching for matching strings. Possible values are `"sort"` and `"search"`; the default is `"sort"`.
> 
> **`sensitivity`**
> 
> > Which differences in the strings should lead to non-zero result values. Possible values are:
> > 
> > * `"base"`: Only strings that differ in base letters compare as unequal. Examples: `a ≠ b`, `a = á`, `a = A`.
> > * `"accent"`: Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: `a ≠ b`, `a ≠ á`, `a = A`.
> > * `"case"`: Only strings that differ in base letters or case compare as unequal. Examples: `a ≠ b`, `a = á`, `a ≠ A`.
> > * `"variant"`: Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: `a ≠ b`, `a ≠ á`, `a ≠ A`.
> > 
> > The default is `"variant"` for usage `"sort"`; it's locale dependent for usage `"search"`.
> > 
> 
> **`ignore­Punctua­tion`**
> 
> > Whether punctuation should be ignored. Possible values are `true` and `false`; the default is `false`.
> 
> **`numeric`**
> 
> > Whether numeric collation should be used, such that "1" < "2" < "10". Possible values are `true` and `false`; the default is `false`. This option can be set through an `options` property or through a Unicode extension key; if both are provided, the `options` property takes precedence. Implementations are not required to support this property.
> 
> **`caseFirst`**
> 
> > Whether upper case or lower case should sort first. Possible values are `"upper"`, `"lower"`, or `"false"` (use the locale's default); the default is `"false"`. This option can be set through an `options` property or through a Unicode extension key; if both are provided, the `options` property takes precedence. Implementations are not required to support this property.
> 
> 

### Description

### Properties

**[`Intl.Collator.prototype`][2]**

> Allows the addition of properties to all objects.

### Methods

**[`Intl.Collator.supportedLocalesOf()`][3]**

> Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

### `Collator` instances

### Properties

`Collator` instances inherit the following properties from their prototype:

**[`Intl.Collator.prototype.compare`][4]**

> Getter; returns a function that compares two strings according to the sort order of this Collator object.

**`Intl.Collator.protoype.constructor`**

> A reference to `Intl.Collator`.

### Methods

`Collator` instances inherit the following methods from their prototype:

**[`Intl.Collator.prototype.resolvedOptions()`][5]**

> Returns a new object with properties reflecting the locale and collation options computed during initialization of the object.

### Examples

### Example: Using `Collator`

The following example demonstrates the different potential results for a string occurring before, after, or at the same level as another:

    console.log(new Intl.Collator().compare('a', 'c')); // → a negative value
    console.log(new Intl.Collator().compare('c', 'a')); // → a positive value
    console.log(new Intl.Collator().compare('a', 'a')); // → 0
    

Note that the results shown in the code above can vary between browsers and browser versions. This is because the values are implementation-specific. That is, the specification requires only that the before and after values are negative and positive.

### Example: Using `locales`

The results provided by [`Collator.prototype.compare()`][4] vary between languages. In order to get the sort order of the language used in the user interface of your application, make sure to specify that language (and possibly some fallback languages) using the `locales` argument:

    // in German, ä sorts with a
    console.log(new Intl.Collator('de').compare('ä', 'z'));
    // → a negative value
    
    // in Swedish, ä sorts after z
    console.log(new Intl.Collator('sv').compare('ä', 'z'));
    // → a positive value
    

### Example: Using `options`

The results provided by [`Collator.prototype.compare()`][4] can be customized using the `options` argument:

    // in German, ä has a as the base letter
    console.log(new Intl.Collator('de', { sensitivity: 'base' }).compare('ä', 'a'));
    // → 0
    
    // in Swedish, ä and a are separate base letters
    console.log(new Intl.Collator('sv', { sensitivity: 'base' }).compare('ä', 'a'));
    // → a positive value
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation "The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object. This page documents these properties as well as functionality common to the internationalization constructors and other language sensitive functions."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation "The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object. This page documents these properties as well as functionality common to the internationalization constructors and other language sensitive functions."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Collator/prototype "The Intl.Collator.prototype property represents the prototype object for the Intl.Collator constructor."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Collator/supportedLocalesOf "The Intl.Collator.supportedLocalesOf() method returns an array containing those of the provided locales that are supported in collation without having to fall back to the runtime's default locale."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Collator/compare "The Intl.Collator.prototype.compare property returns a getter function that compares two strings according to the sort order of this Collator object."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Collator/resolvedOptions "The Intl.Collator.prototype.resolvedOptions() method returns a new object with properties reflecting the locale and collation options computed during initialization of this Collator object."