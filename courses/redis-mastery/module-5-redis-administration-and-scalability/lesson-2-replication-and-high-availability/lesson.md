---
title: "Lesson 2: Replication and High Availability"
objective: "To understand how to create a highly available Redis setup using replication."
video: "https://www.youtube.com/embed/9_w2r4y5r4s"
---

### Topics

- Primary-Replica (Master-Slave) architecture.
- Read scaling with replicas.
- Introduction to Redis Sentinel for automatic failover.

### Example (Concept)

You have one Primary Redis server that handles all writes. You then configure two Replica servers that continuously copy data from the Primary. Your application can send all its read queries to the replicas, reducing the load on the primary. If the primary fails, Sentinel can automatically promote one of the replicas to be the new primary.

### Practice Problem

If your application is 90% reads and 10% writes, how would a primary-replica setup improve its performance?
