---
title: "Lesson 1: Class-Based Views (CBVs)"
objective: "To use Django's generic class-based views to write less code for common patterns."
video: "https://www.youtube.com/embed/B4ii623Hq-E"
---

### Topics

- Function-Based Views vs. Class-Based Views.
- Generic display views: ListView and DetailView.
- Generic editing views: CreateView, UpdateView, DeleteView.
- Overriding methods like get_queryset() and get_context_data().

### Example (A ListView)

```python
# in blog/views.py
from django.views.generic import ListView
from .models import Post

class PostListView(ListView):
    model = Post
    template_name = 'blog/post_list.html'
    context_object_name = 'posts'
```

### Practice Problem

Convert your function-based product_list view into a class-based ProductListView using ListView.
