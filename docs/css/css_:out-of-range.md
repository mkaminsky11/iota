## :out-of-range

### Summary

The `:out-of-range` CSS [pseudo-class][0] matches when an element has its value attribute outside the specified range limitations for this element. It allows the page to give a feedback that the value currently defined using the element is outside the range limits. A value can be outside of a range if it is either smaller or larger than maximum and minimum set values.

**Note:** this pseudo-class only applies to elements that have a range limitations. In absence of such a limitation, the element can neither be 'in-range' nor 'out-of-range'.

### Example

### HTML

    <form action="" >
        <ul>Values between 1 and 10 are valid.
            <li>
                <input  name="value1" type="number" placeholder="1 to 10" min="1" max="10" value="12">
                <label for="value1">Your value is </label>
            </li>
    </form>

### CSS

    li {
        list-style: none;
        margin-bottom: 1em;
    }
    input {
        border: 1px solid black;
    }
    input:in-range {
        background-color: rgba(0, 255, 0, 0.25);
    }
    input:out-of-range {
        background-color: rgba(255, 0, 0, 0.25);
        border: 2px solid red;
    }
    input:in-range + label::after {
        content:' OK';
    }
    input:out-of-range + label::after {
        content:'out of range!';
    }



[0]: https://developer.mozilla.org/en/docs/CSS/Pseudo-classes "Pseudo-classes"