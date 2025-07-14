---
title: "Lesson 3: Data Persistence"
objective: "To understand how Redis can save its in-memory data to disk to prevent data loss."
video: "https://www.youtube.com/embed/NYH8u0I-p0s"
---

### Topics

- RDB (Redis Database): Point-in-time snapshots.
- AOF (Append-Only File): Logs every write operation.
- Pros and cons of each method.
- Configuring persistence in redis.conf.

### Example (Concept)

RDB is like taking a photo of your data at set intervals. It's fast for backups but you might lose the last few minutes of data if Redis crashes. AOF is like a video camera recording every change, offering better durability but with a larger file size.

### Practice Problem

If you were using Redis to store critical, must-not-lose financial transaction data, which persistence model would you choose and why? What if you were just using it for a cache?
