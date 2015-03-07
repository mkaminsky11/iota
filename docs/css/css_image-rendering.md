## image-rendering

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `image-rendering` [CSS][1] property provides a hint to the user agent about how to handle its image rendering.  It applies to any images appearing on the element properties, but has no effect on non-scaled images.. For example, if the natural size of the image is_100×100px _but the page author specifies the dimensions to `200×200px` (or `50×50px`), then the image will be upscaled (or downscaled) to the new dimensions using the specified algorithm. Scaling may also apply due to user interaction (zooming).

* _[Initial value][2]_ `auto` 
* _Applies to_ all elements 
* _[Inherited][3]_ yes 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: auto [|][7] crisp-edges [|][7] pixelated

    image-rendering: auto
    image-rendering: crisp-edges
    image-rendering: pixelated
    
    image-rendering: inherit
    

### Values

**`**auto**`**

> Default value, the image should be scaled with an algorithm that maximizes the appearance of the image. In particular, scaling algorithms that "smooth" colors are acceptable, such as bilinear interpolation. This is intended for images such as photos. Since version 1.9 (Firefox 3.0), Gecko uses_bilinear _resampling (high quality).

**`**crisp-edges**`**

> The image must be scaled with an algorithm that preserves contrast and edges in the image, and which does not smooth colors or introduce blur to the image in the process. This is intended for images such as pixel art.

**`**pixelated**`**

> When scaling the image up, the "nearest neighbor" or similar algorithm must be used, so that the image appears to be composed of large pixels. When scaling down, this is the same as 'auto'.

The values `optimizeQuality` and `optimizeSpeed` present in early draft (and coming from its SVG counterpart) are defined as synonyms for the `auto` value.

### Examples

    /* applies to GIF and PNG images; avoids blurry edges */
    
    img[src$=".gif"], img[src$=".png"] {
                       image-rendering: -moz-crisp-edges;         /* Firefox */
                       image-rendering:   -o-crisp-edges;         /* Opera */
                       image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
                       image-rendering: crisp-edges;
                       -ms-interpolation-mode: nearest-neighbor;  /* IE (non-standard property) */
                     }
    
    

    div { 
            background: url(chessboard.gif) no-repeat 50% 50%;
            image-rendering: -moz-crisp-edges;         /* Firefox */
            image-rendering:   -o-crisp-edges;         /* Opera */
            image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
            image-rendering: crisp-edges;
            -ms-interpolation-mode: nearest-neighbor;  /* IE (non-standard property) */
    }

### Live Examples

#### image-rendering: auto;

78% ![squares.gif](/@api/deki/files/3612/=squares.gif) 100% ![squares.gif](/@api/deki/files/3612/=squares.gif) 138% ![squares.gif](/@api/deki/files/3612/=squares.gif) downsized ![hut.jpg](/@api/deki/files/3613/=hut.jpg) upsized ![blumen.jpg](/@api/deki/files/3611/=blumen.jpg)

#### image-rendering: pixelated; (-ms-interpolation-mode: nearest-neighbor)

78% ![squares.gif](/@api/deki/files/3612/=squares.gif) 100% ![squares.gif](/@api/deki/files/3612/=squares.gif) 138% ![squares.gif](/@api/deki/files/3612/=squares.gif) downsized ![hut.jpg](/@api/deki/files/3613/=hut.jpg) upsized ![blumen.jpg](/@api/deki/files/3611/=blumen.jpg)

#### image-rendering: crisp-edges; (-webkit-optimize-contrast)

78% ![squares.gif](/@api/deki/files/3612/=squares.gif) 100% ![squares.gif](/@api/deki/files/3612/=squares.gif) 138% ![squares.gif](/@api/deki/files/3612/=squares.gif) downsized ![hut.jpg](/@api/deki/files/3613/=hut.jpg) upsized ![blumen.jpg](/@api/deki/files/3611/=blumen.jpg)


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."