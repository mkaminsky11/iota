## Event: 'beforeExit'

## 

This event is emitted when node empties it's event loop and has nothing else to
schedule. Normally, node exits when there is no work scheduled, but a listener
for 'beforeExit' can make asynchronous calls, and cause node to continue.

'beforeExit' is not emitted for conditions causing explicit termination, such as
`process.exit()` or uncaught exceptions, and should not be used as an
alternative to the 'exit' event unless the intention is to schedule more work.