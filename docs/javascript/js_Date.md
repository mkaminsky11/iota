## Date

### Summary

Creates a JavaScript **`Date`** instance that represents a single moment in time. `Date` objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC.

### Constructor

    new Date();
    new Date(_value_);
    new Date(_dateString_);
    new Date(_year_, _month_[, _day_[, _hour_[, _minutes_[, _seconds_[, _milliseconds_]]]]]);
    

**Note:** JavaScript `Date` objects can only be instantiated by calling JavaScript `Date` as a constructor: calling it as a regular function (i.e. without the [`new`][0] operator) will return a string rather than a `Date` object; unlike other JavaScript object types, JavaScript `Date` objects have no literal syntax.

### Parameters

**Note:** Where `Date` is called as a constructor with more than one argument, if values are greater than their logical range (e.g. 13 is provided as the month value or 70 for the minute value), the adjacent value will be adjusted. E.g. `new Date(2013, 13, 1)` is equivalent to `new Date(2014, 1, 1)`, both create a date for `2014-02-01` (note that the month is 0-based). Similarly for other values: `new Date(2013, 2, 1, 0, 70)` is equivalent to `new Date(2013, 2, 1, 1, 10)` which both create a date for `2013-03-01T01:10:00`.

**Note:** Where `Date` is called as a constructor with more than one argument, the specifed arguments represent local time. If UTC is desired, use `new Date([`Date.UTC(...)`][1])` with the same arguments.

**`value`**

> Integer value representing the number of milliseconds since 1 January 1970 00:00:00 UTC (Unix Epoch).

**`dateString`**

> String value representing a date. The string should be in a format recognized by the [`Date.parse()`][2] method ([IETF-compliant RFC 2822 timestamps][3] and also a [version of ISO8601][4]).

**`year`**

> Integer value representing the year. Values from 0 to 99 map to the years 1900 to 1999\. See the [example below][5].

**`month`**

> Integer value representing the month, beginning with 0 for January to 11 for December.

**`day`**

> Optional. Integer value representing the day of the month.

**`hour`**

> Optional. Integer value representing the hour of the day.

**`minute`**

> Optional. Integer value representing the minute segment of a time.

**`second`**

> Optional. Integer value representing the second segment of a time.

**`millisecond`**

> Optional. Integer value representing the millisecond segment of a time.

### Description

* If no arguments are provided, the constructor creates a JavaScript `Date` object for the current date and time according to system settings.
* If at least two arguments are supplied, missing arguments are either set to 1 (if day is missing) or 0 for all others.
* The JavaScript date is based on a time value that is milliseconds since midnight 01 January, 1970 UTC. A day holds 86,400,000 milliseconds. The JavaScript `Date` object range is -100,000,000 days to 100,000,000 days relative to 01 January, 1970 UTC.
* The JavaScript `Date` object provides uniform behavior across platforms. The time value can be passed between systems to represent the same moment in time and if used to create a local date object, will reflect the local equivalent of the time.
* The JavaScript `Date` object supports a number of UTC (universal) methods, as well as local time methods. UTC, also known as Greenwich Mean Time (GMT), refers to the time as set by the World Time Standard. The local time is the time known to the computer where JavaScript is executed.
* Invoking JavaScript `Date` as a function (i.e., without the [`new`][0] operator) will return a string representing the current date and time.

### Properties
_For properties available on `Date` instances, see [Properties of Date instances][6]._

**[`Date.prototype`][7]**

> Allows the addition of properties to a JavaScript `Date` object.

**`Date.length`**

> The value of `Date.length` is 7\. This is the number of arguments handled by the constructor.

Properties inherited from [`Function`][8]:
[`arity`][9], [`caller`][10], [`constructor`][11], [`length`][12], [`name`][13]

### Methods
_For methods available on `Date` instances, see [Methods of Date instances][14]._

**[`Date.now()`][15]**

> Returns the numeric value corresponding to the current time - the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.

