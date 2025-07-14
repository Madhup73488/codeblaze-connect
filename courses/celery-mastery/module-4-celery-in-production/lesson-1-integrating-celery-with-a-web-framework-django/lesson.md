---
title: "Lesson 1: Integrating Celery with a Web Framework (Django)"
objective: "To set up and use Celery within a Django project."
video: "https://www.youtube.com/embed/ISY80LX4I4c"
---

### Topics

- The celery.py configuration file in a Django project.
- Sharing the Django app instance with Celery.
- Writing tasks that interact with Django models.

### Example (A Django task)

```python
# myapp/tasks.py
from myproject.celery import app
from .models import User

@app.task
def send_welcome_email(user_id):
    user = User.objects.get(pk=user_id)
    # ... logic to send email to user.email
    print(f"Sent welcome email to {user.email}")
```

### Practice Problem

In a Django project, when a new User object is created, call a task that sends them a welcome email. The task should take the user.id as an argument.
