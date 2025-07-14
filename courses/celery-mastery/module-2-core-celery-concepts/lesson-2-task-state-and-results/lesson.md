---
title: "Lesson 2: Task State and Results"
objective: "To track the state of a running task and retrieve its return value."
video: "https://www.google.com/search?q=https://www.youtube.com/embed/8-ANIeC62lI%3Ft%3D600"
---

### Topics

- The AsyncResult object returned by .delay() and .apply_async().
- Checking task state (.state, .ready()).
- Retrieving the result with .get().
- Handling failed tasks and viewing tracebacks.

### Example (Checking a result)

```python
from tasks import add

result_object = add.delay(10, 20)

# Check if the task is finished
if result_object.ready():
    print("Task is ready!")
else:
    print("Task is still running...")

# Get the result (this will block until the task is finished)
final_result = result_object.get(timeout=5)
print(f"The result is: {final_result}")
```

### Practice Problem

Call your reverse_string task. Store the AsyncResult object in a variable. Write a loop that checks the task's status every second until it's ready, and then prints the final result.
