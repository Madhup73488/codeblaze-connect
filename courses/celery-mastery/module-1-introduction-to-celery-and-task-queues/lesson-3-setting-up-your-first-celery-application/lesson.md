---
title: "Lesson 3: Setting Up Your First Celery Application"
objective: "To install Celery and its dependencies, configure a simple application, and run a worker."
video: "https://www.google.com/search?q=https://www.youtube.com/embed/s_x72-al7oA"
---

### Topics

- Installing Celery and a broker (e.g., Redis).
- Creating a Celery application instance.
- Configuring the broker and result backend URLs.
- Running a Celery worker from the command line.

### Example (Basic Setup)

```python
# tasks.py
from celery import Celery

# Configure the Celery app
app = Celery('tasks',
             broker='redis://localhost:6379/0',
             backend='redis://localhost:6379/0')

@app.task
def add(x, y):
    return x + y
```

```bash
# In your terminal, run the worker
celery -A tasks worker --loglevel=info
```

### Practice Problem

Install Redis and Celery. Create a file my_tasks.py and configure a Celery app. Create a simple task called reverse_string that takes a string and returns its reversed version. Start a worker for your new app.
