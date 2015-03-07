## NumberFormat

### Summary

The **`Intl.NumberFormat`** object is a constructor for objects that enable language sensitive number formatting.

### Syntax

    new Intl.NumberFormat([_locales_[, _options_]])
    Intl.NumberFormat.call(_this_[, _locales_[, _options_]])
    

### Parameters

**`locales`**

> Optional. A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the `locales` argument, see the [Intl page][0]. The following Unicode extension key is allowed:
> 
> **`nu`**
> 
> > The numbering system to be used. Possible values include: `"arab"`, `"arabext"`, `"bali"`, `"beng"`, `"deva"`, `"fullwide"`, `"gujr"`, `"guru"`, `"hanidec"`, `"khmr"`, `"knda"`, `"laoo"`, `"latn"`, `"limb"`, `"mlym"`, `"mong"`, `"mymr"`, `"orya"`, `"tamldec"`, `"telu"`, `"thai"`, `"tibt"`.
> 
> 

**`options`**

> Optional. An object with some or all of the following properties:
> 
> **`localeMatcher`**
> 
> > The locale matching algorithm to use. Possible values are `"lookup"` and `"best fit"`; the default is `"best fit"`. For information about this option, see the [Intl page][1].
> 
> **`style`**
> 
> > The formatting style to use. Possible values are `"decimal"` for plain number formatting, `"currency"` for currency formatting, and `"percent"` for percent formatting; the default is `"decimal"`.
> 
> **`currency`**
> 
> > The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as `"USD"` for the US dollar, `"EUR"` for the euro, or `"CNY"` for the Chinese RMB --- see the [Current currency & funds code list][2]. There is no default value; if the `style` is `"currency"`, the `currency` property must be provided.
> 
> **`currencyDisplay`**
> 
> > How to display the currency in currency formatting. Possible values are `"symbol"` to use a localized currency symbol such as €, `"code"` to use the ISO currency code, `"name"` to use a localized currency name such as `"dollar"`; the default is `"symbol"`.
> 
> **`useGrouping`**
> 
> > Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators. Possible values are `true` and `false`; the default is `true`.
> 
> The following properties fall into two groups: `minimumIntegerDigits`, `minimumFractionDigits`, and `maximumFractionDigits` in one group, `minimumSignificantDigits` and `maximumSignificantDigits` in the other. If at least one property from the second group is defined, then the first group is ignored.
> 
> **`minimumIntegerDigits`**
> 
> > The minimum number of integer digits to use. Possible values are from 1 to 21; the default is 1\.
> 
> **`minimumFractionDigits`**
> 
> > The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the [ISO 4217 currency code list][2] (2 if the list doesn't provide that information).
> 
> **`maximumFractionDigits`**
> 
> > The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of `minimumFractionDigits` and 3; the default for currency formatting is the larger of `minimumFractionDigits` and the number of minor unit digits provided by the [ISO 4217 currency code list][2] (2 if the list doesn't provide that information); the default for percent formatting is the larger of `minimumFractionDigits` and 0\.
> 
> **`minimumSignificantDigits`**
> 
> > The minimum number of significant digits to use. Possible values are from 1 to 21; the default is 1\.
> 
> **`maximumSignificantDigits`**
> 
> > The maximum number of significant digits to use. Possible values are from 1 to 21; the default is `minimumSignificantDigits`.
> 
> 

### Description

### Properties

**[`Intl.NumberFormat.prototype`][3]**

> Allows the addition of properties to all objects.

### Methods

**[`Intl.NumberFormat.supportedLocalesOf()`][4]**

> Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

### `NumberFormat` instances

### Properties

`NumberFormat` instances inherit the following properties from their prototype:

**`Intl.NumberFormat.prototype.constructor`**

> A reference to `Intl.NumberFormat`.

**[`Intl.NumberFormat.prototype.format`][5]**

> Getter; returns a function that formats a number according to the locale and formatting options of this [`NumberFormat`][6] object.

### Methods

`NumberFormat` instances inherit the following methods from their prototype:

**[`Intl.NumberFormat.prototype.resolvedOptions()`][7]**

> Returns a new object with properties reflecting the locale and collation options computed during initialization of the object.

### Examples

### Example: Basic usage

In basic use without specifying a locale, a formatted string in the default locale and with default options is returned.

    var number = 3500;
    
    console.log(new Intl.NumberFormat().format(number));
    // → '3,500' if in US English locale
    

### Example: Using `locales`

This example shows some of the variations in localized number formats. In order to get the format of the language used in the user interface of your application, make sure to specify that language (and possibly some fallback languages) using the `locales` argument:

    var number = 123456.789;
    
    // German uses comma as decimal separator and period for thousands
    console.log(new Intl.NumberFormat('de-DE').format(number));
    // → 123.456,789
    
    // Arabic in most Arabic speaking countries uses real Arabic digits
    console.log(new Intl.NumberFormat('ar-EG').format(number));
    // → ١٢٣٤٥٦٫٧٨٩
    
    // India uses thousands/lakh/crore separators
    console.log(new Intl.NumberFormat('en-IN').format(number));
    // → 1,23,456.789
    
    // the nu extension key requests a numbering system, e.g. Chinese decimal
    console.log(new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec').format(number));
    // → 一二三,四五六.七八九
    
    // when requesting a language that may not be supported, such as
    // Balinese, include a fallback language, in this case Indonesian
    console.log(new Intl.NumberFormat(['ban', 'id']).format(number));
    // → 123.456,789
    

### Example: Using `options`

The results can be customized using the `options` argument:

    var number = 123456.789;
    
    // request a currency format
    console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
    // → 123.456,79 €
    
    // the Japanese yen doesn't use a minor unit
    console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));
    // → ￥123,457
    
    // limit to three significant digits
    console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
    // → 1,23,000
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation "The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object. This page documents these properties as well as functionality common to the internationalization constructors and other language sensitive functions."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation "The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object. This page documents these properties as well as functionality common to the internationalization constructors and other language sensitive functions."
[2]: http://www.currency-iso.orghttps://developer.mozilla.org/en/home/tables/table-a1.html
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/prototype "The Intl.NumberFormat.prototype property represents the prototype object for the Intl.NumberFormat constructor."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/supportedLocalesOf "The Intl.NumberFormat.supportedLocalesOf() method returns an array containing those of the provided locales that are supported in number formatting without having to fall back to the runtime's default locale."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/format "The Intl.NumberFormat.prototype.format property returns a getter function that formats a number according to the locale and formatting options of this NumberFormat object."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat "The Intl.NumberFormat object is a constructor for objects that enable language sensitive number formatting."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/resolvedOptions "The Intl.NumberFormat.prototype.resolvedOptions() method returns a new object with properties reflecting the locale and number formatting options computed during initialization of this NumberFormat object."