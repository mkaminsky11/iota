## Window.capturePage(callback \[, image\_format | config\_object \])

Captures the visible area of the window. Note: a simple demo usage can be found here: https://gist.github.com/zhchbin/4749217 

`callback` should be a function that will be called when the the image data is ready. It looks like this:

    function(dataUrl) {...};
    

A `dataURL(string)` which encodes an image of the visible area of the captured
window. May be assigned to the 'src' property of an HTML Image element for display.

`image_format` is enumerated string \["jpeg", "png"\]. Default is 'jpeg'.

It is now possible to define the `datatype` of the returned image by using an `config_object` as the second parameter.

This object should be like: 
    
    { 
     format : "[jpeg|png]", 
     datatype : "[raw|buffer|datauri]" 
    }
    

Where:  
`format` defaults to `jpeg`  
`datatype` defaults to `datauri`  

Example usage:

    // png as base64string
    win.capturePage(function(base64string){
     // do something with the base64string
    }, { format : 'png', datatype : 'raw'} );
    
    // png as node buffer
    win.capturePage(function(buffer){
     // do something with the buffer
    }, { format : 'png', datatype : 'buffer'} );