---
title: "Lesson 1: Introduction to DRF and Serializers"
objective: "To understand the basics of DRF and how to serialize data."
video: "https://www.youtube.com/embed/c70z03-m9gA"
---

### Topics

- What is a REST API?
- Installing and setting up DRF.
- Serializers: Converting querysets and model instances to JSON.
- ModelSerializer.

### Example (A simple serializer)

```python
# in products/serializers.py
from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price']
```

### Practice Problem

Create a serializer for your Post model that includes the title and published_date fields.
