## :checked

### Summary

The `:checked` CSS [pseudo-class][0] selector represents any **radio **(`<input type="radio">`), **checkbox **(`<input type="checkbox">`) or **option** ([`<option>`][1] in a [`<select>`][2]) element that is checked or toggled to an `on` state. The user can change this state by clicking on the element, or selecting a different value, in which case the `:checked` pseudo-class no longer applies to this element, but will to the relevant one.

### Syntax

    element:checked { style properties }

### Examples

### Example selectors

    /* any "checkable" element */
    :checked {
      width: 50px;
      height: 50px;
    }
    
    /* only radio elements */
    input[type="radio"]:checked {
      margin-left: 25px;
    }
    
    /* only checkbox elements */
    input[type="checkbox"]:checked {
      display: none;  
    }
    
    /* only option elements */
    option:checked {
      color: red;
    }
    

**`input[type="radio"]:checked`**

> Represents all radio buttons on the page that are checked

**`input[type="checkbox"]:checked`**

> Represents all checkboxes on the page that are checked

**`option:checked`**

> Represents all select's options on the page that are selected

### Using hidden checkboxes in order to store some CSS boolean values

The `:checked` pseudo-class applied to hidden checkboxes appended at the begin of your page could be employed in order to store some dynamic booleans to be used by a CSS rule. The following example shows how to hide/show some expandable elements simply clicking on a button ([download this demo][3]).

    <!doctype html>
    <html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Expandable elements</title>
    <style type="text/css">
    #expand-btn {
        margin: 0 3px;
        display: inline-block;
        font: 12px / 13px "Lucida Grande", sans-serif;
        text-shadow: rgba(255, 255, 255, 0.4) 0 1px;
        padding: 3px 6px;
        border: 1px solid rgba(0, 0, 0, 0.6);
        background-color: #969696;
        cursor: default;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        -moz-box-shadow: rgba(255, 255, 255, 0.4) 0 1px, inset 0 20px 20px -10px white;
        -webkit-box-shadow: rgba(255, 255, 255, 0.4) 0 1px, inset 0 20px 20px -10px white;
        box-shadow: rgba(255, 255, 255, 0.4) 0 1px, inset 0 20px 20px -10px white;
    }
    
    #isexpanded:checked ~ #expand-btn, #isexpanded:checked ~ * #expand-btn {
        background: #B5B5B5;
        -moz-box-shadow: inset rgba(0, 0, 0, 0.4) 0 -5px 12px, inset rgba(0, 0, 0, 1) 0 1px 3px, rgba(255, 255, 255, 0.4) 0 1px;
        -webkit-box-shadow: inset rgba(0, 0, 0, 0.4) 0 -5px 12px, inset rgba(0, 0, 0, 1) 0 1px 3px, rgba(255, 255, 255, 0.4) 0 1px;
        box-shadow: inset rgba(0, 0, 0, 0.4) 0 -5px 12px, inset rgba(0, 0, 0, 1) 0 1px 3px, rgba(255, 255, 255, 0.4) 0 1px;
    }
    
    #isexpanded, .expandable {
        display: none;
    }
    
    #isexpanded:checked ~ * tr.expandable {
        display: table-row;
        background: #cccccc;
    
    }
    
    #isexpanded:checked ~ p.expandable, #isexpanded:checked ~ * p.expandable {
        display: block;
        background: #cccccc;
    }
    </style>
    </head>
    <body>
    
    <input type="checkbox"  />
    
    <h1>Expandable elements</h1>
    <table>
        <thead>
            <tr><th>Column #1</th><th>Column #2</th><th>Column #3</th></tr>
        </thead>
        <tbody>
            <tr ><td>[cell text]</td><td>[cell text]</td><td>[cell text]</td></tr>
            <tr><td>[cell text]</td><td>[cell text]</td><td>[cell text]</td></tr>
            <tr><td>[cell text]</td><td>[cell text]</td><td>[cell text]</td></tr>
            <tr ><td>[cell text]</td><td>[cell text]</td><td>[cell text]</td></tr>
            <tr ><td>[cell text]</td><td>[cell text]</td><td>[cell text]</td></tr>
        </tbody>
    </table>
    
    <p>[some sample text]</p>
    <p><label for="isexpanded" >Show hidden elements</label></p>
    <p >[another sample text]</p>
    <p>[some sample text]</p>
    </body>
    </html>
    

### Using hidden radioboxes in order to store some CSS boolean values

You can also use the `:checked` pseudo-class applied to hidden radioboxes in order to build, for example, an **image gallery with full-size images shown only when mouse clicks on previews**. See [this demo][4] for a possible cue.

**Note:** For an analogous effect, but based on [`:hover`][5] pseudo-class and without hidden radioboxes, see [this demo][6], taken from the [:hover][5] page.


[0]: https://developer.mozilla.org/en/docs/CSS/Pseudo-classes "Pseudo-classes"
[1]: https://developer.mozilla.org/en/docs/Web/HTML/Element/option "In a Web form, the HTML <option> element is used to create a control representing an item within a <select>, an <optgroup> or a <datalist> HTML5 element."
[2]: https://developer.mozilla.org/en/docs/Web/HTML/Element/select "The HTML select (<select>) element represents a control that presents a menu of options. The options within the menu are represented by <option> elements, which can be grouped by <optgroup> elements. Options can be pre-selected for the user."
[3]: /@api/deki/files/6246/=expandable-elements.html "Expandable elements through the :checked pseudoclass"
[4]: /@api/deki/files/6268/=css-checked-gallery.zip "css-checked-gallery.zip"
[5]: https://developer.mozilla.org/en/docs/CSS/:hover "CSS/:hover"
[6]: /@api/deki/files/6247/=css-gallery.zip "css-gallery.zip"