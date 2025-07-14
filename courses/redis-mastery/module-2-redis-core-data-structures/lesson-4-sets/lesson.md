---
title: "Lesson 4: Sets"
objective: "To manage unordered collections of unique strings."
video: "https://www.youtube.com/embed/sI2i2ll3m2c"
---

### Topics

- SADD, SREM, SMEMBERS.
- SISMEMBER to check for existence.
- Set operations: SINTER (intersection), SUNION (union), SDIFF (difference).
- Use Cases: Storing tags for a blog post, tracking unique visitors to a page, managing user roles.

### Example (A tagging system)

```bash
# Add tags to two articles
SADD article:1 "tech" "programming" "redis"
SADD article:2 "tech" "databases" "redis"

# Find articles that have both "tech" AND "redis" tags
SINTER article:tags:tech article:tags:redis
```

### Practice Problem

Two users, user:1 and user:2, have liked a set of photos. user:1 liked photos p1, p2, p3. user:2 liked photos p2, p4. Write the commands to store this data and then find which photos both users liked.
