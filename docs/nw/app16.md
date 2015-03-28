## App.Events

Following events can be listened by using `App.on()` function.

### open

Emitted when users opened a file with your app. There is a single parameter of this event callback: Since v0.7.0, it is the full command line of the program; before that it's the argument in the command line and the event is sent multiple times for each of the arguments. For more on this, see \[\[Handling files and arguments\]\].

### reopen

This is a Mac specific feature. This event is sent when the user clicks the dock icon for an already running application.