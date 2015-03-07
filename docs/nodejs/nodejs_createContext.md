## vm.createContext(\[sandbox\])

## 

If given a `sandbox` object, will "contextify" that sandbox so that it can be
used in calls to `vm.runInContext` or `script.runInContext`. Inside scripts run
as such, `sandbox` will be the global object, retaining all its existing
properties but also having the built-in objects and functions any standard
\[global object\]\[2\] has. Outside of scripts run by the vm module, `sandbox` will
be unchanged.

If not given a sandbox object, returns a new, empty contextified sandbox object
you can use.

This function is useful for creating a sandbox that can be used to run multiple
scripts, e.g. if you were emulating a web browser it could be used to create a
single sandbox representing a window's global object, then run all `<script>`
tags together inside that sandbox.