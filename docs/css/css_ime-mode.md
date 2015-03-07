## ime-mode

### Summary

The `ime-mode` CSS property controls the state of the input method editor for text fields.

* _[Initial value][0]_ `auto` 
* _Applies to_ text fields 
* _[Inherited][1]_ no 
* _Media_ [`interactive`][2] 
* _[Computed value][3]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][4]: auto [|][5] normal [|][5] active [|][5] inactive [|][5] disabled

    ime-mode: auto
    ime-mode: normal
    ime-mode: active
    ime-mode: inactive
    ime-mode: disabled
    
    ime-mode: inherit
    

### Values

**`auto`**

> No change is made to the current input method editor state. This is the default.

**`normal`**

> The IME state should be normal; this value can be used in a user style sheet to override the page setting. _This value is not supported by Internet Explorer._

**`active`**

> The input method editor is initially active; text entry is performed using it unless the user specifically dismisses it. _Not supported on Linux._

**`inactive`**

> The input method editor is initially inactive, but the user may activate it if they wish. _Not supported on Linux._

**`disabled`**

> The input method editor is disabled and may not be activated by the user.

### Examples

    <input type="text" name="name" value="initial value" style="ime-mode: disabled">

This example disables input method support for a field; this might be necessary for fields that enter data into a database that doesn't support extended character sets, for example.

### Notes

Unlike in Internet Explorer, the Firefox implementation of `ime-mode` allows this property to apply to password editing fields. However, this does not make for an ideal user experience, and password fields should disable the IME. Users may correct the inappropriate behavior of sites that don't follow this recommendation by placing the following CSS into their user CSS file:

    input[type=password] {
        ime-mode: auto !important;
    }

**Note:** In general, it's not appropriate for a public web site to manipulate the IME mode setting. This property should be used for web applications and the like.

The Macintosh version of Gecko 1.9 (Firefox 3) can't recover the previous state of the IME when a field for which it is disabled loses focus, so Mac users may get grumpy when you use the `disabled` value.

**Note:** Don't rely on disabling IME to prevent extended characters from passing through your form. Even with IME disabled, users can still paste extended characters into your form's fields.



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."