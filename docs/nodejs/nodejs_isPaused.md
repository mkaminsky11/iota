## readable.isPaused()

## 

This method returns whether or not the `readable` has been **explicitly**
paused by client code (using `readable.pause()` without a corresponding
`readable.resume()`).

    var readable = new stream.Readable
    
    readable.isPaused() // === false
    readable.pause()
    readable.isPaused() // === true
    readable.resume()
    readable.isPaused() // === false