## timing-function

### Summary

The `<timing-function>` [CSS][0] data type denotes a mathematical function that describes how fast one-dimensional values change during transitions or animations. This in essence lets you establish an acceleration curve, so that the speed of the animation can vary over its duration. These functions are often called _easing functions`.`_

It is a function linking the time with a ratio of the output value, expressed as a [`<number>`][1], with `0.0` representing the initial state, `1.0` the final state.

![](/files/3434/TF_with_output_gt_than_1.png)![](/files/3435/TF_with_output_gt_than_1_clipped.png)

The output ratio can be greater than 1.0 (or smaller than 0.0). This causes the animation to go farther than the final state, then come back, in a kind of _bouncing_ effect.

Nevertheless, if the output value goes outside of its possible range, such as a component of a color going greater than `255` or smaller than `0`, the value is clipped to its closest allowed value (in the case of a color-component `255` and `0` respectively. Some `cubic-bezier()` curves exhibit this property.

### Values

CSS supports two kinds of timing functions: the subset of the cubic Bézier curves that are functions and staircase functions. The most useful of these functions are given a _keyword_ that allows to easily describe them.

### The `cubic-bezier()` class of timing-functions
![](/files/3433/cubic-bezier,%20example.png)

The `cubic-bezier()` functional notation defines a [cubic Bézier curve][2]. As these curves are continuous, they are often used to smooth down the start and end of the animation and are therefore sometimes called _easing functions_.

A cubic Bézier curve is defined by four points P0, P1, P2, and P3. P0 and P3 are the start and the end of the curve and, in CSS these points are fixed as the coordinates are ratios (the abscissa the ratio of time, the ordinate the ratio of the output range). P0 is `(0, 0)` and represents the initial time and the initial state, P3 is `(1, 1)` and represents the final time and the final state.

Not all cubic Bézier curves are suitable as timing functions as not all are [mathematical functions][3], i.e. curves that for a given abscissa have zero or one value. With P0 and P3 fixed as defined by CSS, a cubic Bézier curve is a function, and is therefore valid, if and only if the abscissas of P1 and P2 are both in the `[0, 1]` range.

Cubic Bézier curves with the P1 or P2 ordinate outside the `[0, 1]` range may generate _bouncing_ effects.

When you specify an invalid `cubic-bezier` curve, CSS ignores the whole property.

#### Syntax

    cubic-bezier(_x1_, _y1_, _x2_, _y2_)
    

where :

****_x1_, _y1_, _x2_, _y2_****

> Are [`<number>`][1] values representing the abscissas and ordinates of the P1 and P2 points defining the cubic Bézier curve. x1 and x2 must be in the range \[0, 1\] or the value is invalid.

#### Examples

These cubic Bézier curves are valid for use in CSS :

    cubic-bezier(0.1, 0.7, 1.0, 0.1)   The canonical Bézier curve with four <number> in the [0,1] range.
    cubic-bezier(0, 0, 1, 1)           Using <integer> is valid as any <integer> is also a <number>.
    cubic-bezier(0.1, -0.6, 0.2, 0)    Negative values for ordinates are valid, leading to bouncing effects.
    cubic-bezier(0, 1.1, 0.8, 4)       Values > 1.0 for ordinates are also valid.

These cubic Bézier curves definitions are invalid :

    cubic-bezier(0.1, red, 1.0, green) Though the animated output type may be a color, Bézier curves work w/ numerical ratios.
    cubic-bezier(2.45, 0.6, 4, 0.1)    Abscissas must be in the [0, 1] range or the curve is not a function of time.
    cubic-bezier(0.3, 2.1)             The two points must be defined, there is no default value.
    cubic-bezier(-1.9, 0.3, -0.2, 2.1) Abscissas must be in the [0, 1] range or the curve is not a function of time.
    

### The `steps()` class of timing-functions
![](/files/3436/steps(2,start).png)
![](/files/3437/steps(4,end).png)
The `steps()` functional notation defines a [step function][4] dividing the domain of output values in equidistant steps. This subclass of step functions are sometimes also called staircase functions.

`steps(2, start)`
`steps(4, end)`

#### Syntax

    steps(_number_of_steps_, _direction_)
    

where :

****_number\_of\_steps_****

> Is a strictly positive [`<integer>`][5] representing the amount of equidistant treads composing the stepping function.

****_direction_****

> Is a keyword indicating if it the function is [left- or right-continuous][6]:
> 
> * `start` denotes a left-continuous function, so that the first step happens when the animation begins;
> * `end` denotes a right-continuous function, so that the last step happens when the animation ends.
> `end` is the default.

#### Examples

These timing functions are valid :

    steps(5, end)          There is 5 treads, the last one happens right before the end of the animation.
    steps(2, start)        A two-step staircase, the first one happening at the start of the animation.
    steps(2)               The second parameter is optional.
    

These timing function are invalid :

    steps(2.0, end)        The first parameter must be an [<integer>][7] and cannot be a real value, even if it is equal to one.
    steps(-3, start)       The amount of steps must be non-negative.
    steps(0, end)          There must be at least one step.
    steps(start, 3)        Though of different types, the order of parameter is important.
    step(1, end)           Even if there is one step, the function name is steps, with the plural 's'
    steps(3 end)           The two parameters must be separated with a comma; one or several spaces is not enough.
    

### Keywords for common timing-functions

#### `linear`
![](/files/3425/cubic-bezier,linear.png)
This keyword represents the timing function `cubic-bezier(``0.0, 0.0, 1.0, 1.0``)`. Using this timing function, the animation goes from its initial state to its final one regularly, with a constant speed.

#### `ease`
![](/files/3429/cubic-bezier,ease.png)
This keyword represents the timing function `cubic-bezier(0.25, 0.1, 0.25, 1.0)`. This function is similar to [`ease-in-out`][8], though it accelerates more sharply at the beginning and the acceleration already starts to slow down near the middle of it.

#### `ease-in`
![](/files/3426/cubic-bezier,ease-in.png)
This keyword represents the timing function `cubic-bezier(0.42, 0.0, 1.0, 1.0)`. The animation begins slowly, then progressively accelerates until the final state is reached and the animation stops abruptly.

#### `ease-in-out`
![](/files/3428/cubic-bezier,ease-in-out.png)
This keyword represents the timing function `cubic-bezier(``0.42, 0.0, 0.58, 1.0``)`. With this timing function, the animation starts slowly, accelerates then slows down when approaching its final state. At the beginning, it behaves similarly to the [`ease-in`][9] function; at the end, it is similar to the [`ease-out`][10] function.

#### `ease-out`
![](/files/3427/cubic-bezer,ease-out.png)
This keyword represents the timing function `cubic-bezier(``0.0, 0.0, 0.58, 1.0``)`. The animation starts quickly then slow progressively down when approaching to its final state.

#### `step-start`
![](/files/3423/steps(1,start).png)This keyword represents the timing function `steps(1, start)`. Using this timing function, the animation jumps immediately to the end state and stay in that position until the end of the animation.

#### `step-end`
![](/files/3424/steps(1,end).png)
This keyword represents the timing function `steps(1, end)`. Using this timing function, the animation stays in its initial state until the end, where it directly jumps to its final position.



[0]: https://developer.mozilla.org/en/docs/CSS
[1]: https://developer.mozilla.org/en/docs/Web/CSS/number
[2]: http://en.wikipedia.org/wiki/B%C3%A9zier_curve#Cubic_B.C3.A9zier_curves
[3]: http://en.wikipedia.org/wiki/Function_%28mathematics%29
[4]: http://en.wikipedia.org/wiki/Step_function
[5]: https://developer.mozilla.org/en/docs/Web/CSS/integer
[6]: http://en.wikipedia.org/wiki/Left-continuous#Directional_and_semi-continuity
[7]: https://developer.mozilla.org/en/docs/CSS/integer
[8]: https://developer.mozilla.org/en/docs/CSS/timing-function#ease-in-out
[9]: https://developer.mozilla.org/en/docs/CSS/timing-function#ease-in
[10]: https://developer.mozilla.org/en/docs/CSS/timing-function#ease-out