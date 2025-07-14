---
title: "Lesson 2: The Celery Architecture"
objective: "To understand the four core components that make up a Celery system."
video: "https://www.youtube.com/embed/i3Q924Iix_0"
---

### Topics

- The Client: Your application that produces tasks.
- The Broker: A message broker (like RabbitMQ or Redis) that mediates messages between the client and workers.
- The Worker: The process(es) that execute the tasks.
- The Result Backend: A database (like Redis or PostgreSQL) that stores the results of tasks.

### Example (Architecture Flow)

Your Python app (Client) calls add.delay(2, 2).
The task message is sent to the Broker (e.g., a RabbitMQ queue).
A Worker process, which is listening to the queue, picks up the task.
The Worker executes add(2, 2).
The Worker stores the result 4 in the Result Backend (e.g., Redis).

### Practice Problem

In the Celery architecture, which component is responsible for holding tasks until a worker is available? Which component is optional if you don't need to know the outcome of a task?
