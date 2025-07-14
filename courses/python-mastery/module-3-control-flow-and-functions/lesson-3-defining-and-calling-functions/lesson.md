---
title: "Lesson 3: Defining and Calling Functions"
objective: "To create reusable blocks of code with functions."
video: "https://www.youtube.com/embed/9Os0o3wzS_I"
---

### Topics

- The def keyword.
- Parameters and arguments.
- The return statement.
- Docstrings for documenting functions.

### Example (A simple function)

```python
def greet(name):
    """This function greets the person passed in as a parameter."""
    return f"Hello, {name}!"

message = greet("World")
print(message)
```

### Practice Problem

Write a function add that takes two numbers as parameters and returns their sum. Call the function and print the result.
