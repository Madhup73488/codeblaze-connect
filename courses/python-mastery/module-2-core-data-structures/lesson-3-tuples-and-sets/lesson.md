---
title: "Lesson 3: Tuples and Sets"
objective: "To understand the use cases for immutable tuples and unordered sets of unique items."
video: "https://www.youtube.com/embed/k95-GSA948E"
---

### Topics

- Tuples: Immutable (cannot be changed), ordered collections. Use cases: function returns, dictionary keys.
- Sets: Unordered collections of unique elements. Use cases: removing duplicates, membership testing, set math (union, intersection).

### Example (Tuples and Sets)

```python
# Tuple - cannot be changed after creation
point = (10, 20)
print(f"X: {point[0]}, Y: {point[1]}")

# Set - duplicates are automatically removed
tags = {"python", "web", "dev", "python"}
print(tags) # Output: {'web', 'dev', 'python'}
print("python" in tags) # Output: True
```

### Practice Problem

You have a list of numbers with duplicates: [1, 2, 3, 2, 4, 5, 1, 6]. Use a set to find the unique numbers in this list, and then convert it back to a list.
