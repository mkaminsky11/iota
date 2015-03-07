## :fullscreen

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The` :fullscreen `CSS [pseudo-class][1] applies to any element that's currently being displayed in full-screen mode. See [Using full-screen mode][2] for details.

The W3C proposal uses the single word `:fullscreen`, that is without a dash, but both the Webkit and Gecko experimental implementations use a prefixed variant with two words linked by a dash: `:-webkit-full-screen` and `:-moz-full-screen`, respectively.

### Examples

    *:fullscreen {
      position:fixed;
      top:0; 
      right:0; 
      bottom:0; 
      left:0;
      margin:0;
      box-sizing:border-box;
      width:100%;
      height:100%;
      object-fit:contain;
    }

    h1:fullscreen {
      border:1px solid #f00;
    }

    p:fullscreen {
      font-size: 200%;
    }



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/CSS/Pseudo-classes "en/CSS/Pseudo-classes"
[2]: https://developer.mozilla.org/en/DOM/Using_full-screen_mode "en/DOM/Using full-screen mode"