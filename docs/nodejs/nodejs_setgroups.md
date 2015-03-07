## process.setgroups(groups)

## 

Note: this function is only available on POSIX platforms (i.e. not Windows,
Android)

Sets the supplementary group IDs. This is a privileged operation, meaning you
need to be root or have the CAP\_SETGID capability.

The list can contain group IDs, group names or both.