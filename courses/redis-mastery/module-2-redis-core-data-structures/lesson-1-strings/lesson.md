---
title: "Lesson 1: Strings"
objective: "To master the most basic Redis data type for storing simple key-value pairs."
video: "https://www.youtube.com/embed/r5m1gCq_C-E"
---

### Topics

- SET and GET for basic operations.
- INCR, DECR, INCRBY for atomic counters.
- Setting expiration with SETEX or EXPIRE.
- Use Cases: Caching HTML fragments, user information, counters for likes or views.

### Example (A simple page view counter)

```bash
# Increment the view count for page with id 123
INCR page:123:views

# Get the current view count
GET page:123:views
```

### Practice Problem

Imagine you are caching user profile information. Write the redis-cli command to store a user's profile (as a JSON string) with the key user:101 and make it automatically expire in 1 hour.
