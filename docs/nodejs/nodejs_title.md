## process.title

## 

Getter/setter to set what is displayed in 'ps'.

When used as a setter, the maximum length is platform-specific and probably
short.

On Linux and OS X, it's limited to the size of the binary name plus the
length of the command line arguments because it overwrites the argv memory.

v0.8 allowed for longer process title strings by also overwriting the environ
memory but that was potentially insecure/confusing in some (rather obscure)
cases.