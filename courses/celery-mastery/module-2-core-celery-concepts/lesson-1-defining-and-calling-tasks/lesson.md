---
title: "Lesson 1: Defining and Calling Tasks"
objective: "To define tasks using the @app.task decorator and call them asynchronously from your application."
video: "https://www.google.com/search?q=https://www.youtube.com/embed/8-ANIeC62lI"
---

### Topics

- The @app.task decorator.
- Calling tasks with .delay() for a simple async call.
- Calling tasks with .apply_async() for more options (e.g., setting a countdown).
- Passing arguments to tasks.

### Example (Calling a task)

```python
# In a separate Python script or REPL
from tasks import add

# Call the task asynchronously. This returns an AsyncResult object immediately.
result = add.delay(4, 4)

# Call a task to execute 10 seconds in the future
add.apply_async(args=[10, 10], countdown=10)
```

### Practice Problem

From a Python shell, import the reverse_string task you created in the previous lesson. Call it using .delay() with your name as the argument.
