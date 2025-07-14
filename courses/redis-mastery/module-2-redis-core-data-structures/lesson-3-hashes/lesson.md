---
title: "Lesson 3: Hashes"
objective: "To store object-like structures efficiently using fields and values within a single key."
video: "https://www.youtube.com/embed/BBEBh_p-zGU"
---

### Topics

- HSET, HGET, HMGET.
- HGETALL to retrieve the entire object.
- HINCRBY to atomically increment a numeric field.
- Use Cases: Storing user profiles, product attributes, or any object-like data.

### Example (Storing a user profile)

```bash
HSET user:101 username "johndoe" email "john@example.com" posts 57
HINCRBY user:101 posts 1
HGET user:101 username
```

### Practice Problem

Model a product in a Redis Hash. The key should be product:55. The product has a name ("Wireless Mouse"), a price (29.99), and a stock_level (150). Write the commands to create it and then to decrease the stock level by 5.
