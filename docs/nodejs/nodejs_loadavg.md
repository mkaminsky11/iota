## os.loadavg()

## 

Returns an array containing the 1, 5, and 15 minute load averages.

The load average is a measure of system activity, calculated by the operating
system and expressed as a fractional number. As a rule of thumb, the load
average should ideally be less than the number of logical CPUs in the system.

The load average is a very UNIX-y concept; there is no real equivalent on
Windows platforms. That is why this function always returns `[0, 0, 0]` on
Windows.