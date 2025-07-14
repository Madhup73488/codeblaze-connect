---
title: "Lesson 2: Rate Limiting"
objective: "To protect your APIs from abuse by implementing a rate limiter."
video: "https://www.youtube.com/embed/AV6hK1-g8h8"
---

### Topics

- Simple rate limiting with INCR and EXPIRE.
- More advanced sliding window rate limiting with Sorted Sets.

### Example (Simple Rate Limiter)

```bash
# For a user trying to access an API
INCR rate_limit:user:123
EXPIRE rate_limit:user:123 60 # Set a 60-second window

# In your app logic, check if the count is over the limit (e.g., 100)
GET rate_limit:user:123
```

### Practice Problem

Using the simple rate limiting example, what is the potential issue if you only run INCR but the EXPIRE command fails? How could a transaction fix this?
