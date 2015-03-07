## ParallelArray

**Obsolete**  
This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.

**Note:** This object was implemented in Firefox 17 and has been removed from Gecko 29 in favor of ParallelJS (PJS) currently available in the Nightly channel ([bug 944074][0]).

### Summary

The goal of `ParallelArray` was to enable data-parallelism in web applications. The higher-order functions available on `ParallelArray` attempted to execute in parallel, though they may fall back to sequential execution if necessary. To ensure that your code executes in parallel, it is suggested that the functions should be limited to the [parallelizable subset of JS that Firefox supports][1].

### Syntax

    new ParallelArray()
    new ParallelArray([element0, element1, ...])
    new ParallelArray(arrayLength, elementalFunction)

### `ParallelArray` instances

### Properties

**length**

> Reflects the number of elements in the `ParallelArray`.

### Methods

**map**

**reduce**

**scan**

**scatter**

**filter**

**flatten**

**partition**

**get**

### Examples

### Example: Using map in parallel

    var p = new ParallelArray([0, 1, 2, 3, 4]);
    var m = p.map(function (v) {
      return v + 1;
    });

### See also

* [Ecmascript ParallelArray strawman][2]


[0]: https://bugzilla.mozilla.org/show_bug.cgi?id=944074 "FIXED: PJS: rm ParallelArray"
[1]: http://smallcultfollowing.com/babysteps/blog/2013/04/30/parallelizable-javascript-subset/ "https://developer.mozilla.org/en/docs/ParallelizableJavaScriptSubset"
[2]: http://wiki.ecmascript.org/doku.php?id=strawman:data_parallelism "http://wiki.ecmascript.org/doku.php?id=strawman:data_parallelism"