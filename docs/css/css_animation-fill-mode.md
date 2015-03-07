## animation-fill-mode

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `animation-fill-mode` [CSS][1] property specifies how a CSS animation should apply styles to its target before and after it is executing.

* _[Initial value][2]_ `none` 
* _Applies to_ all elements, [`::before`][3] and [`::after`][4] [pseudo-elements][5] 
* _[Inherited][6]_ no 
* _Media_ [`visual`][7] 
* _[Computed value][8]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][9]: [<single-animation-fill-mode>][10][#][11]
    

    animation-fill-mode: none
    animation-fill-mode: forwards
    animation-fill-mode: backwards
    animation-fill-mode: both
    
    **The # indicates that several values may be given, separated by commas.
    Each applies to the animation defined in the same order in **animation-name.
    animation-fill-mode: none, backwards
    animation-fill-mode: both, forwards, none
    

### Values

**`none`**

> The animation will not apply any styles to the target before or after it is executing.

**`forwards`**

> The target will retain the computed values set by the last keyframe encountered during execution. The last keyframe encountered depends on the value of [`animation-direction`][12] and [`animation-iteration-count`][13]:  
> `animation-direction`
> `animation-iteration-count`
> last keyframe encountered
> 
> `normal`
> even or odd
> `100%` or `to`
> 
> `reverse`
> even or odd
> `0%` or `from`
> 
> `alternate`
> even
> `0%` or `from`
> 
> `alternate`
> odd
> `100%` or `to`
> 
> `alternate-reverse`
> even
> `100%` or `to`
> 
> `alternate-reverse`
> odd
> `0%` or `from`
> 
> 

**`backwards`**

> The animation will apply the values defined in the first relevant [keyframe][14] as soon as it is applied to the target, and retain this during the [`animation-delay`][15] period. The first relevant keyframe depends of the value of [`animation-direction`][12]:
> `animation-direction`
> first relevant keyframe
> 
> `normal` or `alternate`
> `0%` or `from`
> 
> `reverse` or `alternate-reverse`
> `100%` or `to`
> 
> 

**`both`**

> The animation will follow the rules for both forwards and backwards, thus extending the animation properties in both directions.

### Example

You can see the effect of animation-fill-mode in the following example.  For animations that run for an infinite time, you might want them to end on the last state rather than the first.

### HTML content

    <p>Move your mouse over the grey box</p>
    <div >
      <div >This just grows</div>
      <div >This grows and stays big</div>
    </div>

### CSS content

    .demo {
      border-top: 100px solid #ccc;
      height: 300px;
      font-family: sans-serif;
    }
    @keyframes grow {
        0% { font-size: 0 }
        100% { font-size: 40px }
    }
    @-webkit-keyframes grow {
        0% { font-size: 0 }
        100% { font-size: 40px }
    }
    .demo:hover .grows {
        animation-name: grow;
        animation-duration: 3s;
        -webkit-animation-name: grow;
        -webkit-animation-duration: 3s;
    }
    .demo:hover .growsandstays {
        animation-name: grow;
        animation-duration: 3s;
        animation-fill-mode: forwards;
        -webkit-animation-name: grow;
        -webkit-animation-duration: 3s;
        -webkit-animation-fill-mode: forwards;
    }



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::before "::before creates a pseudo-element that is the first child of the element matched. It is often used to add cosmetic content to an element by using the content property. This element is inline by default."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::after "The CSS ::after pseudo-element matches a virtual last child of the selected element. Typically used to add cosmetic content to an element, by using the content CSS property. This element is inline by default."
[5]: https://developer.mozilla.org/en/docs/CSS/Pseudo-elements "https://developer.mozilla.org/en/docs/CSS/Pseudo-elements"
[6]: https://developer.mozilla.org/en/docs/CSS/inheritance
[7]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[8]: https://developer.mozilla.org/en/docs/CSS/computed_value
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[10]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-single-animation-fill-mode "none | forwards | backwards | both"
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: The previous entity may appear 0, 1 or several times, each occurrence being separated from the previous one by a comma."
[12]: https://developer.mozilla.org/en/docs/Web/CSS/animation-direction "The animation-direction CSS property indicates whether the animation should play in reverse on alternate cycles."
[13]: https://developer.mozilla.org/en/docs/Web/CSS/animation-iteration-count "The animation-iteration-count CSS property defines the number of times an animation cycle should be played before stopping."
[14]: https://developer.mozilla.org/en/docs/CSS/@keyframes
[15]: https://developer.mozilla.org/en/docs/Web/CSS/animation-delay "The animation-delay CSS property specifies when the animation should start. This lets the animation sequence begin some time after it's applied to an element."