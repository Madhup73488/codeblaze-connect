---
title: "Lesson 3: Choosing and Using Brokers"
objective: "To understand the differences between the two most popular brokers, Redis and RabbitMQ."
video: "https://www.google.com/search?q=https://www.youtube.com/embed/L3D1j203x1w"
---

### Topics

- RabbitMQ: A feature-complete, robust message broker (AMQP).
- Redis: A fast in-memory data store, often simpler to set up.
- Key differences: Durability, routing capabilities, ease of use.
- When to choose one over the other.

### Example (Concept)

Use RabbitMQ when you need guaranteed message delivery and complex routing scenarios (e.g., sending different types of tasks to different workers). Use Redis when you need a simple, fast broker for non-critical tasks or when you're already using Redis for caching.

### Practice Problem

A financial application needs to process payment transactions. The tasks must never be lost, even if a worker crashes. Which broker, RabbitMQ or Redis, would be a better choice and why?
