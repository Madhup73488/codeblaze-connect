---
title: "Lesson 1: What is Redis?"
objective: "Understand what Redis is, its primary use cases, and how it differs from traditional disk-based databases."
video: "https://www.youtube.com/embed/G1rOthE-X_w"
---

### Topics

- Redis as an in-memory key-value store.
- The client-server model.
- Primary Use Cases: Caching, Session Store, Real-time Leaderboards, Message Queues.
- Speed and Performance: Why in-memory is so fast.
- Redis vs. Relational Databases (like PostgreSQL).

### Example (Concept)

While a relational database stores data on disk and is great for complex queries and data integrity, Redis keeps data in RAM. This makes it exceptionally fast for operations like reading a user's session data, which needs to happen instantly on every page load.

### Practice Problem

List three applications on your phone or computer that would benefit from a fast cache. For each, describe what data you would store in the cache.
