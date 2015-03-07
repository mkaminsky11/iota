## settings {Object} 

## 

After calling `.setupMaster()` (or `.fork()`) this settings object will contain
the settings, including the default values.

It is effectively frozen after being set, because `.setupMaster()` can
only be called once.

This object is not supposed to be changed or set manually, by you.