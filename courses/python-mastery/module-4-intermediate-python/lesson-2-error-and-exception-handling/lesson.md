---
title: "Lesson 2: Error and Exception Handling"
objective: "To handle errors gracefully without crashing your program."
video: "https://www.youtube.com/embed/6iF8XbK6ny0"
---

### Topics

- The try...except block.
- Handling specific exceptions (e.g., ValueError, ZeroDivisionError).
- The else and finally clauses.
- Raising your own exceptions with raise.

### Example (Handling division by zero)

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Error: Cannot divide by zero.")
finally:
    print("This block always executes.")
```

### Practice Problem

Write a program that asks the user for a number. Use a try...except block to handle the case where the user enters text instead of a number, printing a friendly error message.
