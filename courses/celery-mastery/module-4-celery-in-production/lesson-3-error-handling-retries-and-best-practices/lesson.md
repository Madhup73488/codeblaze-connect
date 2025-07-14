---
title: "Lesson 3: Error Handling, Retries, and Best Practices"
objective: "To build robust tasks that can handle failures gracefully."
video: "https://www.youtube.com/embed/e1mJd4I2ECg"
---

### Topics

- Automatic retries on failure (autoretry_for).
- Custom retry logic with task.retry().
- Exponential backoff.
- Best Practices: Task idempotency, using task IDs for tracking, keeping tasks small and focused.

### Example (Automatic retries)

```python
import requests

@app.task(autoretry_for=(requests.exceptions.Timeout,), retry_kwargs={'max_retries': 3})
def fetch_url(url):
    response = requests.get(url, timeout=5)
    return response.status_code
```

### Practice Problem

Why is it important for a task that processes a payment to be "idempotent"? What could happen if it wasn't and the task was accidentally run twice?
