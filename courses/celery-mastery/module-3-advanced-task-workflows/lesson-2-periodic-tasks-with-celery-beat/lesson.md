---
title: "Lesson 2: Periodic Tasks with Celery Beat"
objective: "To schedule tasks to run at regular intervals."
video: "https://www.youtube.com/embed/zXX2L-9L-Xo"
---

### Topics

- The Celery Beat scheduler.
- Configuring a schedule in your Celery app.
- Running the beat service alongside your worker.

### Example (A scheduled task)

```python
# in your celery app file
app.conf.beat_schedule = {
    'add-every-30-seconds': {
        'task': 'tasks.add',
        'schedule': 30.0,
        'args': (16, 16)
    },
}
```

```bash
# Run the beat scheduler in a separate terminal
celery -A tasks beat --loglevel=info
```

### Practice Problem

Configure Celery Beat to run your reverse_string task every 10 seconds with the input "hello world".
