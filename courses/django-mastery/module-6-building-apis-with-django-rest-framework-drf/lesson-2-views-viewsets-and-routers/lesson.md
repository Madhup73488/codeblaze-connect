---
title: "Lesson 2: Views, ViewSets, and Routers"
objective: "To build API endpoints for your serialized data."
video: "https://www.youtube.com/embed/dCbfO2uS4w4"
---

### Topics

- API Views (APIView).
- Generic API views.
- ViewSets and Routers for quickly wiring up CRUD endpoints.

### Example (A simple ViewSet)

```python
# in products/views.py
from rest_framework import viewsets
from .models import Product
from .serializers import ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
```

### Practice Problem

Create a PostViewSet for your Post model. Use a DRF Router to automatically generate the URLs for the standard list, detail, create, update, and delete actions.
