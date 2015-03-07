## Customizing util.inspect colors

## 

Color output (if enabled) of `util.inspect` is customizable globally
via `util.inspect.styles` and `util.inspect.colors` objects.

`util.inspect.styles` is a map assigning each style a color
from `util.inspect.colors`.
Highlighted styles and their default values are:
_`number` (yellow)
_ `boolean` (yellow)
_`string` (green)
_ `date` (magenta)
_`regexp` (red)
_ `null` (bold)
_`undefined` (grey)
_ `special` - only function at this time (cyan)
\* `name` (intentionally no styling)

Predefined color codes are: `white`, `grey`, `black`, `blue`, `cyan`, 
`green`, `magenta`, `red` and `yellow`.
There are also `bold`, `italic`, `underline` and `inverse` codes.