## Synchronous Process Creation

## 

These methods are **synchronous**, meaning they **WILL** block the event loop,
pausing execution of your code until the spawned process exits.

Blocking calls like these are mostly useful for simplifying general purpose
scripting tasks and for simplifying the loading/processing of application
configuration at startup.