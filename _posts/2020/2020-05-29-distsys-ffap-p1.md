---
title:  "Distributed Systems, for fun and profit: Part 1"
toc:
  entries:
  - "Basics"
  - "System Model"
  - "Impossibility Results"
---

This post is meant to summarize the [text](http://book.mixu.net/distsys/single-page.html){:target="_blank"} and to help me understand the complete picture. This text gives an excellent introduction to the world of distributed systems with numerous examples and relevant references to follow.

## Basics
Distributed Programming concerns itself with solving problems with a collection of independent, autonomous, and unreliable nodes along with an unreliable network between them for communication. The need for solving problems in this environment becomes evident when the scale (can be the amount of data, users, and other variables) of the problem increases. Spending money on better hardware does not help or too expensive to invest in. Computation benefits from better high-end hardware, but communication costs can become a bottleneck. Adding a new node should increase performance and capacity, but there is a limit due to the communication overhead.

A distributed system hopes to have the following
- Scalability along with
- High Performance and low latency 
- Availability and thus fault tolerant

**Scalability** is the ability of the system to handle growth in terms of no of computations, users, etc., or grow accordingly. An increase in the no of nodes should not drastically increase latency and administrative/maintenance costs. Moving across geographies to reduce response time makes sense when communication across them is dealt with. A scalable system meets the required performance and availability criteria.

Good **performance** can mean many things: high throughput or amount of useful work, short response time or low latency, low resource utilization, etc. and has tradeoffs in optimizing for one of these. Increase throughput by larger batches of work would affect response time for individual pieces. **Latency** is interesting, has a connection to physical limitations (a minimum that cannot be overcome), and harder to address with financial resources. A distributed systems aims to be always **available**, present in a functioning condition. **Redundancy** helps to tolerate failures (probability of which increases with more components) and hence the system is more available. Being **fault tolerant** means having a well-defined manner of reacting once faults occur.
`Error is incorrect behavior; an anomaly is unexpected behavior.`

And these are viciously inter-related; an example can be (what we want) -> (what can we do/require to do to get it). 
```
Performance -> Available
Available -> Fault tolerant
Fault tolerant -> Replication
Replication -> Consistency
Consistency -> Communication (affecting performance)
```

**Constraints** of distributes systems affects us from achieving the things mentioned above:
- no of nodes
- distance between them

More the nodes - higher the probability of failure - lower the availability. More the nodes - higher the amount of communication - lower the performance. More the distance between nodes - higher the latency - lower the performance

With a large no of factors involved, it is somewhat necessary to define **abstractions** to remove real-world aspects that are not relevant to solving problems and building the system. The desire for systems to `work like a single system` which makes it easier to understand, is difficult to implement. **Models** are used to define key properties in a precise manner for example, failure models, consistency models, etc. Assumptions and guarantees play an essential role.

For the system or nodes to deal with data 2 design techniques can be applies
- split the data to allow parallel processing
- replicate the data to make it fault-tolerant 

**Partitioning**/splitting helps to increase performance by limiting the amount of data to be examined and, in some sense, increases availability, allowing partitions to fail independently. It is application specific and done based on access patterns. **Replication** help to increase performance by making additional data available locally and reducing latency. It improves availability with backups available at nodes. 

Unfortunately, replication is also the source of many problems since independent copies now exist and have to be kept in sync. A good consistency model is important and is a choice: A strong consistency (allowing you to program as if underlying data isn't replicated) or weaker models (provide lower latency but are difficult to understand and work with).

## System Model

Finding a good abstraction that balances what is understandable (for other services in the environment) and is performant is the key. Abstraction makes a world more manageable, by ignoring what is not important or "assuming" that it is not. The more reality we exclude, the higher the risk of introducing a source of error. You assumed that this won't happen to make things easier, but it happens. 

A **system model** is a specification of the characteristics we consider important. Programs in a distributed system run concurrently on independent nodes, connected with a network, no shared memory or shared clock, etc. The possible implications from that are:
```
- nodes concurrently execute programs, they fail and recover independently
- have a local state with fast access and information about global state may be outdated
- msg may get delayed or lost (NOT EASY TO DISTINGUISH BETWEEN NODE FAILURE FROM NETWORK FAILURE)
- clock are not synchronized across nodes
- etc.
```

Different system models vary in assumptions: what can nodes do, how can they fail, time and order, communication link, etc. A **robust** system model is the one with **weakest assumptions**. Any program designed to work in such a system will work in other kinds of systems. **Strong assumptions** create unreliable system models.

Nodes in the system model provide compute capabilities and have storage. Storage from volatility memory (which is lost upon failure) to a stable state (possibly can be read from even after node failure) is possible. **Failure Models** describe ways in which nodes can fail. A **crash-recovery failure model** is generally assumed where nodes fail only by crashing and can (possibly) recover at some later point. Another possibility is that nodes can fail by misbehaving in any arbitrary way and are dealt with by **Byzantine Fault Tolerance** are more complex.

**Communication network** connect nodes and are assumed to be unreliable with messages being lost or delayed. A more scare possibility is that of a **network partition**, which occurs when one or multiple network links fail. Partitioned may be accessible to some clients and should be treated differently from a failed node.

With respect to timing and order, nodes view the world uniquely. Message between them can arrive in a different order than it is meant to. Timing assumptions create two models 
- **Synchronous system model**: Processes execute in lock-step manner, easier to solve problem in (can define max transmission delay to help make inference and rule out inconvenient failure scenarios)
- **Asynchronous system model**: Processes execute at independent rates, can't rely on timing
Real world system are however partially synchronous, occasionally work correctly.

## Impossibility Results

**Consensus** problem is at the core of many distributed systems: if several nodes agree on the same value, they achieve consensus. It helps in solving disagreements because of distribution. Formally it requires:
- agreement (all correct processes decide on the same value)
- integrity (decided at most one value, from proposed ones)
- termination (finite time for a decision by all processes)
- validity (if all correct processes propose a value, they decide the same value)

**FLP Impossibility Result**: "there does not exist a deterministic algorithm for the consensus problem in an asynchronous system subject to failure, even if messages can never be lost, at most one process may fail, and it can fail by crashing." Thus even in this minimal setting, there is no way to solve the consensus problem. 

This result is more relevant to people who create algorithms; the next result is more relevant to practitioners. 

**CAP theorem**

Among,
- *C*onsistency: all nodes see the same data at the same time
- *A*vailability: Node failure do not prevent survivors from continuing to operate 
- *P*artition tolerance: system continues to operate despite network partitions or node failures.

Only 2 out of 3 can be satisfied. 

<img src="/assets/images/posts/cap.png" width="300">

CA and CP systems offer string consistency (single copy of data everywhere. CA systems cannot tolerate node failures because they cannot distinguish between node failures and network partition. So they will have the stop accepting writes everywhere to avoid divergence. That implies they can't be available when have partitions occur (CA only works when no partitions or node failure occur). CP systems can tolerate upto *f* faults given 2 *f* + 1 nodes. They prevent divergence by keeping only the majority partition around (and are somewhat available) and ensuring single-copy consistency.

What CAP is really about is 
```
P => ~ (C & A)
```
In modern distributed systems, it is [impossible not to have partitions](https://www.the-paper-trail.org/post/2010-10-07-the-theorem-that-will-not-go-away/){:target="_blank"}. Thus `when a partition occurs, you have to choose between consistency and availability.` Strong consistency guarantees require to give up availability during a partition because both sets cannot accept writes, which will cause them to diverge. There is also a tension between strong consistency and performance as maintaining a single copy requires node communication and agreement on operations, which incurs high latency. If you do not want to give up availability, the other model of consistency, like allowing nodes to diverge (lower latency during normal operations) with no guarantees of getting the most recent values. 

A consistency model is a guarantee that the data store gives to programs that use it. **Strong consistency** models (capable of maintaining a single copy) comprise of Linearizable and Sequential consistency. **Linearizable** consistency requires that order of operations to be in a manner that would be equivalent with real-time ordering. **Sequential** consistency allows for reordering of operations as long as all nodes have the same order.

**Weak consistency** models behave differently from a non-replicated system, so it requires code to work around that. **Client-centric** consistency ensures clients won't see old/cached versions or don't propagate and affect the system. **Eventual** consistency says if values don't change after a period of time (how long?), all replicas will agree on the same value (how? one example can be last writer wins and read the latest value available in the meantime). Consistency will be covered in more detail in replication.

### Note

- The topics of time, order, and replication will be covered in the following post.
- Please let me know if I misinterpreted or missed something or any top requires more clarification.