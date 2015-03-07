## DateTimeFormat

### Summary

The **`Intl.DateTimeFormat`** object is a constructor for objects that enable language sensitive date and time formatting.

### Syntax

    new Intl.DateTimeFormat([_locales_[, _options_]])
    Intl.DateTimeFormat.call(_this_[, _locales_[, _options_]])

### Parameters

**`locales`**

> Optional. A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the `locales` argument, see the [Intl page][0]. The following Unicode extension keys are allowed:
> 
> **`nu`**
> 
> > Numbering system. Possible values include: `"arab"`, `"arabext"`, `"bali"`, `"beng"`, `"deva"`, `"fullwide"`, `"gujr"`, `"guru"`, `"hanidec"`, `"khmr"`, `"knda"`, `"laoo"`, `"latn"`, `"limb"`, `"mlym"`, `"mong"`, `"mymr"`, `"orya"`, `"tamldec"`, `"telu"`, `"thai"`, `"tibt"`.
> 
> **`ca`**
> 
> > Calendar. Possible values include: `"buddhist"`, `"chinese"`, `"coptic"`, `"ethioaa"`, `"ethiopic"`, `"gregory"`, `"hebrew"`, `"indian"`, `"islamic"`, `"islamicc"`, `"iso8601"`, `"japanese"`, `"persian"`, `"roc"`.
> 
> 

**`options`**

