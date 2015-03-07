## How It Works

## 

The worker processes are spawned using the `child_process.fork` method,
so that they can communicate with the parent via IPC and pass server
handles back and forth.

The cluster module supports two methods of distributing incoming
connections.

The first one (and the default one on all platforms except Windows),
is the round-robin approach, where the master process listens on a
port, accepts new connections and distributes them across the workers
in a round-robin fashion, with some built-in smarts to avoid
overloading a worker process.

The second approach is where the master process creates the listen
socket and sends it to interested workers. The workers then accept
incoming connections directly.

The second approach should, in theory, give the best performance.
In practice however, distribution tends to be very unbalanced due
to operating system scheduler vagaries. Loads have been observed
where over 70% of all connections ended up in just two processes,
out of a total of eight.

Because `server.listen()` hands off most of the work to the master
process, there are three cases where the behavior between a normal
node.js process and a cluster worker differs:

1. `server.listen({fd: 7})` Because the message is passed to the master,
file descriptor 7 **in the parent** will be listened on, and the
handle passed to the worker, rather than listening to the worker's
idea of what the number 7 file descriptor references.
2. `server.listen(handle)` Listening on handles explicitly will cause
the worker to use the supplied handle, rather than talk to the master
process. If the worker already has the handle, then it's presumed
that you know what you are doing.
3. `server.listen(0)` Normally, this will cause servers to listen on a
random port. However, in a cluster, each worker will receive the
same "random" port each time they do `listen(0)`. In essence, the
port is random the first time, but predictable thereafter. If you
want to listen on a unique port, generate a port number based on the
cluster worker ID.

There is no routing logic in Node.js, or in your program, and no shared
state between the workers. Therefore, it is important to design your
program such that it does not rely too heavily on in-memory data objects
for things like sessions and login.

Because workers are all separate processes, they can be killed or
re-spawned depending on your program's needs, without affecting other
workers. As long as there are some workers still alive, the server will
continue to accept connections. Node does not automatically manage the
number of workers for you, however. It is your responsibility to manage
the worker pool for your application's needs.