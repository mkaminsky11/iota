## socket.setTTL(ttl)

## 

Sets the `IP_TTL` socket option. TTL stands for "Time to Live," but in this context it
specifies the number of IP hops that a packet is allowed to go through. Each router or
gateway that forwards a packet decrements the TTL. If the TTL is decremented to 0 by a
router, it will not be forwarded. Changing TTL values is typically done for network
probes or when multicasting.

The argument to `setTTL()` is a number of hops between 1 and 255\. The default on most
systems is 64\.