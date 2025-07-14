---
title: "Lesson 1: Caching Strategies"
objective: "To implement effective caching patterns to speed up your application."
video: "https://www.youtube.com/embed/dGAwrmO8Q9o"
---

### Topics

- The Cache-Aside pattern.
- Setting appropriate TTLs (Time-to-Live) with EXPIRE.
- Cache invalidation strategies.

### Example (Cache-Aside Logic in Pseudocode)

```
function getUser(userId) {
  cachedUser = redis.get("user:" + userId);
  if (cachedUser) {
    return cachedUser;
  } else {
    dbUser = database.query("SELECT * FROM users WHERE id = " + userId);
    redis.setex("user:" + userId, 3600, dbUser); // Cache for 1 hour
    return dbUser;
  }
}
```

### Practice Problem

Describe how you would handle cache invalidation for a product's details. What should happen in Redis when a product's price is updated in the main database?