> Optional. An object with some or all of the following properties:
> 
> **`localeMatcher`**
> 
> > The locale matching algorithm to use. Possible values are `"lookup"` and `"best fit"`; the default is `"best fit"`. For information about this option, see the [Intl page][1].
> 
> **`timeZone`**
> 
> > The time zone to use. The only value implementations must recognize is `"UTC"`; the default is the runtime's default time zone. Implementations may also recognize the time zone names of the [IANA time zone database][2], such as `"Asia/Shanghai"`, `"Asia/Kolkata"`, `"America/New_York"`.
> 
> **`hour12`**
> 
> > Whether to use 12-hour time (as opposed to 24-hour time). Possible values are `true` and `false`; the default is locale dependent.
> 
> **`formatMatcher`**
> 
> > The format matching algorithm to use. Possible values are `"basic"` and `"best fit"`; the default is `"best fit"`. See the following paragraphs for information about the use of this property.
> 
> The following properties describe the date-time components to use in formatted output, and their desired representations. Implementations are required to support at least the following subsets:
> 
> * `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
> * `weekday`, `year`, `month`, `day`
> * `year`, `month`, `day`
> * `year`, `month`
> * `month`, `day`
> * `hour`, `minute`, `second`
> * `hour`, `minute`
> 
> Implementations may support other subsets, and requests will be negotiated against all available subset-representation combinations to find the best match. Two algorithms are available for this negotiation and selected by the `formatMatcher` property: A [fully specified `"basic"` algorithm][3] and an implementation dependent `"best fit"` algorithm.
> 
> **`weekday`**
> 
> > The representation of the weekday. Possible values are `"narrow"`, `"short"`, `"long"`.
> 
> **`era`**
> 
> > The representation of the era. Possible values are `"narrow"`, `"short"`, `"long"`.
> 
> **`year`**
> 
> > The representation of the year. Possible values are `"numeric"`, `"2-digit"`.
> 
> **`month`**
> 
> > The representation of the month. Possible values are `"numeric"`, `"2-digit"`, `"narrow"`, `"short"`, `"long"`.
> 
> **`day`**
> 
> > The representation of the day. Possible values are `"numeric"`, `"2-digit"`.
> 
> **`hour`**
> 
> > The representation of the hour. Possible values are `"numeric"`, `"2-digit"`.
> 
> **`minute`**
> 
> > The representation of the minute. Possible values are `"numeric"`, `"2-digit"`.
> 
> **`second`**
> 
> > The representation of the second. Possible values are `"numeric"`, `"2-digit"`.
> 
> **`timeZoneName`**
> 
> > The representation of the time zone name. Possible values are `"short"`, `"long"`.
> 
> The default value for each date-time component property is [`undefined`][4], but if all component properties are [`undefined`][4], then `year`, `month`, and `day` are assumed to be `"numeric"`.
> 

### Description

### Properties

**[`Intl.DateTimeFormat.prototype`][5]**

> Allows the addition of properties to all objects.

### Methods

**[`Intl.DateTimeFormat.supportedLocalesOf()`][6]**

> Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

### `DateTimeFormat` instances

### Properties

`DateTimeFormat` instances inherit the following properties from their prototype:

**`Intl.DateTimeFormat.prototype.constructor`**

> A reference to `Intl.DateTimeFormat`.

**[`Intl.DateTimeFormat.prototype.format`][7]**

> Getter; returns a function that formats a date according to the locale and formatting options of this DateTimeFormat object.

### Methods

`DateTimeFormat` instances inherit the following methods from their prototype:

**[`Intl.DateTimeFormat.prototype.resolvedOptions()`][8]**

> Returns a new object with properties reflecting the locale and formatting options computed during initialization of the object.

### Examples

### Example: Using `DateTimeFormat`

In basic use without specifying a locale, `DateTimeFormat` uses the default locale and default options.

    var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    
    // toLocaleString without arguments depends on the implementation,
    // the default locale, and the default time zone
    console.log(new Intl.DateTimeFormat().format(date));
    // → "12/19/2012" if run in en-US locale with time zone America/Los_Angeles
    

### Example: Using `locales`

This example shows some of the variations in localized date and time formats. In order to get the format of the language used in the user interface of your application, make sure to specify that language (and possibly some fallback languages) using the `locales` argument:

    var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    
    // formats below assume the local time zone of the locale;
    // America/Los_Angeles for the US
    
    // US English uses month-day-year order
    console.log(new Intl.DateTimeFormat('en-US').format(date));
    // → "12/19/2012"
    
    // British English uses day-month-year order
    console.log(new Intl.DateTimeFormat('en-GB').format(date));
    // → "20/12/2012"
    
    // Korean uses year-month-day order
    console.log(new Intl.DateTimeFormat('ko-KR').format(date));
    // → "2012. 12. 20."
    
    // Arabic in most Arabic speaking countries uses real Arabic digits
    console.log(new Intl.DateTimeFormat('ar-EG').format(date));
    // → "٢٠‏/١٢‏/٢٠١٢"
    
    // for Japanese, applications may want to use the Japanese calendar,
    // where 2012 was the year 24 of the Heisei era
    console.log(new Intl.DateTimeFormat('ja-JP-u-ca-japanese').format(date));
    // → "24/12/20"
    
    // when requesting a language that may not be supported, such as
    // Balinese, include a fallback language, in this case Indonesian
    console.log(new Intl.DateTimeFormat(['ban', 'id']).format(date));
    // → "20/12/2012"
    

### Example: Using `options`

The date and time formats can be customized using the `options` argument:

    var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    
    // request a weekday along with a long date
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    console.log(new Intl.DateTimeFormat('de-DE', options).format(date));
    // → "Donnerstag, 20. Dezember 2012"
    
    // an application may want to use UTC and make that visible
    options.timeZone = 'UTC';
    options.timeZoneName = 'short';
    console.log(new Intl.DateTimeFormat('en-US', options).format(date));
    // → "Thursday, December 20, 2012, GMT"
    
    // sometimes you want to be more precise
    options = {
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      timeZoneName: 'short'
    };
    console.log(new Intl.DateTimeFormat('en-AU', options).format(date));
    // → "2:00:00 pm AEDT"
    
    // sometimes even the US needs 24-hour time
    options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: false
    };
    console.log(date.toLocaleString('en-US', options));
    // → "12/19/2012, 19:00:00"
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation "The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object. This page documents these properties as well as functionality common to the internationalization constructors and other language sensitive functions."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation "The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object. This page documents these properties as well as functionality common to the internationalization constructors and other language sensitive functions."
[2]: https://www.iana.org/time-zones
[3]: http://www.ecma-international.org/ecma-402/1.0/#BasicFormatMatcher
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/undefined "The global undefined value property represents the value undefined. It is one of JavaScript's primitive types."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/prototype "The Intl.DateTimeFormat.prototype property represents the prototype object for the Intl.DateTimeFormat constructor."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/supportedLocalesOf "The Intl.DateTimeFormat.supportedLocalesOf() method returns an array containing those of the provided locales that are supported in date and time formatting without having to fall back to the runtime's default locale."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/format "The format property returns a getter function that formats a date according to the locale and formatting options of this DateTimeFormat object."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/resolvedOptions "The Intl.DateTimeFormat.prototype.resolvedOptions() method returns a new object with properties reflecting the locale and date and time formatting options computed during initialization of this DateTimeFormat object."