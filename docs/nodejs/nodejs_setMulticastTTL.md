## socket.setMulticastTTL(ttl)

## 

Sets the `IP_MULTICAST_TTL` socket option. TTL stands for "Time to Live," but in this
context it specifies the number of IP hops that a packet is allowed to go through,
specifically for multicast traffic. Each router or gateway that forwards a packet
decrements the TTL. If the TTL is decremented to 0 by a router, it will not be forwarded.

The argument to `setMulticastTTL()` is a number of hops between 0 and 255\. The default on most
systems is 1\.