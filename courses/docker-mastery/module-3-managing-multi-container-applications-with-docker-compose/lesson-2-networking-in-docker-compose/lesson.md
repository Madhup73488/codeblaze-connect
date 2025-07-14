---
title: "Lesson 2: Networking in Docker Compose"
objective: "To enable communication between different services within a Compose application."
video: "https://www.youtube.com/embed/5M_AiB6717w"
---

### Topics

- Automatic networking in Docker Compose.
- How services can reach each other using their service names as hostnames.
- The depends_on directive to control startup order.

### Example (A Node.js app connecting to Redis)

```yaml
version: '3.8'
services:
  app:
    build: . # Assumes a Dockerfile in the current directory
    ports:
      - "3000:3000"
    environment:
      - REDIS_HOST=redis
  redis:
    image: "redis:alpine"
```
(The Node.js app can now connect to Redis at redis:6379)

### Practice Problem

Create a two-service Compose file: one for a PostgreSQL database (postgres:latest image) and one for pgAdmin (dpage/pgadmin4 image). How would you configure pgAdmin to connect to the PostgreSQL service?
