## Implementation considerations

## 

Although `dns.lookup` and `dns.resolve*/dns.reverse` functions have the same
goal of associating a network name with a network address (or vice versa),
their behavior is quite different. These differences can have subtle but
significant consequences on the behavior of Node.js programs.