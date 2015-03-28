## Window.requestAttention(Integer count)

  
Similar with the boolean version, on Windows platform you can specify number of times the frame flash(es)  
on OSX value < 0 will trigger `NSInformationalRequest` while value \> 0 will trigger `NSCriticalRequest`  
on Linux the Integer value will be casted to Boolean