**[`Date.parse()`][2]**

> Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00, UTC.

**[`Date.UTC()`][1]**

> Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC.

Methods inherited from [`Function`][8]:
[`apply`][16], [`call`][17], [`toSource`][18], [`toString`][19]

### JavaScript `Date` instances

All `Date` instances inherit from [`Date.prototype`][7]. The prototype object of the `Date` constructor can be modified to affect all `Date` instances.

### Date.prototype Methods

### Getter

**[`Date.prototype.getDate()`][20]**

> Returns the day of the month (1-31) for the specified date according to local time.

**[`Date.prototype.getDay()`][21]**

> Returns the day of the week (0-6) for the specified date according to local time.

**[`Date.prototype.getFullYear()`][22]**

> Returns the year (4 digits for 4-digit years) of the specified date according to local time.

**[`Date.prototype.getHours()`][23]**

> Returns the hour (0-23) in the specified date according to local time.

**[`Date.prototype.getMilliseconds()`][24]**

> Returns the milliseconds (0-999) in the specified date according to local time.

**[`Date.prototype.getMinutes()`][25]**

> Returns the minutes (0-59) in the specified date according to local time.

**[`Date.prototype.getMonth()`][26]**

> Returns the month (0-11) in the specified date according to local time.

**[`Date.prototype.getSeconds()`][27]**

> Returns the seconds (0-59) in the specified date according to local time.

**[`Date.prototype.getTime()`][28]**

> Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC (negative for prior times).

**[`Date.prototype.getTimezoneOffset()`][29]**

> Returns the time-zone offset in minutes for the current locale.

**[`Date.prototype.getUTCDate()`][30]**

> Returns the day (date) of the month (1-31) in the specified date according to universal time.

**[`Date.prototype.getUTCDay()`][31]**

> Returns the day of the week (0-6) in the specified date according to universal time.

**[`Date.prototype.getUTCFullYear()`][32]**

> Returns the year (4 digits for 4-digit years) in the specified date according to universal time.

**[`Date.prototype.getUTCHours()`][33]**

> Returns the hours (0-23) in the specified date according to universal time.

**[`Date.prototype.getUTCMilliseconds()`][34]**

> Returns the milliseconds (0-999) in the specified date according to universal time.

**[`Date.prototype.getUTCMinutes()`][35]**

> Returns the minutes (0-59) in the specified date according to universal time.

**[`Date.prototype.getUTCMonth()`][36]**

> Returns the month (0-11) in the specified date according to universal time.

**[`Date.prototype.getUTCSeconds()`][37]**

> Returns the seconds (0-59) in the specified date according to universal time.

**[`Date.prototype.getYear()`][38] __**

> Returns the year (usually 2-3 digits) in the specified date according to local time. Use [`getFullYear()`][22] instead.

### Setter

**[`Date.prototype.setDate()`][39]**

> Sets the day of the month for a specified date according to local time.

**[`Date.prototype.setFullYear()`][40]**

> Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time.

**[`Date.prototype.setHours()`][41]**

> Sets the hours for a specified date according to local time.

**[`Date.prototype.setMilliseconds()`][42]**

> Sets the milliseconds for a specified date according to local time.

**[`Date.prototype.setMinutes()`][43]**

> Sets the minutes for a specified date according to local time.

**[`Date.prototype.setMonth()`][44]**

> Sets the month for a specified date according to local time.

**[`Date.prototype.setSeconds()`][45]**

> Sets the seconds for a specified date according to local time.

**[`Date.prototype.setTime()`][46]**

> Sets the [`Date`][47] object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC, allowing for negative numbers for times prior.

**[`Date.prototype.setUTCDate()`][48]**

> Sets the day of the month for a specified date according to universal time.

**[`Date.prototype.setUTCFullYear()`][49]**

> Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to universal time.

**[`Date.prototype.setUTCHours()`][50]**

> Sets the hour for a specified date according to universal time.

