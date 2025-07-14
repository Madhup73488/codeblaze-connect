---
title: "Lesson 1: Designing Workflows with Canvas"
objective: "To compose complex workflows by linking tasks together."
video: "https://www.google.com/search?q=https://www.youtube.com/embed/Pz_9p2iQ24I"
---

### Topics

- The Celery Canvas primitives.
- Chains: Linking tasks together, where the output of one is the input of the next.
- Groups: Executing a list of tasks in parallel.
- Chords: A group of tasks followed by a callback task that executes after all tasks in the group have finished.

### Example (A simple chain)

```python
from celery import chain
from tasks import add, multiply

# Executes multiply(add(2, 2), 4) -> multiply(4, 4)
my_chain = chain(add.s(2, 2), multiply.s(4))
result = my_chain()
```

### Practice Problem

Create three tasks: fetch_data(url), process_data(data), and store_data(processed_data). Create a chain that executes them in that order.
