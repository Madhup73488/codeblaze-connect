---
title: "Lesson 2: Lists"
objective: "To use Redis Lists to manage ordered collections of items, ideal for queues and feeds."
video: "https://www.youtube.com/embed/AKp92hI-OaU"
---

### Topics

- LPUSH and RPUSH to add elements to the left or right.
- LPOP and RPOP to remove and retrieve elements.
- LRANGE to view a range of elements without removing them.
- Capped lists with LTRIM.
- Use Cases: Job queues for background workers, activity feeds ("latest 10 actions by a user").

### Example (A simple job queue)

```bash
# Add two jobs to the queue
LPUSH job_queue "process_video:123"
LPUSH job_queue "send_email:abc"

# A worker process retrieves a job
RPOP job_queue
```

### Practice Problem

Write a sequence of commands to create a log of the last 5 errors in your application. Use LPUSH to add new errors and LTRIM to ensure the list never exceeds 5 items.
