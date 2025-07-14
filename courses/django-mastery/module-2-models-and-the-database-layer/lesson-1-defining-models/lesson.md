---
title: "Lesson 1: Defining Models"
objective: "To create Django models that map to database tables."
video: "https://www.youtube.com/embed/3-b_a_h2k2o"
---

### Topics

- The models.Model class.
- Defining fields: CharField, TextField, IntegerField, DateTimeField, BooleanField.
- Field options: null, blank, default, unique.
- The __str__ method for a human-readable representation.

### Example (A simple Post model)

```python
# in blog/models.py
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    published_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
```

### Practice Problem

In a new products app, create a Product model. It should have a name (CharField), description (TextField), price (DecimalField), and is_available (BooleanField).
