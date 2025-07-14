---
title: "Lesson 1: List Comprehensions"
objective: "To create lists concisely and readably using a Pythonic syntax."
video: "https://www.youtube.com/embed/3dt4OGnU5sM"
---

### Topics

- Basic list comprehension syntax.
- Adding conditional logic.
- Dictionary and set comprehensions.

### Example (Creating a list of squares)

```python
# Traditional way
squares = []
for i in range(10):
    squares.append(i * i)

# List comprehension way
squares_comp = [i * i for i in range(10)]

# With a condition
even_squares = [i * i for i in range(10) if i % 2 == 0]
```

### Practice Problem

Given a list of names ["Alice", "Bob", "Charlie"], use a list comprehension to create a new list containing the length of each name.
