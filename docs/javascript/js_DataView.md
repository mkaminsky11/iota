## DataView

### Summary

The **`DataView`** view provides a low-level interface for reading data from and writing it to an [`ArrayBuffer`][0].

### Syntax

    new DataView(buffer [, byteOffset [, byteLength]])

### Parameters

**`buffer`**

> An existing [`ArrayBuffer`][0] to use as the storage for the new `DataView` object.

**`byteOffset` Optional**

> The offset, in bytes, to the first byte in the specified buffer for the new view to reference. If not specified, the view of the buffer will start with the first byte.

**`byteLength` Optional**

> The number of elements in the byte array. If unspecified, length of the view will match the buffer's length.

### Return value

A new `DataView` object representing the specified data buffer.

### Errors thrown

**`[`RangeError`][1]`**

> Thrown if the `byteOffset` and `byteLength` result in the specified view extending past the end of the buffer.

### Description

### Detect endianness

You'll probably need to detect the type of architecture your script is running, here is a little trick to check it. See [Endianness][2] for more information.

    var littleEndian = (function() {
      var buffer = new ArrayBuffer(2);
      new DataView(buffer).setInt16(0, 256, true);
      return new Int16Array(buffer)[0] === 256;
    })();
    console.log(littleEndian); // true or false
    

### Properties

**DataView.length**

> The `DataView` constructor's length property whose value is 3\.

**[`DataView.prototype`][3]**

> Allows the addition of properties to all `DataView` objects.

### `DataView` instances

All `DataView` instances inherit from [`DataView.prototype`][3].

### Properties

**DataView.prototype.constructor**

> Specifies the function that creates an object's prototype. The initial value is the standard built-in `DataView` constructor.

**[`DataView.prototype.buffer`][4] Read only **

> The [`ArrayBuffer`][5] referenced by this view. Fixed at construction time and thus **read only.**

**[`DataView.prototype.byteLength`][6] Read only **

> The length (in bytes) of this view from the start of its [`ArrayBuffer`][5]. Fixed at construction time and thus **read only.**

**[`DataView.prototype.byteOffset`][7] Read only **

> The offset (in bytes) of this view from the start of its [`ArrayBuffer`][5]. Fixed at construction time and thus **read only.**

### Methods

### Read

**[`DataView.prototype.getInt8()`][8]**

> Gets a signed 8-bit integer (byte) at the specified byte offset from the start of the view.

**[`DataView.prototype.getUint8()`][9]**

> Gets an unsigned 8-bit integer (unsigned byte) at the specified byte offset from the start of the view.

**[`DataView.prototype.getInt16()`][10]**

> Gets a signed 16-bit integer (short) at the specified byte offset from the start of the view.

**[`DataView.prototype.getUint16()`][11]**

> Gets an unsigned 16-bit integer (unsigned short) at the specified byte offset from the start of the view.

**[`DataView.prototype.getInt32()`][12]**

> Gets a signed 32-bit integer (long) at the specified byte offset from the start of the view.

**[`DataView.prototype.getUint32()`][13]**

> Gets an unsigned 32-bit integer (unsigned long) at the specified byte offset from the start of the view.

**[`DataView.prototype.getFloat32()`][14]**

> Gets a signed 32-bit float (float) at the specified byte offset from the start of the view.

**[`DataView.prototype.getFloat64()`][15]**

> Gets a signed 64-bit float (double) at the specified byte offset from the start of the view.

### Write

**[`DataView.prototype.setInt8()`][16]**

> Stores a signed 8-bit integer (byte) value at the specified byte offset from the start of the view.

**[`DataView.prototype.setUint8()`][17]**

> Stores an unsigned 8-bit integer (unsigned byte) value at the specified byte offset from the start of the view.

**[`DataView.prototype.setInt16()`][18]**

> Stores a signed 16-bit integer (short) value at the specified byte offset from the start of the view.

**[`DataView.prototype.setUint16()`][19]**

> Stores an unsigned 16-bit integer (unsigned short) value at the specified byte offset from the start of the view.

**[`DataView.prototype.setInt32()`][20]**

> Stores a signed 32-bit integer (long) value at the specified byte offset from the start of the view.

**[`DataView.prototype.setUint32()`][21]**

> Stores an unsigned 32-bit integer (unsigned long) value at the specified byte offset from the start of the view.

**[`DataView.prototype.setFloat32()`][22]**

> Stores a signed 32-bit float (float) value at the specified byte offset from the start of the view.

**[`DataView.prototype.setFloat64()`][23]**

> Stores a signed 64-bit float (double) value at the specified byte offset from the start of the view.

### Example

    var buffer = new ArrayBuffer(16);
    var dv = new DataView(buffer, 0);
    
    dv.setInt16(1, 42);
    dv.getInt16(1); //42
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You can not directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer."
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RangeError "The RangeError object indicates an error when a value is not in the set or range of allowed values."
[2]: https://developer.mozilla.org/en/docs/Glossary/Endianness "Endianness: The terms endian and endianness (or byte-order) are used to describe how the computer organizes the bytes that make up numbers."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/prototype "The DataView.prototype property represents the prototype for the DataView object."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/buffer "The buffer accessor property represents the ArrayBuffer referenced by the DataView at construction time."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You can not directly manipulate the contents of an ArrayBuffer; instead, you create an one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteLength "The byteLength accessor property represents the length (in bytes) of this view from the start of its ArrayBuffer."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteOffset "The byteOffset accessor property represents the offset (in bytes) of this view from the start of its ArrayBuffer."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt8 "The getInt8() method gets a signed 8-bit integer (byte) at the specified byte offset from the start of the DataView."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint8 "The getUint8() method gets an unsigned 8-bit integer (unsigned byte) at the specified byte offset from the start of the DataView."
[10]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt16 "The getInt16() method gets a signed 16-bit integer (short) at the specified byte offset from the start of the DataView."
[11]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint16 "The getUint16() method gets an unsigned 16-bit integer (unsigned short) at the specified byte offset from the start of the DataView."
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt32 "The getInt32() method gets a signed 32-bit integer (long) at the specified byte offset from the start of the DataView."
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint32 "The getUint32() method gets an unsigned 32-bit integer (unsigned long) at the specified byte offset from the start of the DataView."
[14]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat32 "The getFloat32() method gets a signed 32-bit integer (float) at the specified byte offset from the start of the DataView."
[15]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat64 "The getFloat64() method gets a signed 64-bit float (double) at the specified byte offset from the start of the DataView."
[16]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt8 "The setInt8() method stores a signed 8-bit integer (byte) value at the specified byte offset from the start of the DataView."
[17]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint8 "The setUint8() method stores an unsigned 8-bit integer (byte) value at the specified byte offset from the start of the DataView."
[18]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt16 "The setInt16() method stores a signed 16-bit integer (short) value at the specified byte offset from the start of the DataView."
[19]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint16 "The setUint16() method stores an unsigned 16-bit integer (unsigned short) value at the specified byte offset from the start of the DataView."
[20]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt32 "The setInt32() method stores a signed 32-bit integer (long) value at the specified byte offset from the start of the DataView."
[21]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint32 "The setUint32() method stores an unsigned 32-bit integer (unsigned long) value at the specified byte offset from the start of the DataView."
[22]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat32 "The setFloat32() method stores a signed 32-bit integer (float) value at the specified byte offset from the start of the DataView."
[23]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat64 "The setFloat64() method stores a signed 64-bit integer (double) value at the specified byte offset from the start of the DataView."