**[`Date.prototype.setUTCMilliseconds()`][51]**

> Sets the milliseconds for a specified date according to universal time.

**[`Date.prototype.setUTCMinutes()`][52]**

> Sets the minutes for a specified date according to universal time.

**[`Date.prototype.setUTCMonth()`][53]**

> Sets the month for a specified date according to universal time.

**[`Date.prototype.setUTCSeconds()`][54]**

> Sets the seconds for a specified date according to universal time.

**[`Date.prototype.setYear()`][55] __**

> Sets the year (usually 2-3 digits) for a specified date according to local time. Use [`setFullYear()`][40] instead.

### Conversion getter

**[`Date.prototype.toDateString()`][56]**

> Returns the "date" portion of the [`Date`][47] as a human-readable string.

**[`Date.prototype.toISOString()`][57]**

> Converts a date to a string following the ISO 8601 Extended Format.

**[`Date.prototype.toJSON()`][58]**

> Returns a string representing the [`Date`][47] using [`toISOString()`][57]. Intended for use by [`JSON.stringify()`][59].

**[`Date.prototype.toGMTString()`][60] __**

> Returns a string representing the [`Date`][47] based on the GMT (UT) time zone. Use [`toUTCString()`][61] instead.

**[`Date.prototype.toLocaleDateString()`][62]**

> Returns a string with a locality sensitive representation of the date portion of this date based on system settings.

**[`Date.prototype.toLocaleFormat()`][63] __**

> Converts a date to a string, using a format string.

**[`Date.prototype.toLocaleString()`][64]**

> Returns a string with a locality sensitive representation of this date. Overrides the [`Object.prototype.toLocaleString()`][65] method.

**[`Date.prototype.toLocaleTimeString()`][66]**

> Returns a string with a locality sensitive representation of the time portion of this date based on system settings.

**[`Date.prototype.toSource()`][67] __**

> Returns a string representing the source for an equivalent [`Date`][47] object; you can use this value to create a new object. Overrides the [`Object.prototype.toSource()`][68] method.

**[`Date.prototype.toString()`][69]**

> Returns a string representing the specified [`Date`][47] object. Overrides the [`Object.prototype.toString()`][70] method.

**[`Date.prototype.toTimeString()`][71]**

> Returns the "time" portion of the [`Date`][47] as a human-readable string.

**[`Date.prototype.toUTCString()`][61]**

> Converts a date to a string using the UTC timezone.

**[`Date.prototype.valueOf()`][72]**

> Returns the primitive value of a [`Date`][47] object. Overrides the [`Object.prototype.valueOf()`][73] method.

Methods inherited from [`Object`][74]:
[`__defineGetter__`][75], [`__defineSetter__`][76], [`hasOwnProperty`][77], [`isPrototypeOf`][78], [`__lookupGetter__`][79], [`__lookupSetter__`][80], [`__noSuchMethod__`][81], [`propertyIsEnumerable`][82], [`unwatch`][83], [`watch`][84]

### Examples

### Example: Several ways to create a `Date` object

The following examples show several ways to create JavaScript dates:

    var today = new Date();
    var birthday = new Date('December 17, 1995 03:24:00');
    var birthday = new Date('1995-12-17T03:24:00');
    var birthday = new Date(1995, 11, 17);
    var birthday = new Date(1995, 11, 17, 3, 24, 0);
    

### Example: Two digit years map to 1900 - 1999

In order to create and get dates between the years 0 and 99 the [`Date.prototype.setFullYear()`][40] and [`Date.prototype.getFullYear()`][22] methods should be used.

    var date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
    
    // Deprecated method, 98 maps to 1998 here as well
    date.setYear(98);           // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
    
    date.setFullYear(98);       // Sat Feb 01 0098 00:00:00 GMT+0000 (BST)
    

### Example: Calculating elapsed time

