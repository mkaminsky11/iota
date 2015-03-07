## percentage

### Summary

The `<percentage>` [CSS][0] data types represent a percentage value. Many [CSS properties][1] can take percentage values, often to define sizes in terms of parent objects. Percentages are formed by a [`<number>`][2] immediately followed by the percentage sign `%`. Just as is the case with all other units in CSS, there isn't a space between the '%' and the number.

Many length properties use percentages, such as [`width`][3], [`margin`][4] and [`padding`][5]. Percentages can also be seen in [`font-size`][6], where the size of the text is directly related to the size of its parent.

**Note:** only calculated values are inherited. So, even if a percentage value is used on the parent property, a real value, like a width in pixel for a [`<length>`][7] value, will be accessible on the inherited property, not the percentage value.

### Interpolation

Values of the `<percentage>` CSS data type can be interpolated in order to allow animations. In that case they are interpolated as real, floating-point numbers. The speed of the interpolation is determined by the [timing function][8] associated with the animation.

### Examples

    <div style="background-color:#0000FF;">
      <div style="width:50%;margin-left:20%;background-color:#00FF00;">Width: 50%, Left margin: 20%</div>
      <div style="width:30%;margin-left:60%;background-color:#FF0000;">Width: 30%, Left margin: 60%</div>
    </div> 
    

The above HTML will output:

Width: 50%, Left margin: 20%

Width: 30%, Left margin: 60%

    <div style="font-size:18px;">
      Full size text (18px)
      <span style="font-size:50%;">50%</span>
      <span style="font-size:200%;">200%</span>
    </div> 
    

The above HTML will output:

Full size text (18px) 50% 200%


[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/CSS_Reference "en/CSS_Reference"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/number
[3]: https://developer.mozilla.org/en/docs/Web/CSS/width
[4]: https://developer.mozilla.org/en/docs/Web/CSS/margin
[5]: https://developer.mozilla.org/en/docs/Web/CSS/padding
[6]: https://developer.mozilla.org/en/docs/Web/CSS/font-size
[7]: https://developer.mozilla.org/en/docs/Web/CSS/length
[8]: https://developer.mozilla.org/en/CSS/timing-function "timing-function"