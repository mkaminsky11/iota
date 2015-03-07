## ArrayBuffer

### Summary

The **`ArrayBuffer`** object is used to represent a generic, fixed-length raw binary data buffer. You can not directly manipulate the contents of an `ArrayBuffer`; instead, you create one of the [typed array objects][0] or a [`DataView`][1] object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.

### Syntax

    new ArrayBuffer(length)
    

### Parameters

**length**

> The size, in bytes, of the array buffer to create.

### Return value

A new `ArrayBuffer` object of the specified size. Its contents are initialized to 0\.

### Description

The `ArrayBuffer` constructor creates a new `ArrayBuffer` of the given length in bytes.

### Getting an array buffer from existing data

* [From a Base64 string][2]
* [From a local file][3]

### Properties

**ArrayBuffer.length**

> The `ArrayBuffer` constructor's length property whose value is 1\.

**[`ArrayBuffer.prototype`][4]**

> Allows the addition of properties to all `ArrayBuffer` objects.

### Methods

**[`ArrayBuffer.isView(arg)`][5]**

> Returns `true` if `arg` is a view one of the ArrayBuffer views, such as [typed array objects][0] or a [`DataView`][1]. Returns `false` otherwise.

**[`ArrayBuffer.transfer(oldBuffer [, newByteLength])`][6] __**

> Returns a new `ArrayBuffer` whose contents are taken from the `oldBuffer`'s data and then is either truncated or zero-extended by `newByteLength`.
> 

### `ArrayBuffer` instances

All `ArrayBuffer` instances inherit from [`ArrayBuffer.prototype`][4].

### Properties

**ArrayBuffer.prototype.constructor**

> Specifies the function that creates an object's prototype. The initial value is the standard built-in `ArrayBuffer` constructor.

**[`ArrayBuffer.prototype.byteLength`][7] Read only **

> The size, in bytes, of the array. This is established when the array is constructed and cannot be changed. **Read only.**

### Methods

**[`ArrayBuffer.prototype.slice()`][8]**

> Returns a new `ArrayBuffer` whose contents are a copy of this `ArrayBuffer`'s bytes from `begin`, inclusive, up to `end`, exclusive. If either `begin` or `end` is negative, it refers to an index from the end of the array, as opposed to from the beginning.

### Example

In this example, we create a 8-byte buffer with a [`Int32Array`][9] view referring to the buffer:

    var buffer = new ArrayBuffer(8);
    var view   = new Int32Array(buffer);



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DataView "The DataView view provides a low-level interface for reading data from and writing it to an ArrayBuffer."
[2]: https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Appendix.3A_Decode_a_Base64_string_to_Uint8Array_or_ArrayBuffer
[3]: https://developer.mozilla.org/en/docs/Web/API/FileReader#readAsArrayBuffer()
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/prototype "The ArrayBuffer.prototype property represents the prototype for the ArrayBuffer object."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView "The ArrayBuffer.isView() method returns true if arg is a view one of the ArrayBuffer views, such as typed array objects or a DataView; false otherwise."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transfer "The static ArrayBuffer.transfer() method returns a new ArrayBuffer whose contents are taken from the oldBuffer's data and then is either truncated or zero-extended by newByteLength. If newByteLength is undefined, the byteLength of the oldBuffer is used. This operation leaves oldBuffer in a detached state."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength "The byteLength accessor property represents the length of an ArrayBuffer in bytes."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice "The slice() method returns a new ArrayBuffer whose contents are a copy of this ArrayBuffer's bytes from begin, inclusive, up to end, exclusive."
[9]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Int32Array "The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."