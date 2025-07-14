---
title: "Lesson 1: Pub/Sub"
objective: "To build real-time messaging systems using Redis's Publish/Subscribe capabilities."
video: "https://www.youtube.com/embed/Soi22eJ-iLs"
---

### Topics

- SUBSCRIBE to one or more channels.
- PUBLISH a message to a channel.
- PSUBSCRIBE to channels matching a pattern.
- Use Cases: Real-time chat applications, notifications, triggering events across distributed systems.

### Example (Chat room)

```bash
# In Terminal 1 (a subscriber)
SUBSCRIBE chat_room:1

# In Terminal 2 (a publisher)
PUBLISH chat_room:1 "Hello everyone!"
```

### Practice Problem

Imagine a system where a new_order event is published whenever a customer makes a purchase. Describe how you would use Pub/Sub to allow multiple other services (e.g., an inventory service, a shipping service) to listen for this event.
