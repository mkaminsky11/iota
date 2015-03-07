## :indeterminate

### Summary

The `:indeterminate` CSS [pseudo-class][0] represents any `<input type="checkbox">` element whose `indeterminate` DOM property is set to `true` by JavaScript. In addition, in some browsers, it can be used to match to [`<progress>`][1] elements in an indeterminate state.

### Example

    input, span { background: red }
    :indeterminate, :indeterminate + span { background: limegreen }
    

    <input type=checkbox> <span>Le contenu de ce paragraphe doit avoir une couleur de fond verte.</span>
    

    document.getElementsByTagName("input")[0].indeterminate = true;
    



[0]: https://developer.mozilla.org/en/CSS/Pseudo-classes "en/CSS/Pseudo-classes"
[1]: https://developer.mozilla.org/en/docs/Web/HTML/Element/progress "The HTML <progress> Element is used to view the completion progress of a task. While the specifics of how it's displayed is left up to the browser developer, it's typically displayed as a progress bar. Javascript can be used to manipulate the value of progress bar."