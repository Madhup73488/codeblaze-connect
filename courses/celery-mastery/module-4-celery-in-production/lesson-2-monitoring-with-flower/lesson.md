---
title: "Lesson 2: Monitoring with Flower"
objective: "To use Flower, a real-time web-based monitor for Celery."
video: "https://www.youtube.com/embed/xU29Tj21D4Y"
---

### Topics

- Installing Flower.
- Running the Flower web server.
- Monitoring worker status, task progress, and results.

### Example (Running Flower)

```bash
# From your terminal
celery -A tasks flower
```

### Practice Problem

Start your Celery worker and the Flower UI. From a Python shell, execute a few tasks with different arguments. Observe them appearing and completing in the Flower dashboard.
