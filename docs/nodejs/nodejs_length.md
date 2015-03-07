## length Number 

## 

The size of the buffer in bytes. Note that this is not necessarily the size
of the contents. `length` refers to the amount of memory allocated for the
buffer object. It does not change when the contents of the buffer are changed.

    buf = new Buffer(1234);
    
    console.log(buf.length);
    buf.write("some string", 0, "ascii");
    console.log(buf.length);
    
    // 1234
    // 1234

While the `length` property is not immutable, changing the value of `length`
can result in undefined and inconsistent behavior. Applications that wish to
modify the length of a buffer should therefore treat `length` as read-only and
use `buf.slice` to create a new buffer.

    buf = new Buffer(10);
    buf.write("abcdefghj", 0, "ascii");
    console.log(buf.length); // 10
    buf = buf.slice(0,5);
    console.log(buf.length); // 5