The following examples show how to determine the elapsed time between two JavaScript dates:

    // using Date objects
    var start = Date.now();
    
    // the event to time goes here:
    doSomethingForALongTime();
    var end = Date.now();
    var elapsed = end - start; // elapsed time in milliseconds
    

    // using built-in methods
    var start = new Date();
    
    // the event to time goes here:
    doSomethingForALongTime();
    var end = new Date();
    var elapsed = end.getTime() - start.getTime(); // elapsed time in milliseconds
    

    // to test a function and get back its return
    function printElapsedTime(fTest) {
      var nStartTime = Date.now(),
          vReturn = fTest(),
          nEndTime = Date.now();
    
      console.log('Elapsed time: ' + String(nEndTime - nStartTime) + ' milliseconds');
      return vReturn;
    }
    
    yourFunctionReturn = printElapsedTime(yourFunction);
    

**Note:** In browsers that support the [Web Performance API][85]'s high-resolution time feature, [`Performance.now()`][86] can provide more reliable and precise measurements of elapsed time than [`Date.now()`][15].


[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/new "The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC "The Date.UTC() method accepts the same parameters as the longest form of the constructor, and returns the number of milliseconds in a Date object since January 1, 1970, 00:00:00, universal time."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/parse "The Date.parse() method parses a string representation of a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC."
[3]: http://tools.ietf.org/html/rfc2822#page-14
[4]: http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15
[5]: #Example:_Two_digit_years_map_to_1900_-_1999
[6]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/prototype#Properties
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/prototype "The Date.prototype property represents the prototype for the Date constructor."
[8]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function
[9]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Arity
[10]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Caller
[11]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Constructor
[12]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Length
[13]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Name
[14]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/prototype#Methods
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now "The Date.now() method returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC."
[16]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Apply
[17]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/Call
[18]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/ToSource
[19]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/ToString
[20]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate "The getDate() method returns the day of the month for the specified date according to local time."
[21]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay "The getDay() method returns the day of the week for the specified date according to local time, where 0 represents Sunday."
[22]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear "The getFullYear() method returns the year of the specified date according to local time."
[23]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours "The getHours() method returns the hour for the specified date, according to local time."
[24]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds "The getMilliseconds() method returns the milliseconds in the specified date according to local time."
[25]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes "The getMinutes() method returns the minutes in the specified date according to local time."
[26]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth "The getMonth() method returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year)."
[27]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds "The getSeconds() method returns the seconds in the specified date according to local time."
[28]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime "The getTime() method returns the numeric value corresponding to the time for the specified date according to universal time."
[29]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset "The getTimezoneOffset() method returns the time-zone offset from UTC, in minutes, for the current locale."
[30]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate "The getUTCDate() method returns the day (date) of the month in the specified date according to universal time."
[31]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay "The getUTCDay() method returns the day of the week in the specified date according to universal time, where 0 represents Sunday."
[32]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear "The getUTCFullYear() method returns the year in the specified date according to universal time."
[33]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours "The getUTCHours() method returns the hours in the specified date according to universal time."
[34]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds "The getUTCMilliseconds() method returns the milliseconds in the specified date according to universal time."
[35]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes "The getUTCMinutes() method returns the minutes in the specified date according to universal time."
[36]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth "The getUTCMonth() returns the month of the specified date according to universal time."
[37]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds "The getUTCSeconds() method returns the seconds in the specified date according to universal time."
[38]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getYear "The getYear() method returns the year in the specified date according to local time. Because getYear does not return full years ("year 2000 problem"), it is no longer used and has been replaced by the getFullYear method."
[39]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate "The setDate() method sets the day of the month for a specified date according to local time."
[40]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear "The setFullYear() method sets the full year for a specified date according to local time."
[41]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours "The setHours() method sets the hours for a specified date according to local time, and returns the number of milliseconds since 1 January 1970 00:00:00 UTC until the time represented by the updated Date instance."
[42]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds "The setMilliseconds() method sets the milliseconds for a specified date according to local time."
[43]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes "The setMinutes() method sets the minutes for a specified date according to local time."
[44]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth "The setMonth() method sets the month for a specified date according to local time."
[45]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds "The setSeconds() method sets the seconds for a specified date according to local time."
[46]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime "The setTime() method sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC."
[47]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date "Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC."
[48]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCDate "The setUTCDate() method sets the day of the month for a specified date according to universal time."
[49]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear "The setUTCFullYear() method sets the full year for a specified date according to universal time."
[50]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCHours "The setUTCHours() method sets the hour for a specified date according to universal time, and returns the number of milliseconds since 1 January 1970 00:00:00 UTC until the time represented by the updated Date instance."
[51]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds "The setUTCMilliseconds() method sets the milliseconds for a specified date according to universal time."
[52]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes "The setUTCMinutes() method sets the minutes for a specified date according to universal time."
[53]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth "The setUTCMonth() method sets the month for a specified date according to universal time."
[54]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds "The setUTCSeconds() method sets the seconds for a specified date according to universal time."
[55]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/setYear "The setYear() method sets the year for a specified date according to local time. Because setYear does not set full years ("year 2000 problem"), it is no longer used and has been replaced by the setFullYear method."
[56]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString "The toDateString() method returns the date portion of a Date object in human readable form in American English."
[57]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString "The toISOString() method returns a string in ISO format (ISO 8601 Extended Format), which can be described as follows: YYYY-MM-DDTHH:mm:ss.sssZ. The timezone is always UTC as denoted by the suffix "Z"."
[58]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON "The toJSON() method returns a JSON representation of the Date object."
[59]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify "The JSON.stringify() method converts a value to JSON, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified."
[60]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toGMTString "The toGMTString() method converts a date to a string, using Internet Greenwich Mean Time (GMT) conventions. The exact format of the value returned by toGMTString() varies according to the platform and browser, in general it should represent a human readable date string."
[61]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString "The toUTCString() method converts a date to a string, using the UTC time zone."
[62]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString "The toLocaleDateString() method returns a string with a language sensitive representation of the date portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and allow to customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent."
[63]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleFormat "The non-standard toLocaleFormat() method converts a date to a string using the specified formatting. DateTimeFormat is an alternative to format dates in a standards-compliant way. See also the newer version of Date.prototype.toLocaleDateString()."
[64]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString "The toLocaleString() method returns a string with a language sensitive representation of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent."
[65]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString "The toLocaleString() method returns a string representing the object. This method is meant to be overriden by derived objects for locale-specific purposes."
[66]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString "The toLocaleTimeString() method returns a string with a language sensitive representation of the time portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent."
[67]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toSource "The toSource() method returns a string representing the source code of the object."
[68]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "The toSource() method returns a string representing the source code of the object."
[69]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toString "The toString() method returns a string representing the specified Date object."
[70]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "The toString() method returns a string representing object."
[71]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString "The toTimeString() method returns the time portion of a Date object in human readable form in American English."
[72]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf "The valueOf() method returns the primitive value of a Date object."
[73]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf "The valueOf() method returns the primitive value of the specified object."
[74]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object
[75]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineGetter
[76]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineSetter
[77]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty
[78]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/IsPrototypeOf
[79]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupGetter
[80]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupSetter
[81]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/NoSuchMethod
[82]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/PropertyIsEnumerable
[83]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/Unwatch
[84]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/Watch
[85]: https://developer.mozilla.org/en/docs/Web/API/Window/performance "The Web Performance API allows web pages access to certain functions for measuring the performance of web pages and web applications, including the Navigation Timing API and high-resolution time data."
[86]: https://developer.mozilla.org/en/docs/Web/API/Performance/now "The performance.now() method returns a DOMHighResTimeStamp, measured in milliseconds, accurate to one thousandth of a millisecond."