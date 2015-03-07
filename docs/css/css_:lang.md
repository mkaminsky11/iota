## :lang

### Summary

The `:lang` CSS [pseudo-class][0] matches elements based on the language the element is determined to be in. In HTML, the language is determined by a combination of the `lang` attribute, the [`<meta>`][1] element, and possibly by information from the protocol (such as HTTP headers). For other document types there may be other document methods for determining the language.

Acceptable `language-code` strings are specified in the [HTML 4.0][2] specification.

### Syntax

    _element_:lang(language-code) { _style properties_ }
    

### Example

In this example, the `lang` selector is used to match on the parent of a quote element using [child selectors][3]. Its not meant to demonstrate the only way to do this, or even the correct way (which would depend on the type of document). Note, Unicode values are used to specify special quote characters.

    :lang(en) > Q { quotes: '\201C' '\201D' '\2018' '\2019'; }
    :lang(fr) > Q { quotes: '« ' ' »'; }
    :lang(de) > Q { quotes: '»' '«' '\2039' '\203A'; }
    

...where...

      <div lang="fr"><q>This French quote has a <q>nested</q> quote.</q></div>
      <div lang="de"><q>This German quote has a <q>nested</q> quote.</q></div>
      <div lang="en"><q>This English quote has a <q>nested</q> quote.</q></div>
    

... looks like ...



[0]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"
[1]: https://developer.mozilla.org/en/docs/Web/HTML/Element/meta "The HTML Meta Element (<meta>) represents any metadata information that cannot be represented by one of the other HTML meta-related elements (<base>, <link>, <script>, <style> or <title>)."
[2]: https://developer.mozilla.org/en/HTML "en/HTML"
[3]: https://developer.mozilla.org/en/CSS/Child_selectors "en/CSS/Child_selectors"